import PostCard from "@/components/common/PostCard";
import { useBookmarkStore } from "@/store/bookmark.store";
import { usePostStore } from "@/store/post.store";

const BookmarksPage = () => {
  const bookmarkIds = useBookmarkStore(
    (state) => state.bookmarkIds,
  );

  const posts = usePostStore(
    (state) => state.posts,
  );

  const bookmarkedPosts = posts.filter(
    (post) => bookmarkIds.includes(post.id),
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold">
        Bookmarks
      </h1>

      <p className="text-gray-500 mt-2">
        View all your saved posts here.
      </p>

      {bookmarkedPosts.length === 0 ? (
        <div className="mt-10 border rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No bookmarks yet
          </h2>

          <p className="text-gray-500 mt-2">
            Save posts from your feed to see them here.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          {bookmarkedPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;