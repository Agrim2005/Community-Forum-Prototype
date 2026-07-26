import clsx from "clsx";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Divider = ({
  orientation = "horizontal",
  className,
}: DividerProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={clsx(
        orientation === "horizontal"
          ? "h-px w-full bg-gray-200 dark:bg-gray-700"
          : "h-full w-px bg-gray-200 dark:bg-gray-700",
        className
      )}
    />
  );
};

export default Divider;