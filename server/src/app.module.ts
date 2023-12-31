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
import { GoogleStrategy } from './googleAuth/google.strategy'
import { User, UserSchema } from './users/entities/user.entity'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { EventsModule } from './events/events.module'
import { PaymentsModule } from './payments/payments.module'
import { CouponsIssuedModule } from './coupons-issued/coupons-issued.module'

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
    CouponsIssuedModule,
    EventsModule,
    CouponsModule,
    AuthModule,
    CloudinaryModule,
    PaymentsModule
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy]
})
export class AppModule {}
