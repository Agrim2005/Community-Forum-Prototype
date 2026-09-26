import { Router } from "express";

import {
  getNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "../controllers/notification.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/",
  authenticate,
  getNotifications,
);

router.patch(
  "/read-all",
  authenticate,
  markAllNotificationsAsRead,
);

router.patch(
  "/:id/read",
  authenticate,
  markNotificationAsRead,
);

export default router;