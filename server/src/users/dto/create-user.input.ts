import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsEmail, IsDate, Matches } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsNotEmpty({ message: 'firstName is required' })
  @Matches(/^[a-zA-Z]+$/, {
    message: 'firstName must contain only letters'
  })
  @Field(() => String, { description: 'firstName field' })
    firstName: string

  @IsNotEmpty({ message: 'lastName is required' })
  @Matches(/^[a-zA-Z]+$/, {
    message: 'lastName must contain only letters'
  })
  @Field(() => String, { description: 'lastName field' })
    lastName: string

  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @Field(() => String, { description: 'email field' })
    email: string

  @IsNotEmpty({ message: 'username is required' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'username must contain only letters and numbers'
  })
  @Field(() => String, { description: 'username field' })
    username: string

  @IsNotEmpty({ message: 'password is required' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number'
  })
  @Field(() => String, { description: 'password field' })
    password: string

  @IsNotEmpty({ message: 'birthday is required' })
  @IsDate({ message: 'birthday must be a date' })
  @Field(() => Date, { description: 'birthday field' })
    birthday: Date
}
