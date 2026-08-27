import Image from "next/image";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";

export function TurningPoint() {
  return (
    <section
      className="section-bg w-full bg-[var(--nab-navy-1)] py-16 text-white"
      style={{ backgroundImage: "url(/images/cta-3block-bg.png)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-poppins text-2xl sm:text-3xl">
          AQUI É O SEU <strong className="font-semibold">PONTO DE VIRADA!</strong>
        </h2>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-lg bg-[var(--nab-navy-2)] text-left shadow-xl sm:grid-cols-2">
          <div className="flex flex-col gap-6 p-8">
            <h3 className="font-poppins text-xl sm:text-2xl">
              HORA DE <strong className="font-semibold">AVANÇAR!</strong>
            </h3>

            <div className="flex items-center gap-3">
              <CalendarDays className="h-8 w-8 shrink-0 text-red-600" />
              <p className="font-montserrat text-lg leading-tight">
                <strong className="font-semibold">08/09</strong>
                <br />
                DAS 08 ÀS 20H
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 shrink-0 text-red-600" />
              <p className="font-montserrat text-lg leading-tight">
                <strong className="font-semibold">VITALFLEX</strong>
                <br />
                Alameda Caiapós, 673 — Tamboré, Barueri
                <br />
                Alphaville — São Paulo, CEP 06460-110
              </p>
            </div>

            <div className="flex items-center gap-3 rounded border border-[var(--nab-bordo-2)] bg-black/20 p-4">
              <Sparkles className="h-8 w-8 shrink-0 text-[var(--nab-bordo-2)]" />
              <p className="font-montserrat text-base leading-tight">
                <strong className="font-poppins font-semibold uppercase tracking-wide">
                  Evento de Gala
                </strong>
                <br />
                Um encontro de autoridade, propósito e celebração.
              </p>
            </div>

            <a
              href="#inscricao"
              className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded bg-gradient-to-b from-green-500 to-green-700 px-6 py-3 font-poppins font-bold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Quero me inscrever! ⟷
            </a>
          </div>

          <div className="relative min-h-[260px] w-full sm:min-h-full">
            <Image
              src="/images/venue-map-vitalflex.png"
              alt="Mapa do local do evento — VITALFLEX, Alameda Caiapós, 673, Tamboré, Barueri"
              fill
              sizes="(max-width: 640px) 100vw, 424px"
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="mt-16 font-poppins text-2xl sm:text-3xl">
          <strong className="font-semibold">HOTÉIS</strong> NA REGIÃO
        </h2>
      </div>
    </section>
  );
}
