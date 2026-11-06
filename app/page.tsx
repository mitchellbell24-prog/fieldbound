import WaitlistForm from "@/components/WaitlistForm";

const benefits = [
  {
    title: "Weatherproof cover",
    body: "Waxed canvas shell shrugs off drizzle and trail dust without feeling plastic.",
  },
  {
    title: "Lay-flat binding",
    body: "Write with one hand on a rock. The spine stays open at any page.",
  },
  {
    title: "Field grid + blank",
    body: "Alternating spreads: soft grid for maps and logs, blank for sketches.",
  },
  {
    title: "Refillable core",
    body: "Keep the cover for years. Swap the 96-page insert when the season ends.",
  },
];

const specs = [
  { k: "Size", v: "A6 pocket · 4.1 × 5.8 in" },
  { k: "Paper", v: "100gsm ivory, fountain-pen friendly" },
  { k: "Cover", v: "Waxed canvas · moss or charcoal" },
  { k: "Launch", v: "Waitlist first · limited first run" },
];

export default function Home() {
  return (
    <div className="stripe min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 md:px-8">
        <a
          href="#top"
          className="focus-ring font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-charcoal"
        >
          Fieldbound
        </a>
        <a
          href="#waitlist"
          className="focus-ring rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-parchment hover:bg-ink"
        >
          Join waitlist
        </a>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-5xl gap-12 px-5 pb-16 pt-6 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
              Pocket field journal · Launch waitlist
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-charcoal md:text-6xl">
              Notes that survive the hike.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Fieldbound is a fictional sample product for Bell Solutions LLC — a
              refillable pocket journal built for trail notes, garden logs, and the
              kind of thinking that happens outdoors.
            </p>
            <div className="mt-8 rounded-3xl border border-charcoal/10 bg-white/70 p-5 shadow-sm md:p-6">
              <p className="text-sm font-semibold text-charcoal">
                Early waitlist · Founding price locked at $38
              </p>
              <p className="mt-1 text-sm text-muted">
                One offer. No tiers. Ships when the first production run clears QC.
              </p>
              <div className="mt-5">
                <WaitlistForm compact />
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 top-8 h-40 w-40 rounded-full bg-moss/15 blur-2xl" />
            <div className="absolute -right-6 bottom-10 h-48 w-48 rounded-full bg-amber/20 blur-2xl" />
            <div className="relative aspect-[3/4] rotate-[-4deg] rounded-[1.75rem] bg-gradient-to-br from-[#3f4f35] via-[#2c3826] to-[#1a2118] p-6 shadow-2xl">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-parchment/70">
                    Fieldbound
                  </p>
                  <p className="mt-6 font-[family-name:var(--font-display)] text-3xl text-parchment">
                    Season One
                  </p>
                </div>
                <div className="space-y-2 text-sm text-parchment/80">
                  <p>96 pages · refillable</p>
                  <p>Moss canvas · brass snap</p>
                  <p className="text-amber">Sample product mock</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-charcoal/10 bg-sand/60 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-charcoal md:text-4xl">
              Built for one job: write outside.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className="rounded-2xl border border-charcoal/8 bg-parchment p-6"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
                Specs
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-charcoal">
                One honest product sheet.
              </h2>
              <dl className="mt-8 space-y-4">
                {specs.map((s) => (
                  <div
                    key={s.k}
                    className="flex items-baseline justify-between gap-4 border-b border-charcoal/10 pb-3"
                  >
                    <dt className="text-sm text-muted">{s.k}</dt>
                    <dd className="text-right text-sm font-medium text-charcoal">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div
              id="waitlist"
              className="rounded-3xl bg-charcoal p-6 text-parchment md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
                Primary CTA
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold">
                Reserve founding pricing
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-parchment/75">
                Join the waitlist for the first production run. You&apos;ll get a
                single email when preorders open — no drip sequence in this sample.
              </p>
              <div className="mt-6 [&_input]:border-white/10 [&_input]:bg-white/5 [&_input]:text-parchment [&_label_span]:text-parchment/80 [&_p]:text-parchment/55 [&_select]:border-white/10 [&_select]:bg-white/5 [&_select]:text-parchment">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/10 px-5 py-8 text-center text-xs text-muted md:px-8">
        <p>© {new Date().getFullYear()} Fieldbound — fictional sample product brand.</p>
        <p className="mt-2">Sample project by Bell Solutions LLC</p>
      </footer>
    </div>
  );
}
