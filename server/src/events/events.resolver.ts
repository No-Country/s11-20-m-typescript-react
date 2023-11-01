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
import { InternalServerErrorException, Param } from '@nestjs/common'
import {
  AddMemberInput,
  ModifyStatusInput,
  RemoveMemberInput
} from './dto/members.input'
import { User } from 'src/users/entities/user.entity'
import { FilterEventInput } from './dto/filter-events.input'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { type FileUpload, GraphQLUpload } from 'graphql-upload-ts'

@Resolver(() => Event)
export class EventsResolver {
  constructor (
    private readonly eventsService: EventsService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Mutation(() => Event)
  async createEvent (
  @Args('createEventInput') createEventInput: CreateEventInput,
    @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
    image: FileUpload
  ) {
    console.log('====================================')
    console.log(image)
    console.log('====================================')
    if (image) {
      try {
        const uploadedImage = await this.cloudinaryService.uploadImage(image)

        createEventInput.thumbnail = uploadedImage.secure_url
      } catch (error) {
        console.error(error)
        throw new InternalServerErrorException(
          'The thumbnail was not uploaded correctly'
        )
      }
    }
    try {
      return await this.eventsService.create(createEventInput)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Event)
  async addEventMember (
  @Param('addMemberInput') addMemberInput: AddMemberInput
  ) {
    try {
      return await this.eventsService.addMember(addMemberInput)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Event)
  async removeEventMember (
  @Args('removeMemberInput') removeMemberInput: RemoveMemberInput
  ) {
    try {
      return await this.eventsService.removeMember(removeMemberInput)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Event)
  async changeEventMemberStatus (
  @Args('modifyStatusInput') modifyStatusInput: ModifyStatusInput
  ) {
    try {
      return await this.eventsService.changeMemberStatus(modifyStatusInput)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => [Event], { name: 'events' })
  async findAll (@Args('filterEventInput') params?: FilterEventInput) {
    try {
      return await this.eventsService.findAll(params)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @ResolveField(() => User, { name: 'owner' })
  async getOwner (@Parent() event: Event) {
    try {
      return await this.eventsService.findUser(event.owner.toString())
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
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
    try {
      const { members } = event
      const membersMapped = members.map(async (element) => {
        const user = await this.eventsService.findUser(element.user.toString())
        return { user, status: element.status }
      })

      return membersMapped
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Event)
  async updateEvent (
  @Args('updateEventInput') updateEventInput: UpdateEventInput,
    @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
    image: FileUpload
  ) {
    if (image) {
      try {
        const uploadedImage = await this.cloudinaryService.uploadImage(image)

        updateEventInput.thumbnail = uploadedImage.secure_url
      } catch (error) {
        console.error(error)
        throw new InternalServerErrorException(
          'The thumbnail was not uploaded correctly'
        )
      }
    }
    try {
      return await this.eventsService.update(
        updateEventInput._id,
        updateEventInput
      )
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
