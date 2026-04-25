import { site } from "@/content/site";
import MediaSlot from "@/components/ui/MediaSlot";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-surface py-28 md:py-40 border-t border-outline/40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
        <div className="md:col-span-5 lg:col-span-5 md:sticky md:top-28 flex flex-col gap-5">
          <div className="group relative w-full max-w-[440px] mx-auto aspect-[4/5]">
            <MediaSlot
              src={site.about.portraitPrimary.src}
              alt={site.about.portraitPrimary.alt}
              fill
              sizes="(min-width: 1024px) 440px, (min-width: 768px) 40vw, 90vw"
            />
          </div>
          <div className="flex flex-col gap-1 max-w-[440px] mx-auto w-full pt-6 md:pt-4">
            <p className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface">
              Steve LePerk
            </p>
            <p className="font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
              Founder — Suburban Drivers
            </p>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-10 md:gap-14">
          <SectionHeading
            id="about-heading"
            eyebrow={site.about.eyebrow}
            title={site.about.title}
          />

          <div className="flex flex-col gap-6 font-body text-base md:text-lg leading-relaxed text-on-surface-muted max-w-2xl">
            {site.about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Editorial pull-quote */}
          <blockquote className="relative pl-6 md:pl-8 border-l-2 border-accent py-2">
            <p className="font-headline uppercase tracking-[0.02em] leading-[1.15] text-on-surface text-2xl md:text-3xl lg:text-4xl max-w-2xl">
              &ldquo;Every frame is made by someone who was in the room before the camera came out.&rdquo;
            </p>
            <footer className="mt-5 font-headline uppercase tracking-[0.3em] text-[10px] text-on-surface-subtle">
              Steve LePerk — Founder, Suburban Drivers
            </footer>
          </blockquote>

          <dl className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-outline/40">
            {site.about.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="font-headline uppercase tracking-[0.25em] text-[10px] text-on-surface-subtle order-2">
                  {stat.label}
                </dt>
                <dd className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-accent leading-none order-1 tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
