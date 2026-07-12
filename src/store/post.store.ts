import { create } from "zustand";
import { persist } from "zustand/middleware";

import { posts as initialPosts } from "@/data/posts";
import type { Post } from "@/types/post.types";

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
  editPost: (id: string, content: string) => void;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      // 1. Restored the initial state for posts
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
    }),
    {
      name: "posts-storage",
    }
  )
);