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
import { encryptPassword } from 'src/utils/bcrypt.utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserInput: CreateUserInput) {
    const existingEmail = await this.userModel
      .findOne({ email: createUserInput.email })
      .catch(() => {
        throw new BadRequestException('Unable to create user');
      });

    if (existingEmail) throw new ConflictException('Email already exists');

    const existingUsername = await this.userModel.findOne({
      username: createUserInput.username,
    });

    if (existingUsername)
      throw new ConflictException('Username already exists');

    const isAdult =
      (new Date().getTime() - new Date(createUserInput.birthday).getTime()) /
        (365 * 24 * 60 * 60 * 1000) >=
      18;

    if (!isAdult) throw new NotAcceptableException('You must be 18 or older');

    createUserInput.password = await encryptPassword(createUserInput.password);
    console.log(createUserInput.password);
    return await this.userModel.create(createUserInput).catch((error) => {
      console.log(error);
      throw new BadRequestException('Unable to create user');
    });
  }

  async findAll() {
    return await this.userModel.find().catch(() => {
      throw new BadRequestException("Can't find users");
    });
  }

  findOne(id: string) {
    const user = this.userModel.findById(id).catch(() => {
      throw new BadRequestException("Can't find user");
    });
    if (!user) throw new NotFoundException("Can't find user");
    return user;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const user = this.userModel
      .findByIdAndUpdate(id, updateUserInput, { new: true })
      .catch(() => {
        throw new BadRequestException("Can't update user");
      });

    if (!user) throw new NotFoundException("Can't find user");

    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id).catch(() => {
      throw new BadRequestException("Can't delete user");
    });

    if (!user) throw new NotFoundException("Can't find user");

    return user;
  }
}
