import { IsNotEmpty } from 'class-validator'
import { CreateEventInput } from './create-event.input'
import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql'

@InputType()
export class UpdateEventInput extends PartialType(
  OmitType(CreateEventInput, ['owner'] as const)
) {
  @Field(() => String)
    _id: string
}
