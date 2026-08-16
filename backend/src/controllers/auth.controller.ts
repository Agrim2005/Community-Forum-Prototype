import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import type {
  LoginRequest,
  RegisterRequest,
} from "../types/auth.types.js";
import {
  loginUser,
  registerUser,
} from "../services/auth.service.js";

export const register = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = req.body as RegisterRequest;

  try {
    const result = await registerUser(data);

    res.status(HTTP_STATUS.CREATED).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Email or username already exists"
    ) {
      res.status(HTTP_STATUS.CONFLICT).json({
        status: "error",
        message: error.message,
      });
      return;
    }

    throw error;
  }
};

export const login = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = req.body as LoginRequest;

  try {
    const result = await loginUser(data);

    res.status(HTTP_STATUS.OK).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Invalid email or password"
    ) {
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: "error",
        message: error.message,
      });
      return;
    }

    throw error;
  }
};