import { create } from "zustand";

import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "@/services/post.service";

import type { Post } from "@/types/post.types";

interface PostStore {
  posts: Post[];
  loading: boolean;

  fetchPosts: () => Promise<void>;

  addPost: (content: string) => Promise<void>;

  deletePost: (id: string) => Promise<void>;

  editPost: (id: string, content: string) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  loading: false,

  fetchPosts: async () => {
    set({ loading: true });

    try {
      const posts = await getPosts();

      set({ posts });
    } finally {
      set({ loading: false });
    }
  },

  addPost: async (content) => {
    const post = await createPost(content);

    set((state) => ({
      posts: [post, ...state.posts],
    }));
  },

  deletePost: async (id) => {
    await deletePost(id);

    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
  },

  editPost: async (id, content) => {
    const updatedPost = await updatePost(id, content);

    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? updatedPost : post,
      ),
    }));
  },
}));