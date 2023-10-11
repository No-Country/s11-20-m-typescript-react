import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate, Matches } from 'class-validator';



@InputType()
class LocationInput {
  @IsNotEmpty({ message: 'country is required' })
  @Field(() => String, { description: 'country field' })
  country: string;

  @IsNotEmpty({ message: 'state is required' })
  @Field(() => String, { description: 'state field' })
  state: string;
  
  @IsNotEmpty({ message: 'city is required' })
  @Field(() => String, { description: 'city field' })
  city: string;

  @IsNotEmpty({ message: 'adress is required' })
  @Field(() => String, { description: 'adress field' })
  adress: string;

  @IsNotEmpty({ message: 'zipCode is required' })
  @Field(() => String, { description: 'zip code field' })
  zipCode: string;
}

@InputType()
export class CreateEventInput {
  @IsNotEmpty({ message: 'title is required' })
  @Field(() => String, { description: 'title field' })
  title: string;

  @IsNotEmpty({ message: 'description is required' })
  @Field(() => String, { description: 'description field' })
  description: string;

  @Field(() => LocationInput, { description: 'location field' })
  location: LocationInput;

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
