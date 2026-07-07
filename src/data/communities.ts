import type { Community } from "@/types/community.types";

export const communities: Community[] = [
  {
    id: "1",
    name: "React Developers",
    description:
      "Discuss everything related to React, TypeScript, and modern frontend development.",
    category: "Programming",
    members: 15234,
    image: "https://picsum.photos/200?random=1",
    isJoined: false,
    featured: true,
  },
  {
    id: "2",
    name: "AI & Machine Learning",
    description:
      "Explore AI, ML, Deep Learning, LLMs, and data science.",
    category: "Technology",
    members: 9812,
    image: "https://picsum.photos/200?random=2",
    isJoined: false,
    featured: true,
  },
  {
    id: "3",
    name: "UI/UX Designers",
    description:
      "Share designs, prototypes, Figma resources, and UI inspiration.",
    category: "Design",
    members: 7245,
    image: "https://picsum.photos/200?random=3",
    isJoined: false,
    featured: false,
  },
];