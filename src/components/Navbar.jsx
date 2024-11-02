"use client";
import React, { useEffect, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconGardenCart,
  IconTruckDelivery,
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
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid lg:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Power Glasses"
                href="/lens"
                src="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Experience clear vision with our high-quality power glasses designed for everyday comfort and style."
              />
              <ProductItem
                title="Sunglasses"
                href="/sunglasses"
                src="https://images.unsplash.com/photo-1501619838605-f3e4c602db04?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Protect your eyes from UV rays while staying fashionable with our range of trendy sunglasses."
              />
              <ProductItem
                title="Contact Lens"
                href="/contact-lens"
                src="https://images.unsplash.com/photo-1659351423172-bb8d42079d6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMGxlbnN8ZW58MHx8MHx8fDA%3D"
                description="Discover the convenience and clarity of our high-quality contact lenses for all-day comfort."
              />
              <ProductItem
                title="Accessories"
                href="/accessories"
                src="https://images.unsplash.com/photo-1628771065117-74ccb5690668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGV5ZSUyMG1lZGljaW5lc3xlbnwwfHwwfHx8MA%3D%3D"
                description="Complete your look with our range of stylish and functional eyewear accessories."
              />
            </div>
          </MenuItem>

          {decoded ? (
            <MenuItem
              setActive={setActive}
              active={active}
              item={`Hi, ${decoded.fname}`}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/user/profile">
                  <MenuItemContent label="Profile" Icon={IconBrandTabler} />
                </HoveredLink>
                <HoveredLink href="/user/cart">
                  <MenuItemContent label="Cart" Icon={IconGardenCart} />
                </HoveredLink>
                <HoveredLink href="/user/orders">
                  <MenuItemContent label="Order" Icon={IconTruckDelivery} />
                </HoveredLink>
                <HoveredLink href="/user/settings">
                  <MenuItemContent label="Settings" Icon={IconSettings} />
                </HoveredLink>
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
    <div className="flex justify-between items-center gap-2" onClick={onClick}>
      {label}
      <Icon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    </div>
  );
}
