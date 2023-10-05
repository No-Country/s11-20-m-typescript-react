import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CouponsService } from './coupons.service';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { GraphQLError } from 'graphql';

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
      throw new GraphQLError('Error trying to create coupon');
    }
  }

  @Query(() => [Coupon], { name: 'coupons' })
  findAll() {
    try {
      return this.couponsService.findAll();
    } catch (err) {
      throw new GraphQLError('Error trying to find all coupons');
    }
  }

  @Query(() => Coupon, { name: 'coupon' })
  findOne(@Args('id', { type: () => String }) id: string) {
    try {
      return this.couponsService.findOne(id);
    } catch (error) {
      throw new GraphQLError('Error trying to find one coupon');
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
      throw new GraphQLError('Error trying to update coupon');
    }
  }

  @Mutation(() => Coupon)
  removeCoupon(@Args('id', { type: () => String }) id: string) {
    try {
      return this.couponsService.remove(id);
    } catch (error) {
      throw new GraphQLError('Error trying to remove coupon');
    }
  }
}
