"use client";

import { useState } from "react";

const faqs = [
  {
    q: `Para quem é o encontro "Novos Autores do Brasil"?`,
    a: "O evento foi criado para proporcionar o encontro de empresários para promover o livro dos Novos Autores do Brasil, proporcionando um networking de qualidade com conteúdo premium e interação entre participantes.",
  },
  {
    q: "Como funcionará o credenciamento?",
    a: "O credenciamento acontecerá de 8h às 8:30 e a partir disso você terá acesso a plenária gerando conexões imediatas com todos empresários do evento.",
  },
  {
    q: "Qual a diferença entre o ingresso Básico e o DIAMANTE?",
    a: "Com o ingresso Básico você terá o acesso básico ao evento com networking e conteúdo. Já o ingresso Diamante além disso, você terá acesso ao lounge dos palestrantes, Coffee break e lugar privilegiado para ativar ainda mais as conexões com empresários.",
  },
  {
    q: "Quando e onde vai ocorrer o encontro?",
    a: "O evento acontecerá na Barra da Tijuca no Espaço Fire, o endereço se encontra acima no mapa do evento.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-poppins text-xl font-semibold tracking-wide text-[var(--nab-navy-2)] sm:text-2xl">
          SAC - PERGUNTAS FREQUENTES
        </h2>

        <div className="mt-10 divide-y divide-neutral-200">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left font-montserrat text-base font-medium text-[var(--nab-gray-text)] sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span
                    className="shrink-0 text-xl text-[var(--nab-navy-2)] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 font-montserrat text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
