"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import MediaSlot from "@/components/ui/MediaSlot";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LightboxFrame } from "@/components/ui/Lightbox";
import { cn } from "@/lib/cn";

const Lightbox = dynamic(() => import("@/components/ui/Lightbox"), {
  ssr: false,
});

const tiles = site.work.tiles;

const frames: LightboxFrame[] = tiles.map((t) => ({
  id: t.id,
  src: t.placeholder,
  alt: t.alt,
  title: t.title,
  context: t.context,
}));

/**
 * Explicit editorial bands. Each figure is a clickable tile that opens the lightbox.
 * Indices map 1:1 to tiles[] order in content/site.ts.
 */
export default function SelectedWork() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const open = openIdx !== null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full bg-surface py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 mb-14 md:mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="work-heading"
          eyebrow="Portfolio"
          title={site.work.sectionTitle}
        />
        <p className="font-body text-sm md:text-base text-on-surface-muted max-w-sm">
          Twelve frames from the monograph. Click any tile to open the lightbox.
        </p>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 flex flex-col gap-6 md:gap-8">
        {/* BAND 1 — Cinematic hero 16:9 */}
        <Tile i={0} aspect="aspect-[16/9]" className="w-full" onOpen={setOpenIdx} priority />

        {/* BAND 2 — Three portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Tile i={1} aspect="aspect-[3/4]" onOpen={setOpenIdx} />
          <Tile i={2} aspect="aspect-[3/4]" onOpen={setOpenIdx} />
          <Tile i={4} aspect="aspect-[3/4]" onOpen={setOpenIdx} />
        </div>

        {/* BAND 3 — 7/5 editorial pair (detail wide + portrait) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <Tile i={3} aspect="aspect-[4/3]" className="lg:col-span-7" onOpen={setOpenIdx} />
          <Tile i={5} aspect="aspect-[3/4]" className="lg:col-span-5" onOpen={setOpenIdx} />
        </div>

        {/* BAND 4 — Three portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Tile i={6} aspect="aspect-[3/4]" onOpen={setOpenIdx} />
          <Tile i={8} aspect="aspect-[3/4]" onOpen={setOpenIdx} />
          <Tile i={10} aspect="aspect-[3/4]" onOpen={setOpenIdx} />
        </div>

        {/* BAND 5 — 7/5 (detail wide + portrait) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <Tile i={7} aspect="aspect-[4/3]" className="lg:col-span-7" onOpen={setOpenIdx} />
          <Tile i={9} aspect="aspect-[3/4]" className="lg:col-span-5" onOpen={setOpenIdx} />
        </div>

        {/* BAND 6 — Closing frame: text + image paired */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 lg:pr-8">
            <span className="font-headline uppercase tracking-[0.3em] text-[11px] text-accent">
              Closing Frame
            </span>
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-on-surface leading-tight">
              {`"The last frame is the one that tells you whether the night was worth printing."`}
            </p>
            <span className="font-headline uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-on-surface-subtle">
              — Steve LePerk
            </span>
          </div>
          <Tile
            i={11}
            aspect="aspect-square"
            className="lg:col-span-7 order-1 lg:order-2"
            onOpen={setOpenIdx}
          />
        </div>
      </div>

      {open ? (
        <Lightbox
          open={open}
          index={openIdx ?? 0}
          frames={frames}
          onClose={() => setOpenIdx(null)}
          onIndexChange={(i) => setOpenIdx(i)}
        />
      ) : null}
    </section>
  );
}

function Tile({
  i,
  aspect,
  className,
  onOpen,
  priority = false,
}: {
  i: number;
  aspect: string;
  className?: string;
  onOpen: (i: number) => void;
  priority?: boolean;
}) {
  const t = tiles[i];
  return (
    <figure className={cn("group flex flex-col gap-3", className)}>
      <button
        type="button"
        onClick={() => onOpen(i)}
        aria-label={`Open ${t.title} — ${t.context} in lightbox`}
        className={cn(
          "relative block w-full overflow-hidden cursor-pointer",
          aspect,
          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
        )}
      >
        <MediaSlot
          src={t.placeholder}
          alt={t.alt}
          fill
          priority={priority}
          sizes="(min-width: 1600px) 1536px, (min-width: 1024px) 80vw, 100vw"
        />
        {/* Dark tint — fades IN on hover so the image feels deeper and the arrow reads */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700 ease-out" />
        {/* Accent hairline — slides in from left on hover */}
        <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-top bg-accent scale-y-0 group-hover:scale-y-100 group-focus-within:scale-y-100 transition-transform duration-700 ease-out" />
        {/* Arrow affordance */}
        <span className="pointer-events-none absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center bg-accent text-surface opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-500 ease-out">
          <ArrowUpRight size={18} strokeWidth={2} />
        </span>
      </button>
      <figcaption className="flex items-baseline justify-between gap-4 font-headline uppercase tracking-[0.25em] text-[10px] md:text-[11px]">
        <span className="text-accent transition-all duration-500 ease-out group-hover:tracking-[0.3em] group-focus-within:tracking-[0.3em]">
          {t.title}
        </span>
        <span className="text-on-surface-subtle transition-colors duration-500 ease-out group-hover:text-on-surface group-focus-within:text-on-surface">
          {t.context}
        </span>
      </figcaption>
    </figure>
  );
}
