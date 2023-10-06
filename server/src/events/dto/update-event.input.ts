import { IsNotEmpty } from 'class-validator';
import { CreateEventInput } from './create-event.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @IsNotEmpty({ message: 'id is required' })
  @Field(() => String, { description: 'title field' })
  _id: string;
}
