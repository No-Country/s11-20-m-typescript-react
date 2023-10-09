import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  _id: string;

  @Field(() => String, { nullable: true })
  oldPassword?: string;

  @Field(() => String, { nullable: true })
  newPassword?: string;
}
