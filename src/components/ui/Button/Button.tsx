import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? `
          bg-purple-600
          hover:bg-purple-700
          text-white
        `
      : `
          bg-gray-200
          hover:bg-gray-300
          text-gray-900
          dark:bg-gray-700
          dark:hover:bg-gray-600
          dark:text-white
        `;

  return (
    <button
      {...props}
      className={`
        ${styles}
        ${fullWidth ? "w-full" : ""}
        px-5
        py-2
        rounded-lg
        font-medium
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;