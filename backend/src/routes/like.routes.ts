import { Router } from "express";
import {
  addLike,
  getLikes,
  removeLike,
} from "../controllers/like.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/post/:postId",
  authenticate,
  getLikes,
);

router.post(
  "/post/:postId",
  authenticate,
  addLike,
);

router.delete(
  "/post/:postId",
  authenticate,
  removeLike,
);

export default router;