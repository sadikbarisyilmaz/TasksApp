"use client";
import { Avatar, Button } from "@mui/material";
import { signOut } from "next-auth/react";

export const UserCard = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-2">
      <div className="flex gap-3">
        <Avatar sx={{ width: 44, height: 44 }}>
          <p className="text-sm">TU</p>
        </Avatar>
        <div className="flex flex-col mt-1 leading-tight">
          <h3 className="flex font-normal">Test User</h3>
          <button
            onClick={signOut}
            className="text-sm text-left font-light hover:text-casual transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
      {/* <Button variant="outlined" size="small">
        Logout
      </Button> */}
    </div>
  );
};
