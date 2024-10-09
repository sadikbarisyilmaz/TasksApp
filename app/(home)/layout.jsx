import { HomeNavbar } from "@/components/navigation/HomeNavbar";

export default function HomeLayout({ children }) {
  return (
    <section className="flex w-full">
      <HomeNavbar />
      {children}
    </section>
  );
}
