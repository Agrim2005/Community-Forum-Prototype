import { prisma } from "../config/database.js";

export const bookmarkPost = async (
  userId: string,
  postId: string,
) => {
  return prisma.bookmark.upsert({
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

export const removeBookmark = async (
  userId: string,
  postId: string,
) => {
  return prisma.bookmark.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
};

export const getPostBookmarks = async (
  postId: string,
) => {
  return prisma.bookmark.findMany({
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