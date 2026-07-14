import {
  Button,
  Card,
} from "@/components/ui";

import { useThemeStore } from "@/store/theme.store";

const SettingsPage = () => {
  const isDarkMode = useThemeStore(
    (state) => state.isDarkMode
  );

  const toggleDarkMode = useThemeStore(
    (state) => state.toggleDarkMode
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Manage your account preferences.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">
            Account
          </h2>

          <div className="space-y-3">
            <Button
              variant="secondary"
              fullWidth
            >
              Change Password
            </Button>

            <Button
              variant="secondary"
              fullWidth
            >
              Update Email
            </Button>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
              />

              Email Notifications
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
              />

              Community Updates
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />

              Marketing Emails
            </label>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">
            Appearance
          </h2>

          <Button
            variant="secondary"
            onClick={toggleDarkMode}
          >
            {isDarkMode
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;