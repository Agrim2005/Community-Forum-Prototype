import type { Post } from "@/types/post.types";

export const posts: Post[] = [
  {
    id: "1",
    author: {
      id: "1",
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    content:
      "Just completed Week 1 of my React Community Forum project! Authentication, routing, Zustand, and reusable components are all working. Excited to start building the feed!",
    createdAt: "2 hours ago",
    likes: 15,
    comments: 6,
  },
  {
    id: "2",
    author: {
      id: "2",
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    content:
      "What's your favorite React state management library in 2026? I've been enjoying Zustand because of its simplicity. 🚀",
    createdAt: "5 hours ago",
    likes: 24,
    comments: 9,
  },
];