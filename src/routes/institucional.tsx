import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Eye,
  Microscope,
  FileText,
  Contact,
  ShieldCheck,
  MapPin,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import consultorio1 from "@/assets/6-consultorio/consultorio-1.png";
import consultorio2 from "@/assets/6-consultorio/consultorio-2.png";
import consultorio3 from "@/assets/6-consultorio/consultorio-3.png";
import consultorio4 from "@/assets/6-consultorio/consultorio-4.png";
import logoIcog from "@/assets/shared/brand/logo-icog-horizontal-branco.png";
import logoTreTo from "@/assets/4-convenios/tre-to.png";
import logoPostalSaude from "@/assets/4-convenios/postal-saude.png";
import logoServir from "@/assets/4-convenios/servir.png";
import logoIpasgu from "@/assets/4-convenios/ipasgu.png";
import drRafael from "@/assets/5-equipe/dr-rafael-lopes.png";
import drRafaelTerno from "@/assets/5-equipe/dr-rafael-lopes-terno.png";
import drThiago from "@/assets/5-equipe/dr-thiago-nogueira.png";
import draUlliane from "@/assets/5-equipe/dra-ulliane-sena.png";
import imgHero from "@/assets/1-hero/imagem-hero.webp";
import bgEye from "@/assets/shared/bg.png";
import bgEsquerda from "@/assets/1-hero/bg-esquerda.png";
import bg2 from "@/assets/2-cirurgias/bg-2.png";
import imgSecaoCirurgias from "@/assets/2-cirurgias/imagem-secao-cirurgias.webp";
import imgAtendimentoConsultorio from "@/assets/3-pilares/atendimento-consultorio.png";
import imgRealizandoExames from "@/assets/3-pilares/realizando-exames.png";
import imgLaudoOftalmologico from "@/assets/3-pilares/laudo-oftalmologico.png";
import imgCirurgias from "@/assets/3-pilares/cirurgias.png";

export const Route = createFileRoute("/institucional")({
  component: LandingPage,
});

const WHATSAPP_NUMBER = "556392580225";
const WHATSAPP_DEFAULT_MSG =
  "Olá, gostaria de agendar uma consulta no ICOG, por favor.";

function whatsappUrl(message = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_URL = whatsappUrl();

const consultorioImages = [
  { src: consultorio1, alt: "Consultório ICOG — ambiente 1" },
  { src: consultorio2, alt: "Consultório ICOG — ambiente 2" },
  { src: consultorio3, alt: "Consultório ICOG — ambiente 3" },
  { src: consultorio4, alt: "Consultório ICOG — ambiente 4" },
];

const pillarImages = [
  { src: imgAtendimentoConsultorio, alt: "Consultas oftalmológicas" },
  { src: imgRealizandoExames, alt: "Exames oftalmológicos" },
  { src: imgLaudoOftalmologico, alt: "Laudos especiais" },
  { src: imgCirurgias, alt: "Cirurgias oftalmológicas" },
];

const convenioLogos = [
  { src: logoPostalSaude, alt: "Postal Saúde" },
  { src: logoTreTo, alt: "TRE-TO" },
  { src: logoServir, alt: "Servir — Saúde para quem cuida do Tocantins" },
  { src: logoIpasgu, alt: "IPASGU — Instituto de Assistência dos Servidores de Gurupi" },
];

const reviews = [
  {
    name: "Ozivaldo Evangelista",
    date: "14/04/2025",
    text: "Excelente atendimento, com simpatia e presteza",
  },
  {
    name: "Maria Luiza Braga",
    date: "04/02/2025",
    text: "Lugar maravilhoso, pessoal educado, o doutor é um ótimo profissional, retornarei e indicarei para as pessoas.",
  },
  {
    name: "Silvana Sotero",
    date: "30/01/2025",
    text: "Parabéns, ao Dr. Rafael. Super atencioso e de confiança.",
  },
  {
    name: "UltraCetrus23 2023",
    date: "24/12/2024",
    text: "Ótimos profissionais com um excelente atendimento",
  },
  {
    name: "Raquel Lobo",
    date: "23/12/2024",
    text: "Fui atendida na clínica pela Dra Ulliane, profissional de competência e que me atendeu com muita empatia. Parabéns pela clínica e pelos profissionais que trabalham aí.",
  },
  {
    name: "KARINE MAIA MACHADO",
    date: "23/12/2024",
    text: "Minha experiência no ICOG foi muito positiva. O atendimento foi excelente, com profissionais atenciosos e bem preparados. A infraestrutura é moderna e limpa. Recomendo a todos que buscam cuidados oftalmológicos.",
  },
  {
    name: "Natalia Coimbra",
    date: "23/12/2024",
    text: "Excelentes profissionais!",
  },
  {
    name: "Ivanilde Silva",
    date: "23/12/2024",
    text: "Clínica linda e moderna e doutores muito atenciosos. Adorei!!!",
  },
];

function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#FBBC05"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => w.length > 1 && !/^\d+$/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryApi, setGalleryApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!galleryApi || !galleryOpen) return;
    galleryApi.scrollTo(galleryIndex, true);
  }, [galleryApi, galleryIndex, galleryOpen]);

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const nav = [
    { href: "#home", label: "Home" },
    { href: "#convenios", label: "Planos de Saúde" },
    { href: "#sobre", label: "Sobre" },
    { href: "#equipe", label: "Profissionais" },
    { href: "#localizacao", label: "Localização" },
  ];

  const services = [
    {
      icon: Eye,
      title: "Consultas Oftalmológicas",
      text: "Diagnóstico completo e acompanhamento personalizado, com médicos especialistas prontos para cuidar da saúde dos seus olhos em todas as fases da vida.",
    },
    {
      icon: Microscope,
      title: "Exames Oftalmológicos",
      text: "Equipamentos modernos para exames precisos, que garantem diagnósticos rápidos e confiáveis para o seu tratamento.",
    },
    {
      icon: FileText,
      title: "Laudos Especiais",
      text: "Laudos técnicos elaborados com rigor e agilidade, atendendo às exigências de convênios, concursos e demais finalidades.",
    },
    {
      icon: Contact,
      title: "Adaptação de Lente de Contato",
      text: "Acompanhamento especializado para encontrar a lente ideal para o seu grau, seu conforto e sua rotina.",
    },
  ];

  const team = [
    {
      photo: drRafael,
      name: "Dr. Rafael Lopes de Souza",
      role: "Médico Oftalmologista | Especialista em Cirurgia de Catarata",
      crm: "CRM TO 5557 | RQE 2607",
      bio: "Fundador do Instituto ICOG, une experiência, precisão cirúrgica e uma visão inovadora para transformar o cuidado com a visão no Tocantins.",
    },
    {
      photo: drThiago,
      name: "Dr. Thiago Nogueira Alves",
      role: "Oftalmologista Geral | Especialista em Catarata",
      crm: "CRM TO 6270 | RQE 2978",
      bio: "Atua com excelência no diagnóstico e tratamento clínico e cirúrgico da catarata, trazendo segurança e qualidade de vida aos pacientes.",
    },
    {
      photo: draUlliane,
      name: "Dra. Ulliane de Sena Rabelo",
      role: "Oftalmologista Geral | Especialista em Glaucoma",
      crm: "CRM TO 4554 | RQE 3787",
      bio: "Referência em glaucoma, combina conhecimento técnico e sensibilidade no acompanhamento de doenças oculares crônicas.",
    },
  ];

  const pillars = [
    {
      title: "Consultas",
      cta: "Agende sua consulta",
      msg: "Olá, gostaria de agendar uma consulta no ICOG, por favor.",
    },
    {
      title: "Exames",
      cta: "Agende seu exame",
      msg: "Olá, gostaria de agendar um exame no ICOG, por favor.",
    },
    {
      title: "Laudos",
      cta: "Solicite seu laudo",
      msg: "Olá, gostaria de solicitar um laudo no ICOG, por favor.",
    },
    {
      title: "Cirurgias",
      cta: "Agende sua avaliação",
      msg: "Olá, gostaria de agendar uma avaliação cirúrgica no ICOG, por favor.",
    },
  ];

  return (
    <div id="home" className="min-h-screen relative">
      {/* Ambient lights */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="light-orb glow-pulse top-[-10%] left-[10%] h-[420px] w-[420px] bg-primary/40" />
        <div className="light-orb glow-pulse top-[35%] right-[-5%] h-[360px] w-[360px] bg-accent/25 [animation-delay:2s]" />
        <div className="light-orb glow-pulse bottom-[10%] left-[30%] h-[300px] w-[300px] bg-teal/20 [animation-delay:4s]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-deep/70 backdrop-blur-xl border-b border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img
              src={logoIcog}
              alt="ICOG — Instituto de Catarata e Oftalmologia"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink/85 hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+556392580225"
            className="hidden md:flex items-center gap-2 text-ink font-semibold hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4 text-accent" />
            <span className="text-sm">(63) 9258-0225 – Palmas</span>
          </a>

          <button
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-ink"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-primary/20 bg-deep/95 backdrop-blur-xl">
            <nav className="px-4 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-ink py-2"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+556392580225"
                className="flex items-center gap-2 text-ink font-semibold pt-2 border-t border-primary/20 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">(63) 9258-0225 – Palmas</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <div className="bg-offwhite">
        <section className="relative overflow-hidden rounded-b-3xl lg:h-[min(70svh,820px)] lg:min-h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${bgEsquerda})` }}
            aria-hidden
          />

          {/* Imagem — desktop: 50% da tela */}
          <div className="absolute inset-y-0 right-0 z-[1] hidden w-1/2 items-center justify-start pl-2 pr-6 py-8 lg:flex">
            <img
              src={imgHero}
              alt="ICOG — visão e cuidado oftalmológico"
              className="h-[99%] w-auto max-w-full object-contain"
            />
          </div>

          {/* Texto — container da página */}
          <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:h-full lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="fade-up text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] !text-[#E6EEF9] drop-shadow-[0_0_40px_rgba(61,108,187,0.35)]">
                Enxergue o mundo com mais clareza
              </h1>
              <p className="mt-6 text-lg text-muted-ink max-w-xl leading-relaxed mx-auto lg:mx-0">
                No ICOG, tecnologia de ponta, exames precisos e uma equipe médica especializada
                trabalham juntos para cuidar da sua visão com a excelência que os seus olhos merecem.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta">
                  Agende sua consulta em Palmas <WhatsAppIcon className="btn-cta-wa h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-xs items-center justify-center sm:max-w-sm lg:invisible lg:pointer-events-none lg:max-w-lg">
              <img
                src={imgHero}
                alt="ICOG — visão e cuidado oftalmológico"
                className="h-auto w-full object-contain lg:hidden"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Serviços — seção 2 */}
      <section id="servicos" className="section-light py-16 md:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <article key={s.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-primary/10 text-primary mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-heading-light">{s.title}</h3>
                <p className="mt-3 text-sm text-body-light leading-relaxed flex-1">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cirurgias — seção 3 */}
      <section id="cirurgias" className="section-light relative overflow-visible pt-6 md:pt-10 pb-24 md:pb-32">
        {/* Conteúdo — container da página, 2 colunas (direita só reserva espaço) */}
        <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Imagem — 50% da coluna direita, centralizada no box */}
          <div className="pointer-events-none absolute inset-y-0 right-4 z-[3] hidden w-1/2 items-center justify-center sm:right-6 lg:flex lg:right-8">
            <img
              src={imgSecaoCirurgias}
              alt="Cirurgias oftalmológicas no ICOG"
              className="h-auto max-h-[110%] w-auto max-w-[115%] scale-110 object-contain"
              loading="lazy"
            />
          </div>

          <div className="border-gradient-icog">
            <div
              className="bg-eye overflow-hidden rounded-[calc(1.5rem-2px)]"
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <div className="grid min-h-[min(70svh,560px)] grid-cols-1 items-center lg:grid-cols-2">
                <div className="flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 md:py-10 lg:items-start lg:px-10 lg:text-left xl:px-16">
                  <h2 className="text-3xl sm:text-4xl font-bold !text-[#E6EEF9] leading-tight">
                    Cirurgias oftalmológicas com segurança e alta tecnologia
                  </h2>
                  <p className="mt-6 text-muted-ink leading-relaxed">
                    Do diagnóstico à recuperação, o ICOG oferece toda a estrutura para procedimentos
                    cirúrgicos com precisão, segurança e cuidado humanizado — incluindo cirurgia de
                    catarata e glaucoma, especialidades de referência do instituto.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                    className="btn-cta mt-8"
                  >
                    Agende sua avaliação cirúrgica <WhatsAppIcon className="btn-cta-wa h-4 w-4 shrink-0" />
                  </a>
                </div>

                <div className="relative mx-auto flex w-full items-center justify-center px-4 pb-6 lg:invisible lg:pointer-events-none lg:aspect-square lg:max-w-md lg:p-6">
                  <img
                    src={imgSecaoCirurgias}
                    alt="Cirurgias oftalmológicas no ICOG"
                    className="h-auto w-full object-contain lg:hidden lg:max-h-[85%] lg:max-w-[85%]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tudo para sua visão — seção 4 */}
      <div className="bg-offwhite">
        <section
          className="content-panel-dark bg-eye overflow-hidden rounded-3xl py-16 md:py-24"
          style={{ backgroundImage: `url(${bgEye})` }}
        >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl mx-auto">
              Tudo para sua visão em um só lugar
            </h2>
            <p className="mt-5 text-muted-ink max-w-2xl mx-auto leading-relaxed">
              Consultas, exames, laudos e cirurgias reunidos em um só espaço, pensado para tornar o
              cuidado com os seus olhos mais simples, rápido e completo.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className="relative flex min-h-[294px] flex-col justify-end overflow-hidden rounded-2xl sm:min-h-[336px] lg:min-h-[364px]"
              >
                <img
                  src={pillarImages[i].src}
                  alt={pillarImages[i].alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-transparent"
                  aria-hidden
                />
                <div className="relative z-[1] flex flex-col items-center px-4 pb-6 pt-24 text-center">
                  <h3 className="text-xl font-bold !text-[#E6EEF9] drop-shadow-sm">{p.title}</h3>
                  <a
                    href={whatsappUrl(p.msg)}
                    target="_blank"
                    rel="noopener"
                    className="btn-cta mt-4 !py-2 !px-4 !text-sm"
                  >
                    {p.cta} <WhatsAppIcon className="btn-cta-wa h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Convênios — seção 5 */}
      <section id="convenios" className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-light">
            Atendemos os principais convênios
          </h2>
          <p className="mt-5 text-body-light max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com os principais planos de saúde para que o seu cuidado com a visão seja
            ainda mais acessível.
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
            {convenioLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center min-h-[140px] h-40"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fit max-h-36"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
      <div className="mt-10 flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta">
              Agende sua consulta em Palmas <WhatsAppIcon className="btn-cta-wa h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <div className="bg-offwhite">
      <section id="depoimentos" className="section-glow overflow-hidden rounded-3xl py-16 md:py-24 relative px-10 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Quem já passou pelo ICOG recomenda
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-surface/60 px-5 py-3 shadow-[0_0_28px_rgba(61,108,187,0.15)] backdrop-blur">
              <GoogleIcon className="h-8 w-8" />
              <div>
                <p className="text-sm font-bold tracking-wide text-navy">EXCELENTE</p>
                <Stars />
              </div>
            </div>
            <p className="text-sm text-muted-ink">
              Com base em <strong className="text-ink">28 avaliações</strong> no Google
            </p>
          </div>

          <div className="mt-12 relative w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {reviews.map((r) => (
                  <CarouselItem
                    key={`${r.name}-${r.date}`}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <article className="flex flex-col p-5 text-left h-full min-h-[220px] rounded-2xl border border-primary/18 bg-[linear-gradient(160deg,rgba(22,38,62,0.9)_0%,rgba(12,22,38,0.95)_100%)] shadow-[var(--shadow-soft)]">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="h-10 w-10 shrink-0 rounded-full grid place-items-center text-xs font-bold text-deep bg-gradient-to-br from-primary to-teal"
                            aria-hidden
                          >
                            {initials(r.name) || "IC"}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-navy truncate">{r.name}</p>
                            <p className="text-xs text-muted-ink">{r.date}</p>
                          </div>
                        </div>
                        <span title="Publicado no Google" className="shrink-0">
                          <GoogleIcon className="h-5 w-5" />
                        </span>
                      </div>

                      <div className="mt-3">
                        <Stars />
                      </div>

                      <p className="mt-3 text-sm text-muted-ink leading-relaxed flex-1">
                        {r.text}
                      </p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-8 sm:-left-10 lg:-left-12 z-10 disabled:opacity-40" />
              <CarouselNext className="-right-8 sm:-right-10 lg:-right-12 z-10 disabled:opacity-40" />
            </Carousel>
          </div>
        </div>
      </section>
      </div>

      {/* Sobre */}
      <section id="sobre" className="section-light py-16 md:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="content-panel content-panel-dark relative mx-auto max-w-7xl !overflow-visible rounded-3xl !p-0 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <div
              className="bg-eye pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
              style={{ backgroundImage: `url(${bgEye})` }}
              aria-hidden
            />
            <div className="relative grid lg:grid-cols-2 items-stretch min-h-[min(60svh,520px)]">
              <div className="flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 md:py-10 lg:items-start lg:px-10 lg:text-left xl:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold !text-[#E6EEF9] leading-tight">
                  Uma nova visão para a saúde ocular do Tocantins
                </h2>
                <div className="mt-6 space-y-4 text-muted-ink leading-relaxed">
                  <p>
                    O ICOG nasceu da visão do Dr. Rafael Lopes, que enxergou muito além dos olhos:
                    percebeu que o Tocantins precisava de um cuidado com a visão mais moderno,
                    acessível e eficaz. Foi assim que nasceu o Instituto de Catarata e Oftalmologia,
                    com o compromisso de transformar a saúde ocular no estado.
                  </p>
                  <p>
                    Hoje, com unidades em Palmas e Porto Nacional, o ICOG é uma das principais
                    referências em cirurgia de catarata, glaucoma e diversos tratamentos oftalmológicos
                    — unindo estrutura moderna, tecnologia de ponta e um atendimento humanizado em cada
                    consulta.
                  </p>
                  <p>
                    Aqui, cada paciente é tratado com precisão, respeito e o que há de mais atual na
                    oftalmologia.
                  </p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta mt-8">
                  Agende sua consulta <WhatsAppIcon className="btn-cta-wa h-4 w-4 shrink-0" />
                </a>
              </div>
              <div className="flex w-full items-end justify-center self-end -mt-16 sm:-mt-20 lg:-mt-32">
                <img
                  src={drRafaelTerno}
                  alt="Dr. Rafael Lopes — fundador do ICOG"
                  className="block h-auto w-full max-w-[515px] object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading-light">
              Venha cuidar da sua visão no ICOG
            </h2>
            <p className="mt-5 text-body-light max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para atender com excelência e cuidado, perto de onde você está.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white/80 px-4 py-6 sm:p-8 flex flex-col justify-center rounded-2xl">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>Unidade Palmas – TO</span>
              </div>
              <p className="mt-4 text-body-light leading-relaxed">
                AV LO 13, Conj. 02, Lote 01, S/N – Antiga 501 Sul – ao lado do Hospital Cristo Rei,
                Palmas – TO, 77016-010
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="btn-cta mt-6 w-full self-stretch sm:w-auto sm:self-start"
              >
                Agende sua consulta em Palmas <WhatsAppIcon className="btn-cta-wa h-4 w-4 shrink-0" />
              </a>
            </div>
            <div className="overflow-hidden min-h-[320px]">
              <iframe
                title="Mapa ICOG Palmas"
                src="https://www.google.com/maps?q=AV+LO+13,+Conj.+02,+Lote+01,+Palmas+TO+77016-010&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <div className="bg-offwhite">
      <section id="equipe" className="section-glow overflow-hidden rounded-3xl py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Nossa Equipe de Especialistas
          </h2>

          <div className="mt-12 space-y-12 lg:space-y-0">
            {team.map((m, i) => {
              const imageOnRight = i % 2 === 1;
              return (
                <article
                  key={m.name}
                  className="relative grid grid-cols-1 gap-6 justify-items-center text-center lg:grid-cols-12 lg:gap-10 lg:items-center lg:justify-items-stretch lg:text-left"
                >
                  <div
                    className={`relative z-20 w-full max-w-[22.5rem] sm:max-w-[27.5rem] lg:mx-auto lg:max-w-xl lg:col-span-5 ${
                      imageOnRight ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      className="aspect-square w-full rounded-full p-[3px]"
                      style={{
                        background:
                          "linear-gradient(135deg, #8BF7AD 0%, #2EC4B6 40%, #3D6CBB 100%)",
                      }}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-deep">
                        <img
                          src={m.photo}
                          alt=""
                          aria-hidden
                          className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl opacity-80"
                        />
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="relative z-[1] h-full w-full object-cover object-[center_20%]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`team-bio z-10 flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 ${
                      imageOnRight
                        ? "lg:order-1 team-bio-rtl"
                        : "lg:order-2 team-bio-ltr"
                    }`}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy">{m.name}</h3>
                    <p className="mt-2 text-accent font-semibold">{m.role}</p>
                    <p className="mt-1 text-sm text-muted-ink">{m.crm}</p>
                    <p className="mt-6 text-muted-ink leading-relaxed">{m.bio}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener"
                      className="btn-cta mt-6 text-sm whitespace-nowrap !px-4 sm:!px-6"
                    >
                      Agende sua consulta em Palmas <WhatsAppIcon className="btn-cta-wa h-4 w-4 shrink-0" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      {/* Consultório */}
      <section id="consultorio" className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-light text-center">
            Conheça nosso consultório
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {consultorioImages.map((img, index) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openGallery(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl text-left transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Ampliar: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-[min(96vw,1100px)] border-none bg-transparent p-0 shadow-none sm:rounded-2xl [&>button]:right-2 [&>button]:top-2 [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-deep/80 [&>button]:p-2 [&>button]:text-navy [&>button]:opacity-100">
          <DialogTitle className="sr-only">Galeria do consultório ICOG</DialogTitle>
          <div className="relative">
            <Carousel
              setApi={setGalleryApi}
              opts={{
                loop: true,
                startIndex: galleryIndex,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {consultorioImages.map((img) => (
                  <CarouselItem key={img.src} className="pl-0 basis-full">
                    <div className="flex max-h-[80vh] items-center justify-center overflow-hidden rounded-2xl">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="max-h-[80vh] max-w-full rounded-2xl object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-3 z-10" />
              <CarouselNext className="right-2 sm:right-3 z-10" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Final */}
      <section id="cta-final" className="section-light pt-2 md:pt-2.5 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="content-panel-dark bg-eye w-full overflow-hidden rounded-3xl px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            style={{ backgroundImage: `linear-gradient(rgba(7,14,26,0.72), rgba(7,14,26,0.72)), url(${bgEye})` }}
          >
            <ShieldCheck className="h-12 w-12 text-accent mx-auto drop-shadow-[0_0_20px_rgba(139,247,173,0.5)]" />
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold !text-[#E6EEF9]">
              Pronto para enxergar com mais clareza?
            </h2>
            <p className="mt-5 text-muted-ink leading-relaxed max-w-2xl mx-auto">
              Agende agora sua consulta no ICOG e conte com uma equipe especializada e tecnologia de
              ponta para cuidar da sua visão.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta mt-8 mx-auto text-sm sm:text-base whitespace-nowrap !px-4 sm:!px-6">
              <WhatsAppIcon className="btn-cta-wa h-5 w-5 shrink-0" /> Agende sua consulta pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-offwhite">
      <footer className="bg-deep text-ink/75 overflow-hidden rounded-t-3xl py-12 border-t border-primary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start gap-6 text-sm text-center md:text-left">
          <img
            src={logoIcog}
            alt="ICOG"
            className="h-10 w-auto object-contain opacity-90"
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center md:justify-start">
              <span>Unidade Palmas</span>
              <span className="opacity-40">|</span>
              <a href="tel:+556392580225" className="hover:text-accent transition-colors">
                (63) 9258-0225
              </a>
              <span className="opacity-40">|</span>
              <a href="#" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <span className="opacity-40">|</span>
              <a href="#" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
            <p className="text-xs opacity-70 text-center md:text-right">
              Copyright © 2026. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      </div>

      {/* WhatsApp Float */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full grid place-items-center text-white shadow-[0_0_28px_rgba(37,211,102,0.45),0_12px_28px_rgba(0,0,0,0.4)] transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
