import Image from "next/image";

export function FullImage() {
  return (
    <section className="w-full">
      <Image
        src="/images/full-image-bg.png"
        alt="Novos Autores do Brasil"
        width={1600}
        height={700}
        className="h-auto w-full object-cover"
      />
    </section>
  );
}
