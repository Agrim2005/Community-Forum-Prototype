import type { LoginFormData, User } from "@/types/auth.types";

export const loginUser = async (
  data: LoginFormData
): Promise<User> => {
  // Simulate an API request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
  id: crypto.randomUUID(),
  name: "Demo User",
  email: data.email,
  avatar: "https://i.pravatar.cc/150?img=12",
};
};