"use client";
import { useEffect, useState } from "react";
import { TaskColumn } from "./TaskColumn";
import { Divider } from "@mui/material";

export const TaskTable = () => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const data = {
      casual: [
        {
          title: "Task Title",
          priority: "casual",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate.",
          id: "asdasd",
        },
      ],
      moderate: [
        {
          title: "Task Title",
          priority: "moderate",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate.",
          id: "asdasd",
        },
      ],
      urgent: [
        {
          title: "Task Title",
          priority: "urgent",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate.",
          id: "asdasd",
        },
      ],
    };
    setTasks({ ...data });
  }, []);

  return (
    <div className="w-full h-full p-4 lg:p-8 bg-secondary-background shadow-inner flex justify-center overflow-y-scroll">
      <div className="w-full h-full flex justify-center sm:justify-between gap-2 max-w-7xl flex-wrap sm:flex-nowrap">
        <TaskColumn title="Casual" tasks={tasks.casual} />
        <Divider className="hidden sm:flex" orientation="vertical" flexItem />
        <TaskColumn title="Moderate" tasks={tasks.moderate} />
        <Divider className="hidden sm:flex" orientation="vertical" flexItem />
        <TaskColumn title="Urgent" tasks={tasks.urgent} />
      </div>
    </div>
  );
};
