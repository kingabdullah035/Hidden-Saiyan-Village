import PageHero from "@/components/PageHero";

export default function PricingPage() {
  const tiers = [
    { name: "Base", price: "$19/mo", perks: ["Programs library", "Community"] },
    { name: "Super", price: "$39/mo", perks: ["All Base", "Coach Q&A", "Nutrition guides"] },
    { name: "Ultra", price: "$99/mo", perks: ["All Super", "Weekly 1:1 check-in"] },
  ];
  return (
    <section className="py-10">
      <PageHero title="Pricing" subtitle="Pick your transformation tier." color="green" />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-amber-400 text-2xl font-extrabold mt-2">{t.price}</p>
            <ul className="mt-3 text-zinc-300 list-disc pl-5 space-y-1">
              {t.perks.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
