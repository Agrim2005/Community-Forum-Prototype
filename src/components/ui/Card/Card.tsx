import type {
  HTMLAttributes,
  ReactNode,
} from "react";

interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({
  children,
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={`
        bg-white
        text-gray-900
        dark:bg-gray-800
        dark:text-gray-100
        rounded-xl
        shadow-md
        p-6
        border
        border-gray-200
        dark:border-gray-700
        transition-colors
        duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;