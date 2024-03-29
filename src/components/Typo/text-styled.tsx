import { cn } from "@/lib/utils/cn/cn";

export const TextUnderline = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span className={cn("underline underline-offset-4", className)}>
      {children}
    </span>
  );
};
