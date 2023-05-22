
export function CardProjectSkeleton() {
  return (
    <div className="flex items-center h-72 w-40 sm:h-[430px] sm:w-64 flex-col gap-10 rounded-[4px] bg-black border-4 border-solid border-gray-800 animate-pulse">
      <div className="flex h-24 w-24 sm:h-40 sm:w-40 mt-12 sm:mt-20 rounded-full bg-gray-800"></div>
      <div className="flex h-4 w-24 sm:h-[30px] sm:w-[195px] mb-12 sm:mb-20 bg-gray-800"></div>
    </div>
  );
}
