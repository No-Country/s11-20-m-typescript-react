<<<<<<< HEAD
<<<<<<< HEAD
import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CouponsModule } from './coupons/coupons.module';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './google auth/google.strategy';
import { User, UserSchema } from './users/entities/user.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
=======
=======
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { CouponsModule } from './coupons/coupons.module'
import { AuthModule } from './auth/auth.module'
import { GoogleStrategy } from './google auth/google.strategy'
import { User, UserSchema } from './users/entities/user.entity'
<<<<<<< HEAD
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9
=======
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    UsersModule,
    CouponsModule,
<<<<<<< HEAD
<<<<<<< HEAD
    AuthModule,
    CloudinaryModule
=======
    AuthModule
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9
=======
    AuthModule
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy]
})
export class AppModule {}
