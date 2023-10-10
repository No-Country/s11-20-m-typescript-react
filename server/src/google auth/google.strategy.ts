import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import { encryptPassword } from 'src/utils/bcrypt.utils';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { error } from 'console';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const defaultBirthday = new Date('2000-01-01');
    const defaultUsername = 'userGoogle';
    const randomPassword = generateRandomPassword();
    const hashedPassword = await encryptPassword(randomPassword);
    const user = new this.userModel({
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      profileImage: photos[0].value,
      birthday: defaultBirthday,
      password: hashedPassword,
      username: defaultUsername,
      accessToken,
    });
    try {
      const savedUser = await user.save();
      done(null, savedUser);
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException('Validation error when saving the user');
      } else if (error.name === 'MongoError' && error.code === 11000) {
        throw new BadRequestException(
          'Duplicate key error. This email its already in use',
        );
      } else {
        throw new InternalServerErrorException(
          'Internal server error. Please try again later',
        );
      }
    }
    done(error, false);
  }
}

function generateRandomPassword(length: number = 12): string {
  const ejemplo =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * ejemplo.length);
    password += ejemplo.charAt(randomIndex);
  }

  return password;
}
