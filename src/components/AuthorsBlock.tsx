import Image from "next/image";

const possibilities = [
  { image: "/images/card-icon-cursos-online.png", label: "Cursos On-line", w: 305, h: 183 },
  { image: "/images/card-icon-treinamentos-in-company.png", label: "Treinamentos In Company", w: 304, h: 183 },
  { image: "/images/card-icon-funis-vendas.png", label: "Funis de Vendas (upsell e downsell)", w: 306, h: 185 },
  { image: "/images/card-icon-leads-qualificados.png", label: "Leads Qualificados", w: 306, h: 185 },
  { image: "/images/card-icon-palestras-workshops.png", label: "Palestras e Workshops", w: 305, h: 182 },
  { image: "/images/card-icon-consultorias.png", label: "Consultorias", w: 304, h: 182 },
  { image: "/images/card-icon-imersoes-mentorias.png", label: "Imersões e Mentorias", w: 306, h: 185 },
  { image: "/images/card-icon-iscas-digitais.png", label: "Iscas Digitais e muito mais!", w: 306, h: 185 },
];

export function AuthorsBlock() {
  return (
    <section className="w-full bg-[var(--nab-cream)] py-20 text-[var(--nab-navy-2)]">
      <div className="mx-auto max-w-5xl px-6 text-center lg:max-w-6xl">
        <h1 className="font-poppins text-2xl font-light leading-snug sm:text-4xl lg:text-5xl">
          Se você já é autor e quer{" "}
          <strong className="font-semibold">construir sua autoridade</strong> através
          de livros...
        </h1>
        <p className="mt-6 font-montserrat text-lg sm:text-xl lg:text-2xl">
          Descubra todas as{" "}
          <strong className="font-semibold">mais de 15 possibilidades</strong> de
          gerar negócios através de livros:
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
          {possibilities.map((item) => (
            <div key={item.label} className="relative w-full" style={{ aspectRatio: `${item.w} / ${item.h}` }}>
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 45vw, 22vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
