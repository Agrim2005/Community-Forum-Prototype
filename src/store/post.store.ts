import { create } from "zustand";

import { posts as initialPosts } from "@/data/posts";
import type { Post } from "@/types/post.types";

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
  editPost: (id: string, content: string) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: initialPosts,

  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter(
        (post) => post.id !== id
      ),
    })),

  // 1. Moved editPost inside the object
  editPost: (id, content) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id
          ? {
              ...post,
              content,
            }
          : post
      ),
    })),
})); // 2. Moved the closing brackets and semicolon down here