import { usePostStore } from "@/store/post.store";
import { useAuthStore } from "@/store/auth.store";

import {
  CreatePost,
  PostCard,
} from "@/components/common";

const HomePage = () => {
  const user = useAuthStore(
    (state) => state.user
  );

  const {
    posts,
    addPost,
  } = usePostStore();

  const handleAddPost = (
    content: string
  ) => {
    if (!user) return;

    addPost(content, user);
  };

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        dark:bg-gray-950
        transition-colors
        duration-200
      "
    >
      <div
        className="
          max-w-[1700px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[300px_380px_minmax(0,1fr)]
            gap-8
            items-start
          "
        >
          {/* Welcome Section */}

          <section
            className="
              lg:sticky
              lg:top-28
              lg:pt-32
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-gray-900
                dark:text-red-400
                transition-colors
              "
            >
              Welcome, {user?.name}
            </h1>

            <div className="text-4xl mt-3">
              👋
            </div>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-200
                text-base
                sm:text-lg
              "
            >
              Stay connected with your communities.
            </p>
          </section>

          {/* Create Post Section */}

          <section
            className="
              lg:sticky
              lg:top-28
            "
          >
            <CreatePost
              onAddPost={handleAddPost}
            />
          </section>

          {/* Feed Section */}

          <section className="min-w-0">
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;