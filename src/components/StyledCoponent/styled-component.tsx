import { cn } from "@/lib/utils/cn/cn";
import React from "react";

export function SectionPadding({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("py-[9rem]", className)}>{children}</div>;
}
