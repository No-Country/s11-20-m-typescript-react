import { CreateCouponsIssuedInput } from './create-coupons-issued.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateCouponsIssuedInput extends PartialType(
  CreateCouponsIssuedInput
) {
  @Field(() => String)
    _id?: number

  @Field(() => String)
    expires?: Date

  @Field(() => Boolean)
    used?: boolean
}
