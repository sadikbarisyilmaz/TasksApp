import { Banner } from "@/components/Banner";
import { TaskTable } from "@/components/tasks/TaskTable";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Banner title="My Tasks" />
      <TaskTable />
    </div>
  );
}
