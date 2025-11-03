export type Post = { slug: string; title: string; excerpt: string; date: string };

export async function getPosts(): Promise<Post[]> {
  // Pretend we fetched from a DB/API; server component will import this.
  return [
    {
      slug: "hypertrophy-101",
      title: "Hypertrophy 101: Progressive Overload",
      excerpt: "The Saiyan way to grow—volume, intensity, and recovery.",
      date: "2025-09-01",
    },
    {
      slug: "saiyan-nutrition",
      title: "Saiyan Nutrition Fundamentals",
      excerpt: "Macros, timing, and fueling for elite training.",
      date: "2025-09-05",
    },
    {
      slug: "deload-weeks",
      title: "Why Deload Weeks Make You Stronger",
      excerpt: "Strategic fatigue management to keep leveling up.",
      date: "2025-09-10",
    },
  ];
}
