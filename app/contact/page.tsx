import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <section className="py-10">
      <PageHero title="Contact" subtitle="Ping us with your scouter or email." color="gold" />
      <form className="mt-6 grid gap-3 max-w-md">
        <input placeholder="Name" className="rounded-md bg-black border border-zinc-700 px-3 py-2" />
        <input placeholder="Email" className="rounded-md bg-black border border-zinc-700 px-3 py-2" />
        <textarea placeholder="Message" className="rounded-md bg-black border border-zinc-700 px-3 py-2 h-28" />
        <button type="button" className="rounded-md bg-amber-500 text-black font-semibold px-4 py-2 w-fit">Send</button>
      </form>
    </section>
  );
}
