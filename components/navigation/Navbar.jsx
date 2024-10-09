import Divider from "@mui/material/Divider";
import { UserCard } from "../UserCard";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className="min-w-48 h-screen hidden lg:flex flex-col border-r border-r-foreground/10 p-4 gap-3">
      <UserCard />
      <Divider />
      <NavMenu />
    </nav>
  );
};
