import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, Schema } from '@nestjs/mongoose'
import { HydratedDocument, ObjectId } from 'mongoose'
import { IsNotEmpty, IsEmail, Matches } from 'class-validator'

export type SessionDocument = HydratedDocument<Auth>

@Schema({ timestamps: true })
@ObjectType()
export class VerificationResult {
  @Field()
    sub: string

  @Field()
    username: string
}

@ObjectType()
export class Auth {
  @Field(() => String, { description: 'field' })
    _id: ObjectId

  @Prop({ required: true })
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @Field(() => String, { description: 'email field' })
    email: string

  @Prop({ required: true })
  @IsNotEmpty({ message: 'password is required' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number'
  })
  @Field(() => String, { description: 'password field' })
    password: string
}

@ObjectType()
export class LoginResult {
  @Field(() => String, { description: 'field' })
    token: string

  @Field(() => String, { description: 'field' })
    userId: string
}
