import { cn } from "@/lib/utils/cn/cn";
import React from "react";

export const TextUnderline = ({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("underline underline-offset-4", className)}>
      {children}
    </span>
  );
};
