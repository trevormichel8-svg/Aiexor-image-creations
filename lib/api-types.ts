// API Type Definitions for Aiexor
export interface GenerateRequest {
  prompt: string;
  style?: string;
}

export interface GenerateResponse {
  image: string;
  error?: string;
}

export interface ImageRecord {
  id: string;
  user_id: string;
  image_url: string;
  prompt: string;
  style: string;
  is_public: boolean;
  created_at: string;
}
