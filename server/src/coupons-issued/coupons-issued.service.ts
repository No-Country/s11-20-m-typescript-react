import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CouponsIssued } from './entities/coupons-issued.entity';
import { Model } from 'mongoose';
import { CouponsIssuedModule } from './coupons-issued.module';
import { CreateCouponsIssuedInput } from './dto/create-coupons-issued.input';
import { UpdateCouponsIssuedInput } from './dto/update-coupons-issued.input';

@Injectable()
export class CouponsIssuedService {
  constructor(
    @InjectModel(CouponsIssued.name)
    private CouponsIssuedModel: Model<CouponsIssued>,
  ) {}

  async createOne(createCouponsIssuedInput: CreateCouponsIssuedInput) {
    return await this.CouponsIssuedModel.create(createCouponsIssuedInput).catch(
      (error) => {
        console.log(error);
        throw new BadRequestException('Cant create coupons issued');
      },
    );
  }

  async findAll() {
    return await this.CouponsIssuedModel.find().catch((error) => {
      console.log(error);
      throw new BadRequestException('Cant find coupons issued');
    });
  }

  async findOne(id: string) {
    return await this.CouponsIssuedModel.findById(id);
  }

  async updateOne(id: string, updateCouponsIssuedInput: UpdateCouponsIssuedInput ) {
    const founded=  await this.CouponsIssuedModel.findById(id);
    return await this.CouponsIssuedModel.updateOne(updateCouponsIssuedInput)
  }

  async deleteOne(id: string) {
    return await this.CouponsIssuedModel.findByIdAndDelete(id);
  }
}
