import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty, IsEmail, Matches, IsDate } from 'class-validator';
import { CouponsIssued } from 'src/coupons-issued/entities/coupons-issued.entity';

export type SessionDocument = HydratedDocument<User>;

@ObjectType()
class EventsEnum {
  constructor() {
    this.created = [];
    this.subscribed = [];
  }

  @Prop({ default: [] })
  @Field(() => [String], { description: 'created field' })
  created: ObjectId[];

  @Prop({ default: [] })
  @Field(() => [String], { description: 'subscribed field' })
  subscribed: ObjectId[];
}

@ObjectType()
class HabitsEnum {
  constructor() {
    this.exampleHabit = 'OK';
    this.exampleHabit2 = 'OK';
  }
  @Prop({ default: 'OK' })
  @Field(() => String, { description: 'exampleHabit field' })
  exampleHabit: string;

  @Prop({ default: 'OK' })
  @Field(() => String, { description: 'exampleHabit2 field' })
  exampleHabit2: string;
}

@Schema({ timestamps: true })
@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'firstName is required' })
  @Matches(/^[a-zA-Z]+$/, {
    message: 'firstName must contain only letters',
  })
  @Field(() => String, { description: 'firstName field' })
  firstName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'lastName is required' })
  @Matches(/^[a-zA-Z]+$/, {
    message: 'lastName must contain only letters',
  })
  @Field(() => String, { description: 'lastName field' })
  lastName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @Field(() => String, { description: 'email field' })
  email: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'username is required' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'username must contain only letters and numbers',
  })
  @Field(() => String, { description: 'username field' })
  username: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'password is required' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number',
  })
  @Field(() => String, { description: 'password field' })
  password: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'birthday is required' })
  @IsDate({ message: 'birthday must be a date' })
  @Field(() => Date, { description: 'birthday field' })
  birthday: Date;

  @Prop({ default: 1 })
  @Field(() => Number, { description: 'rank field' })
  rank: 1 | 2 | 3 | 4 | 5;

  @Prop({ default: new EventsEnum() })
  @Field(() => EventsEnum, { description: 'events field' })
  events: EventsEnum;

  //Completar cuando este el modelo de cupones
  @Prop({ default: [] })
  @Field(() => [CouponsIssued], { description: 'coupon field' })
  coupons: mongoose.Schema.Types.ObjectId[];

  @Prop({
    default:
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  })
  @IsNotEmpty({ message: 'profileImage is required' })
  @Field(() => String, { description: 'profileImage field' })
  profileImage: string;

  @Prop({ default: new HabitsEnum() })
  @Field(() => HabitsEnum, { description: 'habits field' })
  habits: HabitsEnum;

  @Field(() => Date, { description: 'createdAt field' })
  createdAt: Date;

  @Field(() => Date, { description: 'updatedAt field' })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
