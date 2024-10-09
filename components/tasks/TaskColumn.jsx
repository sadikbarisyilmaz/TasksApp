import React from "react";
import { TaskCard } from "./TaskCard";
import { Divider } from "@mui/material";

export const TaskColumn = ({ title, tasks }) => {
  return (
    <div className=" w-fit flex flex-col gap-4 px-2">
      <h3 className="w-full text-center p-1 text-xl font-light">{title}</h3>
      <Divider flexItem />
      {tasks &&
        tasks.map((task, i) => {
          return <TaskCard key={i} task={task} />;
        })}
    </div>
  );
};
