import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { IsDate, IsNotEmpty } from 'class-validator'
import mongoose from 'mongoose'
import { Coupon } from 'src/coupons/entities/coupon.entity'
import { User } from 'src/users/entities/user.entity'

@Schema()
@ObjectType()
export class CouponsIssued {
  @Field(() => String, { description: 'coupon id field' })
    _id: mongoose.Schema.Types.ObjectId

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coupon'
  })
  @IsNotEmpty({ message: 'coupon is required' })
  @Field(() => Coupon, { description: 'coupon field' })
    coupon: mongoose.Schema.Types.ObjectId

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  @IsNotEmpty({ message: 'user is required' })
  @Field(() => User, { description: 'user field' })
    user: mongoose.Schema.Types.ObjectId

  @Prop({ required: true })
  @IsNotEmpty({ message: 'expires date is required' })
  @IsDate({ message: 'expires must be a date' })
  @Field(() => Date, { description: 'expires date field' })
    expires: Date

  @Prop({ required: true })
  @IsNotEmpty({ message: 'used is required' })
  @Field(() => Boolean, { description: 'used field' })
    used: boolean
}

export const CouponsIssuedSchema = SchemaFactory.createForClass(CouponsIssued)
