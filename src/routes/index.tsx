import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Eye,
  Microscope,
  FileText,
  Contact,
  ShieldCheck,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP_URL = "https://wa.me/556392580225";

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-surface text-navy/60 text-sm font-medium border border-dashed border-primary/30 rounded-2xl ${className}`}
    >
      {label}
    </div>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      slot: "[IMG-EQUIPE-RAFAEL]",
      name: "Dr. Rafael Lopes de Souza",
      role: "Médico Oftalmologista | Especialista em Cirurgia de Catarata",
      crm: "CRM TO 5557 | RQE 2607",
      bio: "Fundador do Instituto ICOG, une experiência, precisão cirúrgica e uma visão inovadora para transformar o cuidado com a visão no Tocantins.",
    },
    {
      slot: "[IMG-EQUIPE-THIAGO]",
      name: "Dr. Thiago Nogueira Alves",
      role: "Oftalmologista Geral | Especialista em Catarata",
      crm: "CRM TO 6270 | RQE 2978",
      bio: "Atua com excelência no diagnóstico e tratamento clínico e cirúrgico da catarata, trazendo segurança e qualidade de vida aos pacientes.",
    },
    {
      slot: "[IMG-EQUIPE-ULLIANE]",
      name: "Dra. Ulliane de Sena Rabelo",
      role: "Oftalmologista Geral | Especialista em Glaucoma",
      crm: "CRM TO 4554 | RQE 3787",
      bio: "Referência em glaucoma, combina conhecimento técnico e sensibilidade no acompanhamento de doenças oculares crônicas.",
    },
  ];

  const pillars = ["Consultas", "Exames", "Laudos", "Cirurgias"];

  return (
    <div id="home" className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <Placeholder label="[IMG-LOGO]" className="h-10 w-32 !rounded-md" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 text-navy font-semibold">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm">(63) 9258-0225 – Palmas</span>
          </div>

          <button
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
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
              <div className="flex items-center gap-2 text-navy font-semibold pt-2 border-t border-border">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">(63) 9258-0225 – Palmas</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="iris-bg relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-navy">
              Enxergue o mundo com mais clareza
            </h1>
            <p className="mt-6 text-lg text-muted-ink max-w-xl leading-relaxed">
              No ICOG, tecnologia de ponta, exames precisos e uma equipe médica especializada
              trabalham juntos para cuidar da sua visão com a excelência que os seus olhos merecem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta">
                Agende sua consulta em Palmas <ArrowRight className="h-4 w-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-outline">
                <MessageCircle className="h-4 w-4" /> Fale com a gente agora
              </a>
            </div>
          </div>

          <div className="relative iris-ring">
            <Placeholder
              label="[IMG-HERO]"
              className="aspect-[4/5] w-full max-w-md mx-auto !rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <article key={s.title} className="card-soft p-6 flex flex-col">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-surface text-primary mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-ink leading-relaxed flex-1">{s.text}</p>
                <a
                  href="#cta-final"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-navy transition-colors"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cirurgias */}
      <section id="cirurgias" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
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
              Agende sua avaliação cirúrgica <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Placeholder label="[IMG-CIRURGIA-1]" className="aspect-square" />
            <Placeholder label="[IMG-CIRURGIA-2]" className="aspect-square mt-8" />
            <Placeholder label="[IMG-CIRURGIA-3]" className="aspect-square" />
            <Placeholder label="[IMG-CIRURGIA-4]" className="aspect-square mt-8" />
          </div>
        </div>
      </section>

      {/* Tudo para sua visão em um só lugar */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl mx-auto">
            Tudo para sua visão em um só lugar
          </h2>
          <p className="mt-5 text-muted-ink max-w-2xl mx-auto leading-relaxed">
            Consultas, exames, laudos e cirurgias reunidos em um só espaço, pensado para tornar o
            cuidado com os seus olhos mais simples, rápido e completo.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={p} className="card-soft p-6 flex flex-col items-center text-center">
                <Placeholder
                  label={`[IMG-SERVICO-${i + 1}]`}
                  className="h-32 w-full mb-5"
                />
                <h3 className="text-lg font-bold text-navy">{p}</h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn-cta mt-5 !py-2 !px-4 !text-sm"
                >
                  Agende sua consulta
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section id="convenios" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Atendemos os principais convênios
          </h2>
          <p className="mt-5 text-muted-ink max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com os principais planos de saúde para que o seu cuidado com a visão seja
            ainda mais acessível.
          </p>
          <Placeholder
            label="[IMG-CONVENIOS]"
            className="mt-10 h-40 w-full max-w-5xl mx-auto"
          />
          <div className="mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta">
              Agende sua consulta em Palmas <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Quem já passou pelo ICOG recomenda
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                aria-label="Espaço reservado para depoimento"
                className="card-soft aspect-[4/5] flex items-center justify-center border border-dashed border-primary/25 bg-surface/40"
              >
                <div className="h-16 w-16 rounded-full border-2 border-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="iris-ring">
            <Placeholder label="[IMG-SOBRE]" className="aspect-[4/5] w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
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
              Agende sua consulta <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Sempre um ICOG perto de você
            </h2>
            <p className="mt-5 text-muted-ink max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para atender com excelência e cuidado, perto de onde você está.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="card-soft p-8 flex flex-col">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <MapPin className="h-5 w-5" />
                <span>Unidade Palmas – TO</span>
              </div>
              <p className="mt-4 text-ink leading-relaxed">
                AV LO 13, Conj. 02, Lote 01, S/N – Antiga 501 Sul – ao lado do Hospital Cristo Rei,
                Palmas – TO, 77016-010
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="btn-cta mt-auto self-start"
              >
                Agende sua consulta em Palmas <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(30,58,95,0.10)] min-h-[320px]">
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
      <section id="equipe" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Nossa Equipe de Especialistas
          </h2>

          <div className="mt-14 space-y-16">
            {team.map((m, i) => (
              <article
                key={m.name}
                className={`grid lg:grid-cols-5 gap-8 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-2 iris-ring">
                  <Placeholder label={m.slot} className="aspect-square w-full max-w-sm mx-auto" />
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold text-navy">{m.name}</h3>
                  <p className="mt-2 text-primary font-semibold">{m.role}</p>
                  <p className="mt-1 text-sm text-muted-ink">{m.crm}</p>
                  <p className="mt-5 text-muted-ink leading-relaxed">{m.bio}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                    className="btn-cta mt-6"
                  >
                    Agende sua consulta em Palmas <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consultório */}
      <section id="consultorio" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Conheça nosso consultório
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Placeholder
                key={i}
                label={`[IMG-CONSULTORIO-${i}]`}
                className={`aspect-square ${i % 3 === 0 ? "col-span-2" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="iris-bg py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-navy">
            Pronto para enxergar com mais clareza?
          </h2>
          <p className="mt-5 text-muted-ink leading-relaxed">
            Agende agora sua consulta no ICOG e conte com uma equipe especializada e tecnologia de
            ponta para cuidar da sua visão.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-cta mt-8">
            <MessageCircle className="h-5 w-5" /> Agende sua consulta pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white/80 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center md:justify-start">
            <span>Unidade Palmas</span>
            <span className="opacity-40">|</span>
            <a href="tel:+556392580225" className="hover:text-accent">
              (63) 9258-0225
            </a>
            <span className="opacity-40">|</span>
            <a href="#" className="inline-flex items-center gap-1 hover:text-accent">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <span className="opacity-40">|</span>
            <a href="#" className="inline-flex items-center gap-1 hover:text-accent">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-accent">
              Política de Privacidade
            </a>
          </div>
          <p className="text-xs opacity-70 text-center md:text-right">
            Copyright © 2025. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full grid place-items-center text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
