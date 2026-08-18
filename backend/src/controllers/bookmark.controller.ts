import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import {
  bookmarkPost,
  getPostBookmarks,
  removeBookmark,
} from "../services/bookmark.service.js";

export const addBookmark = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const bookmark = await bookmarkPost(
    userId,
    req.params.postId,
  );

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: bookmark,
  });
};

export const deleteBookmark = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  await removeBookmark(
    userId,
    req.params.postId,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    message: "Bookmark removed successfully",
  });
};

export const getBookmarks = async (
  req: Request<{ postId: string }>,
  res: Response,
): Promise<void> => {
  const bookmarks = await getPostBookmarks(
    req.params.postId,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: bookmarks,
  });
};