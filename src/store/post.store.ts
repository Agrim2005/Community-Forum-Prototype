import { create } from "zustand";

import { posts as initialPosts } from "@/data/posts";
import type { Post } from "@/types/post.types";

interface PostStore {
  posts: Post[];

  addPost: (post: Post) => void;

  deletePost: (id: string) => void;
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
}));