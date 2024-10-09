import { Banner } from "@/components/Banner";
import { NewTaskForm } from "@/components/forms/NewTaskForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Banner title="Create New Task" />
      <div className="flex w-full h-full bg-secondary-background shadow-inner p-4">
        <NewTaskForm />
      </div>
    </div>
  );
}
