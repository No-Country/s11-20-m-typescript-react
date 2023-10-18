import { IsBoolean, IsDate, IsString } from 'class-validator'
import { CreateCouponsIssuedInput } from './create-coupons-issued.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateCouponsIssuedInput extends PartialType(
  CreateCouponsIssuedInput
) {
  @Field(() => String)
    _id?: string

  @IsString({ message: 'must be a string field' })
  @Field(() => String)
    coupon?: string

  @IsString({ message: 'must be a string field' })
  @Field(() => String)
    user?: string

  @IsDate({ message: 'expires must be a date' })
  @Field(() => Date)
    expires?: Date

  @IsBoolean({ message: 'must be a boolean field' })
  @Field(() => Boolean)
    used?: boolean
}
