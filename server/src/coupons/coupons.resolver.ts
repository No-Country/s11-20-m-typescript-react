import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CouponsService } from './coupons.service';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { GraphQLError } from 'graphql';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver(() => Coupon)
export class CouponsResolver {
  constructor(private readonly couponsService: CouponsService) {}

  @Mutation(() => Coupon)
  createCoupon(
    @Args('createCouponInput') createCouponInput: CreateCouponInput,
  ) {
    try {
      return this.couponsService.create(createCouponInput);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  @Query(() => [Coupon], { name: 'coupons' })
  findAll() {
    try {
      return this.couponsService.findAll();
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  @Query(() => Coupon, { name: 'coupon' })
  findOne(@Args('id', { type: () => String }) id: string) {
    try {
      return this.couponsService.findOne(id);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => Coupon)
  updateCoupon(
    @Args('updateCouponInput') updateCouponInput: UpdateCouponInput,
  ) {
    try {
      return this.couponsService.update(
        updateCouponInput._id,
        updateCouponInput,
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => Coupon)
  removeCoupon(@Args('id', { type: () => String }) id: string) {
    try {
      return this.couponsService.remove(id);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
