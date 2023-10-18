import { DynamicModule, Module } from '@nestjs/common'
import { MailerService } from './mailer.service'
import { ConfigurableModuleClass } from './configModule/config.module-definition'
import { createTransport } from 'nodemailer'
import { INodemailderService } from './configModule/mail.service-contract'
import { INodemailderTransportOptions } from './configModule/config.nodemailer-transport'

@Module({
  providers: [],
  imports: [],
  exports: []
})
export class MailerModule extends ConfigurableModuleClass {
  static register (options: INodemailderTransportOptions): DynamicModule {
    return {
      ...super.register(options),
      providers: [
        {
          provide: 'Transporter',
          useValue: createTransport(options.transport)
        },
        { provide: 'OptionsConfig', useValue: options },
        { provide: INodemailderService, useClass: MailerService }
      ],
      exports: [{ provide: INodemailderService, useClass: MailerService }]
    }
  }
}
