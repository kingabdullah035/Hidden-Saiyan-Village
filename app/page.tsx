// import Link from "next/link";
// import Image from "next/image";
// import BMICalculator from "@/components/BMICalculator";
// import PageHero from "@/components/PageHero";
// import { Bangers } from "next/font/google";
// const bangers = Bangers({ weight: "400", subsets: ["latin"] });

// export default function HomePage() {
//   return (
//     <section className="py-12">
//       <PageHero
//         title="Become Your Saiyan Self"
//         subtitle="Science-based programs, battle-tested coaching, and a community raising their power levels."
//         color="gold"
//       >
//         <div className="mt-6 flex items-center gap-3">
//           <Link href="/programs" className="px-5 py-3 rounded-full bg-amber-500 text-black font-semibold">
//             View Programs
//           </Link>
//           <Link href="/pricing" className="px-5 py-3 rounded-full border border-zinc-700">
//             Pricing
//           </Link>
//         </div>
//       </PageHero>

//       {/* WHY + BMI */}
//       <div className="mt-10 grid md:grid-cols-2 gap-6">
//         <div className="rounded-2xl border border-zinc-800 p-6">
//           <h2 className="text-xl font-semibold">Why Saiyan Fitness?</h2>
//           <ul className="mt-3 list-disc pl-5 text-zinc-300 space-y-1">
//             <li>Periodized training (strength, hypertrophy, conditioning)</li>
//             <li>Coach feedback & weekly check-ins</li>
//             <li>Nutrition templates & habit tracking</li>
//           </ul>
//           <Link href="/coaches" className="inline-block mt-4 text-amber-400 underline">
//             Meet the coaches →
//           </Link>
//         </div>
//         <BMICalculator />
//       </div>

//       {/* GOKU */}
//       <div className="mt-12">
//         <h2 className={`${bangers.className} text-3xl md:text-4xl mb-6 text-amber-400 text-outline`}>
//         </h2>
//         <div className="grid md:grid-cols-2 gap-6">
//         <article className="relative overflow-hidden rounded-3xl border border-blue-500/30 aura-blue">
//             <Image
//               src="/characters/goku.png"
//               alt="Goku charging up"
//               width={1200}
//               height={1000}
//               className="h-[600px] w-full object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//             <div className="absolute bottom-4 left-4">
//               <h3 className={`${bangers.className} text-3xl text-blue-400 text-outline`}>Goku</h3>
//               <p className="text-zinc-200 max-w-md">
//                 {/* Relentless progression. Train with joy, recover hard, repeat. */}
//               </p>
//             </div>
//           </article>


//           {/* Itachi  */}
//           <article className="relative overflow-hidden rounded-3xl border border-red-500/30 aura-red">
//               <Image
//                 src="/characters/itachi.png"
//                 alt="Itachi with red aura"
//                 width={1200}
//                 height={1200}
//                 className="h-[600px] w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-4 left-4">
//                 <h3 className={`${bangers.className} text-3xl text-red-400 text-outline`}>Itachi</h3>
//                 <p className="text-zinc-200 max-w-md">
//                   {/* Silent power. Genius in the shadows, burdened by love. */}
//                 </p>
//               </div>
//             </article>

//         </div>
//       </div>
//     </section>
//   );
// }



import Link from "next/link";
import Image from "next/image";
import BMICalculator from "@/components/BMICalculator";
import PageHero from "@/components/PageHero";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
  return (
    <section className="py-12">
      {/* HERO / INTRO */}
      <PageHero
          title="WELCOME TO THE HIDDEN SAIYAN VILLAGE"
          subtitle="Where discipline meets evolution and strength has no ceiling."
        >
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <Link href="/programs" className="btn-blue">
              View Programs
            </Link>

            <Link href="/pricing" className="btn-red">
              Pricing
            </Link>
          </div>
        </PageHero>


      {/* WHY + BMI */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-6 shadow-[0_0_40px_rgba(0,140,255,0.12),0_0_80px_rgba(255,0,0,0.08)]">
          <h2 className="text-xl font-semibold text-white flex items-baseline gap-2">
            <span>Why Train With Us?</span>
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide">
              Village Briefing
            </span>
          </h2>

          <ul className="mt-3 list-disc pl-5 text-zinc-300 space-y-2 text-[14px] leading-snug">
            <li>Strength, hypertrophy, and conditioning phases that actually build power — not fluff.</li>
            <li>Coach check-ins so you don’t fall off. Accountability like squad captains, not gym bros.</li>
            <li>Nutrition frameworks and habits that keep you locked in outside the gym, not just in it.</li>
          </ul>

          <Link
            href="/coaches"
            className="inline-block mt-4 text-blue-400 text-[14px] hover:text-red-400 transition-colors underline decoration-blue-400 hover:decoration-red-500">
            Meet your squad →
          </Link>
        </div>

        {/* BMI CARD */}
        <BMICalculator />
      </div>

      {/* CHARACTER CARDS */}
      <div className="mt-12">
        <h2
          className={`${bangers.className} text-3xl md:text-4xl mb-6 text-amber-400 text-outline`}
        >
          {/* you can put a mini section label here later like "Current Elite Roster" */}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GOKU CARD */}
          <article className="relative overflow-hidden rounded-3xl border border-blue-500/30 aura-blue">
            <Image
              src="/characters/goku.png"
              alt="Goku charging up"
              width={1200}
              height={1000}
              className="h-[600px] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3
                className={`${bangers.className} text-3xl text-blue-400 text-outline`}
              >
                Goku
              </h3>
              <p className="text-zinc-200 max-w-md">
                {/* Relentless progression. Train with joy, recover hard, repeat. */}
              </p>
            </div>
          </article>

          {/* ITACHI CARD */}
          <article className="relative overflow-hidden rounded-3xl border border-red-500/30 aura-red">
            <Image
              src="/characters/itachi.png"
              alt="Itachi with crimson chakra"
              width={1200}
              height={1200}
              className="h-[600px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3
                className={`${bangers.className} text-3xl text-red-400 text-outline`}
              >
                Itachi
              </h3>
              <p className="text-zinc-200 max-w-md">
                {/* Silent power. Genius in the shadows, burdened by love. */}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
