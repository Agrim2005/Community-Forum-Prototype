import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
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
        rounded-xl
        shadow-md
        p-6
        border
        border-gray-200
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;