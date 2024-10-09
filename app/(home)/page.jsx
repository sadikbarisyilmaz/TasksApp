import prisma from "@/lib/prisma";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-secondary-background bg-cover">
      <main className="flex w-full justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center gap-2 p-4 md:p-8 lg:p-16 shadow-2xl text-center bg-white opacity-80 rounded">
          <h1 className="drop-shadow-2xl py-4 text-2xl md:text-4xl  lg:text-5xl">
            Welcome to TasksApp !
          </h1>
          <h2 className="leading-1 text-md max-w-md  md:text-lg lg:text-xl font-light">
            &quot;Your Trusty Task Manager&quot;
          </h2>
          <p className="leading-7 mt-10  font-light">
            Please{" "}
            <Link
              className="transition-all duration-200 hover:text-casual font-normal"
              href={"/login"}
            >
              Login
            </Link>{" "}
            to continue <Link href={"/dashboard"}>Dashboard</Link>
          </p>
          {/* <p className="leading-7 mt-10 ">
        Go to <Link href={"/dashboard"}>Dashboard</Link>
      </p> */}
        </div>
      </main>
    </div>
  );
}
