import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });

export default function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl border
        border-zinc-700/60 bg-zinc-900/60
        p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)]
      `}
    >
      {/* subtle dark falloff so it still feels premium */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 120%, rgba(0,0,0,0.85) 0%, transparent 70%)",
        }}
      />

      <div className="flex flex-col gap-4">
        {/* Title */}
        <h1
          className={`${bangers.className} text-4xl md:text-5xl font-black text-zinc-100 uppercase`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-zinc-400 max-w-2xl text-[15px] leading-snug">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        {children && (
          <div className="flex flex-wrap gap-3 pt-2">{children}</div>
        )}

        {/* Status tag */}
        <div className="inline-flex mt-3">
          <span className="px-2 py-1 rounded bg-zinc-900/70 border border-zinc-700/60 text-[11px] font-semibold tracking-wide text-zinc-300">
            Training mode: live
          </span>
        </div>
      </div>
    </div>
  );
}
