"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export type LightboxFrame = {
  id: string;
  src: string;
  alt: string;
  title: string;
  context: string;
};

type LightboxProps = {
  open: boolean;
  index: number;
  frames: LightboxFrame[];
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({
  open,
  index,
  frames,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const latest = useRef({ index, frames, onClose, onIndexChange });

  useEffect(() => {
    latest.current = { index, frames, onClose, onIndexChange };
  });

  const go = (dir: -1 | 1) => {
    const { index, frames, onIndexChange } = latest.current;
    onIndexChange((index + dir + frames.length) % frames.length);
  };

  useEffect(() => {
    if (!open) return;
    lastFocused.current = (document.activeElement as HTMLElement) ?? null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") latest.current.onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  const frame = frames[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${frame.title} — ${frame.context}. Image ${index + 1} of ${frames.length}`}
      ref={dialogRef}
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-surface/95 backdrop-blur-md flex items-center justify-center px-4 md:px-10 py-20"
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 inline-flex h-11 w-11 items-center justify-center text-on-surface hover:text-accent focus-visible:text-accent transition-colors"
      >
        <X size={22} strokeWidth={1.5} />
      </button>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label="Previous image"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center text-on-surface hover:text-accent focus-visible:text-accent transition-colors"
      >
        <ArrowLeft size={22} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label="Next image"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center text-on-surface hover:text-accent focus-visible:text-accent transition-colors"
      >
        <ArrowRight size={22} strokeWidth={1.5} />
      </button>

      {/* Content */}
      <figure
        className="relative w-full h-full max-w-[1400px] mx-auto flex flex-col items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 w-full">
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            priority
            sizes="90vw"
            className="object-contain"
          />
        </div>
        <figcaption className="w-full flex items-baseline justify-between gap-6 font-headline uppercase tracking-[0.25em] text-[10px] md:text-[11px]">
          <span className="text-accent">{frame.title}</span>
          <span className="text-on-surface-muted">{frame.context}</span>
          <span className="text-on-surface-subtle tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
