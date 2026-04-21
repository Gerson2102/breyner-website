import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline/40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-headline font-bold uppercase tracking-[0.2em] text-on-surface text-sm">
              {site.footer.wordmark}
            </h3>
            <p className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
              {site.footer.tagline}
            </p>
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-muted max-w-sm">
            {site.footer.line}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="md:col-span-4 flex flex-col gap-4"
        >
          <span className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
            Sections
          </span>
          <ul className="flex flex-col gap-3">
            {site.footer.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-headline uppercase tracking-[0.25em] text-[11px] text-on-surface hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
            Follow
          </span>
          <ul className="flex flex-col gap-3">
            {site.footer.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-2 font-headline uppercase tracking-[0.25em] text-[11px] text-on-surface hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pb-10 flex flex-col md:flex-row justify-between gap-4 border-t border-outline/30 pt-6">
        <p className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
          {site.footer.copyright}
        </p>
        <p className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
          {site.footer.location}
        </p>
      </div>
    </footer>
  );
}
