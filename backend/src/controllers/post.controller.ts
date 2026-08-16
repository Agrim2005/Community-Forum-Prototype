import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import type {
  CreatePostRequest,
  UpdatePostRequest,
} from "../types/post.types.js";
import {
  createPost as createPostService,
  deletePost as deletePostService,
  getPostById as getPostByIdService,
  getPosts as getPostsService,
  updatePost as updatePostService,
} from "../services/post.service.js";

export const createPost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;
  const data = req.body as CreatePostRequest;

  const post = await createPostService(userId, data);

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: post,
  });
};

export const getPosts = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const posts = await getPostsService();

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: posts,
  });
};

export const getPostById = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const post = await getPostByIdService(req.params.id);

  if (!post) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Post not found",
    });
    return;
  }

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: post,
  });
};

export const updatePost = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;
  const data = req.body as UpdatePostRequest;
  const post = await getPostByIdService(req.params.id);

  if (!post) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Post not found",
    });
    return;
  }

  if (post.authorId !== userId) {
    res.status(HTTP_STATUS.FORBIDDEN).json({
      status: "error",
      message: "You can only edit your own posts",
    });
    return;
  }

  const updatedPost = await updatePostService(
    req.params.id,
    data,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: updatedPost,
  });
};

export const deletePost = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;
  const post = await getPostByIdService(req.params.id);

  if (!post) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Post not found",
    });
    return;
  }

  if (post.authorId !== userId) {
    res.status(HTTP_STATUS.FORBIDDEN).json({
      status: "error",
      message: "You can only delete your own posts",
    });
    return;
  }

  await deletePostService(req.params.id);

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    message: "Post deleted successfully",
  });
};