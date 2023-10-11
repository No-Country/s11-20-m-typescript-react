import { ConfigurableModuleBuilder } from '@nestjs/common';
import { NodemailderTransportOptions } from './config.nodemailer-transport';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<NodemailderTransportOptions>().build();
