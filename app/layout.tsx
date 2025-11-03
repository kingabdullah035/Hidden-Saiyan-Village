import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Bangers, Oswald } from "next/font/google";

const bangers = Bangers({ weight: "400", subsets: ["latin"] });
const oswald = Oswald({ weight: ["400","600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saiyan Fitness",
  description: "Train beyond limits with structured programs and elite coaching.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${oswald.className} min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
