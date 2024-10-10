import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import SessionProvider from "@/providers/SessionProvider";
import "./globals.css";

const roboto = Roboto({
  weight: ["500", "400", "300"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TasksApp",
  description: "Your Trusty Task Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>{" "}
        </SessionProvider>
      </body>
    </html>
  );
}
