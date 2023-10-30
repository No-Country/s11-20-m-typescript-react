import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql'
import { GraphQLUpload, type FileUpload } from 'graphql-upload-ts'
import { UsersService } from './users.service'
import { User, EventsEnum } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { InternalServerErrorException } from '@nestjs/common'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'

@Resolver(() => User)
export class UsersResolver {
  constructor (
    private readonly usersService: UsersService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Mutation(() => User)
  async createUser (@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      return await this.usersService.create(createUserInput)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @Query(() => [User], { name: 'users' })
  async findAll () {
    try {
      return await this.usersService.findAll()
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => User, { name: 'user' })
  async findOne (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.usersService.findOne(id)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @Mutation(() => User)
  async updateUser (
  @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
    image: FileUpload
  ) {
    if (image) {
      try {
        const uploadedImage = await this.cloudinaryService.uploadImage(image)

        updateUserInput.profileImgUrl = uploadedImage.secure_url as string
      } catch (error) {
        console.error(error)
        throw error
      }
    }

    try {
      return await this.usersService.update(
        updateUserInput._id,
        updateUserInput
      )
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @Mutation(() => User)
  async removeUser (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.usersService.remove(id)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @ResolveField(() => EventsEnum, { name: 'events' })
  async getEvents (@Parent() user: User) {
    try {
      const { _id } = user
      const created = await this.usersService.findCreatedEvents(_id.toString())
      const subscribed = await this.usersService.findSubscribedEvents(
        _id.toString()
      )
      return {
        created,
        subscribed
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
