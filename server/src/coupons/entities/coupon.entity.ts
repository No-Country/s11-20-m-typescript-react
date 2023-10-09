import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, MinLength } from 'class-validator';
import { HydratedDocument, ObjectId } from 'mongoose';

export type SessionDocument = HydratedDocument<Coupon>;

@Schema({ timestamps: true })
@ObjectType()
export class Coupon {
  @Field(() => String, { description: 'id field' })
  _id: ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'title field' })
  @IsNotEmpty({ message: 'title is required' })
  @MinLength(3, { message: 'title must be at least 3 characters long' })
  title: string;

  @Prop({
    required: false,
    default:
      'https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=50',
  })
  @Field(() => String, { description: 'thumbnail of coupon' })
  thumbnail?: string;

  @Prop({ default: true })
  @Field(() => Boolean, { description: 'active/inactive field' })
  status: boolean;

  @Prop({ required: true })
  @Field(() => String, { description: 'rank of coupon' })
  @IsNotEmpty({ message: 'description is required' })
  requeriedRank: 1 | 2 | 3 | 4 | 5;

  @Prop({ required: true })
  @Field(() => String, { description: 'uses per month of coupon' })
  @IsNotEmpty({ message: 'description is required' })
  usesPerMonth: number;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
