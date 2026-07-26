import Spinner from "./Spinner";

interface PageLoaderProps {
  message?: string;
}

const PageLoader = ({
  message = "Loading...",
}: PageLoaderProps) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4">
      <Spinner />

      <p className="text-gray-500 dark:text-gray-400">
        {message}
      </p>
    </div>
  );
};

export default PageLoader;