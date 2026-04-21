"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const ROTATION_MS = 6500;

export default function Hero() {
  const frames = site.hero.frames;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const i = window.setInterval(
      () => setIdx((v) => (v + 1) % frames.length),
      ROTATION_MS
    );
    return () => window.clearInterval(i);
  }, [frames.length]);

  const current = frames[idx];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex items-end overflow-hidden bg-surface"
    >
      <div className="absolute inset-0 z-0">
        {frames.map((frame, i) => (
          <div
            key={frame.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1500ms] ease-out",
              i === idx ? "opacity-100" : "opacity-0"
            )}
            aria-hidden={i !== idx}
          >
            <Image
              src={frame.src}
              alt={i === 0 ? current.alt : ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover opacity-90 scale-[1.04] motion-safe:animate-hero-drift"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-14 md:pb-20 lg:pb-24">
        <div className="flex flex-col gap-7 md:gap-8">
          <span className="font-headline uppercase tracking-[0.3em] text-[11px] md:text-xs text-accent">
            {site.brand.tagline}
          </span>
          <h1 className="font-headline font-bold leading-[0.88] tracking-[0.02em] text-on-surface text-[16vw] md:text-[13vw] lg:text-[11vw] uppercase">
            {site.hero.headline}
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-6xl">
            <p className="font-body uppercase tracking-[0.3em] text-xs md:text-sm text-on-surface-muted">
              {site.hero.sub}
            </p>
            <p className="font-body text-xs md:text-sm text-on-surface-subtle max-w-xs">
              Automotive editorial from within Costa Rica&apos;s exotic-car community.
            </p>
          </div>
        </div>
      </div>

      {/* Rotation indicator */}
      <div
        className="absolute left-6 md:left-12 lg:left-20 top-24 md:top-28 z-10 flex flex-col gap-2"
        aria-label={`Hero frame ${idx + 1} of ${frames.length}`}
      >
        {frames.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Show hero frame ${i + 1}: ${f.caption}`}
            aria-current={i === idx}
            className={cn(
              "relative h-[2px] w-8 overflow-hidden transition-[background,width] duration-500 focus-visible:outline-2 focus-visible:outline-accent",
              i === idx ? "bg-accent w-12" : "bg-on-surface-subtle/30"
            )}
          />
        ))}
      </div>

      {/* Current frame caption */}
      <p className="absolute right-6 md:right-12 lg:right-20 top-24 md:top-28 z-10 font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-muted max-w-[12rem] text-right">
        {current.caption}
      </p>

      {/* Scroll cue (mobile + desktop) */}
      <a
        href="#manifesto"
        aria-label="Scroll to manifesto"
        className="absolute bottom-6 md:bottom-10 right-6 md:right-12 lg:right-20 z-10 flex items-center gap-3 font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-muted hover:text-accent focus-visible:text-accent transition-colors duration-500"
      >
        <span className="hidden sm:inline">{site.hero.scrollCue}</span>
        <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce-slow" />
      </a>
    </section>
  );
}
