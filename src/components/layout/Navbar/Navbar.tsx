import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkStyles = `
    text-gray-700
    dark:text-gray-200
    hover:text-purple-600
    dark:hover:text-purple-400
    transition
  `;

  return (
    <header
      className="
        bg-white
        dark:bg-gray-950
        border-b
        border-gray-200
        dark:border-gray-800
        shadow-sm
        transition-colors
        duration-200
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          px-4
          sm:px-6
          py-4
        "
      >
        <Link
          to="/"
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-purple-600
            dark:text-purple-400
            text-center
            lg:text-left
          "
        >
          Community Forum
        </Link>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            lg:justify-end
            gap-x-5
            gap-y-3
            text-sm
            sm:text-base
          "
        >
          <Link
            to="/"
            className={linkStyles}
          >
            Home
          </Link>

          <Link
            to="/community"
            className={linkStyles}
          >
            Communities
          </Link>

          <Link
            to="/bookmarks"
            className={linkStyles}
          >
            Bookmarks
          </Link>

          <Link
            to="/notifications"
            className={linkStyles}
          >
            Notifications
          </Link>

          <Link
            to="/profile"
            className={linkStyles}
          >
            Profile
          </Link>

          <Link
            to="/messages"
            className={linkStyles}
          >
            Messages
          </Link>

          <Link
            to="/settings"
            className={linkStyles}
          >
            Settings
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className={`
              ${linkStyles}
              cursor-pointer
            `}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;