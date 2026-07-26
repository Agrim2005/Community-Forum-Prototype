import Toast from "./Toast";

interface ToastItem {
  id: number;
  message: string;
  type?: "success" | "error" | "warning" | "info";
}

interface ToastContainerProps {
  toasts: ToastItem[];
  removeToast: (id: number) => void;
}

const ToastContainer = ({
  toasts,
  removeToast,
}: ToastContainerProps) => {
  return (
    <div className="fixed top-5 right-5 z-50 flex w-80 flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;