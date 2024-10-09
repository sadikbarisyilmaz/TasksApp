import Link from "next/link";
const links = [
  {
    title: "My Tasks",
    href: "/dashboard",
  },
  {
    title: "New Task",
    href: "/dashboard/new-task",
  },
];

export const NavMenu = () => {
  return (
    <div className="flex flex-row md:flex-col gap-1 w-full justify-center items-center md:py-6">
      {links.map((link, i) => {
        return (
          <Link
            className="w-full flex p-2 hover:bg-secondary-background transition-colors duration-300 rounded text-center md:text-left text-xs sm:text-base"
            key={i}
            href={link.href}
          >
            <p className="px-2 md:font-light">{link.title}</p>
          </Link>
        );
      })}
    </div>
  );
};
