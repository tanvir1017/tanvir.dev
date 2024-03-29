import { ChevronDown, Eye } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import { cn } from "@/lib/utils/cn/cn";

export const BtnWithIcon = ({
  children,
  icon,
  className,
}: {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Button
        className={cn(
          "border bg-white hover:bg-gray-200 text-black w-44 relative overflow-hidden",
          className
        )}
      >
        <span className="absolute left-2">{icon}</span>
        {children}
        <span className="absolute right-8 h-full w-[0.5px] bg-black/50"></span>
        <span className="absolute right-1">
          <ChevronDown strokeWidth={0.7} className="text-black" />
        </span>
      </Button>
    </>
  );
};
