import Stripe from 'stripe'

export interface SessionConfig {
  webhookKey: string
  susses: string
  cancel: string
  mode: Stripe.Checkout.SessionCreateParams.Mode
  thanksEmail: string
}

export const SesionConfig = Symbol('SesionConfig')
