import { CreateEventInput } from './create-event.input'
import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql'

@InputType()
export class UpdateEventInput extends PartialType(
  OmitType(CreateEventInput, ['owner'] as const)
) {
  @Field(() => String)
    _id: string

  @Field(() => String, { nullable: true })
    thumbnail?: string
}
