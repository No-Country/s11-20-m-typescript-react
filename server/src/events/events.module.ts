import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { EventsService } from './events.service'
import { EventsResolver } from './events.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Event, EventSchema } from './entities/event.entity'
import { User, UserSchema } from 'src/users/entities/user.entity'
import { AuthMiddleware } from 'src/auth/auth.middleware'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: User.name, schema: UserSchema }
    ])
  ],
  providers: [EventsResolver, EventsService, CloudinaryService]
})
// Implementación del Middleware para verificar una sesión
export class EventsModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
  }
}
