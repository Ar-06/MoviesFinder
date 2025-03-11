export const MovieSkeleton = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="w-full h-64 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};
