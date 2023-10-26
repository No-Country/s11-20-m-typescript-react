import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CouponsService } from './coupons.service'
import { Coupon } from './entities/coupon.entity'
import { CreateCouponInput } from './dto/create-coupon.input'
import { UpdateCouponInput } from './dto/update-coupon.input'
import { InternalServerErrorException } from '@nestjs/common'
import { FilterCouponInput } from './dto/filter-coupon.input'

@Resolver(() => Coupon)
export class CouponsResolver {
  constructor (private readonly couponsService: CouponsService) {}

  @Mutation(() => Coupon)
  async createCoupon (
  @Args('createCouponInput') createCouponInput: CreateCouponInput
  ) {
    try {
      return await this.couponsService.create(createCouponInput)
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => [Coupon], { name: 'coupons' })
  async findAll (@Args('params', { type: () => FilterCouponInput }) params?: FilterCouponInput) {
    try {
      return await this.couponsService.findAll(params)
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => Coupon, { name: 'coupon' })
  async findOne (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.couponsService.findOne(id)
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Coupon)
  async updateCoupon (
  @Args('updateCouponInput') updateCouponInput: UpdateCouponInput
  ) {
    try {
      return await this.couponsService.update(
        updateCouponInput._id,
        updateCouponInput
      )
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Coupon)
  async removeCoupon (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.couponsService.remove(id)
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}
