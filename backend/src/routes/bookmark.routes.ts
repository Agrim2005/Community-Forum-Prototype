import { Router } from "express";
import {
  addBookmark,
  deleteBookmark,
  getBookmarks,
} from "../controllers/bookmark.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/post/:postId",
  authenticate,
  getBookmarks,
);

router.post(
  "/post/:postId",
  authenticate,
  addBookmark,
);

router.delete(
  "/post/:postId",
  authenticate,
  deleteBookmark,
);

export default router;