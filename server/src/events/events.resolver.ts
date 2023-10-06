import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [Event], { name: 'events' })
  findAll() {
    try {
      return this.eventsService.findAll();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Query(() => Event, { name: 'event' })
  findOne(@Args('id', { type: () => String }) id: string) {
    try {
      return this.eventsService.findOne(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    try {
      return this.eventsService.update(updateEventInput._id, updateEventInput);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => Event)
  removeEvent(@Args('id', { type: () => String }) id: string) {
    try {
      return this.eventsService.remove(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
