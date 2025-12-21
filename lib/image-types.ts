// Shared TypeScript types for image generation

export interface AiexorImage {
  id: string;
  url: string;
  prompt: string;
  style?: string;
  createdAt: string;
}

export interface UserImageGallery {
  userId: string;
  images: AiexorImage[];
}
