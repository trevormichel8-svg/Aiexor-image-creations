// API and service provider configuration

export const PROVIDERS = {
  openai: {
    name: "OpenAI",
    model: "gpt-image-1.5",
    apiKey: process.env.OPENAI_API_KEY,
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  stripe: {
    secret: process.env.STRIPE_SECRET_KEY,
    public: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  },
} as const;

export type ProviderKey = keyof typeof PROVIDERS;
