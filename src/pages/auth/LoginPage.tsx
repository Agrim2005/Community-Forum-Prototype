import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Card, Input } from "@/components/ui";
import { loginSchema } from "@/utils/validation";
import type { LoginFormData } from "@/types/auth.types";
import { loginUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);

    try {
      const user = await loginUser(data);
      login(user);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }; // <-- ADDED: Closing bracket for onSubmit was missing here

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full max-w-96"
        >
          <h1 className="text-3xl font-bold text-center">
            Login
          </h1>

          <Input
            label="Email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            error={errors.password?.message}
            {...register("password")}
          />

          <Button
            type="submit"
            disabled={loading}
            fullWidth
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-purple-600 hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
}; // <-- REMOVED: There was an extra }; here in your original code

export default LoginPage;