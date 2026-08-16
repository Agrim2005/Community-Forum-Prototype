import { prisma } from "../config/database.js";
import type { SendMessageRequest } from "../types/message.types.js";

export const getConversations = async (
  userId: string,
) => {
  return prisma.conversation.findMany({
    where: {
      participants: {
        some: {
          userId,
        },
      },
    },
    include: {
      participants: {
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
      },
      messages: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};

export const isConversationMember = async (
  userId: string,
  conversationId: string,
) => {
  return prisma.conversationMember.findUnique({
    where: {
      userId_conversationId: {
        userId,
        conversationId,
      },
    },
  });
};

export const getMessages = async (
  conversationId: string,
) => {
  return prisma.message.findMany({
    where: {
      conversationId,
    },
    include: {
      sender: {
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

export const sendMessage = async (
  userId: string,
  data: SendMessageRequest,
) => {
  return prisma.message.create({
    data: {
      text: data.text,
      senderId: userId,
      conversationId: data.conversationId,
    },
  });
};