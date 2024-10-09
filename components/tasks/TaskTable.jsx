"use client";
import { useEffect, useState } from "react";
import { TaskColumn } from "./TaskColumn";
import { CircularProgress, Divider } from "@mui/material";
import { getAPI } from "@/services/fetchAPI";
import { categorizeByPriority } from "@/functions/categorizeByPriority";

export const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAPI("/tasks").then((res) => {
      if (res.status && (res.status === 200 || res.status === "success")) {
        console.log("if", res);
      } else {
        const categorizedTasks = categorizeByPriority(res);
        setTasks(categorizedTasks);
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return (
      <div className="w-full h-full p-4 lg:p-8 bg-secondary-background shadow-inner flex justify-center items-center overflow-y-scroll">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="w-full h-full p-4 lg:p-8 bg-secondary-background shadow-inner flex justify-center overflow-y-scroll">
      <div className="w-full h-full flex justify-center sm:justify-between gap-2  flex-wrap sm:flex-nowrap">
        <TaskColumn title="Casual" tasks={tasks.casual} />
        <Divider className="hidden sm:flex" orientation="vertical" flexItem />
        <TaskColumn title="Moderate" tasks={tasks.moderate} />
        <Divider className="hidden sm:flex" orientation="vertical" flexItem />
        <TaskColumn title="Urgent" tasks={tasks.urgent} />
      </div>
    </div>
  );
};
