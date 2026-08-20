import api from "./api";

interface LikesResponse {
  status: string;
  data: Array<{
    id: string;
    userId: string;
    postId: string;
  }>;
}

export const getLikes = async (
  postId: string,
) => {
  const response = await api.get<LikesResponse>(
    `/likes/post/${postId}`,
  );

  return response.data.data;
};

export const addLike = async (
  postId: string,
): Promise<void> => {
  await api.post(
    `/likes/post/${postId}`,
  );
};

export const removeLike = async (
  postId: string,
): Promise<void> => {
  await api.delete(
    `/likes/post/${postId}`,
  );
};