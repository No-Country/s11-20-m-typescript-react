import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { Event } from './entities/event.entity';
import { AddMemberInput, ModifyStatusInput } from './dto/members.input';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<Event>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  private async findEventById(id: string) {
    const event = await this.eventModel.findById(id).catch((error) => {
      console.log(error);
      throw new BadRequestException("Can't find event");
    });
    if (!event) {
      throw new NotFoundException("Can't find event");
    }
    return event;
  }

  async create(createEventInput: CreateEventInput) {
    const user = await this.userModel.findById(createEventInput.owner);
    // agregar verificaciones
    const event = await this.eventModel
      .create(createEventInput)
      .catch((error) => {
        console.log(error);
        throw new BadRequestException('Unable to create event');
      });
    user.events.created.push(event._id);
    user.markModified('events');
    user.save();
    return event;
  }

  async findAll() {
    return await this.eventModel.find().catch((error) => {
      console.log(error);
      throw new BadRequestException("Can't find events");
    });
  }
  async findUser(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }
  async findOwner(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }
  async findOne(id: string) {
    return await this.findEventById(id);
  }

  async addMember(addMemberInput: AddMemberInput) {
    const event = await this.eventModel
      .findById(addMemberInput.idEvent)
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't find event");
      });
    if (!event) {
      throw new NotFoundException("Can't find event");
    }
    for (let i = 0; i < event.members.length; i++) {
      if (event.members[i].user.toString() == addMemberInput.idUser) {
        throw new BadRequestException('User is already a member');
      }
    }
    const user = await this.userModel
      .findById(addMemberInput.idUser)
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't find user");
      });
    if (!user) {
      throw new NotFoundException("Can't find user");
    }
    event.members.push({
      user: user._id,
      status: event.type === 'public' ? 'accepted' : 'pending',
    });
    user.events.subscribed.push(event._id);
    user.markModified('events');
    event.markModified('members');
    event.save();
    user.save();
    return event;
  }

  async changeMemberStatus(modifyStatusInput: ModifyStatusInput) {
    const event = await this.eventModel
      .findById(modifyStatusInput.idEvent)
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't find event");
      });
    if (!event) {
      throw new NotFoundException("Can't find event");
    }
    // verify if user exists
    if ((event.members.findIndex(x => x.user.toString() == modifyStatusInput.idUser)) === -1) {
      throw new BadRequestException('User is not a member');
    }
    
    const modified = event.members.map((item)=>{
      if (item.user.toString() === modifyStatusInput.idUser) {
        return {...item, status: modifyStatusInput.status}
      }
      return item
    })
    event.members = modified;
    event.markModified('members');
    event.save();
    return event;
  }

  async update(id: string, updateEventInput: UpdateEventInput) {
    const updatedEvent = await this.eventModel
      .findByIdAndUpdate(id, updateEventInput, { new: true })
      .catch((error) => {
        console.log(error);
        throw new BadRequestException("Can't update event");
      });

    return updatedEvent;
  }

  async remove(id: string) {
    const event = await this.eventModel.findByIdAndDelete(id).catch((error) => {
      console.log(error);
      throw new BadRequestException("Can't delete event");
    });
    if (!event) throw new NotFoundException("Can't find event");
    return event;
  }
}
