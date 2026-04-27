"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import MediaSlot from "@/components/ui/MediaSlot";
import { cn } from "@/lib/cn";

export default function SuburbanDrivers() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByViewport = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section
      id="suburban-drivers"
      aria-labelledby="sd-heading"
      className="w-full bg-surface py-24 md:py-36 border-t border-outline/40 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 mb-10 md:mb-14 flex flex-col items-center text-center">
        <span className="font-headline uppercase tracking-[0.3em] text-[11px] text-on-surface-muted">
          {site.suburbanDrivers.eyebrow}
        </span>
        <div className="relative h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 mt-6 md:mt-8">
          <Image
            src={site.suburbanDrivers.logo.src}
            alt={site.suburbanDrivers.logo.alt}
            fill
            sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, 160px"
            className="object-contain mix-blend-screen"
          />
        </div>
        <h2
          id="sd-heading"
          className="mt-6 md:mt-8 font-headline font-bold uppercase leading-[0.9] tracking-[0.04em] text-accent text-[12vw] md:text-[8vw] lg:text-[7vw]"
        >
          {site.suburbanDrivers.headline}
        </h2>
        <p className="mt-4 md:mt-5 font-headline uppercase tracking-[0.3em] text-[10px] md:text-xs text-on-surface-subtle">
          {site.suburbanDrivers.meta}
        </p>
      </div>

      <div className="hidden md:flex mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 mb-6 items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByViewport(-1)}
          aria-label="Scroll gallery left"
          disabled={!canLeft}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center border border-outline text-on-surface transition-all",
            "hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => scrollByViewport(1)}
          aria-label="Scroll gallery right"
          disabled={!canRight}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center border border-outline text-on-surface transition-all",
            "hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative">
        {/* Right-edge fade affordance */}
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 bottom-8 w-24 md:w-40 z-10 bg-gradient-to-l from-surface to-transparent transition-opacity duration-300",
            canRight ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute left-0 top-0 bottom-8 w-24 md:w-40 z-10 bg-gradient-to-r from-surface to-transparent transition-opacity duration-300",
            canLeft ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        />

        <div
          ref={scrollerRef}
          className="w-full overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
          tabIndex={0}
          aria-label="Suburban Drivers gallery — scroll horizontally"
        >
          <div className="flex gap-5 md:gap-6 px-6 md:px-12 lg:px-20 w-max">
            {site.suburbanDrivers.tiles.map((tile, idx) => (
              <figure
                key={tile.id}
                className="group shrink-0 w-[62vw] sm:w-[42vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw]"
              >
                <div className="aspect-[3/4]">
                  <MediaSlot
                    src={tile.placeholder}
                    alt={tile.alt}
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, 62vw"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-3 font-headline uppercase tracking-[0.25em] text-[10px] text-on-surface-muted">
                  <span className="text-on-surface-muted">{tile.caption}</span>
                  <span className="text-on-surface-subtle tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 mt-10 md:mt-12 flex justify-end">
        <p className="font-body text-on-surface-subtle/80 text-[10px] md:text-xs tracking-[0.2em] uppercase leading-relaxed text-right">
          {site.suburbanDrivers.blurbEs}
        </p>
      </div>
    </section>
  );
}
