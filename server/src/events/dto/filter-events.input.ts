import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class FilterEventInput {
  @Field(() => Number, { description: 'offset field' })
    offset: number

  @Field(() => Number, { description: 'limit field' })
    limit: number

  @Field(() => String, { description: 'title field' })
    title: string
}
