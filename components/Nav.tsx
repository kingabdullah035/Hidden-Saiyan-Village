"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/coaches", label: "Coaches" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800 shadow-[0_4px_30px_rgba(0,140,255,0.25)]">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="select-none">
          <span className="text-blue-400 font-extrabold text-2xl tracking-wide uppercase hover:text-red-400 transition-colors duration-300">
            HIDDEN SAIYAN VILLAGE
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-2 text-[13px] font-medium">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={
                    active
                      ? "px-3 py-2 rounded-md border border-blue-500/60 bg-blue-500/10 text-blue-300 shadow-[0_0_15px_rgba(0,140,255,0.4)]"
                      : "px-3 py-2 rounded-md border border-zinc-700/50 text-zinc-300 hover:border-red-500/50 hover:text-red-400 hover:shadow-[0_0_14px_rgba(255,0,0,0.3)] transition-colors"
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
