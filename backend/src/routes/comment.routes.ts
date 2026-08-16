import { Router } from "express";
import {
  createComment,
  deleteComment,
  getPostComments,
} from "../controllers/comment.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/post/:postId",
  getPostComments,
);

router.post(
  "/post/:postId",
  authenticate,
  createComment,
);

router.delete(
  "/:id",
  authenticate,
  deleteComment,
);

export default router;