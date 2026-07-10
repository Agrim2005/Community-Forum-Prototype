import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-purple-600"
        >
          Community Forum
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="hover:text-purple-600 transition"
          >
            Home
          </Link>

          <Link
            to="/community"
            className="hover:text-purple-600 transition"
          >
            Communities
          </Link>

          <Link
            to="/bookmarks"
            className="hover:text-purple-600 transition"
          >
            Bookmarks
          </Link>

          <Link
            to="/notifications"
            className="hover:text-purple-600 transition"
          >
            Notifications
          </Link>

          {/* 1. Moved the Profile Link outside of the Logout button */}
          <Link
            to="/profile"
            className="hover:text-purple-600 transition"
          >
            Profile
          </Link>

          <Link
            to="/messages"
            className="hover:text-purple-600 transition"
          >
            Messages
          </Link>

          <button
            onClick={handleLogout}
            className="hover:text-purple-600 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;