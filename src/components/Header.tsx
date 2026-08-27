import Image from "next/image";

const NOTCH_CLIP_PATH =
  "polygon(0 0, 100% 0, 100% 100%, 71.9% 100%, 69.8% 71.2%, 28.6% 71.2%, 27.1% 100%, 0 100%)";

export function Header() {
  return (
    <header
      className="relative z-10 flex w-full items-center justify-center"
      style={{
        aspectRatio: "1672 / 178",
        marginBottom: "-3.065%",
        background:
          "linear-gradient(90deg, var(--nab-bordo-1) 0%, var(--nab-bordo-2) 100%)",
        clipPath: NOTCH_CLIP_PATH,
      }}
    >
      <Image
        src="/images/header-logo.png"
        alt="Novos Autores do Brasil"
        width={425}
        height={166}
        priority
        className="h-auto w-[9%] min-w-[52px]"
      />
    </header>
  );
}
