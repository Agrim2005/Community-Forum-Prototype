import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  bordered?: boolean;
}

const paddingClasses = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = "md",
  shadow = "md",
  bordered = true,
}) => {
  return (
    <div
      className={clsx(
        "rounded-xl bg-white dark:bg-gray-800 transition-colors",
        paddingClasses[padding],
        shadowClasses[shadow],
        bordered && "border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;