import React from "react";
import clsx from "clsx";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-12 text-center",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;