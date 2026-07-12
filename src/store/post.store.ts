import { create } from "zustand";
import { persist } from "zustand/middleware";

import { posts as initialPosts } from "@/data/posts";

import type { Post } from "@/types/post.types";
import type { User } from "@/types/auth.types";

interface PostStore {
  posts: Post[];

  addPost: (content: string, user: User) => void;

  deletePost: (id: string) => void;

  editPost: (id: string, content: string) => void;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: initialPosts,

      addPost: (content, user) =>
        set((state) => ({
          posts: [
            {
              id: crypto.randomUUID(),

              author: {
                id: user.id,
                name: user.name,
                avatar: user.avatar ?? "https://i.pravatar.cc/150?img=8",
              },

              content,

              createdAt: "Just now",

              likes: 0,
              comments: 0,

              isLiked: false,
              isBookmarked: false,

              commentList: [],
            },

            ...state.posts,
          ],
        })),

      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),

      editPost: (id, content) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id
              ? {
                  ...post,
                  content,
                }
              : post,
          ),
        })),
    }),
    {
      name: "posts-storage",
    },
  ),
);
