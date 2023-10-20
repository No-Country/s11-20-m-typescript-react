import { Module, NestModule, type MiddlewareConsumer } from '@nestjs/common'
import { CouponsService } from './coupons.service'
import { CouponsResolver } from './coupons.resolver'
import { Coupon, CouponSchema } from './entities/coupon.entity'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthMiddleware } from 'src/auth/auth.middleware'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }])
  ],
  providers: [CouponsResolver, CouponsService]
})
// Implementación del Middleware para verificar una sesión
export class CouponsModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
  }
}
