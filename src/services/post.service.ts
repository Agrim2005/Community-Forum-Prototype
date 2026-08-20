import api from "./api";
import type { Post } from "@/types/post.types";

interface BackendPost {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  communityId: string | null;
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string | null;
  };
  community: {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string | null;
    featured: boolean;
    createdAt: string;
  } | null;
  comments: Array<{
    id: string;
    text: string;
    author: {
      id: string;
      name: string;
      username: string;
      avatar: string | null;
    };
  }>;
  likes: Array<{
    id: string;
    userId: string;
  }>;
  bookmarks: Array<{
    id: string;
    userId: string;
  }>;
}

interface PostsResponse {
  status: string;
  data: BackendPost[];
}

interface PostResponse {
  status: string;
  data: BackendPost;
}

const mapPost = (post: BackendPost): Post => ({
  id: post.id,

  author: {
    id: post.author.id,
    name: post.author.name,
    avatar:
      post.author.avatar ??
      "https://i.pravatar.cc/150?img=8",
  },

  content: post.content,
  createdAt: post.createdAt,

  likes: post.likes.length,
  comments: post.comments.length,

  isLiked: false,
  isBookmarked: false,

  commentList: post.comments.map((comment) => ({
    id: comment.id,
    author: comment.author.name,
    text: comment.text,
  })),
});

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<PostsResponse>("/posts");

  return response.data.data.map(mapPost);
};

export const createPost = async (
  content: string,
): Promise<Post> => {
  const response = await api.post<PostResponse>("/posts", {
    content,
  });

  return mapPost(response.data.data);
};

export const updatePost = async (
  id: string,
  content: string,
): Promise<Post> => {
  const response = await api.patch<PostResponse>(
    `/posts/${id}`,
    { content },
  );

  return mapPost(response.data.data);
};

export const deletePost = async (
  id: string,
): Promise<void> => {
  await api.delete(`/posts/${id}`);
};