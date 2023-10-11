import { ConfigurableModuleBuilder } from '@nestjs/common'
import { INodemailderTransportOptions } from './config.nodemailer-transport'

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<INodemailderTransportOptions>().build()
