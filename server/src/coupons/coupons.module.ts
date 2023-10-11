import { Module } from '@nestjs/common'
import { CouponsService } from './coupons.service'
import { CouponsResolver } from './coupons.resolver'
import { Coupon, CouponSchema } from './entities/coupon.entity'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }])
  ],
  providers: [CouponsResolver, CouponsService]
})
export class CouponsModule {}
