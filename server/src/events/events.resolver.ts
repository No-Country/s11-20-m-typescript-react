import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  ObjectType,
} from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event, Members } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InternalServerErrorException } from '@nestjs/common';
import { AddMemberInput, ModifyStatusInput } from './dto/members.input';
import { User } from 'src/users/entities/user.entity';
import { SchemaType } from 'mongoose';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }
  @Mutation(() => Event)
  addMember(@Args('addMemberInput') addMemberInput: AddMemberInput) {
    return this.eventsService.addMember(addMemberInput);
  }
  @Mutation(() => Event)
  changeMemberStatus(
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

  @ResolveField('owner', (returns) => User)
  async getOwner(@Parent() event: Event) {
    const { owner } = event;
    const user = this.eventsService.findOwner(owner.toString());
    //console.log(user);

    return user;
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


  @ResolveField(() => [Members], { name: 'members' })
  async getMembers(@Parent() event: Event): Promise<Members[]> {

    const { members } = event;
    console.log(members);
    
    return members
  }

  // Resolver para obtener la información del campo 'user' dentro de 'members'
  @ResolveField(() => User, { name: 'user' })
  async getMemberUser(@Parent() event: Event): Promise<User> {
    const { members } = event;
    console.log("event");
    console.log(event);
    
    // Supongamos que 'members' es una lista de objetos con un campo 'userId'
    const userId = members[0].user; // Aquí debes seleccionar el usuario adecuado según tu lógica
    return await this.eventsService.findUser(userId.toString());
  }




  // @ResolveField('user', (returns) => User)
  // async getUser(@Parent() members: Members) {
  //   const { user } = members
  //   console.log(user);

  //   const userfull = await this.eventsService
  //     .findUser(user.toString())
  //     .catch((error) => {
  //       console.log(error);
  //       return [];
  //     });
  //     console.log(userfull);


  //   //     return {...user, status: element.status};
  //   //   })

  //   //   console.log(users);
  //   return userfull;
  // }

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
