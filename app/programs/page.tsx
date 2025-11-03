import PageHero from "@/components/PageHero";

export default function ProgramsPage() {
  const items = [
    { name: "Saiyan Foundations", desc: "3 days/week full-body strength." },
    { name: "Super Saiyan Hypertrophy", desc: "Push/Pull/Legs 6 days/week." },
    { name: "Ultra Instinct Conditioning", desc: "Intervals + circuits, 4 days/week." },
  ];
  return (
    <section className="py-10">
      <PageHero title="Programs" subtitle="Choose your path to Super Saiyan." color="gold" />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.name} className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-zinc-300 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
