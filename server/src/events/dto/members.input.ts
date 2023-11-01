import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class AddMemberInput {
  @IsNotEmpty({ message: 'idEvent is required' })
  @Field(() => String, { description: 'idEvent field' })
    idEvent: string

  @IsNotEmpty({ message: 'idUser is required' })
  @Field(() => String, { description: 'idUser field' })
    idUser: string
}

@InputType()
export class RemoveMemberInput {
  @IsNotEmpty({ message: 'idEvent is required' })
  @Field(() => String, { description: 'idEvent field' })
    idEvent: string

  @IsNotEmpty({ message: 'idUser is required' })
  @Field(() => String, { description: 'idUser field' })
    idUser: string
}

@InputType()
export class ModifyStatusInput {
  @IsNotEmpty({ message: 'idEvent is required' })
  @Field(() => String, { description: 'idEvent field' })
    idEvent: string

  @IsNotEmpty({ message: 'idUser is required' })
  @Field(() => String, { description: 'idUser field' })
    idUser: string

  @IsNotEmpty({ message: 'status is required' })
  @Field(() => String, { description: 'status field' })
    status: 'accepted' | 'pending' | 'refused'
}
