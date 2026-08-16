import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";
import {
  createPostSchema,
  updatePostSchema,
} from "../utils/validation.js";

const router = Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post(
  "/",
  authenticate,
  validate(createPostSchema),
  createPost,
);

router.patch(
  "/:id",
  authenticate,
  validate(updatePostSchema),
  updatePost,
);

router.delete(
  "/:id",
  authenticate,
  deletePost,
);

export default router;