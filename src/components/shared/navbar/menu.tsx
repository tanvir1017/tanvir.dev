"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils/cn/cn";
import LOGO from "@/components/LOGO/t.dev";
import { ChevronDown, Sun } from "lucide-react";
import { BiWorld } from "react-icons/bi";
import { Button } from "@/components/Button";
import { Button as SButton } from "@/components/ui/button";

export function NavbarDemo() {
  return <Navbar className="top-2" />;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-[#15192f]/15 border backdrop-blur-md dark:border-white/[0.2] shadow-input rounded-full flex items-center justify-between ",
        className
      )}
    >
      <div className="px-4 py-2">
        <LOGO />
      </div>
      <div className="flex items-center">
        <Menu
          setActive={setActive}
          className="mr-4 hover:bg-white/10 px-4 py-2"
        >
          <MenuItem setActive={setActive} active={active} item="Articles">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </Menu>

        <div className="flex items-center mr-4 text-white  font-normal">
          <SButton className="dark:bg-white/10 dark:hover:bg-white/10 py-2">
            Deutsche
          </SButton>
          <SButton className="dark:bg-white/10 dark:focus:bg-white/5  px-1 border-r border-[0.5px] border-black/[0.3] py-2">
            <ChevronDown strokeWidth={0.7} className="" />
          </SButton>
        </div>
        <div className="hover:bg-white/10 py-2 px-4 rounded-tr-full rounded-br-full mr-1">
          <Sun />
        </div>
      </div>
    </div>
  );
}

NavbarDemo.displayName = "Navbar";
