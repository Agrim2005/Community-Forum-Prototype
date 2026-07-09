import { useState } from "react";

import { Button, Card } from "@/components/ui";
import type { Notification } from "@/types/notification.types";

interface NotificationCardProps {
  notification: Notification;
}

const NotificationCard = ({
  notification,
}: NotificationCardProps) => {
  const [read, setRead] = useState(notification.isRead);

  return (
    <Card>
      <div className="space-y-4">

        <div className="flex justify-between">

          <div>

            <h2 className="font-semibold">
              {notification.title}
            </h2>

            <p className="text-gray-600">
              {notification.message}
            </p>

            <p className="text-sm text-gray-400 mt-2">
              {notification.time}
            </p>

          </div>

          {!read && (
            <span className="w-3 h-3 rounded-full bg-purple-600 mt-2"></span>
          )}

        </div>

        <Button
          variant="secondary"
          onClick={() => setRead(!read)}
        >
          {read
            ? "Mark as Unread"
            : "Mark as Read"}
        </Button>

      </div>
    </Card>
  );
};

export default NotificationCard;