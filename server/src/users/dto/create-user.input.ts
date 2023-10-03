import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty({ message: 'name is required' }) // Validamos que no este vacio
  @Field(() => String, { description: 'Example field (placeholder)' }) // Declaramos la propiedad del schema
  name: string;

  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
