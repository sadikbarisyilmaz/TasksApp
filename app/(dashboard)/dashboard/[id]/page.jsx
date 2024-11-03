"use client";
import { Banner } from "@/components/Banner";
import { UpdateTaskForm } from "@/components/forms/UpdateTaskForm";
import { useTasksStore } from "@/stores/tasksStore";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();
  const id = params.id;
  const deleteTasks = useTasksStore((state) => state.deleteTasks);
  const handleDelete = () => {
    try {
      deleteTasks(id);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Banner title="Task Settings" />
      <div className="flex flex-col w-full h-full bg-secondary-background shadow-inner  p-10 sm:p-14 gap-4">
        <UpdateTaskForm id={id} />
        <Button
          className="max-w-4xl w-full"
          onClick={handleDelete}
          color="error"
          variant="contained"
        >
          Delete Task
        </Button>
      </div>
    </div>
  );
}
