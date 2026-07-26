import React from "react";

interface DialogFooterProps {
  children: React.ReactNode;
}

const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 p-5">
      {children}
    </div>
  );
};

export default DialogFooter;