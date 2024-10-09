import { LoginForm } from "@/components/forms/LoginForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-2 sm:p-20">
      <LoginForm />
    </div>
  );
}
