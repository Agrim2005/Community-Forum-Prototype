import express from "express";

import cors from "cors";
import likeRoutes from "./routes/like.routes.js";
import authRoutes from "./routes/auth.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import communityRoutes from "./routes/community.routes.js";
import healthRoutes from "./routes/health.routes.js";
import messageRoutes from "./routes/message.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import postRoutes from "./routes/post.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";

import {
  errorHandler,
  notFoundHandler,
} from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/communities", communityRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/notifications", notificationRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/likes", likeRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;