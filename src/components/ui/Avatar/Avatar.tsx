import React from "react";
import clsx from "clsx";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  online?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-14 h-14 text-lg",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  online = false,
  className,
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={clsx(
            "rounded-full object-cover border border-gray-300",
            sizeClasses[size],
            className
          )}
        />
      ) : (
        <div
          className={clsx(
            "rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold",
            sizeClasses[size],
            className
          )}
        >
          {initials || "U"}
        </div>
      )}

      {online && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
      )}
    </div>
  );
};

export default Avatar;