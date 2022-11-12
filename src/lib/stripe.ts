import Stripe from "stripe";

const stripeServerSide = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!,
  {
    apiVersion: "2022-08-01",
  }
);

export { stripeServerSide };
