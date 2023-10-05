import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateCouponInput {
  @Field(() => String, { description: 'title field' })
  @IsNotEmpty({ message: 'title is required' })
  @MinLength(3, { message: 'title must be at least 3 characters long' })
  title: string;

  /*
  @Field(() => String, { description: 'description field' })
  thumbnail: string;
  */

  @Field(() => String, { description: 'description field' })
  @IsNotEmpty({ message: 'description is required' })
  requeriedRank: 1 | 2 | 3 | 4 | 5;

  @Field(() => String, { description: 'description field' })
  @IsNotEmpty({ message: 'description is required' })
  usesPerMonth: number;
}
