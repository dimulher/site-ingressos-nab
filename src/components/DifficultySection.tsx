import Image from "next/image";

const badgesRow1 = ["/images/hero-02.png", "/images/hero-03.png", "/images/hero-05.png"];
const badgesRow2 = ["/images/hero-04.png", "/images/hero-06.png"];

export function DifficultySection() {
  return (
    <section className="relative w-full bg-[var(--nab-cream)] pt-10 pb-14 text-center text-[var(--nab-navy-2)] sm:pt-12">
      <a
        href="#inscricao"
        className="absolute left-1/2 top-0 z-10 inline-block -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/images/hero-01.png"
          alt="Quero me inscrever"
          width={430}
          height={105}
          className="mx-auto h-auto w-[270px] drop-shadow-xl transition hover:scale-105 sm:w-[320px]"
        />
      </a>

      <div className="mx-auto max-w-3xl px-6 lg:max-w-4xl xl:max-w-5xl">
        <h1 className="mt-6 font-poppins text-3xl sm:text-4xl lg:text-5xl">
          se você tem <strong className="font-semibold">dificuldade</strong> de...
        </h1>

        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-4 lg:gap-6">
          {badgesRow1.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={300}
              height={99}
              className="h-auto w-[280px] sm:w-[230px] lg:w-[260px]"
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-stretch justify-center gap-4 lg:gap-6">
          {badgesRow2.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={300}
              height={100}
              className="h-auto w-[280px] sm:w-[230px] lg:w-[260px]"
            />
          ))}
        </div>

        <p className="mt-10 font-montserrat text-lg leading-relaxed sm:text-xl lg:text-2xl lg:leading-relaxed">
          Participe para alcançar seu próximo nível! Grandes empresários reunidos para{" "}
          <strong className="font-semibold">
            promover autoridade e gerar networking
          </strong>{" "}
          <em>com Novos Autores do Brasil.</em>
        </p>
      </div>
    </section>
  );
}
