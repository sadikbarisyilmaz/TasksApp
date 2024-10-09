import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="max-w-3xl flex flex-col justify-center items-center gap-2 p-6 md:p-8 lg:p-16 shadow-2xl text-center bg-white rounded">
        <h1 className="drop-shadow-2xl py-2 text-2xl md:text-4xl lg:text-5xl">
          Welcome to TasksApp !
        </h1>
        <h2 className="leading-1 text-md max-w-md text-sm md:text-base lg:text-lg font-light">
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
    </div>
  );
}
