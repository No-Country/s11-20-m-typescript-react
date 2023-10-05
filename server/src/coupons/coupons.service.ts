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
    return this.CouponModel.create(createCouponInput);
  }

  async findAll() {
    return await this.CouponModel.find();
  }

  async findOne(id: string) {
    return await this.CouponModel.findById(id);
  }

  async update(id: string, updateCouponInput: UpdateCouponInput) {
    return await this.CouponModel.findByIdAndUpdate(id, updateCouponInput, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.CouponModel.findByIdAndDelete(id);
  }
}
