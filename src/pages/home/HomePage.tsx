import { Card } from "@/components/ui";
import { useAuthStore } from "@/store/auth.store";

const HomePage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <Card>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Welcome, {user?.name} 👋
          </h1>

          <p className="text-gray-600">
            Week 1 is complete.
          </p>

          <p>
            In Week 2, this page will become your Community Feed.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;