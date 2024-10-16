"use client";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavbarDemo from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const metadata = {
  title: "Shree Balaji Opticals",
  description:
    "Shree Balaji Opticals is here to help you see the world more clearly.",
};

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("");
    }
  }, []);

  function changeTheme() {
    const newTheme = theme === "dark" ? "" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  const pathname = usePathname();

  return (
    <html lang="en" className={`overflow-x-hidden ${theme}`}>
      <body className="antialiased">
        {pathname !== "/login" &&
          pathname !== "/register" &&
          pathname !== "/loginOTP" && (
            <NavbarDemo theme={theme} changeTheme={changeTheme} />
          )}
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
