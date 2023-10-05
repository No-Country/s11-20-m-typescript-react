import { Injectable } from '@nestjs/common';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { Coupon } from './entities/coupon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CouponsService {
  constructor(@InjectModel(Coupon.name) private CouponModel: Model<Coupon>) {}

  async create(createCouponInput: CreateCouponInput) {
    try {
      return await this.CouponModel.create(createCouponInput);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      return await this.CouponModel.find();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.CouponModel.findById(id);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async update(id: string, updateCouponInput: UpdateCouponInput) {
    try {
      return await this.CouponModel.findByIdAndUpdate(id, updateCouponInput, {
        new: true,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.CouponModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
