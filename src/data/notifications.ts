import type { Notification } from "@/types/notification.types";

export const notifications: Notification[] = [
  {
    id: "1",
    title: "New Comment",
    message: "Sarah commented on your post.",
    time: "5 min ago",
    isRead: false,
  },
  {
    id: "2",
    title: "New Like",
    message: "John liked your post.",
    time: "20 min ago",
    isRead: false,
  },
  {
    id: "3",
    title: "Community Update",
    message: "React Developers published new guidelines.",
    time: "1 hour ago",
    isRead: true,
  },
];