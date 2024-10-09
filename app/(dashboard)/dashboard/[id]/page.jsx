import { Banner } from "@/components/Banner";

export default function Page({ params }) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Banner title="Task Settings" />
    </div>
  );
}
