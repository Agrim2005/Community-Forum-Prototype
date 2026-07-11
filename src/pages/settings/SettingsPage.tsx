import { Button, Card } from "@/components/ui";

const SettingsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account preferences.
        </p>

      </div>

      <div className="space-y-6">

        <Card>

          <h2 className="text-xl font-semibold mb-4">
            Account
          </h2>

          <div className="space-y-3">

            <Button variant="secondary" fullWidth>
              Change Password
            </Button>

            <Button variant="secondary" fullWidth>
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

              <input type="checkbox" defaultChecked />

              Email Notifications

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

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

          <Button variant="secondary">
            Dark Mode (Coming Soon)
          </Button>

        </Card>

      </div>

    </div>
  );
};

export default SettingsPage;