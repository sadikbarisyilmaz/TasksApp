import { Skeleton } from "@mui/material";

export const UserCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-2">
      <div className="flex gap-3">
        <Skeleton animation="wave" variant="circular" width={44} height={44} />
        <div className="flex flex-col mt-1 leading-tight">
          <Skeleton
            animation="wave"
            variant="rectengular"
            width={80}
            height={20}
          />
          <button className="text-sm text-left font-light hover:text-casual transition-all duration-200">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
