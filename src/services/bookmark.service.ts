import api from "./api";

interface BookmarkResponse {
  status: string;
  data: {
    id: string;
    userId: string;
    postId: string;
    createdAt: string;
  };
}

interface BookmarksResponse {
  status: string;
  data: Array<{
    id: string;
    userId: string;
    postId: string;
    createdAt: string;
  }>;
}

export const getBookmarks = async () => {
  const response = await api.get<BookmarksResponse>(
    "/bookmarks",
  );

  return response.data.data;
};

export const addBookmark = async (
  postId: string,
): Promise<void> => {
  await api.post<BookmarkResponse>(
    `/bookmarks/post/${postId}`,
  );
};

export const removeBookmark = async (
  postId: string,
): Promise<void> => {
  await api.delete(
    `/bookmarks/post/${postId}`,
  );
};