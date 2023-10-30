import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './entities/user.entity'
import { EventSchema, Event } from 'src/events/entities/event.entity'
import { AuthMiddleware } from 'src/auth/auth.middleware'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Event.name, schema: EventSchema }
    ])
  ],
  providers: [UsersResolver, UsersService, CloudinaryService],
  exports: [UsersService]
})
// Implementación del Middleware para verificar una sesión
export class UsersModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
  }
}
