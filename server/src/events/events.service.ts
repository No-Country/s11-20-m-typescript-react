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

  async findOne(id: string) {
    return await this.findEventById(id);
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
