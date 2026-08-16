import { z } from "zod";
import {
  PASSWORD_MIN_LENGTH,
  POST_MAX_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from "../constants/index.js";

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  username: z
    .string()
    .trim()
    .min(USERNAME_MIN_LENGTH)
    .max(USERNAME_MAX_LENGTH),
  email: z.string().trim().email(),
  password: z.string().min(PASSWORD_MIN_LENGTH),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "Password is required"),
});

export const createPostSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Post content is required")
    .max(POST_MAX_LENGTH),
  communityId: z.string().uuid().optional(),
});

export const updatePostSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Post content is required")
    .max(POST_MAX_LENGTH),
});

export const createCommunitySchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().min(1),
  category: z.string().trim().min(1),
  image: z.string().url().optional(),
  featured: z.boolean().optional(),
});

export const updateCommunitySchema = createCommunitySchema.partial();

export const sendMessageSchema = z.object({
  conversationId: z.string().uuid(),
  text: z.string().trim().min(1),
});