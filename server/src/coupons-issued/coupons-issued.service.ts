import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CouponsIssued } from './entities/coupons-issued.entity';
import mongoose, { Model } from 'mongoose';
// import { CouponsIssuedModule } from './coupons-issued.module';
import { CreateCouponsIssuedInput } from './dto/create-coupons-issued.input';
import { UpdateCouponsIssuedInput } from './dto/update-coupons-issued.input';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { ObjectId } from 'mongodb';

@Injectable()
export class CouponsIssuedService {
  constructor(
    @InjectModel(CouponsIssued.name)
    private CouponsIssuedModel: Model<CouponsIssued>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createOne(createCouponsIssuedInput: CreateCouponsIssuedInput) {
    console.log(createCouponsIssuedInput)
    const user = await this.userModel
      .findById(createCouponsIssuedInput.user)
      .catch((error) => {
        console.log(error);
        throw new BadRequestException('User not found');
      });
    if (!user) {
      throw new NotFoundException("Can't find user");
    }
    console.log(user);
    createCouponsIssuedInput.user =  ObjectId(createCouponsIssuedInput.user)
    createCouponsIssuedInput.coupon = ObjectId(createCouponsIssuedInput.coupon)
    const newCoupon = await this.CouponsIssuedModel.create(
      createCouponsIssuedInput,
    ).catch((error) => {
      console.log(error);
      throw new BadRequestException('Cant create coupons issued');
    });
    user.coupons.push(newCoupon._id);
    user.markModified('coupons');
    user.save();
    return newCoupon;
  }

  async findAll() {
    return await this.CouponsIssuedModel.find().catch((error) => {
      console.log(error);
      throw new BadRequestException('Cannot find coupons issued');
    });
  }

  async findOne(id: string) {
    return await this.CouponsIssuedModel.findById(id).catch((error) => {
      console.log(error);
      throw new BadRequestException('Cannot find coupon issued');
    });
  }

  async updateOne(
    id: string,
    updateCouponsIssuedInput: UpdateCouponsIssuedInput,
  ) {
    return await this.CouponsIssuedModel.findByIdAndUpdate(
      id,
      updateCouponsIssuedInput,
    );
  }

  async deleteOne(id: string) {
    return await this.CouponsIssuedModel.findByIdAndDelete(id);
  }
}
