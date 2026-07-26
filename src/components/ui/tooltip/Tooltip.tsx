import { useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Tooltip = ({
  children,
  content,
  position = "top",
  className,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={clsx(
            "absolute z-50 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg dark:bg-gray-700",
            positionClasses[position],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;