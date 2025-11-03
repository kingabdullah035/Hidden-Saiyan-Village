import PageHero from "@/components/PageHero";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section className="py-10">
      <PageHero title="Blog" subtitle="Training knowledge from Capsule Corp labs." color="blue" />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-xs text-zinc-500 mt-1">{p.date}</p>
            <p className="text-zinc-300 mt-2">{p.excerpt}</p>
            <Link href="#" className="mt-3 inline-block text-amber-400 underline">Read more</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
