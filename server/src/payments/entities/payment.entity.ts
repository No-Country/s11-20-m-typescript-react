import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { HydratedDocument, ObjectId } from 'mongoose'

export type SessionDocument = HydratedDocument<Payment>

@Schema({ timestamps: true })
@ObjectType()
export class Payment {
  @Field(() => String, { description: 'id field' })
    _id: ObjectId

  @Prop({ required: true })
  @Field(() => String, { description: 'title field' })
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'email is invalid' })
    email: string
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)
