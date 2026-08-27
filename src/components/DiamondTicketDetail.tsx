import { Gift, Handshake, Camera, Ticket, Star, Armchair, Coffee, Users2, Gem } from "lucide-react";

const benefits = [
  { icon: Gift, label: "Kit Evento" },
  { icon: Handshake, label: "Rodada de negócios" },
  { icon: Camera, label: "Foto no palco (somente autores)" },
  { icon: Ticket, label: "Ingresso básico" },
  { icon: Star, label: "Lugar exclusivo frente ao palco" },
  { icon: Armchair, label: "Acesso ao lounge dos palestrantes" },
  { icon: Coffee, label: "Coffee break em área exclusiva" },
  { icon: Users2, label: "Networking exclusivo" },
];

export function DiamondTicketDetail() {
  return (
    <section className="w-full bg-[var(--nab-navy-1)] py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <Gem className="h-16 w-16 text-sky-400" strokeWidth={1.5} />

        <h2 className="font-poppins text-3xl font-black uppercase leading-none sm:text-4xl">
          Ingresso
          <br />
          <span className="text-sky-400">Diamante</span>
        </h2>

        <p className="font-montserrat text-sm text-white/70 sm:text-base">
          Mais acesso, mais conexão,{" "}
          <strong className="font-semibold text-white">mais autoridade</strong> no evento.
        </p>

        <div className="mt-4 w-full rounded-lg border border-sky-500/40 bg-[var(--nab-navy-2)]/60 p-6 text-left sm:p-8">
          <ul className="divide-y divide-white/10">
            {benefits.map((b) => (
              <li key={b.label} className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600">
                  <b.icon className="h-5 w-5 text-white" />
                </span>
                <span className="font-montserrat text-sm sm:text-base">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#inscricao"
          className="mt-2 inline-block rounded bg-gradient-to-b from-sky-500 to-sky-700 px-8 py-3 font-poppins font-bold uppercase tracking-wide text-white transition hover:brightness-110"
        >
          Quero o ingresso diamante!
        </a>
      </div>
    </section>
  );
}
