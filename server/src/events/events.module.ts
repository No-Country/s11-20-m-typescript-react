import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './entities/event.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Event.name, schema: EventSchema}, 
      {name: User.name, schema: UserSchema}]),

  ],
  providers: [EventsResolver, EventsService],
})
export class EventsModule {}
