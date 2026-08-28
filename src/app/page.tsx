import { Hero } from "@/components/Hero";
import { DifficultySection } from "@/components/DifficultySection";
import { DividerBand } from "@/components/DividerBand";
import { SubHero } from "@/components/SubHero";
import { AuthorsBlock } from "@/components/AuthorsBlock";
import { CoordinatorsSection } from "@/components/CoordinatorsSection";
import { TurningPoint } from "@/components/TurningPoint";
import { FullImage } from "@/components/FullImage";
import { CtaInscricao } from "@/components/CtaInscricao";
import { TicketPlans } from "@/components/TicketPlans";
import { DiamondTicketDetail } from "@/components/DiamondTicketDetail";
import { Sponsors } from "@/components/Sponsors";
import { SponsorCta } from "@/components/SponsorCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <DifficultySection />
      <DividerBand />
      <SubHero />
      <CoordinatorsSection />
      <AuthorsBlock />
      <DividerBand />
      <TurningPoint />
      <FullImage />
      <CtaInscricao />
      {/* Desativado a pedido do Dede — reativar removendo o comentário quando quiser voltar */}
      {/* <TicketPlans /> */}
      {/* <DiamondTicketDetail /> */}
      <Sponsors />
      <Faq />
      <SponsorCta />
      <Footer />
    </div>
  );
}
