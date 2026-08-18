import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import {
  getPostLikes,
  likePost,
  unlikePost,
} from "../services/like.service.js";

export const addLike = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const like = await likePost(
    userId,
    req.params.postId,
  );

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: like,
  });
};

export const removeLike = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  await unlikePost(
    userId,
    req.params.postId,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    message: "Post unliked successfully",
  });
};

export const getLikes = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const likes = await getPostLikes(
    req.params.postId,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: likes,
  });
};