import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must contain at least 3 characters"),

    email: z
      .email("Please enter a valid email"),

    password: z
      .string()
      .min(6, "Password must contain at least 6 characters"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );