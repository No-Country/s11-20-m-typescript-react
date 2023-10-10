import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty, Matches, IsDate } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export type SessionDocument = HydratedDocument<Event>;


enum MemberStatus {
  ACCEPTED = 'accepted',
  PENDING = 'pending',
  REFUSED = 'refused',
}

registerEnumType(MemberStatus, {
  name: 'MemberStatus',
});

@ObjectType()
export class Member {
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User, { description: 'user field' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({ default: "pending" })
  @Field(() => String, { description: 'status field' })
  status: "accepted"|"pending"|"refused";
}

@Schema({ timestamps: true })
@ObjectType()
export class Event {
  @Field(() => String, { description: 'Event Id' })
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'title is required' })
  @Field(() => String, { description: 'title field' })
  title: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'description is required' })
  @Field(() => String, { description: 'description field' })
  description: string;

  @Prop({ default: 100 })
  @Field(() => Number, { description: 'spots field' })
  spots: number;

  @Prop({ default: [] })
  @Field(() => [Member], { description: 'members field' })
  members: Member[];

  @Prop({ required: true })
  @IsNotEmpty({ message: 'deadline is required' })
  @IsDate({ message: 'deadline must be a date' })
  @Field(() => Date, { description: 'birthday field' })
  deadline: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'startDate is required' })
  @IsDate({ message: 'startDate must be a date' })
  @Field(() => Date, { description: 'startDate field' })
  startDate: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'endDate is required' })
  @IsDate({ message: 'endDate must be a date' })
  @Field(() => Date, { description: 'endDate field' })
  endDate: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'time is required' })
  //@Matches(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/)
  @Field(() => String, { description: 'time field' })
  time: string;

  @Prop({ default: 'public' })
  @Matches(/\b(public|private)\b/)
  @Field(() => String, { description: 'type (public | private) field' })
  type: 'public' | 'private';

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  @Field(() =>  User, { description: 'owner field' })
  owner:  mongoose.Schema.Types.ObjectId;

  @Prop({
    default:
      'https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
  })
  @Field(() => String, { description: 'thumbnail field' })
  thumbnail: string;

  @Field(() => Date, { description: 'createdAt field' })
  createdAt: Date;

  @Field(() => Date, { description: 'updatedAt field' })
  updatedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
