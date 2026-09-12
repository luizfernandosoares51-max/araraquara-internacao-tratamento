import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

const facebookHref = "https://www.facebook.com/centrodereabilitacaomoradadosol";
const instagramHref = "https://www.instagram.com/luizfernandosoares.soares.1?stkn=MXJuczZldHJseXk5ZA==";
import acolhimentoImage from "@/assets/acolhimento-araraquara.jpg";
import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";

const whatsappNumber = "5516997654579";
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de receber orientações sobre acolhimento em Araraquara.",
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
  head: () => ({
    meta: [
      { title: "Clínica de Recuperação em Araraquara | Central de Acolhimento e Reabilitação" },
      {
        name: "description",
        content:
          "Clínica de recuperação em Araraquara para dependência química e alcoolismo. Conheça o acolhimento, acompanhamento terapêutico, psicológico e psiquiátrico.",
      },
      { property: "og:title", content: "Clínica de Recuperação em Araraquara | Central de Acolhimento e Reabilitação" },
      {
        property: "og:description",
        content:
          "Acolhimento e orientação para dependência química e alcoolismo em Araraquara, com acompanhamento especializado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clinica-de-recuperacao-em-araraquara" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/clinica-de-recuperacao-em-araraquara" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Central de Acolhimento e Reabilitação",
              areaServed: { "@type": "City", name: "Araraquara" },
              description:
                "Acolhimento e acompanhamento para pessoas que enfrentam dependência química, alcoolismo e uso problemático de outras drogas.",
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
    <a href={facebookHref} target="_blank" rel="noopener noreferrer" className={className}>
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
        <header className="flex items-center justify-between gap-4">
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
            <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <MapPin className="size-3" aria-hidden="true" /> SP
            </span>
          </div>
        </header>

        <main id="inicio">
          <section className="grid gap-10 pb-14 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-20 lg:pt-16">
            <div>
              <div className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="size-1.5 rounded-full bg-accent" /> Acolhimento em Araraquara
              </div>
              <h1 className="mt-5 max-w-3xl font-display text-[2.15rem] font-bold leading-[1.04] sm:text-5xl lg:text-[3.75rem]">
                Clínica de Recuperação em <span className="text-secondary">Araraquara</span>
                <span className="mt-2 block text-[0.48em] font-medium leading-tight text-muted-foreground">Central de Acolhimento e Reabilitação</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
                Acolhimento, acompanhamento terapêutico e suporte especializado para pessoas que enfrentam a dependência química e problemas relacionados ao uso de álcool e outras drogas.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <MessageCircle className="size-5" aria-hidden="true" /> Falar com nossa equipe
                </WhatsAppLink>
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
              <img src={acolhimentoImage} width={1024} height={640} alt="Ambiente claro e acolhedor para atendimento terapêutico" className="aspect-[16/10] w-full object-cover" />
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

          <section className="border-t border-border py-14 lg:py-20">
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
                <WhatsAppLink className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-background/20 transition-transform hover:-translate-y-0.5 sm:w-auto">
                  <MessageCircle className="size-5" aria-hidden="true" /> Falar com nossa equipe pelo WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display font-semibold">Central de Acolhimento e Reabilitação</p>
              <p className="mt-1 text-xs text-muted-foreground">Araraquara e região · São Paulo</p>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <nav aria-label="Navegação complementar" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground">
                <a href="#acolhimento" className="hover:text-foreground">Acolhimento</a>
                <a href="#tratamento" className="hover:text-foreground">Tratamento</a>
                <a href="#internacao" className="hover:text-foreground">Internação</a>
                <a href="#perguntas" className="hover:text-foreground">Dúvidas</a>
              </nav>
              <FacebookLink className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-secondary">
                <FacebookIcon className="size-4" /> Siga no Facebook
              </FacebookLink>
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