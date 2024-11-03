"use client";
import { useEffect, useState } from "react";
import { TaskColumn } from "./TaskColumn";
import { CircularProgress, Divider } from "@mui/material";
import { useTasksStore } from "@/stores/tasksStore";
import { categorizeByPriority } from "@/functions/categorizeByPriority";

export const TaskTable = () => {
  const { tasks, readTasks } = useTasksStore();
  const [categorizedTasks, setCategorizedTasks] = useState([]);

  useEffect(() => {
    readTasks();
  }, []);

  useEffect(() => {
    if (tasks) {
      setCategorizedTasks(categorizeByPriority(tasks));
    }
  }, [tasks]);

  return (
    <>
      {tasks ? (
        <div className="w-full h-full p-4 lg:p-8 bg-secondary-background shadow-inner flex justify-center overflow-y-scroll">
          <div className="w-full h-full flex justify-center sm:justify-between gap-2  flex-wrap sm:flex-nowrap">
            <TaskColumn title="Casual" tasks={categorizedTasks.casual} />
            <Divider
              className="hidden sm:flex"
              orientation="vertical"
              flexItem
            />
            <TaskColumn title="Moderate" tasks={categorizedTasks.moderate} />
            <Divider
              className="hidden sm:flex"
              orientation="vertical"
              flexItem
            />
            <TaskColumn title="Urgent" tasks={categorizedTasks.urgent} />
          </div>
        </div>
      ) : (
        <div className="w-full h-full p-4 lg:p-8 bg-secondary-background shadow-inner flex justify-center items-center overflow-y-scroll">
          <CircularProgress />
        </div>
      )}
    </>
  );
};
