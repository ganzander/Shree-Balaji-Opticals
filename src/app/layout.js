"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavbarDemo from "@/components/Navbar";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Shree Balaji Opticals",
//   description:
//     "Shree Balaji Opticals is here to help you see the world more clearly.",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className="overflow-x-hidden dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname !== "/login" &&
          pathname !== "/register" &&
          pathname !== "/loginOTP" && <NavbarDemo />}
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
