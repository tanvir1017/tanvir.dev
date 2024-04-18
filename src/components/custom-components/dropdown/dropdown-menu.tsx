"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn/cn";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ResumeOrCv() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <Button className="border bg-white hover:bg-gray-200 text-black w-44 relative overflow-hidden">
        <span className="absolute left-2">
          <Eye strokeWidth={0.7} className="text-black" />
        </span>
        Resume
        <span className="absolute right-8 h-full w-[0.5px] bg-black/50"></span>
        <DropdownMenuTrigger asChild>
          <span className="absolute right-1">
            <ChevronDown strokeWidth={0.7} className="text-black" />
          </span>
        </DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent className="w-[11.04rem] dark:bg-black bg-white -ml-[8.875rem] border-[0.2px] border-white/45 mt-2">
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("resume");

  return (
    <DropdownMenu>
      <span className="flex items-center">
        <Link href="/resume">
          <Button className="border bg-white hover:bg-white text-black w-44 relative overflow-hidden">
            <span className="absolute left-2">
              <Eye strokeWidth={0.7} className="text-black" />
            </span>
            Resume
          </Button>
        </Link>
        <DropdownMenuTrigger
          asChild
          className="px-1 ml-[1px] hover:bg-gray-200 bg-white"
        >
          <Button className="">
            <ChevronDown strokeWidth={0.7} className="text-black" />
          </Button>
        </DropdownMenuTrigger>
      </span>

      <DropdownMenuContent className="w-[13rem] dark:bg-black bg-white -ml-[11rem] border-[0.2px] border-white/45 mt-0.5">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            className={cn(
              "focus:bg-white/10 hover:bg-white/10 cursor-pointer relative",
              { ["bg-white/10"]: position === "resume" }
            )}
            value="resume"
          >
            Resume
            <span className="absolute right-0">
              <HiOutlineDownload size={25} strokeWidth={0.5} />
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className={cn(
              "focus:bg-white/10 hover:bg-white/10 cursor-pointer mt-1 relative",
              { ["bg-white/10"]: position === "cv" }
            )}
            value="cv"
          >
            Cover letter
            <span className="absolute right-0">
              <HiOutlineDownload size={25} strokeWidth={0.5} />
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
