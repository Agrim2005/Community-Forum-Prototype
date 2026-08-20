import { create } from "zustand";

import {
  addBookmark as addBookmarkRequest,
  getBookmarks,
  removeBookmark as removeBookmarkRequest,
} from "@/services/bookmark.service";

interface BookmarkStore {
  bookmarkIds: string[];
  loading: boolean;

  fetchBookmarks: () => Promise<void>;

  addBookmark: (postId: string) => Promise<void>;

  removeBookmark: (postId: string) => Promise<void>;

  isBookmarked: (postId: string) => boolean;
}

export const useBookmarkStore = create<BookmarkStore>(
  (set, get) => ({
    bookmarkIds: [],
    loading: false,

    fetchBookmarks: async () => {
      set({ loading: true });

      try {
        const bookmarks = await getBookmarks();

        set({
          bookmarkIds: bookmarks.map(
            (bookmark) => bookmark.postId,
          ),
        });
      } finally {
        set({ loading: false });
      }
    },

    addBookmark: async (postId) => {
      await addBookmarkRequest(postId);

      set((state) => ({
        bookmarkIds: [
          ...state.bookmarkIds,
          postId,
        ],
      }));
    },

    removeBookmark: async (postId) => {
      await removeBookmarkRequest(postId);

      set((state) => ({
        bookmarkIds: state.bookmarkIds.filter(
          (id) => id !== postId,
        ),
      }));
    },

    isBookmarked: (postId) =>
      get().bookmarkIds.includes(postId),
  }),
);