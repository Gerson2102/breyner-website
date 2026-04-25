"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500",
        scrolled || open
          ? "bg-surface/85 backdrop-blur-xl border-b border-outline/40"
          : "bg-transparent border-b border-transparent"
      )}
      aria-label="Primary"
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        <a
          href="#top"
          className="group flex items-baseline gap-3 text-on-surface hover:text-accent transition-colors duration-300"
          aria-label={site.brand.wordmark}
        >
          <span className="font-headline font-bold uppercase tracking-[0.3em] text-[13px] md:text-sm">
            {site.brand.wordmark}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-headline uppercase tracking-[0.2em] text-[11px] text-on-surface-muted hover:text-accent hover:tracking-[0.3em] focus-visible:text-accent transition-all duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center -mr-2 text-on-surface hover:text-accent transition-colors"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 pb-10 pt-4 flex flex-col gap-6 bg-surface/95 backdrop-blur-xl">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-headline uppercase tracking-[0.25em] text-lg text-on-surface hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
