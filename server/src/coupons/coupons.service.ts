import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { Coupon } from './entities/coupon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CouponsService {
  constructor(@InjectModel(Coupon.name) private couponModel: Model<Coupon>) {}

  async create(createCouponInput: CreateCouponInput) {
    return await this.couponModel.create(createCouponInput).catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  }

  async findAll() {
    return await this.couponModel.find().catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  }

  async findOne(id: string) {
    return await this.findCoupon(id);
  }

  async update(id: string, updateCouponInput: UpdateCouponInput) {
    await this.findCoupon(id);
    return await this.couponModel.findByIdAndUpdate(id, updateCouponInput, {
      new: true,
    });
  }

  async remove(id: string) {
    await this.findCoupon(id);
    return await this.couponModel.findByIdAndDelete(id);
  }

  private async findCoupon(id: string): Promise<Coupon> {
    const coupon = await this.couponModel.findById(id).catch((error) => {
      console.log(error);
    });
    if (!coupon) throw new NotFoundException(`Coupon #${id} not found`);
    return coupon;
  }
}
