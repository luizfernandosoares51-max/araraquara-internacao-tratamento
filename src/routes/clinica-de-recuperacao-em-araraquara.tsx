import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import acolhimentoImage from "@/assets/acolhimento-araraquara.jpg";
import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import {
  instagramHref,
  mainNav,
  phoneDisplay,
  phoneHref,
  siteUrl,
  whatsappHref,
} from "@/lib/site";

const pageUrl = `${siteUrl}/clinica-de-recuperacao-em-araraquara`;
const araraquaraFacebookHref = "https://www.facebook.com/share/1drREi2gvi/";

const steps = [
  "Contato com a família",
  "Conversa inicial",
  "Orientações sobre o acolhimento",
  "Avaliação da situação",
  "Definição dos próximos passos",
  "Acolhimento",
];

const faqs = [
  {
    question: "Qual a melhor clínica de recuperação em Araraquara?",
    answer:
      "A escolha depende das necessidades da pessoa e da família. É importante avaliar a proposta de cuidado, a qualificação da equipe, a clareza das informações, a estrutura e a forma como o acompanhamento é conduzido. Nossa equipe pode explicar o modelo de acolhimento para que a família tome uma decisão consciente.",
  },
  {
    question: "Como funciona uma clínica de recuperação em Araraquara?",
    answer:
      "O processo costuma começar com a escuta da família e a avaliação da situação. A partir daí, são explicadas as possibilidades de acolhimento e o acompanhamento indicado, que pode reunir atividades terapêuticas, apoio psicológico e avaliação psiquiátrica quando necessária.",
  },
  {
    question: "Como funciona a internação para dependência química?",
    answer:
      "A internação é uma possibilidade de cuidado que precisa ser avaliada individualmente. Antes do acolhimento, a equipe conversa com a família, reúne informações relevantes e orienta sobre a modalidade adequada e as etapas do processo.",
  },
  {
    question: "Existe internação voluntária?",
    answer:
      "Sim. Na internação voluntária, a própria pessoa concorda com o acolhimento e participa da decisão de iniciar o cuidado. A equipe apresenta as regras, a rotina e a proposta de acompanhamento antes da entrada.",
  },
  {
    question: "Como funciona a internação involuntária?",
    answer:
      "Essa modalidade depende de avaliação responsável, indicação profissional e cumprimento dos critérios previstos na legislação aplicável. Cada situação deve ser analisada de forma individual, com respeito à dignidade e aos direitos da pessoa.",
  },
  {
    question: "Como a família pode entrar em contato?",
    answer:
      "A família pode iniciar uma conversa pelo WhatsApp. Nesse primeiro contato, poderá relatar a situação, esclarecer dúvidas e receber orientações sobre as possibilidades de acolhimento e os próximos passos.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer:
      "O tempo varia conforme as necessidades, a evolução e o plano de cuidado de cada pessoa. A duração deve ser acompanhada e reavaliada pela equipe, sem promessas de prazo fixo ou garantia de resultados.",
  },
  {
    question: "A clínica atende pessoas de outras cidades?",
    answer:
      "Sim. Embora esta página seja dedicada a quem busca ajuda em Araraquara, a Central também pode orientar e receber famílias de outras cidades da região. As condições de acolhimento são esclarecidas no primeiro contato.",
  },
];

export const Route = createFileRoute("/clinica-de-recuperacao-em-araraquara")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Clínica de Recuperação em Araraquara | Central de Acolhimento" },
      {
        name: "description",
        content:
          "Clínica de recuperação em Araraquara com acolhimento e orientação para dependência química, alcoolismo e uso problemático de álcool e outras drogas. Fale com a Central.",
      },
      { property: "og:title", content: "Clínica de Recuperação em Araraquara | Central de Acolhimento" },
      {
        property: "og:description",
        content:
          "Acolhimento, orientação e informações sobre tratamento para dependência química e alcoolismo em Araraquara e região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Central de Acolhimento e Reabilitação",
              url: pageUrl,
              telephone: "+5516997654579",
              areaServed: { "@type": "City", name: "Araraquara" },
              sameAs: [araraquaraFacebookHref, instagramHref],
              description:
                "Acolhimento e acompanhamento para pessoas que enfrentam dependência química, alcoolismo e uso problemático de outras drogas.",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Clínica de Recuperação em Araraquara",
                  item: pageUrl,
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: AraraquaraPage,
});

function WhatsAppLink({ children, className }: { children: ReactNode; className: string }) {
  return (
    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function FacebookLink({ children, className }: { children: ReactNode; className: string }) {
  return (
    <a href={araraquaraFacebookHref} target="_blank" rel="noopener noreferrer" className={className} aria-label="Página da Central em Araraquara no Facebook">
      {children}
    </a>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramLink({ children, className }: { children: ReactNode; className: string }) {
  return (
    <a href={instagramHref} target="_blank" rel="noopener noreferrer" className={className} aria-label="Perfil da Central no Instagram">
      {children}
    </a>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
      {children}
    </p>
  );
}

function AraraquaraPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-deep font-body text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-one absolute -left-32 top-16 size-80 rounded-full bg-brand/35 blur-3xl" />
        <div className="float-two absolute -right-24 top-[28rem] size-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="float-one absolute left-1/3 top-[80rem] size-80 rounded-full bg-brand/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-32 pt-6 sm:px-8 lg:px-12">
        <header>
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação">
              <img
                src={logoAsset.url}
                alt="Logo da Central de Acolhimento e Reabilitação"
                width={44}
                height={44}
                className="size-11 shrink-0 rounded-xl object-contain"
                loading="eager"
              />
              <span className="leading-tight">
                <span className="block font-display text-[13px] font-semibold sm:text-sm">Central de Acolhimento</span>
                <span className="block text-[11px] text-muted-foreground">e Reabilitação · Araraquara</span>
              </span>
            </a>
            <div className="flex items-center gap-2">
              <FacebookLink className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-secondary hover:text-secondary">
                <FacebookIcon className="size-4" />
                <span className="sr-only">Página no Facebook</span>
              </FacebookLink>
              <InstagramLink className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-secondary hover:text-secondary">
                <InstagramIcon className="size-4" />
                <span className="sr-only">Perfil no Instagram</span>
              </InstagramLink>
              <span className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:flex">
                <MapPin className="size-3" aria-hidden="true" /> SP
              </span>
            </div>
          </div>

          <nav
            aria-label="Menu principal"
            className="mt-4 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0"
          >
            <ul className="flex min-w-max items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:flex-wrap">
              {mainNav.map((item) =>
                item.href.startsWith("#") || item.href.includes("#") ? (
                  <li key={item.label}>
                    <a
                      href={item.href.slice(item.href.indexOf("#"))}
                      className="transition-colors hover:text-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.href as "/cidades" | "/blog" | "/videos"}
                      className="transition-colors hover:text-secondary"
                      activeProps={{ className: "text-secondary" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </header>

        <main id="inicio">
          <section className="grid gap-10 pb-14 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-20 lg:pt-16">
            <div>
              <div className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="size-1.5 rounded-full bg-accent" /> Acolhimento em Araraquara
              </div>
              <h1 className="mt-5 max-w-3xl font-display text-[2.15rem] font-bold leading-[1.04] sm:text-5xl lg:text-[3.75rem]">
                Clínica de Recuperação em <span className="text-secondary">Araraquara</span>
                <span className="mt-2 block text-[0.48em] font-medium leading-tight text-muted-foreground">– Central de Acolhimento e Reabilitação</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
                A Central oferece acolhimento, orientação e informações sobre possibilidades de tratamento para pessoas e famílias que buscam ajuda com dependência química, alcoolismo e uso problemático de álcool e outras drogas em Araraquara e região. Saiba mais sobre clínica de reabilitação em Araraquara, tratamento para dependência química em Araraquara e tratamento para alcoolismo em Araraquara.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <MessageCircle className="size-5" aria-hidden="true" /> Falar agora pelo WhatsApp
                </WhatsAppLink>
                <a href={phoneHref} className="glass-panel flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-semibold transition-colors hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <Phone className="size-4" aria-hidden="true" /> Ligar agora
                </a>
                <a href="#como-funciona" className="glass-panel flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-semibold transition-colors hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  Como funciona o acolhimento <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                Orientação inicial com respeito, discrição e sem compromisso.
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-background/30">
              <img src={acolhimentoImage} width={1024} height={640} decoding="async" alt="Ambiente claro e acolhedor para atendimento terapêutico" className="aspect-[16/10] w-full object-cover" />
              <div className="glass-panel-strong flex items-center justify-between gap-4 border-x-0 border-b-0 px-5 py-4">
                <p className="text-sm leading-snug text-muted-foreground">Um ambiente pensado para acolher com calma e dignidade.</p>
                <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">Escuta humana</span>
              </div>
            </div>
          </section>

          <section id="acolhimento" className="border-t border-border py-14 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
              <div>
                <SectionLabel>Sobre o acolhimento</SectionLabel>
                <h2 className="mt-3 max-w-md font-display text-2xl font-semibold leading-tight sm:text-4xl">Um caminho acompanhado, do primeiro contato ao cuidado.</h2>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                <p>O acolhimento começa com escuta, sem julgamentos. A família pode relatar o que está vivendo, tirar dúvidas e conhecer as possibilidades disponíveis antes de qualquer decisão.</p>
                <p>Nossa equipe oferece orientação clara sobre cada etapa, considera as necessidades da pessoa e de seus familiares e explica como funciona o cuidado. Buscar informação já é um passo importante.</p>
              </div>
            </div>
          </section>

          <section id="tratamento" className="border-t border-border py-14 lg:py-20">
            <SectionLabel>Tratamento para dependência química em Araraquara</SectionLabel>
            <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-4xl">Cuidado integral para compreender o uso e construir novas possibilidades</h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">O tratamento para dependência química e alcoolismo pode envolver diferentes profissionais e estratégias. O plano de cuidado deve considerar a história, as condições de saúde e a realidade de cada pessoa.</p>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <article className="glass-panel rounded-2xl p-5 sm:p-6">
                <span className="font-display text-xs font-semibold text-secondary">01</span>
                <h3 className="mt-4 font-display text-lg font-semibold">Acompanhamento terapêutico</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O trabalho individual e em grupo favorece a reflexão sobre hábitos, relações, responsabilidades e projetos de vida. As atividades ajudam a desenvolver estratégias para lidar com situações de risco e fortalecer uma rotina mais saudável.</p>
              </article>
              <article className="glass-panel rounded-2xl p-5 sm:p-6">
                <span className="font-display text-xs font-semibold text-secondary">02</span>
                <h3 className="mt-4 font-display text-lg font-semibold">Acompanhamento psicológico</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A escuta psicológica cria um espaço seguro para compreender emoções, padrões de comportamento e fatores associados ao uso de substâncias. Esse acompanhamento também pode apoiar a comunicação e o vínculo com a família.</p>
              </article>
              <article className="glass-panel rounded-2xl p-5 sm:p-6">
                <span className="font-display text-xs font-semibold text-secondary">03</span>
                <h3 className="mt-4 font-display text-lg font-semibold">Acompanhamento psiquiátrico</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Quando necessário, a avaliação psiquiátrica pode integrar o cuidado. Sua indicação depende da análise profissional de cada situação e não representa promessa de diagnóstico, prazo ou resultado.</p>
              </article>
            </div>
          </section>

          <section id="internacao" className="border-t border-border py-14 lg:py-20">
            <SectionLabel>Modalidades de acolhimento</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Internação para dependência química: decisões com responsabilidade</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-glass p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">V</span>
                  <h3 className="font-display text-xl font-semibold">Internação voluntária</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">A internação voluntária acontece quando a própria pessoa concorda em receber acolhimento. O processo inclui conversa inicial, explicação sobre a rotina e avaliação das condições para que a entrada ocorra de forma consciente e organizada.</p>
              </article>
              <article className="rounded-2xl border border-border bg-glass p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">I</span>
                  <h3 className="font-display text-xl font-semibold">Internação involuntária</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">A internação involuntária exige avaliação profissional, critérios específicos e observância da legislação aplicável. A situação deve ser analisada individualmente, com responsabilidade, documentação adequada e respeito aos direitos da pessoa.</p>
              </article>
            </div>
          </section>

          <section id="familia" className="border-t border-border py-14 lg:py-20">
            <div className="glass-panel-strong rounded-3xl p-6 sm:p-9 lg:grid lg:grid-cols-[1.2fr_.8fr] lg:gap-12">
              <div>
                <SectionLabel>Para quem procura ajuda em Araraquara</SectionLabel>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">A família não precisa enfrentar essa decisão sozinha.</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">Se você está em Araraquara e procura ajuda para um familiar que enfrenta problemas com álcool ou outras drogas, nossa equipe pode orientar você sobre as possibilidades de acolhimento e os próximos passos.</p>
              </div>
              <div className="mt-7 border-t border-border pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <SectionLabel>Araraquara e região</SectionLabel>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Araraquara é a cidade principal deste atendimento. A Central também pode receber famílias de outras cidades da região, conforme a avaliação e as condições apresentadas no contato inicial.</p>
                <WhatsAppLink className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                  Solicitar orientação <ArrowRight className="size-4" aria-hidden="true" />
                </WhatsAppLink>
              </div>
            </div>
          </section>

          <section id="como-funciona" className="border-t border-border py-14 lg:py-20">
            <SectionLabel>Como funciona</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Do primeiro contato ao acolhimento</h2>
            <ol className="glass-panel mt-8 grid gap-0 overflow-hidden rounded-3xl md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step} className="relative flex min-h-24 items-center gap-4 border-b border-border p-5 last:border-b-0 md:border-b md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-b-0">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold ${index === steps.length - 1 ? "bg-accent text-accent-foreground" : "bg-brand text-primary-foreground"}`}>
                    {index === steps.length - 1 ? <Check className="size-4" aria-hidden="true" /> : index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground/85">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section id="perguntas" className="border-t border-border py-14 lg:py-20">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Informação clara para uma decisão mais segura</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-[15px] font-semibold marker:content-none sm:text-base">
                    {faq.question}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-glass text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="contato" className="border-t border-border py-14 lg:py-20">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 sm:p-10 lg:p-14">
              <div aria-hidden="true" className="absolute -right-16 -top-20 size-64 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative max-w-3xl">
                <SectionLabel>Estamos aqui para orientar</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Não sabe qual é o próximo passo?</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75 sm:text-base">Converse com nossa equipe. Podemos esclarecer suas dúvidas e explicar como funciona o processo de acolhimento.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppLink className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-background/20 transition-transform hover:-translate-y-0.5">
                    <MessageCircle className="size-5" aria-hidden="true" /> Falar com nossa equipe pelo WhatsApp
                  </WhatsAppLink>
                  <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-primary-foreground/30 px-5 py-4 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                    <Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display font-semibold">Central de Acolhimento e Reabilitação</p>
              <p className="mt-1 text-xs text-muted-foreground">Araraquara e região · São Paulo</p>
              <a href={phoneHref} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:underline">
                <Phone className="size-3.5" aria-hidden="true" /> Ligar agora · {phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <nav aria-label="Navegação complementar" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground">
                <a href="#acolhimento" className="hover:text-foreground">Acolhimento</a>
                <a href="#tratamento" className="hover:text-foreground">Tratamento</a>
                <a href="#internacao" className="hover:text-foreground">Internação</a>
                <a href="#familia" className="hover:text-foreground">Família</a>
                <a href="#perguntas" className="hover:text-foreground">Dúvidas</a>
                <Link to="/cidades" className="hover:text-foreground">Cidades</Link>
                <Link to="/blog" className="hover:text-foreground">Blog</Link>
              </nav>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <FacebookLink className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-secondary">
                  <FacebookIcon className="size-4" /> Siga no Facebook
                </FacebookLink>
                <InstagramLink className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-secondary">
                  <InstagramIcon className="size-4" /> Siga no Instagram
                </InstagramLink>
              </div>
            </div>
          </div>
          <p className="mt-7 max-w-3xl text-[11px] leading-relaxed text-muted-foreground/70">As informações desta página têm caráter orientativo. A indicação de qualquer modalidade de cuidado depende de avaliação individual e profissional.</p>
        </footer>
      </div>

      <WhatsAppLink className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-xl shadow-background/40 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:left-auto sm:right-6">
        <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp
      </WhatsAppLink>
    </div>
  );
}