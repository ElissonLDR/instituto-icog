import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  ShieldCheck,
  Microscope,
  Users,
  Building2,
  Siren,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import logoIcog from "@/assets/shared/brand/logo-icog-horizontal-branco.png";
import bgEye from "@/assets/shared/bg.png";
import bgEsquerda from "@/assets/1-hero/bg-esquerda.png";
import bg2 from "@/assets/2-cirurgias/bg-2.png";
import imgHero from "@/assets/1-hero/imagem-hero.webp";
import imgExameTela from "@/assets/campanha/2-procedimentos/exame-tela.png";
import drRafael from "@/assets/campanha/3-equipe/dr-rafael-lopes.png";
import drThiago from "@/assets/campanha/3-equipe/dr-thiago-nogueira.png";
import draUlliane from "@/assets/campanha/3-equipe/dra-ulliane.jpg";
import draRenata from "@/assets/campanha/3-equipe/dra-renata-bertazzi.jpg";
import draLuiza from "@/assets/campanha/3-equipe/dra-luiza-carneiro-bertazzi.jpg";
import draMillane from "@/assets/campanha/3-equipe/dra-millane-vieira-dos-santos.jpg";
import drRonan from "@/assets/campanha/3-equipe/dr-ronan-marra-borges.jpg.asset.json";
import logoTreTo from "@/assets/4-convenios/tre-to.png";
import logoPostalSaude from "@/assets/4-convenios/postal-saude.png";
import logoServir from "@/assets/4-convenios/servir.png";
import logoIpasgu from "@/assets/4-convenios/ipasgu.png";
import logoBradesco from "@/assets/4-convenios/bradesco-saude.png.asset.json";
import logoCaixa from "@/assets/4-convenios/caixa-saude.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICOG: Agende sua avaliação oftalmológica" },
      {
        name: "description",
        content:
          "Cirurgia de catarata, pterígio, glaucoma a laser e correção de grau. Unidades em Palmas e Porto Nacional.",
      },
    ],
  }),
  component: CampanhaPage,
});

type UnitId = "palmas" | "porto";

const UNITS: Record<
  UnitId,
  {
    id: UnitId;
    name: string;
    shortName: string;
    address: string;
    hours: string;
    phoneDisplay: string;
    phoneTel: string;
    /** Número WA (só Palmas). Porto usa link de mensagem fixo. */
    whatsappPhone?: string;
    whatsappLink: string;
    mapQuery: string;
  }
> = {
  palmas: {
    id: "palmas",
    name: "Palmas (TO)",
    shortName: "Palmas",
    address:
      "ACSU SO 50, AV LO 13, CONJ 02, LOTE 01, SN, Antiga 501 SUL, ao lado do Hospital Cristo Rei, Palmas (TO), 77016-010",
    hours: "Seg a Sex: 8h às 18h / Sáb: 8h às 12h / Pronto atendimento 24h",
    phoneDisplay: "(63) 3222-2061",
    phoneTel: "+556332222061",
    whatsappPhone: "5563992580225",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=5563992580225&type=phone_number&app_absent=0",
    mapQuery: "ACSU+SO+50+AV+LO+13+Conj+02+Lote+01+Palmas+TO+77016-010",
  },
  porto: {
    id: "porto",
    name: "Porto Nacional (TO)",
    shortName: "Porto Nacional",
    address:
      "Avenida Presidente John Kennedy, 1300, Setor Aeroporto, Porto Nacional – TO, CEP 77500-276",
    hours: "Seg a Sex: 8h às 18h / Sáb: 8h às 12h / Pronto atendimento 24h",
    phoneDisplay: "(63) 3363-4755",
    phoneTel: "+556333634755",
    whatsappLink:
      "https://api.whatsapp.com/message/JAJCCGVHWI6CD1?autoload=1&app_absent=0",
    mapQuery:
      "Avenida+Presidente+John+Kennedy+1300+Setor+Aeroporto+Porto+Nacional+TO+77500-276",
  },
};

const PROCEDURES = [
  {
    id: "catarata",
    title: "Cirurgia de Catarata",
    what: "Substitui o cristalino opaco por lente intraocular.",
    solves: "Melhora o borramento e nitidez, gera liberdade de óculos.",
  },
  {
    id: "pterigio",
    title: "Cirurgia de Pterígio",
    what: "Remove o tecido que cresce sobre a córnea.",
    solves: "Alivia irritação e vermelhidão, corrige a estética e melhora a visão.",
  },
  {
    id: "glaucoma",
    title: "Glaucoma a Laser",
    what: "Tratamento a laser para controlar a pressão ocular.",
    solves: "Diminui uso dos colírios, alívio dos sintomas e efeitos colaterais. Menos gastos com colírios.",
  },
  {
    id: "correcao",
    title: "Correção de Grau",
    what: "Cirurgia refrativa para reduzir a dependência de óculos.",
    solves: "Cirurgia refrativa a laser para retirar os óculos, após os 23 anos de idade.",
  },
  {
    id: "retina",
    title: "Cirurgia de Retina",
    what: "Tratamento cirúrgico para doenças da retina.",
    solves: "Tratamos com laser, injeção ou cirurgia, as doenças: diabetes, DMRI, descolamento, etc.",
  },
  {
    id: "cornea",
    title: "Cirurgia de Córnea",
    what: "Procedimentos para restabelecer a saúde da córnea.",
    solves: "Correção da visão por ceratocone, adaptação de lente de contato.",
  },
] as const;

type ProcedureId = (typeof PROCEDURES)[number]["id"];

const TEAM = [
  {
    photo: drRafael,
    name: "Dr. Rafael Lopes de Souza",
    role: "Médico Oftalmologista, Cirurgia de Catarata",
    crm: "CRM TO 5557, RQE 2607",
  },
  {
    photo: drThiago,
    name: "Dr. Thiago Nogueira Alves",
    role: "Oftalmologista, Especialista em Catarata",
    crm: "CRM TO 6270, RQE 2978",
  },
  {
    photo: draUlliane,
    name: "Dra. Ulliane de Sena Rabelo",
    role: "Oftalmologista, Especialista em Glaucoma",
    crm: "CRM TO 4554, RQE 3787",
  },
  {
    photo: draRenata,
    name: "Dra. Renata Bertazzi",
    role: "Especialista em Retina e Catarata",
    crm: "CRM-TO 7.132 | RQE 3.562\nCRM-SP 195.613 | RQE 95.737",
  },
  {
    photo: draLuiza,
    name: "Dra. Luiza Carneiro Bertazzi",
    role: "Oftalmologista",
    crm: "CRM-SP 214.965 | RQE 137.761",
  },
  {
    photo: draMillane,
    name: "Dra. Millane Vieira dos Santos",
    role: "Córnea, Catarata, Refrativa",
    crm: "CRM/TO 6.516 | RQE 3.099",
  },
  {
    photo: drRonan.url,
    name: "Dr. Ronan Marra Borges",
    role: "Especialista em Catarata",
    crm: "CRM-TO 8558 | RQE 3921",
  },
];

const PAINS = [
  "Visão embaçada que atrapalha dirigir e ler",
  "Mancha ou carninha no olho que irrita e cresce",
  "Pressão ocular alta com risco silencioso de glaucoma",
  "Dependência total de óculos no dia a dia",
];

const STEPS = [
  "Avaliação especializada",
  "Exames precisos",
  "Indicação segura",
  "Procedimento guiado",
];

const DIFFERENTIALS = [
  {
    icon: Microscope,
    title: "Tecnologia precisa",
    text: "Exames modernos para indicação cirúrgica com segurança.",
  },
  {
    icon: Users,
    title: "Equipe especialista",
    text: "Médicos focados em catarata, glaucoma e correção.",
  },
  {
    icon: Building2,
    title: "Duas unidades",
    text: "Atendimento em Palmas e Porto Nacional, perto de você.",
  },
];

const REVIEWS = [
  {
    name: "KARINE MAIA MACHADO",
    initial: "K",
    meta: "1 avaliação, uma semana atrás",
    text: "Minha experiência no ICOG foi muito positiva. O atendimento foi excelente, com profissionais atenciosos e bem preparados. A infraestrutura é moderna e limpa. Recomendo a todos que buscam cuidados oftalmológicos.",
  },
  {
    name: "MARIA SILVA",
    initial: "M",
    meta: "1 avaliação, uma semana atrás",
    text: "Excelente atendimento! Equipe muito profissional e atenciosa. O Dr. Rafael é um médico incrível, muito competente e humano. Recomendo demais o ICOG.",
  },
  {
    name: "JOÃO SANTOS",
    initial: "J",
    meta: "1 avaliação, uma semana atrás",
    text: "Fiz minha cirurgia de catarata no ICOG e foi uma experiência maravilhosa. Desde a consulta até o pós-operatório, fui muito bem atendido. Hoje enxergo perfeitamente!",
  },
  {
    name: "ANA OLIVEIRA",
    initial: "A",
    meta: "1 avaliação, uma semana atrás",
    text: "Clínica muito moderna e organizada. O atendimento é rápido e eficiente. Os médicos são muito atenciosos e explicam tudo com calma. Super recomendo!",
  },
];

const CONVENIO_LOGOS = [
  { src: logoPostalSaude, alt: "Postal Saúde" },
  { src: logoTreTo, alt: "TRE-TO" },
  { src: logoServir, alt: "Servir" },
  { src: logoIpasgu, alt: "IPASGU" },
  { src: logoBradesco.url, alt: "Bradesco Saúde" },
  { src: logoCaixa.url, alt: "Caixa Saúde" },
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

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function buildWhatsAppMessage(opts: {
  unitId: UnitId;
  procedimento?: string;
  nome?: string;
  telefone?: string;
}) {
  const unit = UNITS[opts.unitId];
  const parts = [
    opts.nome ? `Olá! Meu nome é ${opts.nome}.` : "Olá!",
    opts.procedimento
      ? `Gostaria de agendar uma avaliação para ${opts.procedimento} na unidade ${unit.shortName}.`
      : `Gostaria de agendar uma avaliação oftalmológica na unidade ${unit.shortName}.`,
    opts.telefone ? `Meu WhatsApp/telefone: ${opts.telefone}.` : null,
  ].filter(Boolean);
  return parts.join(" ");
}

function openWhatsApp(opts: {
  unitId: UnitId;
  procedimento?: string;
  nome?: string;
  telefone?: string;
}) {
  const unit = UNITS[opts.unitId];
  const text = buildWhatsAppMessage(opts);

  if (unit.whatsappPhone) {
    const url = `https://api.whatsapp.com/send/?phone=${unit.whatsappPhone}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  // Link oficial de mensagem (Porto Nacional)
  window.open(unit.whatsappLink, "_blank", "noopener,noreferrer");
}

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function CampanhaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unitId, setUnitId] = useState<UnitId>("palmas");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formUnit, setFormUnit] = useState<UnitId>("palmas");
  const [formProcedure, setFormProcedure] = useState<ProcedureId | "">("");

  const [waOpen, setWaOpen] = useState(false);
  const [waUnit, setWaUnit] = useState<UnitId>("palmas");
  const [waProcedure, setWaProcedure] = useState<ProcedureId | "">("");

  const openWaModal = (opts?: { unitId?: UnitId; procedureId?: ProcedureId }) => {
    setWaUnit(opts?.unitId ?? unitId);
    setWaProcedure(opts?.procedureId ?? "");
    setWaOpen(true);
  };

  const confirmWhatsApp = () => {
    if (!waProcedure) return;
    const proc = PROCEDURES.find((p) => p.id === waProcedure);
    openWhatsApp({
      unitId: waUnit,
      procedimento: proc?.title,
    });
    setUnitId(waUnit);
    setFormUnit(waUnit);
    setWaOpen(false);
  };

  const nav = [
    { href: "#procedimentos", label: "Procedimentos" },
    { href: "#equipe", label: "Equipe" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#convenios", label: "Convênios" },
    { href: "#unidades", label: "Unidades" },
    { href: "#agendar", label: "Agendar" },
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const proc = PROCEDURES.find((p) => p.id === formProcedure);
    openWhatsApp({
      unitId: formUnit,
      nome: formName.trim() || undefined,
      telefone: formPhone.trim() || undefined,
      procedimento: proc?.title,
    });
  };

  return (
    <div className="min-h-screen relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="light-orb glow-pulse top-[-10%] left-[10%] h-[420px] w-[420px] bg-primary/40" />
        <div className="light-orb glow-pulse top-[40%] right-[-5%] h-[360px] w-[360px] bg-accent/25 [animation-delay:2s]" />
      </div>

      <header className="sticky top-0 z-40 bg-deep/70 backdrop-blur-xl border-b border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#topo" className="shrink-0">
            <img
              src={logoIcog}
              alt="ICOG, Instituto de Catarata e Oftalmologia"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
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

          <a href="#agendar" className="hidden md:inline-flex btn-cta !py-2.5 !px-4 !text-sm">
            Agende avaliação
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-ink"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-primary/20 bg-deep/95 backdrop-blur-xl">
            <nav className="px-4 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-ink py-2.5"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero BG da LP original */}
      <div className="bg-offwhite">
        <section
          id="topo"
          className="relative overflow-hidden rounded-b-3xl lg:min-h-[min(72svh,780px)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${bgEsquerda})` }}
            aria-hidden
          />
          <div className="absolute inset-y-0 right-0 z-[1] hidden w-1/2 items-center justify-start pl-2 pr-6 py-8 lg:flex">
            <img
              src={imgHero}
              alt="ICOG, visão e cuidado oftalmológico"
              className="h-[96%] w-auto max-w-full object-contain"
            />
          </div>

          <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:h-full lg:min-h-[700px] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="fade-up text-center lg:text-left">
              <p className="text-sm font-semibold tracking-wide text-accent mb-4">
                ICOG, Palmas e Porto Nacional
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] !text-[#E6EEF9] drop-shadow-[0_0_40px_rgba(61,108,187,0.35)]">
                Recupere a clareza da sua visão
              </h1>
              <p className="mt-6 text-lg text-muted-ink max-w-xl leading-relaxed mx-auto lg:mx-0">
                Procedimentos premium com equipe especializada no Tocantins.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="#procedimentos" className="btn-cta">
                  Ver os procedimentos
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:invisible lg:pointer-events-none">
              <img
                src={imgHero}
                alt="ICOG, visão e cuidado oftalmológico"
                className="h-auto w-full object-contain lg:hidden"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Problema */}
      <section id="problema" className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-heading-light leading-tight">
                Sua visão já atrapalha o dia a dia?
              </h2>
              <p className="mt-6 text-body-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Adiar o cuidado pode piorar o desconforto e limitar sua independência.
              </p>
              <p className="mt-3 font-semibold text-heading-light max-w-md mx-auto lg:mx-0">
                Quanto antes avaliar, mais chances de preservar sua visão.
              </p>
            </div>
            <ul className="space-y-3">
              {PAINS.map((pain) => (
                <li
                  key={pain}
                  className="flex gap-3 rounded-2xl bg-white px-5 py-4 text-body-light text-sm sm:text-base leading-snug shadow-[0_4px_20px_rgba(30,58,95,0.06)]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Procedimentos */}
      <section id="procedimentos" className="section-light pt-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-gradient-icog">
            <div
              className="bg-eye overflow-hidden rounded-[calc(1.5rem-2px)]"
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <div className="flex flex-col gap-8 px-5 py-10 sm:px-8 md:py-12 lg:px-10 xl:px-12">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold !text-[#E6EEF9] leading-tight">
                    Procedimentos que melhoram sua visão
                  </h2>
                  <p className="mt-5 text-muted-ink leading-relaxed">
                    Catarata, pterígio, glaucoma a laser, correção de grau, retina e córnea:
                    avaliações especializadas para indicar o tratamento certo com segurança e
                    tecnologia.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {PROCEDURES.map((p) => (
                    <article
                      key={p.id}
                      className="group flex flex-col rounded-2xl border border-accent/35 bg-[linear-gradient(160deg,rgba(22,38,62,0.95)_0%,rgba(8,16,30,0.98)_100%)] p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.35),0_0_0_1px_rgba(139,247,173,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_28px_rgba(139,247,173,0.18)]"
                    >
                      <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-accent to-primary transition-all group-hover:w-14" aria-hidden />
                      <h3 className="text-xl sm:text-2xl font-bold !text-[#E6EEF9] leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-ink leading-relaxed flex-1">
                        {p.solves}
                      </p>
                      <button
                        type="button"
                        onClick={() => openWaModal({ procedureId: p.id })}
                        className="btn-cta mt-4 !py-2 !px-3 !text-xs sm:!text-sm self-start"
                      >
                        Quero avaliar <WhatsAppIcon className="btn-cta-wa h-3.5 w-3.5" />
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe carrossel */}
      <div className="bg-offwhite">
        <section
          id="equipe"
          className="content-panel-dark bg-eye overflow-hidden rounded-3xl py-16 md:py-24"
          style={{ backgroundImage: `url(${bgEye})` }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold !text-[#E6EEF9]">
                Equipe de especialistas
              </h2>
              <p className="mt-4 text-muted-ink leading-relaxed">
                Médicos preparados para indicar e acompanhar o seu procedimento com segurança.
              </p>
            </div>

            <div className="mt-12 relative w-full px-10 sm:px-12">
              <Carousel
                opts={{ align: "start", loop: false, slidesToScroll: 1 }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 lg:-ml-8">
                  {TEAM.map((m) => (
                    <CarouselItem
                      key={m.name}
                      className="pl-4 lg:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <article className="flex h-full flex-col rounded-2xl border border-primary/20 bg-deep/55 overflow-hidden backdrop-blur-sm">
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                          <img
                            src={m.photo}
                            alt={m.name}
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                          />
                          <div
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep/90 to-transparent"
                            aria-hidden
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-5 text-center">
                          <h3 className="text-lg font-bold !text-[#E6EEF9] leading-snug">
                            {m.name}
                          </h3>
                          <p className="mt-2 text-sm font-semibold text-accent leading-snug">
                            {m.role}
                          </p>
                          <p className="mt-1.5 text-xs text-muted-ink whitespace-pre-line">
                            {m.crm}
                          </p>
                        </div>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-1 sm:-left-2 z-10 disabled:opacity-40" />
                <CarouselNext className="-right-1 sm:-right-2 z-10 disabled:opacity-40" />
              </Carousel>
            </div>
          </div>
        </section>
      </div>

      {/* Como funciona */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading-light leading-tight">
                Do diagnóstico ao procedimento, com segurança
              </h2>
              <p className="mt-4 text-body-light leading-relaxed max-w-md">
                Processo objetivo para você saber o próximo passo sem rodeios.
              </p>
              <ol className="mt-8 grid sm:grid-cols-2 gap-3">
                {STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-heading-light shadow-[0_4px_18px_rgba(30,58,95,0.06)]"
                  >
                    <span className="text-primary mr-2">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
              <a href="#agendar" className="btn-cta mt-8">
                Começar avaliação
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img
                src={imgExameTela}
                alt="Equipamento de exame oftalmológico de precisão"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-light pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading-light">
              O diferencial está no cuidado técnico
            </h2>
            <p className="mt-4 text-body-light leading-relaxed">
              Estrutura pensada para indicar e realizar procedimentos com precisão e acolhimento.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {DIFFERENTIALS.map((d) => (
              <article
                key={d.title}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-bold text-heading-light">{d.title}</h3>
                <p className="mt-2 text-sm text-body-light leading-relaxed">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Google */}
      <div className="bg-offwhite">
        <section
          id="depoimentos"
          className="section-glow overflow-hidden rounded-3xl py-16 md:py-24 px-6 sm:px-10 lg:px-14"
        >
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
                Avaliações reais de pacientes no <strong className="text-ink">Google</strong>
              </p>
            </div>

            <div className="mt-12 relative w-full">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {REVIEWS.map((r) => (
                    <CarouselItem
                      key={r.name}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <article className="flex h-full min-h-[260px] flex-col rounded-2xl border border-primary/18 bg-[linear-gradient(160deg,rgba(22,38,62,0.9)_0%,rgba(12,22,38,0.95)_100%)] p-5 text-left shadow-[var(--shadow-soft)]">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className="h-10 w-10 shrink-0 rounded-full grid place-items-center text-sm font-bold text-deep bg-gradient-to-br from-primary to-teal"
                              aria-hidden
                            >
                              {r.initial}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-navy truncate text-sm">{r.name}</p>
                              <p className="text-xs text-muted-ink">{r.meta}</p>
                            </div>
                          </div>
                          <span title="Publicado no Google" className="shrink-0">
                            <GoogleIcon className="h-5 w-5" />
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          <Stars />
                          <span className="rounded bg-[#1a73e8]/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#8ab4f8]">
                            Nova
                          </span>
                        </div>

                        <p className="mt-3 text-sm text-muted-ink leading-relaxed flex-1">
                          {r.text}
                        </p>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-3 sm:-left-8 lg:-left-10 z-10 disabled:opacity-40" />
                <CarouselNext className="-right-3 sm:-right-8 lg:-right-10 z-10 disabled:opacity-40" />
              </Carousel>
            </div>

            <div className="mt-10 flex justify-center">
              <a href="#agendar" className="btn-cta">
                Quero minha avaliação
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Convênios */}
      <section id="convenios" className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-light">
            Atendemos os principais convênios
          </h2>
          <p className="mt-5 text-body-light max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com os principais planos de saúde para tornar o cuidado com a visão mais
            acessível.
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-5xl mx-auto">
            {CONVENIO_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center min-h-[120px] h-36 rounded-2xl bg-white/80"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fit max-h-28"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="#agendar" className="btn-cta">
              Agende avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section id="unidades" className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading-light">
              Escolha a unidade mais perto de você
            </h2>
            <p className="mt-4 text-body-light">
              Atendimento em Palmas e Porto Nacional, com a mesma excelência.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
            {(Object.values(UNITS) as (typeof UNITS)[UnitId][]).map((unit) => (
              <article
                key={unit.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(30,58,95,0.08)]"
              >
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <MapPin className="h-5 w-5 shrink-0" />
                    <span>Unidade {unit.name}</span>
                  </div>
                  <p className="mt-3 text-sm text-body-light leading-relaxed">{unit.address}</p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-body-light">
                    <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{unit.hours}</span>
                  </p>
                  <a
                    href={`tel:${unit.phoneTel}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-heading-light hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {unit.phoneDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={() => openWaModal({ unitId: unit.id })}
                    className="btn-cta mt-6 !py-2.5 !px-4 !text-sm self-start"
                  >
                    Agendar nesta unidade <WhatsAppIcon className="btn-cta-wa h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="relative h-[240px] w-full shrink-0 border-t border-black/5">
                  <iframe
                    title={`Mapa ICOG ${unit.shortName}`}
                    src={`https://www.google.com/maps?q=${unit.mapQuery}&output=embed`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section id="agendar" className="section-light pt-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="content-panel-dark bg-eye overflow-hidden rounded-3xl !p-0"
            style={{
              backgroundImage: `linear-gradient(rgba(7,14,26,0.78), rgba(7,14,26,0.78)), url(${bgEye})`,
            }}
          >
            <div className="grid lg:grid-cols-2 items-stretch min-h-[min(520px,70svh)]">
              <div className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-14">
                <ShieldCheck className="h-10 w-10 text-accent" />
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold !text-[#E6EEF9]">
                  Dê o próximo passo pela sua visão
                </h2>
                <p className="mt-4 text-muted-ink leading-relaxed max-w-md">
                  Preencha e fale conosco no WhatsApp da unidade escolhida para agendar sua
                  avaliação.
                </p>
                <div className="mt-5 space-y-2 text-sm text-muted-ink">
                  <p>
                    <strong className="text-accent">Palmas:</strong>{" "}
                    <a href="tel:+556332222061" className="hover:text-accent transition-colors">
                      (63) 3222-2061
                    </a>
                  </p>
                  <p>
                    <strong className="text-accent">Porto Nacional:</strong>{" "}
                    <a href="tel:+556333634755" className="hover:text-accent transition-colors">
                      (63) 3363-4755
                    </a>
                  </p>
                </div>
              </div>

              <form
                onSubmit={onSubmit}
                className="flex h-full flex-col justify-center border-t lg:border-t-0 lg:border-l border-primary/25 bg-deep/80 p-5 sm:p-6 lg:p-8 space-y-4"
              >
                <p className="text-sm font-medium !text-[#E6EEF9]">
                  Receba o atendimento pelo WhatsApp
                </p>

                <label className="block">
                  <span className="text-xs text-muted-ink">Nome</span>
                  <input
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="mt-1.5 flex h-11 w-full rounded-xl border border-primary/30 bg-surface/80 px-3 text-sm text-ink placeholder:text-muted-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="text-xs text-muted-ink">Telefone / WhatsApp</span>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    value={formPhone}
                    onChange={(e) => setFormPhone(maskPhone(e.target.value))}
                    className="mt-1.5 flex h-11 w-full rounded-xl border border-primary/30 bg-surface/80 px-3 text-sm text-ink placeholder:text-muted-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    placeholder="(63) 99999-9999"
                    autoComplete="tel"
                    maxLength={15}
                  />
                </label>

                <label className="block">
                  <span className="text-xs text-muted-ink">Unidade</span>
                  <select
                    required
                    value={formUnit}
                    onChange={(e) => {
                      const id = e.target.value as UnitId;
                      setFormUnit(id);
                      setUnitId(id);
                    }}
                    className="mt-1.5 flex h-11 w-full rounded-xl border border-primary/30 bg-surface/80 px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <option value="palmas">Palmas</option>
                    <option value="porto">Porto Nacional</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs text-muted-ink">Procedimento de interesse</span>
                  <select
                    required
                    value={formProcedure}
                    onChange={(e) => setFormProcedure(e.target.value as ProcedureId | "")}
                    className="mt-1.5 flex h-11 w-full rounded-xl border border-primary/30 bg-surface/80 px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {PROCEDURES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </label>

                <button type="submit" className="btn-cta w-full !max-w-none mt-2">
                  Agendar no WhatsApp <WhatsAppIcon className="btn-cta-wa h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-offwhite">
        <footer className="bg-deep text-ink/75 overflow-hidden rounded-t-3xl py-10 md:py-12 border-t border-primary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <img
                src={logoIcog}
                alt="ICOG"
                className="h-10 w-auto object-contain opacity-90 mx-auto md:mx-0"
              />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-center sm:text-left">
                <div>
                  <p className="font-semibold text-ink">Palmas</p>
                  <a
                    href="tel:+556332222061"
                    className="mt-1 inline-block hover:text-accent transition-colors"
                  >
                    (63) 3222-2061
                  </a>
                </div>
                <div className="hidden sm:block h-10 w-px bg-primary/25" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">Porto Nacional</p>
                  <a
                    href="tel:+556333634755"
                    className="mt-1 inline-block hover:text-accent transition-colors"
                  >
                    (63) 3363-4755
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/15 flex justify-center md:justify-between">
              <p className="text-xs opacity-70 text-center md:text-left">
                Copyright © {new Date().getFullYear()}. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <Dialog open={waOpen} onOpenChange={setWaOpen}>
        <DialogContent className="max-w-md border-primary/25 bg-deep text-ink sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle className="!text-[#E6EEF9]">Falar no WhatsApp</DialogTitle>
            <DialogDescription className="text-muted-ink">
              Escolha a cidade e o procedimento para abrir a conversa com a mensagem pronta.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <label className="block">
              <span className="text-xs text-muted-ink">Cidade / unidade</span>
              <select
                value={waUnit}
                onChange={(e) => setWaUnit(e.target.value as UnitId)}
                className="mt-1.5 flex h-11 w-full rounded-xl border border-primary/30 bg-surface/80 px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <option value="palmas">Palmas</option>
                <option value="porto">Porto Nacional</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs text-muted-ink">Procedimento</span>
              <select
                value={waProcedure}
                onChange={(e) => setWaProcedure(e.target.value as ProcedureId | "")}
                className="mt-1.5 flex h-11 w-full rounded-xl border border-primary/30 bg-surface/80 px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {PROCEDURES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              disabled={!waProcedure}
              onClick={confirmWhatsApp}
              className="btn-cta w-full !max-w-none disabled:opacity-50 disabled:pointer-events-none"
            >
              Continuar no WhatsApp <WhatsAppIcon className="btn-cta-wa h-4 w-4" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <button
        type="button"
        onClick={() => openWaModal()}
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 cursor-pointer rounded-full grid place-items-center text-white shadow-[0_0_28px_rgba(37,211,102,0.45),0_12px_28px_rgba(0,0,0,0.4)] transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
