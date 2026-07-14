import {
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  Footer,
  Navbar,
} from "@/components/layout";

import { HomeButton } from "@/components/common";

import { useThemeStore } from "@/store/theme.store";

const MainLayout = () => {
  const location = useLocation();

  const isDarkMode = useThemeStore(
    (state) => state.isDarkMode
  );

  const isHomePage =
    location.pathname === "/";

  return (
    <div
      className={isDarkMode ? "dark" : ""}
    >
      <div
        className="
          min-h-screen
          flex
          flex-col
          bg-gray-100
          text-gray-900
          dark:bg-gray-950
          dark:text-gray-100
          transition-colors
          duration-200
        "
      >
        <Navbar />

        {!isHomePage && (
          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              px-4
              sm:px-6
              pt-6
            "
          >
            <HomeButton />
          </div>
        )}

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;