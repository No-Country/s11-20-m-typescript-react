import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsDate, Matches } from 'class-validator';
import mongoose from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class CreateEventInput {
  @IsNotEmpty({ message: 'title is required' })
  @Field(() => String, { description: 'title field' })
  title: string;

  @IsNotEmpty({ message: 'description is required' })
  @Field(() => String, { description: 'description field' })
  description: string;

  @Field(() => Number, { description: 'spots field' })
  spots: Number;

  @IsNotEmpty({ message: 'deadline is required' })
  @IsDate({ message: 'deadline must be a date' })
  @Field(() => Date, { description: 'birthday field' })
  deadline: Date;

  @IsNotEmpty({ message: 'startDate is required' })
  @IsDate({ message: 'startDate must be a date' })
  @Field(() => Date, { description: 'startDate field' })
  startDate: Date;

  @IsNotEmpty({ message: 'endDate is required' })
  @IsDate({ message: 'endDate must be a date' })
  @Field(() => Date, { description: 'endDate field' })
  endDate: Date;

  @IsNotEmpty({ message: 'time is required' })
  //@Matches(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/)
  @Field(() => String, { description: 'time field' })
  time: string;

  @Matches(/\b(public|private)\b/)
  @Field(() => String, { description: 'type (public | private) field' })
  type: 'public' | 'private';

  @IsNotEmpty({ message: 'owner is required' })
  @Field(() => String, { description: 'owner field' })
  owner: string;
}
