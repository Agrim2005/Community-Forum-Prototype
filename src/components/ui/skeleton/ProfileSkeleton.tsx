import Skeleton from "./Skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <Skeleton className="h-20 w-20 rounded-full" />

        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />

      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-16" />
        <Skeleton className="h-16" />
        <Skeleton className="h-16" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;