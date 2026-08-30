import Image from "next/image";

export function SponsorCta() {
  return (
    <a
      id="patrocinadores"
      href="https://novosautoresbrasil.com.br/patrocinador-v5"
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-4 px-6 py-4 transition hover:brightness-110 sm:gap-6"
      style={{
        background:
          "linear-gradient(90deg, var(--nab-bordo-1) 0%, var(--nab-bordo-2) 100%)",
      }}
    >
      <Image
        src="/images/header-logo.png"
        alt="Novos Autores do Brasil"
        width={425}
        height={166}
        className="h-auto w-[60px] shrink-0 sm:w-[80px]"
      />
      <div className="h-10 w-px bg-white/30" />
      <div className="text-left">
        <p className="font-poppins text-base font-bold uppercase leading-tight text-white sm:text-xl">
          Seja um patrocinador
        </p>
        <p className="font-montserrat text-xs uppercase tracking-wide text-white/80 sm:text-sm">
          Clique aqui
        </p>
      </div>
    </a>
  );
}
