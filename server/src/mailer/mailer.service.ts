import { Inject, Injectable } from '@nestjs/common';
import { SendMailOptions, Transporter } from 'nodemailer';
import {
  INodemailerService,
  SendMailOptionsCustom,
} from './configModule/mail.service-contract';

@Injectable()
export class MailerService implements INodemailerService {
  constructor(@Inject('Transporter') private transporter: Transporter) {}

  async sendMail(options: SendMailOptions) {
    return this.transporter.sendMail(options);
  }
  

  async bulkSendMail(
    options: SendMailOptionsCustom[],
    from: string,
  ): Promise<void> {
    await Promise.all(
      options.map((option) => this.sendMail({ ...option, from })),
    );
  }


  
}
