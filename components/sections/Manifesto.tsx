import Image from "next/image";
import { site } from "@/content/site";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="relative w-full bg-surface py-24 md:py-36 lg:py-44 border-t border-outline/40 overflow-hidden"
    >
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={site.manifesto.backdrop.src}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18] grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-surface/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-surface/60" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3 flex flex-col gap-3">
            <span
              id="manifesto-heading"
              className="font-headline uppercase tracking-[0.3em] text-[11px] text-accent"
            >
              {site.manifesto.eyebrow}
            </span>
            <span className="hidden md:block h-px w-12 bg-accent/60 mt-2" />
          </div>
          <div className="md:col-span-9 flex flex-col gap-8 md:gap-10">
            <p className="font-headline text-2xl md:text-4xl lg:text-5xl leading-[1.2] text-on-surface text-balance">
              {site.manifesto.body}
            </p>
            <p className="font-headline uppercase tracking-[0.3em] text-[11px] text-on-surface-subtle">
              {site.manifesto.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
