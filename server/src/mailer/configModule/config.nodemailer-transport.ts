import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface NodemailderTransportOptions {
  transport?: string | SMTPTransport | SMTPTransport.Options;
  defaults?: SMTPTransport.Options;
}

export const NodemailderTransportOptions = Symbol(
  'NodemailderTransportOptions',
);
