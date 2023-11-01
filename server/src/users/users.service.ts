import {
  BadRequestException,
  Injectable,
  ConflictException,
  NotFoundException,
  NotAcceptableException
} from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { encryptPassword, comparePasswords } from 'src/utils/bcrypt.utils'
import { Event } from 'src/events/entities/event.entity'

@Injectable()
export class UsersService {
  constructor (
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Event.name) private readonly eventModel: Model<Event>
  ) {}

  private async findUserById (id: string) {
    const user = await this.userModel.findById(id).catch((error) => {
      console.log(error)
      throw new BadRequestException("Can't find user")
    })
    if (!user) {
      throw new NotFoundException("User doesn't exist")
    }
    return user
  }

  private async checkExistingEmail (email: string) {
    const existingEmail = await this.userModel
      .findOne({ email })
      .catch((error) => {
        console.log(error)
        throw new BadRequestException("Can't find user")
      })

    if (existingEmail) {
      throw new ConflictException('Email already exists')
    }

    return existingEmail
  }

  async findUserByEmail (email: string): Promise<User | null> {
    try {
      return await this.userModel.findOne({ email }).exec()
    } catch (error) {
      throw new Error('Error while searching for user by email')
    }
  }

  private async checkExistingUsername (username: string) {
    const existingUsername = await this.userModel
      .findOne({ username })
      .catch((error) => {
        console.log(error)
        throw new BadRequestException("Can't find user")
      })
    if (existingUsername) {
      throw new ConflictException('Username already exists')
    }
  }

  private calculateAge (birthday: Date) {
    const isAdult =
      (new Date().getTime() - new Date(birthday).getTime()) /
        (365 * 24 * 60 * 60 * 1000) >=
      18

    if (!isAdult) throw new NotAcceptableException('You must be 18 or older')

    return isAdult
  }

  async create (createUserInput: CreateUserInput) {
    createUserInput.email = createUserInput.email.toLowerCase()
    await this.checkExistingEmail(createUserInput.email)
    await this.checkExistingUsername(createUserInput.username)
    this.calculateAge(createUserInput.birthday)
    createUserInput.password = await encryptPassword(createUserInput.password)
    return await this.userModel.create(createUserInput).catch((error) => {
      console.log(error)
      throw new BadRequestException('Unable to create user')
    })
  }

  async findAll () {
    return await this.userModel.find().catch((error) => {
      console.log(error)
      throw new BadRequestException("Can't find users")
    })
  }

  async findOne (id: string) {
    return await this.findUserById(id)
  }

  async update (id: string, updateUserInput: UpdateUserInput) {
    const user = await this.findUserById(id)

    if (updateUserInput.email && updateUserInput.email !== user.email) {
      updateUserInput.email = updateUserInput.email.toLowerCase()
      await this.checkExistingEmail(updateUserInput.email)
    }

    if (
      updateUserInput.username &&
      updateUserInput.username !== user.username
    ) {
      await this.checkExistingUsername(updateUserInput.username)
    }

    if (updateUserInput.birthday) this.calculateAge(updateUserInput.birthday)

    if (updateUserInput.oldPassword && updateUserInput.newPassword) {
      const isPasswordCorrect = await comparePasswords(
        updateUserInput.oldPassword,
        user.password
      )

      if (!isPasswordCorrect) throw new ConflictException('Incorrect password')
      updateUserInput.password = await encryptPassword(
        updateUserInput.newPassword
      )
      delete updateUserInput.oldPassword
      delete updateUserInput.newPassword
    }

    return await this.userModel
      .findByIdAndUpdate(id, updateUserInput, { new: true })
      .catch((error) => {
        console.log(error)
        throw new BadRequestException("Can't update user")
      })
  }

  async remove (id: string) {
    const user = await this.userModel.findByIdAndDelete(id).catch((error) => {
      console.error(error)
      throw new BadRequestException("Can't delete user")
    })
    if (!user) throw new NotFoundException("Can't find user")
    return user
  }

  async findCreatedEvents (id: string) {
    const user = await this.findUserById(id)
    return await this.eventModel.find({ owner: user._id }).catch((error) => {
      console.error(error)
      throw new BadRequestException("Can't find events")
    })
  }

  async findSubscribedEvents (id: string) {
    const user = await this.findUserById(id)
    return await this.eventModel
      .find({ 'members.user': user._id })
      .catch((error) => {
        console.error(error)
        throw new BadRequestException("Can't find events")
      })
  }
}
