import { Navbar } from "@/components/navigation/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex w-full">
      <Navbar />
      {children}
    </section>
  );
}
