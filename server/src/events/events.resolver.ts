import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql'
import { EventsService } from './events.service'
import { Event, Member } from './entities/event.entity'
import { CreateEventInput } from './dto/create-event.input'
import { UpdateEventInput } from './dto/update-event.input'
import { InternalServerErrorException } from '@nestjs/common'
import {
  AddMemberInput,
  ModifyStatusInput,
  RemoveMemberInput
} from './dto/members.input'
import { User } from 'src/users/entities/user.entity'

@Resolver(() => Event)
export class EventsResolver {
  constructor (private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  async createEvent (@Args('createEventInput') createEventInput: CreateEventInput) {
    return await this.eventsService.create(createEventInput)
  }

  @Mutation(() => Event)
  async addEventMember (@Args('addMemberInput') addMemberInput: AddMemberInput) {
    return await this.eventsService.addMember(addMemberInput)
  }

  @Mutation(() => Event)
  async removeEventMember (
  @Args('removeMemberInput') removeMemberInput: RemoveMemberInput
  ) {
    return await this.eventsService.removeMember(removeMemberInput)
  }

  @Mutation(() => Event)
  async changeEventMemberStatus (
  @Args('modifyStatusInput') modifyStatusInput: ModifyStatusInput
  ) {
    return await this.eventsService.changeMemberStatus(modifyStatusInput)
  }

  @Query(() => [Event], { name: 'events' })
  async findAll () {
    try {
      return await this.eventsService.findAll()
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @ResolveField(() => User, { name: 'owner' })
  async getOwner (@Parent() event: Event) {
    return await this.eventsService.findUser(event.owner.toString())
  }

  @Query(() => Event, { name: 'event' })
  async findOne (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.eventsService.findOne(id)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @ResolveField(() => [Member], { name: 'members' })
  getMembers (@Parent() event: Event) {
    const { members } = event
    const membersMapped = members.map(async (element) => {
      const user = await this.eventsService.findUser(element.user.toString())
      return { user, status: element.status }
    })

    return membersMapped
  }

  @Mutation(() => Event)
  async updateEvent (@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    try {
      return await this.eventsService.update(updateEventInput._id, updateEventInput)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Event)
  async removeEvent (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.eventsService.remove(id)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }
}
