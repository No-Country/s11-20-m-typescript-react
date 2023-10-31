import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  RawBodyRequest,
  Req
} from '@nestjs/common'
import { PaymentsService } from './payments.service'
import { PaymentInput } from './dto/create-payment.dto'

@Controller('payments')
export class PaymentsController {
  constructor (private readonly paymentsService: PaymentsService) {}

  @Get('/prices')
  async getPrices () {
    try {
      return await this.paymentsService.getPrices()
    } catch (error) {
      console.error(error)
      throw new BadRequestException("sorry we can't get the prices")
    }
  }

  @Post('/create-session')
  async createSessionPayment (@Body() payment: PaymentInput) {
    try {
      return await this.paymentsService.createSessionPayment(payment.price)
    } catch (error) {
      console.error(error)
      throw new BadRequestException("sorry we can't create the session")
    }
  }

  @Post('/webhook')
  async handleStripeWebhook (@Req() req: RawBodyRequest<Request>) {
    try {
      const sig = req.headers['stripe-signature']
      await this.paymentsService.handleEvents(req.rawBody, sig)
    } catch (err) {
      console.error(err)
      throw new BadRequestException('Webhook Error')
    }
  }
}
