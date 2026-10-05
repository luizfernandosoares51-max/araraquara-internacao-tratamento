import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Check, ChevronDown, HeartHandshake, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "@/assets/logo-central-optimized.webp.asset.json";
import articleSignsImage from "@/assets/blog-dependencia-quimica-sinais.jpg";
import articleCityImage from "@/assets/blog-dependencia-quimica-sao-carlos.jpg";
import heroImage from "@/assets/unidade-araraquara-home.webp.asset.json";
import { AraraquaraPhotoGallery, araraquaraPhotos } from "@/components/araraquara-photo-gallery";
import { cityDirectory } from "@/lib/city-pages";
import {
  emailDisplay,
  emailHref,
  facebookHref,
  instagramHref,
  mainNav,
  phoneDisplay,
  phoneHref,
  siteUrl,
  whatsappHref,
} from "@/lib/site";

const pageUrl = siteUrl;
const heroImageUrl = `${siteUrl}${heroImage.url}`;

const steps = [
  "Contato com a família",
  "Conversa inicial",
  "Orientações sobre o acolhimento",
  "Avaliação da situação",
  "Definição dos próximos passos",
  "Acolhimento",
];

const photoGalleryCities = [
  { name: "Araraquara", units: ["Unidade de Araraquara"] },
] as const;

const featuredCityNames = new Set(["São Carlos", "Bauru", "Ribeirão Preto"]);
const featuredCities = cityDirectory.filter((city) => featuredCityNames.has(city.name));

const guidanceLinks = [
  { title: "Acolhimento responsável", description: "Entenda como a escuta inicial ajuda a avaliar necessidades e possibilidades de cuidado.", to: "/acolhimento" as const },
  { title: "Tratamento individualizado", description: "Conheça os aspectos que podem integrar um plano de cuidado para dependência química e alcoolismo.", to: "/tratamento" as const },
  { title: "Orientação para a família", description: "Encontre informações para compreender a situação e buscar ajuda com mais segurança.", to: "/familia" as const },
] as const;

const existingArticles = [
  {
    title: "Dependência Química: Entenda os Sinais e a Importância do Tratamento",
    description: "Informações para reconhecer sinais e compreender quando buscar orientação, acolhimento e tratamento especializado.",
    to: "/blog/dependencia-quimica-sinais-tratamento" as const,
    image: articleSignsImage,
    imageAlt: "Pessoa em reflexão durante a busca de informações sobre dependência química",
  },
  {
    title: "Dependência Química em São Carlos: acolhimento, tratamento e onde buscar ajuda",
    description: "Um conteúdo acolhedor para pessoas e familiares que procuram informações e caminhos de ajuda em São Carlos.",
    to: "/blog/dependencia-quimica-sao-carlos" as const,
    image: articleCityImage,
    imageAlt: "Pessoa recebendo apoio durante uma conversa sobre dependência química em São Carlos",
  },
] as const;

const faqs = [
  {
    question: "O que avaliar ao escolher uma clínica de reabilitação?",
    answer:
      "A escolha depende das necessidades da pessoa e da família. É importante compreender a proposta de cuidado, verificar a clareza das informações, conhecer a estrutura e perguntar como o acompanhamento é conduzido antes de tomar uma decisão.",
  },
  {
    question: "Como funciona o acolhimento para dependência química?",
    answer:
      "O processo costuma começar com a escuta da família e a avaliação da situação. A partir daí, são explicadas as possibilidades de acolhimento e o acompanhamento indicado, que pode reunir atividades terapêuticas, apoio psicológico e avaliação psiquiátrica quando necessária.",
  },
  {
    question: "Como funciona a internação para dependência química?",
    answer:
      "A internação é uma possibilidade de cuidado que precisa ser avaliada individualmente. Antes do acolhimento, a equipe conversa com a família, reúne informações relevantes e orienta sobre a modalidade adequada e as etapas do processo.",
  },
  {
    question: "Qual é a diferença entre internação voluntária e involuntária?",
    answer:
      "Na modalidade voluntária, a pessoa concorda com o acolhimento. A internação involuntária depende de avaliação responsável, indicação profissional e cumprimento da legislação aplicável. Cada situação deve ser analisada individualmente, com respeito à dignidade e aos direitos da pessoa.",
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
    question: "Onde fica a unidade física da Central?",
    answer:
      "A única unidade física da Central está localizada em Araraquara, SP. Pessoas e famílias de outras cidades podem entrar em contato para receber informações e orientação; as páginas locais não representam filiais ou unidades físicas.",
  },
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Clínica de Reabilitação: Dependência e Alcoolismo | Central" },
      {
        name: "description",
        content:
          "Informação, acolhimento e orientação sobre tratamento para dependência química e alcoolismo. Unidade física da Central em Araraquara, SP.",
      },
      { property: "og:title", content: "Clínica de Reabilitação: Dependência e Alcoolismo | Central" },
      {
        property: "og:description",
        content:
          "Informação, acolhimento e orientação sobre tratamento para dependência química e alcoolismo, com unidade física em Araraquara.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: heroImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Área externa da unidade física da Central em Araraquara" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica de Reabilitação: Dependência e Alcoolismo | Central" },
      { name: "twitter:description", content: "Informação, acolhimento e orientação sobre tratamento para dependência química e alcoolismo." },
      { name: "twitter:image", content: heroImageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${pageUrl}#website`,
              url: pageUrl,
              name: "Central de Acolhimento e Reabilitação",
              inLanguage: "pt-BR",
            },
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
               name: "Clínica de Reabilitação: Dependência e Alcoolismo | Central",
               description: "Informação, acolhimento e orientação sobre tratamento para dependência química e alcoolismo, com unidade física em Araraquara.",
              isPartOf: { "@id": `${pageUrl}#website` },
              about: { "@id": `${pageUrl}#organization` },
              primaryImageOfPage: { "@type": "ImageObject", url: heroImageUrl, width: 1200, height: 630 },
              inLanguage: "pt-BR",
            },
            {
              "@type": "Organization",
              "@id": `${pageUrl}#organization`,
              name: "Central de Acolhimento e Reabilitação",
              url: pageUrl,
              telephone: "+5516997654579",
              areaServed: "Estado de São Paulo",
              sameAs: [facebookHref, instagramHref],
              description:
                "Orientação para pessoas e famílias que buscam acolhimento e tratamento para dependência química e alcoolismo.",
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
  component: HomePage,
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
    <a href={facebookHref} target="_blank" rel="noopener noreferrer" className={className} aria-label="Página da Central no Facebook">
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
    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}

function HomePage() {
  return (
    <div className="home-serene home-editorial min-h-screen overflow-hidden bg-deep font-body text-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-32 sm:px-8 lg:px-12">
        <header className="border-b border-border bg-background/95 pb-5 pt-5 backdrop-blur-sm">
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
               <span className="font-display text-[13px] font-bold leading-tight text-foreground sm:text-sm">
                Central de Acolhimento e Reabilitação
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
          <section className="grid gap-10 pb-20 pt-12 lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary shadow-sm">
                <span className="size-1.5 rounded-full bg-accent" /> Acolhimento, orientação e apoio
              </div>
              <h1 className="mt-6 max-w-3xl font-display text-[2.45rem] font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-[4.15rem]">
                Clínica de Reabilitação para <span className="text-secondary">Dependência Química e Alcoolismo</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
                A Central de Acolhimento e Reabilitação reúne informação, orientação e acolhimento para pessoas e famílias que buscam ajuda diante da dependência química, do alcoolismo e do uso problemático de outras drogas.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Cada situação pede uma avaliação individual. Conheça nosso <Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary hover:underline">guia sobre clínica de reabilitação e recuperação</Link> e entenda possibilidades de tratamento sem promessas de prazo ou resultado.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#tratamento" className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-brand/10 transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  Conhecer o tratamento <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <WhatsAppLink className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-accent/15 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <MessageCircle className="size-5" aria-hidden="true" /> Buscar orientação
                </WhatsAppLink>
              </div>
              <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                Orientação inicial com respeito, discrição e sem compromisso.
              </div>
            </div>

            <div className="relative min-h-[470px] sm:min-h-[620px] lg:min-h-[680px]">
              <div className="absolute inset-y-0 right-0 w-[91%] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-brand/10 sm:w-[86%]">
                <img src={heroImage.url} width={1200} height={630} decoding="async" fetchPriority="high" alt="Área externa arborizada da unidade física da Central em Araraquara" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-foreground/80 px-5 py-4 text-background backdrop-blur-sm">
                  <p className="text-sm leading-snug">Unidade física localizada exclusivamente em Araraquara.</p>
                </div>
              </div>
              <div className="absolute left-0 top-10 w-[42%] overflow-hidden rounded-2xl border-[6px] border-background bg-card shadow-xl sm:top-14 sm:border-[10px]">
                <img src={araraquaraPhotos[3].src} width={araraquaraPhotos[3].width} height={araraquaraPhotos[3].height} decoding="async" loading="eager" alt="Entrada da unidade física da Central em Araraquara com edifícios azuis e arco-íris ao fundo" className="aspect-[3/4] w-full object-cover" />
              </div>
              <Link to="/clinica-de-recuperacao-em-araraquara" className="absolute bottom-8 left-4 inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-background/95 px-5 py-3 text-sm font-semibold text-secondary shadow-xl backdrop-blur-sm transition-transform hover:-translate-y-0.5 sm:bottom-12 sm:left-10">
                Conhecer a unidade <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="border-t border-border py-16 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
              <div className="relative overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-brand/10">
                <img src={araraquaraPhotos[0].src} width={araraquaraPhotos[0].width} height={araraquaraPhotos[0].height} loading="lazy" decoding="async" alt={araraquaraPhotos[0].alt} className="aspect-[4/3] w-full object-cover" />
                <p className="absolute inset-x-0 bottom-0 bg-foreground/80 px-5 py-3 text-xs font-medium text-background backdrop-blur-sm">Foto real da unidade física em Araraquara</p>
              </div>
              <div>
                <SectionLabel>Sobre a Central</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Sobre a Central de Acolhimento e Reabilitação</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">A Central reúne informação, orientação e acolhimento para pessoas e famílias que procuram compreender possibilidades de cuidado diante da dependência química e do alcoolismo. A conversa inicial ajuda a organizar dúvidas com clareza e responsabilidade.</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">A unidade física está localizada exclusivamente em Araraquara. As páginas de outras cidades oferecem conteúdo regional e caminhos de orientação, sem representar filiais.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-border py-16 lg:py-24">
            <SectionLabel>Informação e caminhos possíveis</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Como podemos orientar</h2>
             <div className="mt-10 grid gap-5 md:grid-cols-3">
              {guidanceLinks.map((item) => (
                 <Link key={item.title} to={item.to} className="glass-panel flex min-h-48 flex-col rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-brand/25 sm:p-7">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Saiba mais <ArrowRight className="size-4" aria-hidden="true" /></span>
                 </Link>
              ))}
            </div>
          </section>

          <section id="acolhimento" className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
              <div>
                <SectionLabel>Sobre o acolhimento</SectionLabel>
                <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-5xl">Um caminho acompanhado, do primeiro contato ao cuidado.</h2>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  <p>O acolhimento começa com escuta, sem julgamentos. A família pode relatar o que está vivendo, tirar dúvidas e conhecer as possibilidades disponíveis antes de qualquer decisão.</p>
                  <p>Nossa equipe oferece orientação clara sobre cada etapa, considera as necessidades da pessoa e de seus familiares e explica como funciona o cuidado. Veja também as <Link to="/acolhimento" className="font-semibold text-secondary hover:underline">informações sobre acolhimento</Link>.</p>
                </div>
                <Link to="/acolhimento" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-secondary shadow-sm">Conhecer o acolhimento <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
              <figure className="overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-brand/10">
                <img src={araraquaraPhotos[3].src} width={araraquaraPhotos[3].width} height={araraquaraPhotos[3].height} loading="lazy" decoding="async" alt={araraquaraPhotos[3].alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-xs leading-relaxed text-muted-foreground">Entrada e ambiente externo da unidade física da Central em Araraquara.</figcaption>
              </figure>
            </div>
          </section>

          <section id="tratamento" className="border-t border-border py-16 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
              <figure className="order-2 overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-brand/10 lg:order-1">
                <img src={araraquaraPhotos[5].src} width={araraquaraPhotos[5].width} height={araraquaraPhotos[5].height} loading="lazy" decoding="async" alt={araraquaraPhotos[5].alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-xs leading-relaxed text-muted-foreground">Espaço real de convivência da unidade de Araraquara.</figcaption>
              </figure>
              <div className="order-1 lg:order-2">
                <SectionLabel>Tratamento para dependência química e alcoolismo</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Tratamento para dependência química e alcoolismo</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">O tratamento para dependência química e alcoolismo pode envolver diferentes estratégias. Em uma clínica de recuperação, o plano de cuidado deve considerar a história, as condições de saúde e a realidade de cada pessoa. <Link to="/tratamento" className="font-semibold text-secondary hover:underline">Entenda o tratamento</Link>.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
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
                <h3 className="mt-4 font-display text-lg font-semibold">Avaliação psiquiátrica quando indicada</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Quando necessário, a avaliação psiquiátrica pode integrar o cuidado. Sua indicação depende da análise profissional de cada situação e não representa promessa de diagnóstico, prazo ou resultado.</p>
              </article>
            </div>
          </section>

          <section id="internacao" className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-24">
            <SectionLabel>Modalidades de acolhimento</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Internação para dependência química: decisões com responsabilidade</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">V</span>
                  <h3 className="font-display text-xl font-semibold">Internação voluntária</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">A internação voluntária acontece quando a própria pessoa concorda em receber acolhimento. O processo inclui conversa inicial, explicação sobre a rotina e avaliação das condições para que a entrada ocorra de forma consciente e organizada.</p>
              </article>
              <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">I</span>
                  <h3 className="font-display text-xl font-semibold">Internação involuntária</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">A internação involuntária exige avaliação profissional, critérios específicos e observância da legislação aplicável. A situação deve ser analisada individualmente, com responsabilidade, documentação adequada e respeito aos direitos da pessoa.</p>
              </article>
            </div>
          </section>

          <section id="familia" className="border-t border-border py-16 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-brand/10">
                <img src={araraquaraPhotos[1].src} width={araraquaraPhotos[1].width} height={araraquaraPhotos[1].height} loading="lazy" decoding="async" alt={araraquaraPhotos[1].alt} className="aspect-[4/3] w-full object-cover" />
                <div className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-full bg-background/95 text-secondary shadow-lg"><HeartHandshake className="size-5" aria-hidden="true" /></div>
              </div>
              <div>
                <SectionLabel>Apoio para pessoas e famílias</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Apoio para famílias que buscam ajuda</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">Buscar informações pode ajudar a família a compreender a situação com mais clareza. Nossa equipe oferece escuta e orientação sobre possibilidades de acolhimento e tratamento, sem prometer resultados e sem substituir uma avaliação profissional.</p>
                <Link to="/familia" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">
                  Orientações para a família <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <div className="mt-8 border-t border-border pt-6">
                <h3 className="font-display text-lg font-semibold">Encontre informações sobre atendimento na sua região</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Consulte informações específicas sobre acolhimento, tratamento e orientação para famílias de diferentes regiões de São Paulo.
                </p>
                <a href="#atendimento-por-cidade" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">
                  Encontrar atendimento por cidade <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                </div>
              </div>
            </div>
          </section>

          <section id="atendimento-por-cidade" className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-24">
            <SectionLabel>Orientação em diferentes regiões</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Atendimento e orientação por cidade</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              A Central orienta pessoas e famílias de diferentes regiões de São Paulo. Consulte as páginas locais sem confundir orientação regional com a existência de uma unidade física.
            </p>
             <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="glass-panel flex min-h-52 flex-col rounded-2xl p-5 sm:p-6">
                <MapPin className="size-5 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold">Araraquara</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">Informações sobre acolhimento, orientação e possibilidades de tratamento em Araraquara e região.</p>
                <Link to="/clinica-de-recuperacao-em-araraquara" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">
                  Conhecer a unidade em Araraquara <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
              {featuredCities.map((city) => (
                <article key={city.slug} className="glass-panel flex min-h-52 flex-col rounded-2xl p-5 sm:p-6">
                  <MapPin className="size-5 text-secondary" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{city.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">Informações e orientação para pessoas e famílias de {city.name} e região que procuram ajuda.</p>
                  <Link to="/$citySlug" params={{ citySlug: `clinica-de-recuperacao-em-${city.slug}` }} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">
                    Orientação para famílias de {city.name} <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
            <Link to="/cidades" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-glass">
              Ver todas as cidades <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </section>

          <section id="galeria-fotos" aria-labelledby="galeria-titulo" className="scroll-mt-6 border-t border-border py-16 lg:py-24">
            <SectionLabel>Unidade física</SectionLabel>
             <h2 id="galeria-titulo" className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Clínica de Reabilitação em Araraquara</h2>
             <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">A única unidade física da Central está localizada em Araraquara, SP. Pessoas e famílias de outras cidades da região também podem buscar informação e orientação; as páginas locais não representam filiais. Veja informações sobre a unidade e fotos reais de seus espaços.</p>
            <Link to="/clinica-de-recuperacao-em-araraquara" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">Conheça a unidade em Araraquara <ArrowRight className="size-4" aria-hidden="true" /></Link>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
              {araraquaraPhotos.slice(2, 5).map((photo, index) => (
                <figure key={photo.src} className={`overflow-hidden rounded-2xl bg-card shadow-lg shadow-brand/10 ${index === 0 ? "col-span-2 lg:col-span-6" : "col-span-1 lg:col-span-3"}`}>
                  <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto" />
                </figure>
              ))}
            </div>
            <details className="group/gallery">
              <summary className="glass-panel mt-6 flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 marker:content-none sm:px-6">
                <span className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-secondary sm:text-base">
                  <Camera className="size-5 shrink-0" aria-hidden="true" />
                  Ver galeria
                </span>
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open/gallery:rotate-180" aria-hidden="true" />
              </summary>

              <div className="pt-8">
                <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">
                  Fotos da unidade física da Central
                </h3>

                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                  {photoGalleryCities.map((city) => (
                    <details key={city.name} className="group/city glass-panel rounded-2xl">
                      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:content-none">
                        <span className="font-display text-base font-semibold uppercase text-foreground">{city.name}</span>
                        <ChevronDown className="size-5 shrink-0 text-secondary transition-transform group-open/city:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="space-y-3 border-t border-border p-4 sm:p-5">
                        {city.units.map((unit) => (
                          <details key={unit} className="group/unit overflow-hidden rounded-xl border border-border bg-glass">
                            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 marker:content-none">
                              <span className="text-sm font-semibold">{unit}</span>
                              <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open/unit:rotate-180" aria-hidden="true" />
                            </summary>
                            <div className="border-t border-border p-4">
                              <AraraquaraPhotoGallery />
                            </div>
                          </details>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </details>
          </section>

          <section id="como-funciona" className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
              <div>
                <SectionLabel>Como funciona</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Como funciona o primeiro contato</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">Uma sequência clara ajuda a família a compreender como a conversa começa e quais informações orientam os próximos passos.</p>
              </div>
            <ol className="overflow-hidden border-y border-border lg:border-l">
              {steps.map((step, index) => (
                <li key={step} className="relative flex min-h-20 items-center gap-5 border-b border-border px-5 py-4 last:border-b-0 sm:px-7">
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold ${index === steps.length - 1 ? "bg-accent text-accent-foreground" : "bg-brand text-primary-foreground"}`}>
                    {index === steps.length - 1 ? <Check className="size-4" aria-hidden="true" /> : index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground/85">{step}</span>
                </li>
              ))}
            </ol>
            </div>
          </section>

          <section id="perguntas" className="border-t border-border py-16 lg:py-24">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Informação clara para uma decisão mais segura</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-[15px] font-semibold marker:content-none sm:text-base">
                    {faq.question}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-24">
            <SectionLabel>Blog e vídeos</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Conteúdos para entender a dependência química</h2>
             <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">O conteúdo educativo aprofunda temas como sinais, consequências, alcoolismo, tratamento e participação da família. Para uma visão geral, comece pelo <Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary hover:underline">guia de clínica de reabilitação</Link>.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {existingArticles.map((article) => (
                <article key={article.to} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img src={article.image} alt={article.imageAlt} width={800} height={520} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  <div className="flex min-h-64 flex-col p-5 sm:p-7">
                    <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{article.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
                    <Link to={article.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">Ler artigo <ArrowRight className="size-4" aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/blog" className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-glass">
                Conteúdos sobre dependência química e alcoolismo <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link to="/videos" className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-glass">
                Vídeos informativos <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section id="contato" className="border-t border-border py-16 lg:py-24">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 shadow-xl shadow-brand/10 sm:p-10 lg:p-14">
              <div className="relative max-w-3xl">
                <SectionLabel>Estamos aqui para orientar</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Fale com a Central</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75 sm:text-base">Converse com nossa equipe. Podemos esclarecer suas dúvidas e explicar como funciona o processo de acolhimento.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppLink className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-background/20 transition-transform hover:-translate-y-0.5">
                    <MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp
                  </WhatsAppLink>
                  <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-primary-foreground/30 px-5 py-4 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                    <Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}
                  </a>
                  <Link to="/clinica-de-reabilitacao" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-primary-foreground/30 px-5 py-4 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                    Conhecer a Central <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <a href={emailHref} className="mt-5 inline-flex items-center gap-2 break-all text-sm font-semibold text-primary-foreground hover:underline">
                  <Mail className="size-4 shrink-0" aria-hidden="true" /> {emailDisplay}
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display font-semibold">Central de Acolhimento e Reabilitação</p>
              <p className="mt-1 text-xs text-muted-foreground">Atendimento em diferentes regiões de São Paulo</p>
              <a href={phoneHref} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:underline">
                <Phone className="size-3.5" aria-hidden="true" /> Ligar agora · {phoneDisplay}
              </a>
              <a href={emailHref} className="mt-2 flex items-center gap-2 break-all text-xs font-semibold text-secondary hover:underline">
                <Mail className="size-3.5 shrink-0" aria-hidden="true" /> {emailDisplay}
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

      <WhatsAppLink className="fixed bottom-4 right-4 z-50 grid size-12 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-background/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:bottom-6 sm:right-6 sm:size-13">
        <MessageCircle className="size-5" aria-hidden="true" /> <span className="sr-only">WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
}