import { Badge, Button, Card } from "@/components/ui";
import { user } from "@/data/user";

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">

      {/* Cover Image */}

      <div className="rounded-xl overflow-hidden shadow-md">

        <img
          src={user.cover}
          alt="Cover"
          className="w-full h-60 object-cover"
        />

      </div>

      {/* Profile */}

      <Card>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-6">

            <img
              src={user.avatar}
              alt={user.name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
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

      {/* Statistics */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <Card>

          <h2 className="font-semibold text-xl mb-4">
            Statistics
          </h2>

          <div className="space-y-3">

            <p>
              📝 Posts: <strong>{user.posts}</strong>
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

    </div>
  );
};

export default ProfilePage;