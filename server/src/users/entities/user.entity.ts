import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty, IsEmail } from 'class-validator';

export type SessionDocument = HydratedDocument<User>;

@Schema()
@ObjectType()
export class User {
  _id: ObjectId;

  @Prop({ required: true }) // Declaramos la propiedad de la base de datos
  @IsNotEmpty({ message: 'name is required' }) // Validamos que no este vacio
  @Field(() => String, { description: 'Example field (placeholder)' }) // Declaramos la propiedad del schema
  name: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
