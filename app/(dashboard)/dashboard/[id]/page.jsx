"use client";
import { Banner } from "@/components/Banner";
import { UpdateTaskForm } from "@/components/forms/UpdateTaskForm";
import { Button } from "@mui/material";

export default function Page({ params }) {
  const id = params.id;
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Banner title="Task Settings" />
      <div className="flex flex-col w-full h-full bg-secondary-background shadow-inner  p-10 sm:p-14 gap-4">
        <UpdateTaskForm id={id} />
        <Button color="error" variant="contained">
          Delete Task
        </Button>
      </div>
    </div>
  );
}
