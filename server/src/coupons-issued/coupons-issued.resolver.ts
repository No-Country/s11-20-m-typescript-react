import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CouponsIssuedService } from './coupons-issued.service';
import { CouponsIssued } from './entities/coupons-issued.entity';
import { CreateCouponsIssuedInput } from './dto/create-coupons-issued.input';
import { UpdateCouponsIssuedInput } from './dto/update-coupons-issued.input';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver(() => CouponsIssued)
export class CouponsIssuedResolver {
  constructor(private readonly couponsIssuedService: CouponsIssuedService) {}

  @Mutation(() => CouponsIssued)
  createCouponsIss(@Args('create coupon issued') createCouponsIssuedInput: CreateCouponsIssuedInput) {
    return this.couponsIssuedService.createOne(createCouponsIssuedInput)

  }

  @Query(() => [CouponsIssued], { name: 'couponsIssued' })
  findAll() {
    try {
      return this.couponsIssuedService.findAll();
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException();
    }
  }

  @Query(() => CouponsIssued, { name: 'couponsIssued' })
  findOne(@Args('id', { type: () => String }) id: string) {
    try {
      return this.couponsIssuedService.findOne(id);
    } catch (error) {

    }
  }

  @Mutation(() => CouponsIssued)
  deleteCouponsIssued(@Args('id', { type: () => String }) id: string) {
    return this.couponsIssuedService.deleteOne(id);
  }
}
