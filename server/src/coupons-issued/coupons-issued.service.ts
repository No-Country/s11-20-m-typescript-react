import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CouponsIssued } from './entities/coupons-issued.entity'
import mongoose, { Model, FilterQuery } from 'mongoose'
import { CreateCouponsIssuedInput } from './dto/create-coupons-issued.input'
import { UpdateCouponsIssuedInput } from './dto/update-coupons-issued.input'
import { FilterCouponsIssuedInput } from './dto/filter-coupons-issued.input'
import { User } from 'src/users/entities/user.entity'
import { Coupon } from 'src/coupons/entities/coupon.entity'

@Injectable()
export class CouponsIssuedService {
  constructor (
    @InjectModel(CouponsIssued.name)
    private readonly CouponsIssuedModel: Model<CouponsIssued>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Coupon.name) private readonly couponModel: Model<Coupon>
  ) {}

  async createOne (createCouponsIssuedInput: CreateCouponsIssuedInput) {
    const user = await this.userModel
      .findById(createCouponsIssuedInput.user)
      .catch((error) => {
        console.log(error)
        throw new BadRequestException('User not found')
      })

    if (!user) {
      throw new NotFoundException("Can't find user")
    }

    const coupon = await this.couponModel
      .findById(createCouponsIssuedInput.coupon)
      .catch((error) => {
        console.log(error)
        throw new BadRequestException("Can't find coupon")
      })

    if (!coupon) {
      throw new NotFoundException("Can't find coupon")
    }

    const newCoupon = await this.CouponsIssuedModel.create({
      user: user._id,
      coupon: coupon._id,
      expires: createCouponsIssuedInput.expires,
      used: createCouponsIssuedInput.used
    }).catch((error) => {
      console.log(error)
      throw new BadRequestException('Cant create coupons issued')
    })
    user.coupons.push(newCoupon._id)
    user.markModified('coupons')
    await user.save()
    return newCoupon
  }

  async findAll (params?: FilterCouponsIssuedInput) {
    let filters: FilterQuery<CouponsIssued> = {}
    const { limit, offset, coupon, user, used, expires } = params
    if (params) {
      if (coupon) {
        filters = {
          $regex: coupon,
          $options: 'i',
          ...filters
        }
      }
      if (user) {
        filters = {
          $regex: user,
          $options: 'i'
        }
      }
      if (used) {
        filters = {
          $regex: used,
          $options: 'i',
          ...filters
        }
      }
      if (expires) {
        filters = {
          $regex: expires,
          $options: 'i',
          ...filters
        }
      }
      const filteredResults = await this.CouponsIssuedModel.find(filters)
        .limit(limit)
        .skip(offset * limit)
        .exec()
      return filteredResults
    } else {
      return await this.CouponsIssuedModel.find()
    }
  }

  async findOne (id: string) {
    return await this.CouponsIssuedModel.findById(id).catch((error) => {
      console.log(error)
      throw new BadRequestException('Cannot find coupon issued')
    })
  }

  async updateOne (
    id: string,
    updateCouponsIssuedInput: UpdateCouponsIssuedInput
  ) {
    return await this.CouponsIssuedModel.findByIdAndUpdate(
      id,
      updateCouponsIssuedInput
    )
  }

  async deleteOne (id: string) {
    return await this.CouponsIssuedModel.findByIdAndDelete(id)
  }
}
