import { X } from "lucide-react";
import clsx from "clsx";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
}

const typeClasses = {
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-yellow-500",
  info: "bg-blue-600",
};

const Toast = ({
  message,
  type = "info",
  onClose,
}: ToastProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-white shadow-lg",
        typeClasses[type]
      )}
    >
      <span>{message}</span>

      <button
        onClick={onClose}
        className="rounded p-1 hover:bg-white/20"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;