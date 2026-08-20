import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/auth.types";
import { loginUser } from "@/services/auth.service";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email, password) => {
        const user = await loginUser({
          email,
          password,
        });

        set({
          user,
          isAuthenticated: true,
        });
      },

      logout: () => {
        localStorage.removeItem("token");

        set({
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "community-forum-auth",
    },
  ),
);