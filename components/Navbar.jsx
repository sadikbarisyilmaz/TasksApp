import { NavMenu } from "./NavMenu";
import { UserCard } from "./UserCard";
import Divider from "@mui/material/Divider";

export const Navbar = () => {
  return (
    <nav className="min-w-48 h-screen hidden lg:flex flex-col border-r border-r-foreground/10 p-4 gap-3">
      <UserCard />
      <Divider />
      <NavMenu />
    </nav>
  );
};
