# design.md — Site NAB Evento (clone de novosautoresbrasil.com.br)

## Origem
Clone do funil de evento "Novos Autores do Brasil | Evento v5", originalmente gerado em Builderall (page builder), URL: https://novosautoresbrasil.com.br/. Reconstruído em Next.js 16 + Tailwind CSS v4 para ser editável e hospedável fora do Builderall.

## Cores
- Navy escuro 1: `#001426` (rgb(0,20,38))
- Navy escuro 2: `#001b36` (rgb(0,27,54)) — usado em botões/CTA
- Creme/bege: `#f5f5d9` (rgb(245,245,217))
- Preto: `#000000`
- Cinza texto: `#212529`
- Branco: `#ffffff`

Tokens em `src/app/globals.css` (`--nab-navy-1`, `--nab-navy-2`, `--nab-cream`, `--nab-gray-text`).

## Fontes
Original usa fontes customizadas via `FontList.css` (poppins, poppins semibold/extralight, Montserrat, formulalight, soraregular/soralight, bevietnam) — não distribuídas publicamente, então o clone aproxima com:
- **Poppins** (300/400/600/700) — títulos e destaques
- **Montserrat** (300/400/600/700) — corpo de texto, subtítulos

Configuradas via `next/font/google` em `src/app/layout.tsx`.

## Layout
Página única (single scroll), sem navbar sticky nem menu — seguindo o original. Ordem das seções (topo → rodapé):

1. **Hero** — bg full-bleed + headline + 6 imagens de prova social
2. **DividerBand** — faixa decorativa fina full-width
3. **SubHero** — bg navy + headline centralizado
4. **AuthorsBlock** — texto sobre autoria (fundo branco)
5. **DividerBand** (repete)
6. **TurningPoint** — 3 blocos de texto sobre bg navy ("PONTO DE VIRADA", "HORA DE AVANÇAR", "HOTÉIS NA REGIÃO")
7. **FullImage** — imagem full-width
8. **CtaInscricao** — bg navy + CTA "GARANTA SUA VAGA AGORA MESMO!"
9. **Sponsors** — seção "PATROCINADORES" (fundo branco)
10. **Faq** — accordion "SAC - Perguntas Frequentes" (client-driven, clique para abrir/fechar, 4 perguntas)
11. **Footer** — bg navy, copyright

## Regras
- Nunca usar `prefers-reduced-motion` para desabilitar as transições do FAQ.
- Backgrounds full-bleed usam `background-size: cover` via classe utilitária `.section-bg`.
- Ao adicionar CTAs reais (WhatsApp/Cakto/checkout), seguir padrão de botão branco pill já usado em `CtaInscricao.tsx`.
- Assets originais em `public/images/` (baixados do CDN Builderall — trocar por versões próprias quando o Dede fornecer material de marca atualizado).

## Pendências / gaps conhecidos
- **Slider de patrocinadores/prova social**: o original tem um carrossel automático (time-driven) com classes `slider-image-N slider-gallery-out-left/in-right`; o clone atual renderiza os logos de forma estática (sem rotação automática) — pendente implementar carrossel se o cliente quiser fidelidade total.
- Logos reais dos patrocinadores não foram extraídos individualmente (apareciam só como texto "PATROCINADORES" sem imagens visíveis no DOM at the time da extração — pode estar atrás de lazy-load/carrossel).
- `section-0-1-bg.png` (9MB) é pesado — recomendo otimizar/comprimir antes de deploy.
- Nenhum formulário de inscrição real conectado ainda (CTA aponta para `#inscricao` placeholder).
