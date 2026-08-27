export function Hero() {
  return (
    <section
      className="section-bg relative w-full"
      style={{
        backgroundImage: "url(/images/hero-full-networking.png)",
        aspectRatio: "1672 / 941",
      }}
      aria-label="Novos Autores do Brasil — Networking Empresarial na Anhembi Morumbi"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--nab-cream) 100%)",
        }}
      />
    </section>
  );
}
