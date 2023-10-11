import { Module } from '@nestjs/common';
import { CouponsIssuedService } from './coupons-issued.service';
import { CouponsIssuedResolver } from './coupons-issued.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CouponsIssued,
  CouponsIssuedSchema,
} from './entities/coupons-issued.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Coupon, CouponSchema } from 'src/coupons/entities/coupon.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CouponsIssued.name, schema: CouponsIssuedSchema },
      { name: User.name, schema: UserSchema },
      { name: Coupon.name, schema: CouponSchema }
    ]),
  ],
  providers: [CouponsIssuedResolver, CouponsIssuedService],
})
export class CouponsIssuedModule {}
