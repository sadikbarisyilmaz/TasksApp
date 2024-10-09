import Link from "next/link";

export const HomeNavbar = () => {
  return (
    <nav
      className={`fixed z-50 flex w-full items-center justify-center bg-white shadow-lg h-16`}
    >
      <div className="w-full px-4 sm:px-10 container flex items-center">
        <div className="relative flex grow items-center">
          <Link className="relative items-center" href="/">
            <div className="text-lg ">TasksApp</div>
          </Link>
        </div>
        <div className="justify-end items-center gap-8 flex">
          <Link
            className={`w-fit transition-all duration-200 hover:text-casual hover:drop-shadow-lg drop-shadow-lg`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={`w-fit transition-all duration-200  hover:text-casual hover:drop-shadow-lg drop-shadow-lg`}
            href="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};
