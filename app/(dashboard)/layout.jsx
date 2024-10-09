import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex w-full">
      <Navbar />
      {children}
    </section>
  );
}
