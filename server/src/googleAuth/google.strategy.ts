import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { config } from 'dotenv'
import {
  Injectable,
  BadRequestException,
  InternalServerErrorException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/users/entities/user.entity'
import { Model } from 'mongoose'
import { encryptPassword } from 'src/utils/bcrypt.utils'

config()

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor (@InjectModel(User.name) private readonly UserModel: Model<User>) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile']
    })
  }

  async validate (
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const { name, emails, photos } = profile
    const defaultBirthday = new Date('2000-01-01')
    const defaultUsername = 'GoogleUser'
    const randomPassword = generateRandomPassword()
    const hashedPassword = await encryptPassword(randomPassword)
    // eslint-disable-next-line new-cap
    try {
      const existingUser = await this.UserModel.findOne({
        email: emails[0].value
      })

      if (existingUser) {
        done(null, existingUser)
      } else {
        const firstNameDef = name?.givenName ?? 'DefaultFirstName'
        const lastNameDef = name?.familyName ?? 'DefaultLastname'
        const user = new this.UserModel({
          email: emails[0].value,
          firstName: firstNameDef,
          lastName: lastNameDef,
          profileImage: photos[0].value,
          birthday: defaultBirthday,
          password: hashedPassword,
          username: defaultUsername,
          accessToken
        })

        const savedUser = await user.save()
        done(null, savedUser)
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException('Validation error when saving the user')
      } else {
        throw new InternalServerErrorException(
          'Internal server error. Please try again later'
        )
      }
    }
  }
}

function generateRandomPassword (length: number = 12): string {
  const ejemplo =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let password = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * ejemplo.length)
    password += ejemplo.charAt(randomIndex)
  }

  return password
}
