import PostCard from "@/components/common/PostCard";
import { useBookmarkStore } from "@/store/bookmark.store";

const BookmarksPage = () => {
  const bookmarks = useBookmarkStore(
    (state) => state.bookmarks
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold">
        Bookmarks
      </h1>

      <p className="text-gray-500 mt-2">
        View all your saved posts here.
      </p>

      {bookmarks.length === 0 ? (
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

          {bookmarks.map((post) => (
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