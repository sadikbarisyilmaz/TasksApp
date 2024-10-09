import { SignupForm } from "@/components/forms/SignupForm";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center justify-center p-8 pb-20 gap-2 sm:p-20 mt-16">
      <SignupForm />
    </div>
  );
}
