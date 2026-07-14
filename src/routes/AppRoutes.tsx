import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NotFoundPage from "../pages/errors/NotFoundPage";

import CommunitiesPage from "@/pages/communities/CommunitiesPage";
import BookmarksPage from "@/pages/bookmarks";
import NotificationsPage from "@/pages/notifications/NotificationsPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import MessagesPage from "@/pages/messages";
import SettingsPage from "@/pages/settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ALL PROTECTED PAGES USE MAIN LAYOUT */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/community"
            element={<CommunitiesPage />}
          />

          <Route
            path="/bookmarks"
            element={<BookmarksPage />}
          />

          <Route
            path="/notifications"
            element={<NotificationsPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/messages"
            element={<MessagesPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />
        </Route>

        {/* AUTHENTICATION PAGES */}
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/signup"
            element={<RegisterPage />}
          />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;