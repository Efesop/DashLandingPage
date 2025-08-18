import { CheckoutSessionRequest, CheckoutSessionResponse, PaymentError } from '../types/payment'

// Create checkout session
export async function createCheckoutSession(
  request: CheckoutSessionRequest
): Promise<CheckoutSessionResponse> {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to create checkout session')
    }

    return await response.json()
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to create checkout session'
    )
  }
}

// Validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Format price for display
export function formatPrice(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100) // Convert cents to dollars
}

// Handle payment errors
export function handlePaymentError(error: any): PaymentError {
  if (error.code) {
    return {
      code: error.code,
      message: error.message || 'Payment failed',
      details: error.details,
    }
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: error.message || 'An unexpected error occurred',
    details: error,
  }
}

// Get success URL with session ID
export function getSuccessUrl(sessionId: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  return `${baseUrl}/payment/success?session_id=${sessionId}`
}

// Get cancel URL
export function getCancelUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  return `${baseUrl}/payment/cancel`
}
