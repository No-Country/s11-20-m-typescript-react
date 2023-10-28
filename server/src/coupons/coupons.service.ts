import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { CreateCouponInput } from './dto/create-coupon.input'
import { UpdateCouponInput } from './dto/update-coupon.input'
import { Coupon } from './entities/coupon.entity'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { FilterCouponInput } from './dto/filter-coupon.input'

@Injectable()
export class CouponsService {
  constructor (
    @InjectModel(Coupon.name) private readonly couponModel: Model<Coupon>
  ) {}

  private async findCoupon (id: string) {
    const coupon = await this.couponModel.findById(id).catch((error) => {
      console.error(error)
    })
    if (coupon == null) throw new NotFoundException(`Coupon #${id} not found`)
    return coupon
  }

  async create (createCouponInput: CreateCouponInput) {
    return await this.couponModel.create(createCouponInput).catch((error) => {
      console.error(error)
      throw new Error(error)
    })
  }

  async findAll (params?: FilterCouponInput) {
    let filters: FilterQuery<Coupon> = {}

    const { limit, offset } = params
    if (params) {
      for (const item in params) {
        console.log(params[item])
        if (params[item]) {
          if (item === 'title') {
            filters = {
              [item]: {
                $regex: params[item],
                $options: 'i',
                ...filters
              }
            }
          } else {
            if (!(item === 'limit' || item === 'offset')) {
              filters = {
                [item]: params[item],
                ...filters
              }
            }
          }
        }
      }
      const filteredResults = await this.couponModel
        .find(filters)
        .limit(limit)
        .skip(offset)
        .exec()
        .catch((error) => {
          console.log(error)
          throw new BadRequestException("Can't find coupons")
        })

      return filteredResults
    } else {
      return await this.couponModel.find().catch((error) => {
        console.log(error)
        throw new BadRequestException("Can't find coupons")
      })
    }
  }

  async findOne (id: string) {
    return await this.findCoupon(id)
  }

  async update (id: string, updateCouponInput: UpdateCouponInput) {
    await this.findCoupon(id)
    return await this.couponModel.findByIdAndUpdate(id, updateCouponInput, {
      new: true
    })
  }

  async remove (id: string) {
    await this.findCoupon(id)
    return await this.couponModel.findByIdAndDelete(id)
  }
}
