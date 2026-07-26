import clsx from "clsx";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const PageHeader = ({
  title,
  subtitle,
  action,
  className,
}: PageHeaderProps) => {
  return (
    <div
      className={clsx(
        "mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
        className
      )}
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="flex items-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
};

export default PageHeader;