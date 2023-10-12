import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/users/entities/user.entity'
import { JwtModule } from '@nestjs/jwt'
import { UsersModule } from 'src/users/users.module'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' }
      }),
      inject: [ConfigService]
    }),
    ConfigModule
  ],
  providers: [AuthResolver, AuthService],
  exports: [AuthService]
})
export class AuthModule {}
