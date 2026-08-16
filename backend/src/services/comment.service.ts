import { prisma } from "../config/database.js";

export const createComment = async (
  userId: string,
  postId: string,
  text: string,
) => {
  return prisma.comment.create({
    data: {
      text,
      authorId: userId,
      postId,
    },
  });
};

export const getPostComments = async (
  postId: string,
) => {
  return prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          avatar: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

export const getCommentById = async (
  id: string,
) => {
  return prisma.comment.findUnique({
    where: { id },
  });
};

export const deleteComment = async (
  id: string,
) => {
  return prisma.comment.delete({
    where: { id },
  });
};