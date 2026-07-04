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
  ...props
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-purple-600 hover:bg-purple-700 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

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
        transition-all duration-200
        disabled:opacity-50
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default Button;