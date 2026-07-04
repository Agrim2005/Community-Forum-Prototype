import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-full p-6">
      <h2 className="text-lg font-bold text-purple-600 mb-6">
        Navigation
      </h2>

      <nav className="flex flex-col gap-3">
        <Link
          to="/"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          🏠 Home
        </Link>

        <Link
          to="/community"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          👥 Communities
        </Link>

        <Link
          to="/bookmarks"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          🔖 Bookmarks
        </Link>

        <Link
          to="/messages"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          💬 Messages
        </Link>

        <Link
          to="/notifications"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          🔔 Notifications
        </Link>

        <Link
          to="/profile"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          👤 Profile
        </Link>

        <Link
          to="/settings"
          className="rounded-lg px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition"
        >
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;