"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const coordinators = [
  { src: "/images/coordenadores/matheus-santos-card.png", name: "Matheus Santos" },
  { src: "/images/coordenadores/alice-correa-card.png", name: "Alice Corrêa" },
  { src: "/images/coordenadores/ariane-alves-card.png", name: "Ariane Alves" },
  { src: "/images/coordenadores/raquel-marques-card.png", name: "Raquel Marques" },
  { src: "/images/coordenadores/fran-backer-card.png", name: "Fran Backer" },
];

const AUTOPLAY_MS = 4000;

export function CoordinatorsSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % coordinators.length) + coordinators.length) % coordinators.length);
  }, []);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % coordinators.length);
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
    <section className="w-full bg-[var(--nab-navy-1)] pb-16 text-center">
      <div className="mx-auto max-w-xs px-6 lg:max-w-sm xl:max-w-md">
        <div className="relative mt-2">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image
              key={coordinators[index].src}
              src={coordinators[index].src}
              alt={`Coordenador — ${coordinators[index].name}`}
              width={711}
              height={1069}
              className="h-auto w-full"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Coordenador anterior"
            onClick={() => handleNav(index - 1)}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo coordenador"
            onClick={() => handleNav(index + 1)}
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {coordinators.map((c, i) => (
            <button
              key={c.src}
              type="button"
              aria-label={`Ir para coordenador ${i + 1}`}
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
