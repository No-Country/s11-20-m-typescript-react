import { InputType, Field } from '@nestjs/graphql'
import { IsDate, IsNotEmpty } from 'class-validator'

@InputType()
export class CreateCouponsIssuedInput {
  @IsNotEmpty({ message: 'coupon field is required' })
  @Field(() => String, { description: 'Example field (placeholder)' })
    coupon: string

  @IsNotEmpty({ message: 'user field is required' })
  @Field(() => String, { description: 'Example field (placeholder)' })
    user: string

  @IsNotEmpty({ message: 'expires field is required' })
  @IsDate({ message: 'expires must be a date' })
  @Field(() => Date, { description: 'Example field (placeholder)' })
    expires: Date

  @IsNotEmpty({ message: 'used field is required' })
  @Field(() => Boolean, { description: 'Example field (placeholder)' })
    used: boolean
}
