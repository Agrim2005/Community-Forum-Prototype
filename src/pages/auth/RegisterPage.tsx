import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Card, Input } from "@/components/ui";

import { registerSchema } from "@/utils/validation";
import type { RegisterFormData } from "@/types/auth.types";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-96"
        >
          <h1 className="text-3xl font-bold text-center">
            Create Account
          </h1>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name?.message}
            {...register("name")}
          />

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

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <Button type="submit">
            Register
          </Button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-purple-600 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;