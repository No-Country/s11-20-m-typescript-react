import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

@InputType()
export class CreateAuthInput {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @Field(() => String, { description: 'email field' })
  email: string;

  @IsNotEmpty({ message: 'password is required' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number',
  })
  @Field(() => String, { description: 'password field' })
  password: string;
}
