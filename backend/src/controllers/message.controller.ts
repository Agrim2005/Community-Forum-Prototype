import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";

import type {
  SendMessageRequest,
  CreateConversationRequest,
} from "../types/message.types.js";

import {
  getConversations as getConversationsService,
  getMessages as getMessagesService,
  isConversationMember,
  sendMessage as sendMessageService,
  createConversation as createConversationService,
} from "../services/message.service.js";

export const createConversation = async (
  req: Request,
  res: Response,
): Promise<void> => {
  console.log(
    "CREATE CONVERSATION ROUTE HIT",
  );

  console.log(req.body);

  const userId = res.locals.userId as string;

  const data =
    req.body as CreateConversationRequest;

  const conversation =
    await createConversationService(
      userId,
      data.userId,
    );

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: conversation,
  });
};

export const getConversations = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const conversations =
    await getConversationsService(userId);

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: conversations,
  });
};

export const getMessages = async (
  req: Request<{ conversationId: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const { conversationId } = req.params;

  const membership =
    await isConversationMember(
      userId,
      conversationId,
    );

  if (!membership) {
    res.status(HTTP_STATUS.FORBIDDEN).json({
      status: "error",
      message:
        "You are not a member of this conversation",
    });

    return;
  }

  const messages =
    await getMessagesService(
      conversationId,
    );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: messages,
  });
};

export const sendMessage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const data =
    req.body as SendMessageRequest;

  const membership =
    await isConversationMember(
      userId,
      data.conversationId,
    );

  if (!membership) {
    res.status(HTTP_STATUS.FORBIDDEN).json({
      status: "error",
      message:
        "You are not a member of this conversation",
    });

    return;
  }

  const message =
    await sendMessageService(
      userId,
      data,
    );

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: message,
  });
};