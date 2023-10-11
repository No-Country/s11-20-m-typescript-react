import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CouponsIssuedService } from './coupons-issued.service'
import { CouponsIssued } from './entities/coupons-issued.entity'
import { CreateCouponsIssuedInput } from './dto/create-coupons-issued.input'
import { UpdateCouponsIssuedInput } from './dto/update-coupons-issued.input'
import { InternalServerErrorException } from '@nestjs/common'

@Resolver(() => CouponsIssued)
export class CouponsIssuedResolver {
  constructor (private readonly couponsIssuedService: CouponsIssuedService) {}

  @Mutation(() => CouponsIssued)
  async createCouponsIssued (
  @Args('createCouponsIssued')
    createCouponsIssuedInput: CreateCouponsIssuedInput
  ) {
    return await this.couponsIssuedService.createOne(createCouponsIssuedInput)
  }

  @Query(() => [CouponsIssued], { name: 'couponsIssued' })
  async findAll () {
    try {
      return await this.couponsIssuedService.findAll()
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => CouponsIssued, { name: 'couponsIssued' })
  async findOne (@Args('id', { type: () => String }) id: string) {
    try {
      return await this.couponsIssuedService.findOne(id)
    } catch (error) {}
  }

  @Mutation(() => CouponsIssued)
  async updateCouponsIssued (
  @Args('id', { type: () => String }) id: string,
    updateCouponsIssuedInput: UpdateCouponsIssuedInput
  ) {
    return await this.couponsIssuedService.updateOne(id, updateCouponsIssuedInput)
  }

  @Mutation(() => CouponsIssued)
  async deleteCouponsIssued (@Args('id', { type: () => String }) id: string) {
    return await this.couponsIssuedService.deleteOne(id)
  }
}
