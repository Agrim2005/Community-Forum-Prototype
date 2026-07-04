import PostCard from "@/components/common/PostCard";

import { Button, Card } from "@/components/ui";

import { posts } from "@/data/posts";

import { useAuthStore } from "@/store/auth.store";

const HomePage = () => {
  const user = useAuthStore((state) => state.user);

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

      <Card>

        <div className="flex justify-between items-center">

          <div>

            <h2 className="font-semibold text-xl">
              What's on your mind?
            </h2>

            <p className="text-gray-500 text-sm">
              Share something with everyone.
            </p>

          </div>

          <Button>
            Create Post
          </Button>

        </div>

      </Card>

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