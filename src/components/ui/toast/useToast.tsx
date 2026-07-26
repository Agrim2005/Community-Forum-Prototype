import { useCallback, useState } from "react";

export interface ToastItem {
  id: number;
  message: string;
  type?: "success" | "error" | "warning" | "info";
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (
      message: string,
      type: ToastItem["type"] = "info"
    ) => {
      const id = Date.now();

      setToasts((prev) => [
        ...prev,
        { id, message, type },
      ]);

      setTimeout(() => {
        setToasts((prev) =>
          prev.filter((toast) => toast.id !== id)
        );
      }, 3000);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
};