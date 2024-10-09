import { Navbar } from "@/components/navigation/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex md:flex-row flex-col w-full h-screen">
      <Navbar />
      {children}
    </section>
  );
}
