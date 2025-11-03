import PageHero from "@/components/PageHero";

export default function CoachesPage() {
  const coaches = [
    { name: "Goku", certs: "CSCS, PN1", bio: "Relentless progression & mindset." },
    { name: "Vegeta", certs: "USAW, CSCS", bio: "Technical strength & intensity." },
    { name: "Gohan", certs: "NASM-CPT", bio: "Balance training for busy warriors." },
  ];
  return (
    <section className="py-10">
      <PageHero title="Coaches" subtitle="Train with the Z-Fighters of strength." color="blue" />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {coaches.map((c) => (
          <article key={c.name} className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-zinc-400 text-sm">{c.certs}</p>
            <p className="text-zinc-300 mt-2">{c.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
