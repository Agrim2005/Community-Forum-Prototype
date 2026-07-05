export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  createdAt: string;

  likes: number;
  comments: number;

  isLiked: boolean;
  isBookmarked: boolean;

  commentList: Comment[];
}