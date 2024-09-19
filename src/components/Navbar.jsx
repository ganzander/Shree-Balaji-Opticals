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
  IconEditCircle,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import jwt from "jsonwebtoken";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [decoded, setDecoded] = useState({});
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAuthToken = JSON.parse(localStorage.getItem("AuthToken"));
      if (storedAuthToken) {
        setAuthToken(storedAuthToken);
        const decodedToken = jwt.decode(storedAuthToken);
        setDecoded(decodedToken);
      }
    }
  }, []);
  console.log(decoded);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="/lens">
          <MenuItem setActive={setActive} active={active} item="Lens" />
        </Link>
        <Link href="/frames">
          <MenuItem setActive={setActive} active={active} item="Frames" />
        </Link>
        {decoded.fname !== undefined ? (
          <MenuItem
            setActive={setActive}
            active={active}
            item={`Hi, ${decoded.fname}`}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/profile">
                <div className="flex justify-between items-center">
                  Profile
                  <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </div>
              </HoveredLink>
              <HoveredLink href="/cart">
                <div className="flex justify-between items-center">
                  Cart
                  <IconGardenCart className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </div>
              </HoveredLink>
              <HoveredLink href="/orders">
                <div className="flex justify-between items-center">
                  Order
                  <IconTruckDelivery className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </div>
              </HoveredLink>
              <HoveredLink href="/settings">
                <div className="flex justify-between items-center">
                  Settings
                  <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </div>
              </HoveredLink>
              {decoded.isAdmin && (
                <HoveredLink href="/updateMenu">
                  <div className="flex justify-between items-center">
                    Update
                    <IconEditCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  </div>
                </HoveredLink>
              )}
              <HoveredLink href="">
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    localStorage.removeItem("AuthToken");
                    location.reload();
                  }}
                >
                  Logout
                  <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </div>
              </HoveredLink>
            </div>
          </MenuItem>
        ) : (
          <Link href="/login">
            <MenuItem setActive={setActive} active={active} item="Login" />
          </Link>
        )}
      </Menu>
    </div>
  );
}
