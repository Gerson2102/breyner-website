import { site } from "@/content/site";
import MediaSlot from "@/components/ui/MediaSlot";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full bg-surface py-24 md:py-36 border-t border-outline/40"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 mb-14 md:mb-20">
        <SectionHeading
          id="services-heading"
          eyebrow={site.services.eyebrow}
          title={site.services.sectionTitle}
        />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {site.services.items.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col gap-6"
            >
              <div className="aspect-[4/5]">
                <MediaSlot
                  src={item.placeholder}
                  alt={item.alt}
                  sizes="(min-width: 1600px) 500px, (min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-headline uppercase tracking-[0.3em] text-[11px] text-accent">
                  {item.number}
                </span>
                <h3 className="font-headline font-bold uppercase tracking-widest text-2xl md:text-3xl text-on-surface leading-[1.05]">
                  {item.title}
                </h3>
                <p className="font-body text-sm md:text-base leading-relaxed text-on-surface-muted max-w-md">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
