"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconGardenCart,
  IconTruckDelivery,
  IconEditCircle,
  IconSun,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { motion } from "framer-motion";

export default function NavbarDemo({ changeTheme, theme }) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar theme={theme} changeTheme={changeTheme} className="top-0" />
    </div>
  );
}

function Navbar({ className, theme, changeTheme }) {
  const [active, setActive] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("AuthToken");
    if (token) {
      const decodedToken = jwt.decode(JSON.parse(token));
      setDecoded(decodedToken);
      setAuthToken(token);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("AuthToken");
    location.reload();
  }

  return (
    <div className={cn("fixed top-10 inset-x-0 w-screen z-50", className)}>
      <Menu setActive={setActive}>
        <div className="w-[30%] md:w-[50%] text-center flex items-center justify-center">
          <Link href="/">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Shree Balaji Opticals"
            />
          </Link>
        </div>

        <div className="w-[70%] md:w-[50%] flex justify-around items-center">
          <Link href="/lens">
            <MenuItem setActive={setActive} active={active} item="Lens" />
          </Link>
          <Link href="/frames">
            <MenuItem setActive={setActive} active={active} item="Frames" />
          </Link>

          {decoded ? (
            <MenuItem
              setActive={setActive}
              active={active}
              item={`Hi, ${decoded.fname}`}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/profile">
                  <MenuItemContent label="Profile" Icon={IconBrandTabler} />
                </HoveredLink>
                <HoveredLink href="/cart">
                  <MenuItemContent label="Cart" Icon={IconGardenCart} />
                </HoveredLink>
                <HoveredLink href="/orders">
                  <MenuItemContent label="Order" Icon={IconTruckDelivery} />
                </HoveredLink>
                <HoveredLink href="/settings">
                  <MenuItemContent label="Settings" Icon={IconSettings} />
                </HoveredLink>
                {decoded.isAdmin && (
                  <HoveredLink href="/admin">
                    <MenuItemContent label="Update" Icon={IconEditCircle} />
                  </HoveredLink>
                )}
                <HoveredLink href="#">
                  <MenuItemContent
                    label="Logout"
                    Icon={IconArrowLeft}
                    onClick={handleLogout}
                  />
                </HoveredLink>
              </div>
            </MenuItem>
          ) : (
            <Link href="/login">
              <MenuItem setActive={setActive} active={active} item="Login" />
            </Link>
          )}
          <div onClick={changeTheme} className="relative">
            <motion.p
              transition={{ duration: 0.3 }}
              className="cursor-pointer text-black dark:text-white text-xs sm:text-sm md:text-xl font-normal hover:opacity-[0.9] "
            >
              <IconSun stroke={1.25} />
            </motion.p>
          </div>
        </div>
      </Menu>
    </div>
  );
}

function MenuItemContent({ label, Icon, onClick }) {
  return (
    <div className="flex justify-between items-center" onClick={onClick}>
      {label}
      <Icon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    </div>
  );
}
