import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      {children}
    </div>
  );
};

export default Card;