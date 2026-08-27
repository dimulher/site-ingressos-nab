# Page Topology — novosautoresbrasil.com.br (Evento v5)

Site gerado via Builderall (page builder). Conteúdo majoritariamente em imagens (texto embutido nos PNGs), típico de landing page de evento/funil brasileiro. 13 seções, ordem vertical simples (sem sticky nav complexo, sem tabs client-side).

## Stack de fontes (custom, via FontList.css)
- poppins (regular)
- poppins semibold
- poppins extralight / extralight italic
- Montserrat
- formulalight
- soraregular / soralight
- bevietnam
→ Aproximação no clone: Poppins + Montserrat (Google Fonts), pesos 300/400/600/700.

## Paleta extraída (computed colors, amostra)
- Preto: rgb(0,0,0)
- Cinza escuro texto: rgb(33,37,41)
- Branco: rgb(255,255,255)
- Creme/bege: rgb(245,245,217)
- Navy escuro 1: rgb(0,20,38)  → #001426
- Navy escuro 2: rgb(0,27,54) → #001B36

## Seções (topo → rodapé)

| # | id (builder) | Tipo | Conteúdo |
|---|---|---|---|
| 0-1 | 1744918455469 / 1740113384000 | Header/hero bg wrapper | bg full-bleed (mesma imagem bb0517...png) |
| 2 | 1720816140160 | Hero | Headline "se você tem dificuldade de..." + H2 "Participe para alcançar seu próximo nível!..." + 6 imagens (parceiros/prova social) |
| 3 | 1720882519765 | Faixa decorativa | bg 12614656.png |
| 4 | 1720816569535 | Sub-hero | bg 12613444.png + "Grandes empresários reunidos para promover autoridade e gerar networking com novos autores do Brasil" |
| 5 | 1720883146631 | Texto autores | "Se você já é autor e quer construir sua autoridade através de livros..." + "mais de 15 possibilidades de gerar negócios através de livros" |
| 6 | 1720883864520 | Faixa decorativa | bg 12614656.png (repete) |
| 7 | 1720884226740 | Bloco 3 CTAs | bg 12614711.png + "AQUI É O SEU PONTO DE VIRADA!" / "HORA DE AVANÇAR!" / "HOTÉIS NA REGIÃO" |
| 8 | 1720884367756 | Imagem full | bg 12614926.png |
| 9 | 1720888096510 | CTA inscrição | bg 12614960.png + "GARANTA SUA VAGA AGORA MESMO!" / "Não Perca Tempo! As vagas são limitadas..." |
| 10 | 1740113393000 | Patrocinadores | "PATROCINADORES" + logos em slider/galeria |
| 11 | 1720888661644 | FAQ | "SAC - PERGUNTAS FREQUENTES" — accordion 4 perguntas (click-driven, mdi chevron icon) |
| 12 | 1720889670500 | Footer | bg 12614992.png |

## Interação
- FAQ: accordion clique-para-abrir (ícone mdi chevron-down, rotaciona). Estado inicial: todos fechados.
- Sliders de "provas sociais"/patrocinadores: galeria com classes `slider-image-N slider-gallery-out-left/in-right` → carrossel automático (time-driven) trocando imagens a cada poucos segundos, transição slide lateral.
- Sem sticky header perceptível nesta versão (v5).

## Responsivo
- Full-bleed images escalam por largura (background-size cover ou img responsive). Mobile empilha mesma ordem de seções, imagens redimensionam para 100vw.
