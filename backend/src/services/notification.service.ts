import { prisma } from "../config/database.js";

export const getNotifications = async (
  userId: string,
) => {
  return prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getNotificationById = async (
  id: string,
  userId: string,
) => {
  return prisma.notification.findFirst({
    where: {
      id,
      userId,
    },
  });
};

export const markNotificationAsRead = async (
  id: string,
) => {
  return prisma.notification.update({
    where: {
      id,
    },
    data: {
      isRead: true,
    },
  });
};

export const markAllNotificationsAsRead = async (
  userId: string,
) => {
  return prisma.notification.updateMany({
    where: {
      userId,
      isRead: false,
    },
    data: {
      isRead: true,
    },
  });
};