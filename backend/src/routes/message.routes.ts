import { Router } from "express";

import {
  getConversations,
  getMessages,
  sendMessage,
  createConversation,
} from "../controllers/message.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";
import { sendMessageSchema } from "../utils/validation.js";

const router = Router();

router.post(
  "/conversations",
  authenticate,
  createConversation,
);

router.get(
  "/conversations",
  authenticate,
  getConversations,
);

router.get(
  "/conversations/:conversationId",
  authenticate,
  getMessages,
);

router.post(
  "/",
  authenticate,
  validate(sendMessageSchema),
  sendMessage,
);

export default router;