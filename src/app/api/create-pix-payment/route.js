/* // src/app/api/create-pix-payment/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    // amount in BRL cents (e.g., 199.00 BRL -> 19900)
    const amountInCents = Math.round((body.amount || 0) * 100);

    if (!amountInCents || amountInCents <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    // Create PaymentIntent for Pix - currency must be BRL
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'brl',
      payment_method_types: ['pix'],
      // optional: attach metadata with order id, cart snapshot, etc.
      metadata: body.metadata || {},
    });

    // Return client_secret to the client
    return NextResponse.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
  } catch (err) {
    console.error('create-pix-payment error', err);
    return NextResponse.json({ error: 'Failed to create PaymentIntent' }, { status: 500 });
  }
}
 */