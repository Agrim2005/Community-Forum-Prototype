import api from "./api";

interface CommentResponse {
  status: string;
  data: {
    id: string;
    text: string;
    createdAt: string;
    authorId: string;
    postId: string;
    author: {
      id: string;
      name: string;
      username: string;
      avatar: string | null;
    };
  };
}

export const createComment = async (
  postId: string,
  text: string,
) => {
  const response = await api.post<CommentResponse>(
    `/comments/post/${postId}`,
    {
      text,
    },
  );

  return response.data.data;
};

export const deleteComment = async (
  commentId: string,
): Promise<void> => {
  await api.delete(`/comments/${commentId}`);
};