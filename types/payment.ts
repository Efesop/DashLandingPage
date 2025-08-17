export interface PaymentProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image?: string
}

export interface CheckoutSessionRequest {
  email: string
  productId: string
  successUrl: string
  cancelUrl: string
}

export interface CheckoutSessionResponse {
  sessionId: string
  url: string
}

export interface PaymentStatus {
  id: string
  status: 'pending' | 'succeeded' | 'failed' | 'canceled'
  amount: number
  currency: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface StripeWebhookEvent {
  id: string
  type: string
  data: {
    object: {
      id: string
      status: string
      amount_total: number
      currency: string
      customer_details?: {
        email: string
      }
      metadata?: Record<string, string>
    }
  }
  created: number
}

export interface PaymentError {
  code: string
  message: string
  details?: any
}
