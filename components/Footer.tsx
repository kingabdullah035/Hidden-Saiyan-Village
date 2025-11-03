import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Saiyan Fitness. Train beyond limits.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-amber-400">Privacy</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
