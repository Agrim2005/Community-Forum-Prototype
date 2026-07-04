import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-2
          outline-none
          transition
          ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
          }
        `}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;