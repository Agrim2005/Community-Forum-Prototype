import type { LoginFormData, User } from "@/types/auth.types";

export const loginUser = async (
  data: LoginFormData
): Promise<User> => {
  // Simulate an API request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
  id: "1",
  name: "Agrim",
  email: data.email,
  avatar: "https://i.pravatar.cc/150?img=8",
};
};