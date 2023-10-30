import { InputType, Field } from '@nestjs/graphql'
import { IsNumber, MinLength } from 'class-validator'

@InputType()
export class FilterCouponInput {
  @Field(() => String, { description: 'title field' })
  @MinLength(3, { message: 'title must be at least 3 characters long' })
    title?: string

  @IsNumber()
  @Field(() => Number, { description: 'description field' })
    limit?: number

  @IsNumber()
  @Field(() => Number, { description: 'description field' })
    offset?: number
}
