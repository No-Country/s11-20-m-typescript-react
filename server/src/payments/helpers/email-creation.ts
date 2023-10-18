import { Inject } from '@nestjs/common'
import { SendMailOptions } from 'nodemailer'
import {
  INodemailerService,
  NodemailerService
} from 'src/mailer/configModule/mail.service-contract'
import { SessionConfig } from '../dto/session-config'

export class EmailCreation {
  constructor (
    @Inject('STRIPE_URLS') private readonly config: SessionConfig,
    @Inject(NodemailerService) private readonly mailer: INodemailerService
  ) {}

  private createEmailTemplate (message: string) {
    return `
      <div style="background-color: #f5f5f5; padding: 20px;">
        <div style="background-color: white; padding: 20px; border-radius: 10px;">
          <p style="font-size: 20px;">Message: ${message}</p>
        </div>
      </div>
    `
  }

  public async handleThanksEmail (email: string) {
    const thanksEmail = this.createThanksEmail(email)
    await this.mailer.sendMail(thanksEmail)
  }

  private createThanksEmail (email: string): SendMailOptions {
    return {
      to: email,
      subject: 'Thanks for your Donation',
      html: this.createEmailTemplate(
        'Thank you very much for your donation, it will help us a lot to continue with this project.'
      ),
      from: this.config.thanksEmail
    }
  }
}
