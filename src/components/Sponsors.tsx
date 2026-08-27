"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const sponsors = [
  { src: "/images/sponsors/rubi-mariana-soares-santos.png", name: "Mariana Soares Santos" },
  { src: "/images/sponsors/rubi-maria-divina.png", name: "Maria Divina" },
  { src: "/images/sponsors/rubi-alessiandra-daria-3.png", name: "Alessiandra Dária" },
  { src: "/images/sponsors/rubi-alessiandra-daria-2.png", name: "Alessiandra Dária" },
  { src: "/images/sponsors/rubi-alessiandra-daria-1.png", name: "Alessiandra Dária" },
];

const AUTOPLAY_MS = 4000;

export function Sponsors() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % sponsors.length) + sponsors.length) % sponsors.length);
  }, []);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % sponsors.length);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoplay]);

  const handleNav = (next: number) => {
    goTo(next);
    startAutoplay();
  };

  return (
    <section className="w-full bg-[var(--nab-navy-2)] py-16 text-center">
      <div className="mx-auto max-w-xs px-6">
        <h2 className="font-poppins text-xl font-semibold tracking-wide text-sky-400 sm:text-2xl">
          PATROCINADORES
        </h2>

        <div className="relative mt-8">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image
              key={sponsors[index].src}
              src={sponsors[index].src}
              alt={`Patrocinador Rubi — ${sponsors[index].name}`}
              width={560}
              height={700}
              className="h-auto w-full"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Patrocinador anterior"
            onClick={() => handleNav(index - 1)}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo patrocinador"
            onClick={() => handleNav(index + 1)}
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {sponsors.map((sponsor, i) => (
            <button
              key={sponsor.src}
              type="button"
              aria-label={`Ir para patrocinador ${i + 1}`}
              onClick={() => handleNav(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-sky-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
