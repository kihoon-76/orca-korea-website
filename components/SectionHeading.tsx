type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${
            isDark ? "text-mint" : "text-forest"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-3xl font-semibold leading-tight md:text-5xl ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            isDark ? "text-white/72" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
