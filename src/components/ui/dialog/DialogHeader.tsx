import React from "react";

interface DialogHeaderProps {
  title: string;
  subtitle?: string;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 p-5">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default DialogHeader;