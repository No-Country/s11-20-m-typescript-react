import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event, Member } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InternalServerErrorException } from '@nestjs/common';
import {
  AddMemberInput,
  ModifyStatusInput,
  RemoveMemberInput,
} from './dto/members.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Mutation(() => Event)
  addEventMember(@Args('addMemberInput') addMemberInput: AddMemberInput) {
    return this.eventsService.addMember(addMemberInput);
  }
  @Mutation(() => Event)
  removeEventMember(
    @Args('removeMemberInput') removeMemberInput: RemoveMemberInput,
  ) {
    return this.eventsService.removeMember(removeMemberInput);
  }

  @Mutation(() => Event)
  changeEventMemberStatus(
    @Args('modifyStatusInput') modifyStatusInput: ModifyStatusInput,
  ) {
    return this.eventsService.changeMemberStatus(modifyStatusInput);
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

  @ResolveField(() => User, { name: 'owner' })
  getOwner(@Parent() event: Event) {
    return this.eventsService.findUser(event.owner.toString());
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

  @ResolveField(() => [Member], { name: 'members' })
  getMembers(@Parent() event: Event) {
    const { members } = event;
    const membersMapped = members.map(async (element) => {
      const user = await this.eventsService.findUser(element.user.toString());
      return { user: user, status: element.status };
    });

    return membersMapped;
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
