import Image from "next/legacy/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn/cn";

export default function BlurImageWithBlurHash(props) {
  const [isLoading, setLoading] = useState(true);
  // V2 Pulled From main
  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-700 ease-in-out transition-all",
        isLoading ? " blur-2xl scale-110" : "blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
