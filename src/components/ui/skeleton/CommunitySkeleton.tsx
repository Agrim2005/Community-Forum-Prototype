import Skeleton from "./Skeleton";

const CommunitySkeleton = () => {
  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <Skeleton className="h-14 w-14 rounded-full" />

        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />

      <Skeleton className="h-10 w-28 rounded-lg" />
    </div>
  );
};

export default CommunitySkeleton;