import { Router } from "express";
import {
  getConversations,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";
import { sendMessageSchema } from "../utils/validation.js";

const router = Router();

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