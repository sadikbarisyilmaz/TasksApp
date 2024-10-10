"use client";
import { Banner } from "@/components/Banner";
import { UpdateTaskForm } from "@/components/forms/UpdateTaskForm";
import { postAPI } from "@/services/fetchAPI";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();
  const id = params.id;
  const handleDelete = () => {
    postAPI("/tasks", id, "DELETE").then((res) => {
      if (res.status && (res.status === 200 || res.status === "success")) {
        router.push("/dashboard");
      } else {
        router.push("/dashboard");
      }
    });
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
