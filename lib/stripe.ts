import Stripe from "stripe";

// ✅ Stripe only supports officially released API versions — use 2023-10-16
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});
