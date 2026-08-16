import { prisma } from "../config/database.js";
import type {
  CreatePostRequest,
  UpdatePostRequest,
} from "../types/post.types.js";

export const createPost = async (
  userId: string,
  data: CreatePostRequest,
) => {
  return prisma.post.create({
    data: {
      content: data.content,
      authorId: userId,
      communityId: data.communityId,
    },
  });
};

export const getPosts = async () => {
  return prisma.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          avatar: true,
        },
      },
      community: true,
      comments: true,
      likes: true,
      bookmarks: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPostById = async (id: string) => {
  return prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
      community: true,
      comments: true,
      likes: true,
      bookmarks: true,
    },
  });
};

export const updatePost = async (
  id: string,
  data: UpdatePostRequest,
) => {
  return prisma.post.update({
    where: { id },
    data: {
      content: data.content,
    },
  });
};

export const deletePost = async (id: string) => {
  return prisma.post.delete({
    where: { id },
  });
};