import {
  BadRequestException,
  Injectable,
  ConflictException,
  NotFoundException,
  NotAcceptableException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { encryptPassword, comparePasswords } from 'src/utils/bcrypt.utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private async findUserById(id: string) {
    const user = await this.userModel.findById(id).catch((error) => {
      console.log(error);
      throw new BadRequestException("Can't find user");
    });
    if (!user) {
      throw new NotFoundException("Can't find user");
    }
    return user;
  }

  private async checkExistingEmail(email: string) {
    const existingEmail = await this.userModel
      .findOne({ email })
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't find user");
      });
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }
  }

  private async checkExistingUsername(username: string) {
    const existingUsername = await this.userModel
      .findOne({ username })
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't find user");
      });
    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }
  }

  private calculateAge(birthday: Date) {
    const isAdult =
      (new Date().getTime() - new Date(birthday).getTime()) /
        (365 * 24 * 60 * 60 * 1000) >=
      18;

    if (!isAdult) throw new NotAcceptableException('You must be 18 or older');

    return isAdult;
  }

  async create(createUserInput: CreateUserInput) {
    await this.checkExistingEmail(createUserInput.email);
    await this.checkExistingUsername(createUserInput.username);
    this.calculateAge(createUserInput.birthday);
    createUserInput.password = await encryptPassword(createUserInput.password);
    return await this.userModel.create(createUserInput).catch((error) => {
      console.log(error);
      throw new BadRequestException('Unable to create user');
    });
  }

  async findAll() {
    return await this.userModel.find().catch((error) => {
      console.log(error);
      throw new BadRequestException("Can't find users");
    });
  }

  async findOne(id: string) {
    return await this.findUserById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user = await this.findUserById(id);

    if (updateUserInput.email && updateUserInput.email !== user.email)
      await this.checkExistingEmail(updateUserInput.email);

    if (updateUserInput.username && updateUserInput.username !== user.username)
      await this.checkExistingUsername(updateUserInput.username);

    if (updateUserInput.birthday) this.calculateAge(updateUserInput.birthday);

    if (updateUserInput.oldPassword && updateUserInput.newPassword) {
      const isPasswordCorrect = await comparePasswords(
        updateUserInput.oldPassword,
        user.password,
      );
      if (!isPasswordCorrect) throw new ConflictException('Incorrect password');
      updateUserInput.password = await encryptPassword(
        updateUserInput.newPassword,
      );
      delete updateUserInput.oldPassword;
      delete updateUserInput.newPassword;
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserInput, { new: true })
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't update user");
      });

    return updatedUser;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id).catch((error) => {
      console.log(error);
      throw new BadRequestException("Can't delete user");
    });
    if (!user) throw new NotFoundException("Can't find user");
    return user;
  }
}
