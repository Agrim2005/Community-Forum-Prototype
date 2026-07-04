import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
      {children}
    </span>
  );
};

export default Badge;