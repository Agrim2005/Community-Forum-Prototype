import { forwardRef } from "react";
import clsx from "clsx";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
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

        <textarea
          ref={ref}
          id={id}
          className={clsx(
            "w-full rounded-lg border bg-white px-3 py-2 text-gray-900 transition",
            "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
            "dark:border-gray-700 dark:bg-gray-800 dark:text-white",
            "resize-none",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300",
            className
          )}
          {...props}
        />

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

TextArea.displayName = "TextArea";

export default TextArea;