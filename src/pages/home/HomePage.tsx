import { useState } from "react";

import {
  CreatePost,
  PostCard,
} from "@/components/common";

import { posts as initialPosts } from "@/data/posts";
import { useAuthStore } from "@/store/auth.store";
import type { Post } from "@/types/post.types";

const HomePage = () => {
  const user = useAuthStore((state) => state.user);

  const [posts, setPosts] =
    useState<Post[]>(initialPosts);

  const handleAddPost = (content: string) => {
    const newPost: Post = {
      id: crypto.randomUUID(),

      author: {
        id: user?.id ?? "0",
        name: user?.name ?? "Anonymous",
        avatar:
          user?.avatar ??
          "https://i.pravatar.cc/150?img=1",
      },

      content,

      createdAt: "Just now",

      likes: 0,
      comments: 0,

      isLiked: false,
      isBookmarked: false,

      commentList: [],
    };

    setPosts((prevPosts) => [
      newPost,
      ...prevPosts,
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Welcome, {user?.name} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Stay connected with your communities.
        </p>

      </div>

      <CreatePost onAddPost={handleAddPost} />

      <div className="mt-8 space-y-6">

        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}

      </div>

    </div>
  );
};

export default HomePage;