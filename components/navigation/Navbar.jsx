import Divider from "@mui/material/Divider";
import { UserCard } from "../UserCard";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className=" min-w-max md:min-w-48 md:h-screen flex flex-row md:flex-col border-r border-r-foreground/10 p-4 md:gap-3 border-b-2 md:border-none">
      <UserCard />
      <Divider />
      <NavMenu />
    </nav>
  );
};
