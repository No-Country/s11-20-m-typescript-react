import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { CouponsIssuedService } from './coupons-issued.service'
import { CouponsIssuedResolver } from './coupons-issued.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import {
  CouponsIssued,
  CouponsIssuedSchema
} from './entities/coupons-issued.entity'
import { User, UserSchema } from 'src/users/entities/user.entity'
import { Coupon, CouponSchema } from 'src/coupons/entities/coupon.entity'
import { AuthMiddleware } from 'src/auth/auth.middleware'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CouponsIssued.name, schema: CouponsIssuedSchema },
      { name: User.name, schema: UserSchema },
      { name: Coupon.name, schema: CouponSchema }
    ])
  ],
  providers: [CouponsIssuedResolver, CouponsIssuedService]
})
// Implementación del Middleware para verificar una sesión
export class CouponsIssuedModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
  }
}
