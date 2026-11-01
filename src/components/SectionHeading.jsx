export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  id,
}) {
  const alignment = align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-2xl text-center";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-gold" : "text-olive"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-display text-[1.65rem] leading-tight sm:text-3xl lg:text-[2.5rem] ${eyebrow ? "mt-3" : ""} ${light ? "text-cream" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-[1.0625rem] ${light ? "text-cream/85" : "text-charcoal/80"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
