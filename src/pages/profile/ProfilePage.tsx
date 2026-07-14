import { Badge, Button, Card } from "@/components/ui";
import { user } from "@/data/user";
import { usePostStore } from "@/store/post.store";

const ProfilePage = () => {
  const posts = usePostStore((state) => state.posts);

  const myPosts = posts.filter(
    (post) => post.author.id === user.id
  );

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-10 px-4 sm:px-6">

      {/* Cover Image */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <img
          src={user.cover}
          alt="Cover"
          className="w-full h-40 sm:h-60 object-cover"
        />
      </div>

      {/* Profile */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg shrink-0"
            />

            <div>
              <h1 className="text-3xl font-bold">
                {user.name}
              </h1>

              <p className="text-gray-500">
                {user.username}
              </p>

              <p className="mt-3 text-gray-700">
                {user.bio}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                📍 {user.location}
              </p>

              <p className="text-sm text-gray-500">
                Joined {user.joined}
              </p>
            </div>
          </div>

          <Button>
            Edit Profile
          </Button>

        </div>
      </Card>

      {/* Statistics & Badges */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <Card>
          <h2 className="font-semibold text-xl mb-4">
            Statistics
          </h2>

          <div className="space-y-3">
            <p>
              📝 Posts: <strong>{myPosts.length}</strong>
            </p>

            <p>
              👥 Communities: <strong>{user.communities}</strong>
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl mb-4">
            Badges
          </h2>

          <div className="flex flex-wrap gap-3">
            {user.badges.map((badge) => (
              <Badge key={badge}>
                {badge}
              </Badge>
            ))}
          </div>
        </Card>

      </div>

      {/* My Posts */}
      <Card className="mt-8">

        <h2 className="text-2xl font-semibold mb-6">
          My Posts
        </h2>

        <div className="space-y-4">

          {myPosts.length === 0 ? (
            <p className="text-gray-500">
              You haven't created any posts yet.
            </p>
          ) : (
            myPosts.map((post) => (
              <div
                key={post.id}
                className="border rounded-lg p-4"
              >
                <p>{post.content}</p>

                <p className="text-sm text-gray-500 mt-2">
                  {post.createdAt}
                </p>
              </div>
            ))
          )}

        </div>

      </Card>

    </div>
  );
};

export default ProfilePage;