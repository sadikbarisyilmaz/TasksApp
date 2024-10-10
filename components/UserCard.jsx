"use client";
import { Avatar } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserCardSkeleton } from "./UserCardSkeleton";

export const UserCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.user) {
      setIsLoading(false);
    }
  }, [session]);

  if (isLoading) {
    return <UserCardSkeleton />;
  }

  return (
    <div className="flex flex-col gap-3 w-full p-2">
      <div className="flex gap-3">
        <Avatar sx={{ width: 44, height: 44 }}>
          <p className="text-sm">{session?.user.name[0]}</p>
        </Avatar>
        <div className="flex flex-col mt-1 leading-tight">
          <h3 className="flex font-normal">{session?.user.name}</h3>
          <button
            onClick={signOut}
            className="text-sm text-left font-light hover:text-casual transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
