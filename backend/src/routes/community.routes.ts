import { Router } from "express";
import {
  createCommunity,
  getCommunities,
  getCommunityById,
  joinCommunity,
  leaveCommunity,
  updateCommunity,
} from "../controllers/community.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";
import {
  createCommunitySchema,
  updateCommunitySchema,
} from "../utils/validation.js";

const router = Router();

router.get("/", getCommunities);

router.get("/:id", getCommunityById);

router.post(
  "/",
  authenticate,
  validate(createCommunitySchema),
  createCommunity,
);

router.patch(
  "/:id",
  authenticate,
  validate(updateCommunitySchema),
  updateCommunity,
);

router.post(
  "/:id/join",
  authenticate,
  joinCommunity,
);

router.delete(
  "/:id/leave",
  authenticate,
  leaveCommunity,
);

export default router;