import { forwardRef } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            className={clsx(
              "w-full rounded-lg border bg-white px-3 py-2 text-gray-900 transition",
              "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
              "dark:border-gray-700 dark:bg-gray-800 dark:text-white",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        ) : (
          helperText && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;