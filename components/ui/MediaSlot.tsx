"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { AspectRatio } from "@/content/site";

const aspectClass: Record<AspectRatio, string> = {
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
};

type MediaSlotProps = {
  src: string;
  alt: string;
  aspect?: AspectRatio;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function MediaSlot({
  src,
  alt,
  aspect = "4/3",
  fill = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: MediaSlotProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-surface-raised",
        fill ? "h-full" : aspectClass[aspect],
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
