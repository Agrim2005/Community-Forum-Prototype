import api from "./api";
import type { LoginFormData, RegisterFormData, User } from "@/types/auth.types";

interface LoginResponse {
  status: string;
  data: {
    user: User;
    token: string;
  };
}

interface RegisterResponse {
  status: string;
  data: {
    user: User;
    token: string;
  };
}

export const registerUser = async (data: RegisterFormData): Promise<User> => {
  const response = await api.post<RegisterResponse>("/auth/register", {
    name: data.name,
    username: data.username,
    email: data.email,
    password: data.password,
  });

  return response.data.data.user;
};

export const loginUser = async (data: LoginFormData): Promise<User> => {
  const response = await api.post<LoginResponse>("/auth/login", {
    email: data.email,
    password: data.password,
  });

  const { user, token } = response.data.data;

  localStorage.setItem("token", token);

  return user;
};
