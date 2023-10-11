import SMTPTransport from 'nodemailer/lib/smtp-transport'

export interface INodemailderTransportOptions {
  transport?: string | SMTPTransport | SMTPTransport.Options
  defaults?: SMTPTransport.Options
}

export const NodemailderTransportOptions = Symbol(
  'INodemailderTransportOptions'
)
