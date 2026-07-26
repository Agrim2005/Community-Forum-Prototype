import { X } from "lucide-react";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "w-full max-w-md rounded-xl bg-white dark:bg-gray-800 shadow-xl",
          className
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5">
          {children}
        </div>

        {footer && (
          <div className="flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 p-5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;