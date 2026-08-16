import type { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import { verifyToken } from "../utils/jwt.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      status: "error",
      message: "Authentication required",
    });
    return;
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      status: "error",
      message: "Authentication required",
    });
    return;
  }

  try {
    const payload = verifyToken(token);
    res.locals.userId = payload.userId;
    next();
  } catch {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      status: "error",
      message: "Invalid or expired token",
    });
  }
};