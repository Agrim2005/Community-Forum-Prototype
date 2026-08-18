import { prisma } from "../config/database.js";

export const likePost = async (
  userId: string,
  postId: string,
) => {
  return prisma.like.upsert({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
    update: {},
    create: {
      userId,
      postId,
    },
  });
};

export const unlikePost = async (
  userId: string,
  postId: string,
) => {
  return prisma.like.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
};

export const getPostLikes = async (
  postId: string,
) => {
  return prisma.like.findMany({
    where: {
      postId,
    },
    include: {
      user: {
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