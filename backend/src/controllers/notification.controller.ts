import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import {
  getNotificationById,
  getNotifications as getNotificationsService,
  markAllNotificationsAsRead as markAllNotificationsAsReadService,
  markNotificationAsRead as markNotificationAsReadService,
} from "../services/notification.service.js";

export const getNotifications = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const notifications = await getNotificationsService(userId);

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: notifications,
  });
};

export const markNotificationAsRead = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const notification = await getNotificationById(
    req.params.id,
    userId,
  );

  if (!notification) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Notification not found",
    });
    return;
  }

  const updatedNotification =
    await markNotificationAsReadService(req.params.id);

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: updatedNotification,
  });
};

export const markAllNotificationsAsRead = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  await markAllNotificationsAsReadService(userId);

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    message: "All notifications marked as read",
  });
};