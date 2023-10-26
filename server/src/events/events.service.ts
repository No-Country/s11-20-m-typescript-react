import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { CreateEventInput } from './dto/create-event.input'
import { UpdateEventInput } from './dto/update-event.input'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { User } from 'src/users/entities/user.entity'
import { Event } from './entities/event.entity'
import {
  AddMemberInput,
  ModifyStatusInput,
  RemoveMemberInput
} from './dto/members.input'
import { FilterEventInput } from './dto/filter-events.input'

@Injectable()
export class EventsService {
  constructor (
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  private async findEventById (id: string) {
    const event = await this.eventModel.findById(id).catch((error) => {
      console.error(error)
      throw new BadRequestException("Can't find event")
    })

    if (!event) {
      throw new NotFoundException("Can't find event")
    }

    return event
  }

  private async findUserById (id: string) {
    const user = await this.userModel.findById(id).catch((error) => {
      console.error(error)
      throw new BadRequestException("Can't find user")
    })

    if (!user) {
      throw new NotFoundException("Can't find user")
    }

    return user
  }

  async create (createEventInput: CreateEventInput) {
    const user = await this.findUserById(createEventInput.owner)
    // agregar verificaciones
    const event = await this.eventModel
      .create(createEventInput)
      .catch((error) => {
        console.error(error)
        throw new BadRequestException('Unable to create event')
      })

    user.events.created.push(event._id)
    user.markModified('events')
    await user.save()

    return event
  }

  async findAll (params?: FilterEventInput) {
    let filters: FilterQuery<Event> = {}

    if (params) {
      const { limit, offset } = params
      for (const item in params) {
        console.log(params[item])
        if (params[item]) {
          if (item === 'title') {
            filters = {
              [item]: { $regex: params[item], $options: 'i' },
              ...filters
            }
          } else {
            if (!(item === 'limit' || item === 'offset')) {
              filters = {
                [item]: params[item],
                ...filters
              }
            }
          }
        }
      }

      const filteredResults = await this.eventModel
        .find(filters)
        .sort({ startDate: -1 })
        .limit(limit)
        .skip(offset)
        .exec()
        .catch((error) => {
          console.log(error)
          throw new BadRequestException("Can't find events")
        })

      return filteredResults
    } else {
      return await this.eventModel.find().catch((error) => {
        console.log(error)
        throw new BadRequestException("Can't find events")
      })
    }
  }

  async findUser (id: string) {
    return await this.findUserById(id)
  }

  async findOne (id: string) {
    return await this.findEventById(id)
  }

  async addMember (addMemberInput: AddMemberInput) {
    const event = await this.findEventById(addMemberInput.idEvent)
    const user = await this.findUserById(addMemberInput.idUser)

    const isMember = event.members.some((item) => {
      return item.user.toString() === addMemberInput.idUser
    })

    if (isMember) {
      throw new BadRequestException('User is already member')
    }

    event.members.push({
      user: user._id,
      status: event.type === 'public' ? 'accepted' : 'pending'
    })

    user.events.subscribed.push(event._id)
    user.markModified('events')
    event.markModified('members')
    await event.save()
    await user.save()

    return event
  }

  async removeMember (removeMemberInput: RemoveMemberInput) {
    const event = await this.findEventById(removeMemberInput.idEvent)
    const user = await this.findUserById(removeMemberInput.idUser)

    user.events.subscribed = user.events.subscribed.flatMap((item) => {
      if (item.toString() === removeMemberInput.idEvent) {
        return []
      }
      return item
    })

    event.members = event.members.flatMap((item) => {
      if (item.user.toString() === removeMemberInput.idUser) {
        console.log(true)

        return []
      }
      return item
    })
    user.markModified('events')
    event.markModified('members')
    await event.save()
    await user.save()
    return event
  }

  async changeMemberStatus (modifyStatusInput: ModifyStatusInput) {
    const event = await this.findEventById(modifyStatusInput.idEvent)

    const isMember = event.members.some((item) => {
      return item.user.toString() === modifyStatusInput.idUser
    })

    if (!isMember) {
      throw new BadRequestException('User is not a member')
    }

    const modified = event.members.map((item) => {
      if (item.user.toString() === modifyStatusInput.idUser) {
        return { ...item, status: modifyStatusInput.status }
      }
      return item
    })
    event.members = modified
    event.markModified('members')
    await event.save()
    return event
  }

  async update (id: string, updateEventInput: UpdateEventInput) {
    const updatedEvent = await this.eventModel
      .findByIdAndUpdate(id, updateEventInput)
      .catch((error) => {
        console.error(error)
        throw new BadRequestException("Can't update event")
      })

    return updatedEvent
  }

  async remove (id: string) {
    const event = await this.eventModel.findByIdAndDelete(id).catch((error) => {
      console.error(error)
      throw new BadRequestException("Can't delete event")
    })
    if (!event) throw new NotFoundException("Can't find event")
    const users = await this.userModel
      .find({ 'events.subscribed': event._id })
      .catch((error) => {
        console.error(error)
        throw new BadRequestException("Can't delete event")
      })
    // Use a for...of loop to iterate over the users array
    for (const item of users) {
      try {
        item.events.subscribed = item.events.subscribed.flatMap((item) => {
          if (item.toString() === id) {
            return []
          }
          return item
        })
        item.markModified('events')
        await item.save()
      } catch (error) {
        console.error('Error saving item:', error)
      }
    }
    const owner = await this.findUserById(event.owner.toString())
    owner.events.created = owner.events.created.flatMap((item) => {
      if (item.toString() === id) {
        return []
      }
      return item
    })
    owner.markModified('events')
    await owner.save()
    return event
  }
}
