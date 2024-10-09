import { HomeNavbar } from "@/components/navigation/HomeNavbar";

export default function HomeLayout({ children }) {
  return (
    <section className="flex w-full">
      <HomeNavbar />
      <main className="flex w-full justify-center items-center bg-[url('/home-bg.svg')] bg-cover bg-top min-h-screen">
        {children}
      </main>
    </section>
  );
}
