import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import {
  createComment as createCommentService,
  deleteComment as deleteCommentService,
  getCommentById,
  getPostComments as getPostCommentsService,
} from "../services/comment.service.js";

export const createComment = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;
  const { postId } = req.params;
  const { text } = req.body as { text: string };

  const comment = await createCommentService(
    userId,
    postId,
    text,
  );

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: comment,
  });
};

export const getPostComments = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const comments = await getPostCommentsService(
    req.params.postId,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: comments,
  });
};

export const deleteComment = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const comment = await getCommentById(req.params.id);

  if (!comment) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Comment not found",
    });
    return;
  }

  if (comment.authorId !== userId) {
    res.status(HTTP_STATUS.FORBIDDEN).json({
      status: "error",
      message: "You can only delete your own comments",
    });
    return;
  }

  await deleteCommentService(req.params.id);

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    message: "Comment deleted successfully",
  });
};