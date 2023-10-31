import { Inject, Injectable } from '@nestjs/common'
import Stripe from 'stripe'
import { CHECKOUT_SESSSION_COMPLETED, STRIPE } from './constant/local.constant'
import { SessionConfig } from './dto/session-config'
import { EmailCreation } from './helpers/email-creation'

@Injectable()
export class PaymentsService {
  constructor (
    @Inject(STRIPE) private readonly stripe: Stripe,
    @Inject('STRIPE_URLS') private readonly config: SessionConfig,
    private readonly emailCreation: EmailCreation
  ) {}

  async createSessionPayment (price: number) {
    const session = await this.stripe.checkout.sessions.create({
      line_items: [
        {
          quantity: 1,
          price_data: {
            product_data: {
              name: 'Donation'
            },
            currency: 'usd',
            unit_amount: price
          }
        }
      ],
      mode: this.config.mode,
      success_url: this.config.susses,
      cancel_url: this.config.cancel
    })

    return { url: session.url }
  }

  async getPrices () {
    return (await this.stripe.prices.list()).data
  }

  private async createEvent (payload: Buffer, sig: string) {
    try {
      const event = this.stripe.webhooks.constructEvent(
        payload,
        sig,
        this.config.webhookKey
      )
      return event
    } catch (error) {
      throw new Error("Webhook Error: Can't create event")
    }
  }

  async handleEvents (payload: Buffer, sig: string) {
    const event = await this.createEvent(payload, sig)

    if (event.type === CHECKOUT_SESSSION_COMPLETED) {
      const session = event.data.object as Stripe.Checkout.Session
      const email = session.customer_details.email
      if (process.env.SMTP_USER) {
        await this.emailCreation.handleThanksEmail(email)
      }
      // todo: save in database
    }

    return event
  }
}
