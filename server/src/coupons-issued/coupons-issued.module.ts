import { Module } from '@nestjs/common';
import { CouponsIssuedService } from './coupons-issued.service';
import { CouponsIssuedResolver } from './coupons-issued.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CouponsIssued,
  CouponsIssuedSchema,
} from './entities/coupons-issued.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CouponsIssued.name, schema: CouponsIssuedSchema },
    ]),
  ],
  providers: [CouponsIssuedResolver, CouponsIssuedService],
})
export class CouponsIssuedModule {}
