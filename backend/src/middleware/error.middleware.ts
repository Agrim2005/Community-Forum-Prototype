import type {
  ErrorRequestHandler,
  RequestHandler,
} from "express";
import { HTTP_STATUS } from "../constants/index.js";

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    status: "error",
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

export const errorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  next,
) => {
  console.error(err);

  next(err);

  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    status: "error",
    message: "Internal server error",
  });
};