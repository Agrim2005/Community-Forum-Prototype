import { NotificationCard } from "@/components/common";
import { notifications } from "@/data/notifications";

const NotificationsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Notifications
        </h1>

        <p className="text-gray-500 mt-2">
          Stay updated with the latest activity.
        </p>

      </div>

      <div className="space-y-6">

        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
          />
        ))}

      </div>

    </div>
  );
};

export default NotificationsPage;