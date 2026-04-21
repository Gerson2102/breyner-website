import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  accent?: boolean;
  className?: string;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  accent = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <header
      id={id}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="font-headline text-[11px] md:text-xs uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-headline uppercase leading-[0.95] tracking-widest",
          accent ? "text-accent" : "text-on-surface",
          "text-4xl md:text-6xl lg:text-7xl"
        )}
      >
        {title}
      </h2>
    </header>
  );
}
