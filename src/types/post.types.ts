export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
}