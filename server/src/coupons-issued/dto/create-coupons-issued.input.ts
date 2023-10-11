import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';

@InputType()
export class CreateCouponsIssuedInput {
  @IsNotEmpty({message: 'coupon field is required'})
  @Field(() => String, { description: 'Example field (placeholder)' })
  coupon: string;

  @IsNotEmpty({message: 'user field is required'})
  @Field(() => String, { description: 'Example field (placeholder)' })
  user: string

  @IsNotEmpty({message: 'expires field is required'})
  @Field(() => Date, { description: 'Example field (placeholder)' })
  expires: Date;

  @IsNotEmpty({message: 'used field is required'})
  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  used: boolean;
}
