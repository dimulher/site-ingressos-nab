export function Hero() {
  return (
    <section
      className="section-bg relative w-full bg-[url('/images/hero-mobile-v4.png')] [aspect-ratio:1122/1402] sm:bg-[url('/images/hero-desktop-v2.png')] sm:[aspect-ratio:1672/941]"
      aria-label="Novos Autores do Brasil — Networking Empresarial em Alphaville"
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
