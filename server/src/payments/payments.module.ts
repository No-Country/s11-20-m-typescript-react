import { Module } from '@nestjs/common'
import { PaymentsService } from './payments.service'
import Stripe from 'stripe'
import { STRIPE, STRIPE_URLS } from './constant/local.constant'
import { PaymentsController } from './payments.controller'
import { MailerModule } from 'src/mailer/mailer.module'
import { EmailCreation } from './helpers/email-creation'

@Module({
  imports: [
    MailerModule.register({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 1000),
        secure: Boolean(process.env.SMTP_SECURE || false),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      }
    })
  ],
  providers: [
    PaymentsService,
    EmailCreation,
    {
      provide: STRIPE,
      useValue: new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-08-16'
      })
    },
    {
      provide: STRIPE_URLS,
      useValue: {
        webhookKey: process.env.STRIPE_WEBHOOK_SECRET,
        susses: process.env.STRIPE_SUCCESS_URL,
        cancel: process.env.STRIPE_CANCEL_URL,
        mode: process.env.STRIPE_MODE,
        thanksEmail: process.env.DONATIONS_THANKS_EMAIL
      }
    }
  ],
  exports: [PaymentsService],
  controllers: [PaymentsController]
})
export class PaymentsModule {}
