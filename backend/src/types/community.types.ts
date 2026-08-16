export interface CreateCommunityRequest {
  name: string;
  description: string;
  category: string;
  image?: string;
  featured?: boolean;
}

export interface UpdateCommunityRequest {
  name?: string;
  description?: string;
  category?: string;
  image?: string;
  featured?: boolean;
}