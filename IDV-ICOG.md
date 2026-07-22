# IDV — ICOG | Instituto de Catarata e Oftalmologia

## Marca
- **Nome:** ICOG
- **Razão social / posicionamento:** Instituto de Catarata e Oftalmologia
- **Tom:** profissional, acolhedor, confiante, humanizado
- **Território:** saúde ocular, tecnologia, precisão, referência no Tocantins (Palmas e Porto Nacional)
- **Promessa:** clareza visual com excelência médica e tecnologia de ponta

## Logo
- Horizontal (preferencial em header e rodapé)
- Versão branca para fundos escuros / gradientes
- Manter área de respiro; não distorcer; altura mínima ~40px no header

## Cores (tokens oficiais do site + uso visual)

| Token | Hex | Uso |
|---|---|---|
| Primary | `#3D6CBB` | títulos, links de menu ativos, blocos de autoridade |
| Navy (apoio) | `#1E3A5F` | headers fortes, cards escuros, contraste |
| Accent / CTA | `#8BF7AD` → `#3D6CBB` | botões (gradiente mint → azul) |
| Accent sólido | `#2EC4B6` / `#20B2AA` | ícones, labels, destaques secundários |
| Texto | `#7A7A7A` | corpo |
| Texto escuro | `#242424` / `#3A3A3A` | títulos secundários, UI |
| Fundo | `#FFFFFF` | base |
| Fundo suave | `#E8F4FB` / `#F0F7FC` | seções intercaladas, hero |
| Overlay | `rgba(61, 108, 187, 0.06–0.12)` | padrões, profundidade |

### CSS variables sugeridas
```css
:root {
  --color-primary: #3D6CBB;
  --color-navy: #1E3A5F;
  --color-accent: #8BF7AD;
  --color-teal: #2EC4B6;
  --color-text: #7A7A7A;
  --color-text-dark: #242424;
  --color-bg: #FFFFFF;
  --color-bg-soft: #E8F4FB;
  --gradient-cta: linear-gradient(90deg, #8BF7AD 0%, #3D6CBB 100%);
  --gradient-section: linear-gradient(135deg, #E8F4FB 0%, #D4EEF8 50%, #C5E8F5 100%);
}
```

## Tipografia
| Papel | Família | Peso | Notas |
|---|---|---|---|
| Display / H1–H2 | **Roboto** | 700–800 | títulos de seção |
| Apoio / subtítulos | **Roboto Slab** | 600 | opcional em destaques |
| Corpo / UI | **Roboto** | 300–400 | menu, textos, CTAs |
| Escala | H1 ~40–48px · H2 ~32–36px · Body ~17–19px · Nav ~17px | | |

> Evitar Inter/Arial/system como face principal; manter Roboto + Roboto Slab da marca.

## Formas e UI
- **Cantos:** 8–16px em cards, botões e imagens
- **Sombras:** suaves (`0 8px 24px rgba(30,58,95,0.08)`) — profundidade clínica, sem glow
- **Padrão de marca:** círculos concêntricos / “íris” em baixa opacidade no hero e seções soft
- **Botões:** retangulares arredondados; CTA primário em gradiente accent→primary; texto escuro ou branco conforme contraste
- **Cards:** permitidos em serviços, depoimentos e interação — não no hero como layout principal
- **Ícones:** linha/outline em teal, estilo médico limpo

## Fotografia
- Médicos em jaleco, sorriso, ambiente clínico iluminado
- Close de olhos / procedimentos (cirurgias)
- Interiores do consultório (galeria)
- Retratos da equipe com fundo limpo / logo sutil
- Evitar stock genérico; priorizar imagens reais do instituto

## Motions (2–3 intencionais)
1. Fade-up suave dos textos do hero e seções ao entrar no viewport
2. Hover leve em cards (elevação + sombra)
3. Transição de CTA (brilho/deslocamento do gradiente) no hover

## Não fazer
- Tema roxo / indigo genérico de IA
- Fundo cream + serif terracotta
- Layout jornal / hairlines densas
- Cards flutuantes no hero com badges/stickers
- Emojis em UI

## Variante dark (landing atual)
| Token | Hex | Uso |
|---|---|---|
| Background | `#070E1A` | base + gradiente de página |
| Deep | `#050A14` | header/footer |
| Surface | `#0F1C2E` | seções elevadas |
| Primary | `#4F82D1` / `#3D6CBB` | luz azul, links |
| Accent | `#8BF7AD` | CTAs, ícones, glows |
| Teal | `#2EC4B6` | luz secundária |
| Heading | `#E6EEF9` | títulos |
| Texto | `#E8EEF5` / `#8B9CB3` | corpo / muted |

Luzes: orbs com blur (primary/accent/teal), anéis íris luminosos, cards com borda glow e CTA com halo mint→azul.
