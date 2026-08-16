export interface CreatePostRequest {
  content: string;
  communityId?: string;
}

export interface UpdatePostRequest {
  content: string;
}

export interface PostResponse {
  id: string;
  content: string;
  authorId: string;
  communityId: string | null;
  createdAt: Date;
  updatedAt: Date;
}