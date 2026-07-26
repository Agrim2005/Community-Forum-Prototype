import Skeleton from "./Skeleton";

const PostSkeleton = () => {
  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />

        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12" />
      <Skeleton className="h-4 w-3/4" />

      <div className="flex gap-4 pt-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  );
};

export default PostSkeleton;