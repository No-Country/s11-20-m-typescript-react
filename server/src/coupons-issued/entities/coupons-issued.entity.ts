import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';

@ObjectType()
export class CouponsIssued {
  @Field(() => String, { description: 'coupon id field' })
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'coupon is required' })
  @Field(() => String, { description: 'coupon field' })
  coupon: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'user is required' })
  @Field(() => String, { description: 'user field' })
  user: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'expires date is required' })
  @IsDate({ message: 'expires must be a date'})
  @Field(() => Date, { description: 'expires date field' })
  expires: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'used is required' })
  @Field(() => Boolean, { description: 'used field' })
  used: boolean;
}

export const CouponsIssuedSchema = SchemaFactory.createForClass(CouponsIssued);
