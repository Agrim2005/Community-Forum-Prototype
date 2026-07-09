import { create } from "zustand";

import type { Post } from "@/types/post.types";

interface BookmarkStore {
  bookmarks: Post[];

  addBookmark: (post: Post) => void;

  removeBookmark: (id: string) => void;

  isBookmarked: (id: string) => boolean;
}

export const useBookmarkStore = create<BookmarkStore>(
  (set, get) => ({
    bookmarks: [],

    addBookmark: (post) =>
      set((state) => ({
        bookmarks: [...state.bookmarks, post],
      })),

    removeBookmark: (id) =>
      set((state) => ({
        bookmarks: state.bookmarks.filter(
          (post) => post.id !== id
        ),
      })),

    isBookmarked: (id) =>
      get().bookmarks.some(
        (post) => post.id === id
      ),
  })
);