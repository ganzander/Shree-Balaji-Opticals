"use client";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavbarDemo from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const metadata = {
  title: "Shree Balaji Opticals",
  description:
    "Shree Balaji Opticals is here to help you see the world more clearly.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`overflow-x-hidden`}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {pathname !== "/login" &&
            pathname !== "/register" &&
            pathname !== "/loginOTP" && <NavbarDemo />}
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
