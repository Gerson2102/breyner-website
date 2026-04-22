import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

function getHandle(href: string): string {
  if (href.startsWith("mailto:")) return href.replace("mailto:", "");
  if (href.includes("instagram.com/")) {
    return `@${href.split("instagram.com/")[1].replace(/\/$/, "")}`;
  }
  return href;
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-surface py-28 md:py-40 border-t border-outline/40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <header className="lg:col-span-5 flex flex-col gap-8">
          <span
            id="contact-heading"
            className="font-headline uppercase tracking-[0.3em] text-[11px] text-accent"
          >
            {site.contact.eyebrow}
          </span>
          <h2 className="font-headline font-bold uppercase leading-[0.95] tracking-wider text-accent text-4xl md:text-5xl lg:text-6xl">
            {site.contact.headline}
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-muted max-w-md leading-relaxed">
            {site.contact.body}
          </p>
        </header>

        <div className="lg:col-span-7 flex flex-col gap-14">
          <figure className="flex flex-col gap-5">
            <blockquote className="font-body italic text-2xl md:text-3xl lg:text-[2.5rem] text-on-surface leading-[1.2] max-w-2xl">
              {`"The work lives at night. Write me when you're ready."`}
            </blockquote>
            <figcaption className="font-headline uppercase tracking-[0.3em] text-[11px] text-on-surface-subtle">
              — Steve LePerk
            </figcaption>
          </figure>

          <ul className="flex flex-col border-t border-outline/40">
            {site.contact.channels.map((c) => {
              const external = c.href.startsWith("http");
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group relative flex items-center justify-between gap-6 py-7 md:py-9 border-b border-outline/40"
                  >
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-500 ease-out" />

                    <div className="flex flex-col gap-2 min-w-0">
                      <span className="font-headline uppercase tracking-[0.3em] text-[11px] text-on-surface-subtle transition-colors duration-500 ease-out group-hover:text-accent group-focus-visible:text-accent">
                        {c.label}
                      </span>
                      <span className="font-headline font-bold uppercase tracking-wider text-xl md:text-2xl lg:text-[2rem] text-on-surface truncate transition-colors duration-500 ease-out group-hover:text-accent group-focus-visible:text-accent">
                        {getHandle(c.href)}
                      </span>
                    </div>

                    <span className="shrink-0 inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 text-on-surface-subtle transition-all duration-500 ease-out group-hover:text-accent group-focus-visible:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                      <ArrowUpRight size={36} strokeWidth={1.25} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
