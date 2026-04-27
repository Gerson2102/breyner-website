"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaSlotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function MediaSlot({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: MediaSlotProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-surface-raised",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover transition-all duration-700 ease-out will-change-transform",
          loaded ? "opacity-100" : "opacity-0",
          "group-hover:scale-110 group-focus-within:scale-110 group-hover:brightness-110 group-focus-within:brightness-110"
        )}
      />
    </div>
  );
}
