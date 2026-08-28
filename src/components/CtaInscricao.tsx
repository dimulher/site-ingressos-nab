const basicoItems = [
  "Kit Evento",
  "Roda de negócios",
  "Foto no palco (somente autores)",
  "Ingresso básico",
];

const diamanteItems = [
  "Kit Evento",
  "Rodada de negócios",
  "Foto no palco (somente autores)",
  "Ingresso básico",
  "Lugar exclusivo frente ao palco",
  "Acesso ao lounge dos palestrantes",
  "Coffee break em área exclusiva",
  "Networking exclusivo",
];

export function CtaInscricao() {
  return (
    <section
      className="section-bg w-full bg-[var(--nab-navy-1)] py-16 text-white"
      style={{ backgroundImage: "url(/images/cta-inscricao-bg.png)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center font-poppins text-xl font-semibold tracking-wide sm:text-3xl">
          GARANTA SUA VAGA AGORA MESMO!
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Básico */}
          <div className="overflow-hidden rounded-lg bg-[var(--nab-cream)] text-[var(--nab-navy-2)] shadow-xl">
            <div className="flex items-center justify-between bg-gradient-to-b from-red-700 to-red-900 px-6 py-5 text-white">
              <span className="font-poppins text-xl font-bold">BÁSICO</span>
              <span className="rounded-full border border-white px-3 py-1 text-xs font-semibold">
                LOTE 01
              </span>
            </div>
            <div className="p-6">
              <p className="font-poppins">
                <span className="align-top text-sm">12x</span>
                <span className="text-4xl font-bold text-red-700">R$19</span>
                <span className="text-sm">,70</span>
              </p>
              <p className="font-montserrat text-sm text-neutral-600">ou R$197,00 à vista</p>

              <ul className="mt-6 space-y-3">
                {basicoItems.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-red-800/40 px-4 py-2 font-montserrat text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://chk.eduzz.com/Q9N2V24D01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded bg-gradient-to-b from-red-700 to-red-900 py-3 text-center font-poppins font-bold uppercase text-white transition hover:brightness-110"
              >
                Quero o ingresso básico!
              </a>

              <div className="mt-4 flex justify-center gap-4 text-xs text-neutral-500">
                <span>🛡 Compra Segura</span>
                <span>🏅 Satisfação Garantida</span>
                <span>🔒 Privacidade Protegida</span>
              </div>
            </div>
          </div>

          {/* Diamante */}
          <div className="overflow-hidden rounded-lg bg-[var(--nab-cream)] text-[var(--nab-navy-2)] shadow-xl">
            <div className="flex items-center justify-between bg-[var(--nab-cream)] px-6 py-5">
              <span className="font-poppins text-xl font-bold text-[var(--nab-navy-2)]">
                DIAMANTE 💎
              </span>
              <span className="rounded-full border border-[var(--nab-navy-2)] px-3 py-1 text-xs font-semibold">
                LOTE 01
              </span>
            </div>
            <div className="bg-gradient-to-b from-sky-700 to-[var(--nab-navy-2)] p-6 text-white">
              <p className="text-center font-montserrat text-sm line-through opacity-70">
                de R$997
              </p>
              <p className="text-center font-poppins">
                <span className="align-top text-sm">12x</span>
                <span className="text-4xl font-bold">R$51</span>
                <span className="text-sm">,40</span>
              </p>
              <p className="text-center font-montserrat text-sm opacity-80">
                ou R$497,00 à vista
              </p>

              <ul className="mt-6 space-y-3">
                {diamanteItems.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-white/30 px-4 py-2 font-montserrat text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://chk.eduzz.com/E05NOZB49X"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded bg-gradient-to-b from-green-500 to-green-700 py-3 text-center font-poppins font-bold uppercase text-white transition hover:brightness-110"
              >
                Quero o ingresso diamante!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
