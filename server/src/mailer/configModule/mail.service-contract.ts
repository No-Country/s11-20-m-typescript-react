import { SendMailOptions } from 'nodemailer';

export type SendMailOptionsCustom = Omit<SendMailOptions, 'from'>;

export interface INodemailerService {
  sendMail: (options: SendMailOptions) => Promise<void>;
  bulkSendMail: (
    options: SendMailOptionsCustom[],
    from: string,
  ) => Promise<void>;
}

export const INodemailderService = Symbol('NodemailerService');
