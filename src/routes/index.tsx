import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Check, ChevronDown, HeartHandshake, Users, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import articleSignsImage from "@/assets/blog-dependencia-quimica-sinais.jpg";
import articleCityImage from "@/assets/blog-dependencia-quimica-sao-carlos.jpg";
import { FamilyOrientationGuide } from "@/components/family-orientation-guide";
import { InteractiveTriage } from "@/components/interactive-triage";
import { CareSpecialties } from "@/components/care-program-sections";
import { NetworkPlanGuidance, NetworkSafety } from "@/components/network-guidance-sections";
import { cityDirectory } from "@/lib/city-pages";
import { Button } from "@/components/ui/button";
import { institutionalIdentity, legalSources } from "@/lib/institutional";
import {
  emailDisplay,
  emailHref,
  facebookHref,
  instagramHref,
  phoneDisplay,
  phoneHref,
  siteUrl,
  whatsappHref,
} from "@/lib/site";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";

const pageUrl = `${siteUrl}/`;
const pageTitle = "Central de Acolhimento e Reabilitação | Regulação Estadual em SP";
const pageDescription = "Orientação e acolhimento em todo o Estado de São Paulo: interior, litoral e capital. Consulte vagas na rede parceira e agendamento de remoção com o plantão 24h.";

const steps = [
  "Contato com a família",
  "Conversa inicial",
  "Orientações sobre o acolhimento",
  "Avaliação da situação",
  "Definição dos próximos passos",
  "Acolhimento",
];

const featuredCityNames = new Set(["São Carlos", "Ribeirão Preto"]);
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
    question: "Famílias de qualquer cidade de São Paulo podem buscar orientação?",
    answer: "Sim. Famílias do interior e da capital paulista podem conversar com o plantão de orientação da Central e selecionar sua cidade na triagem. A equipe orienta sobre possibilidades de acolhimento e encaminhamento na rede parceira. Disponibilidade, localização e perfil de admissão são confirmados no contato; páginas regionais não comprovam unidades em cada município.",
  },
  {
    question: "O plantão 24 horas inclui remoção imediata?",
    answer: "Não. O plantão 24h e o transporte funcionam mediante agendamento e disponibilidade da rede. A equipe confirma as condições de atendimento e deslocamento, sem garantia de resposta ou remoção imediata. Em risco imediato à vida, procure o SAMU 192.",
  },
  {
    question: "Como a Central ajuda a organizar o acolhimento?",
    answer:
      "Oferecemos escuta inicial e apoio para organizar o acesso ao cuidado. A equipe esclarece as opções da rede, a modalidade de acolhimento, a documentação do estabelecimento receptor e as condições de admissão conforme as necessidades da pessoa. Vagas e recursos são confirmados no contato, sem garantia de admissão imediata.",
  },
  {
    question: "Como funciona o acolhimento para dependência química?",
    answer:
      "O processo costuma começar com a escuta da família e a avaliação da situação. A partir daí, são explicadas as possibilidades de acolhimento e o acompanhamento indicado, que pode reunir atividades terapêuticas, apoio psicológico e avaliação psiquiátrica quando necessária.",
  },
  {
    question: "Como funciona a internação para dependência química?",
    answer:
      "A unidade própria da Central oferece acolhimento voluntário, que não equivale a internação hospitalar. Quando há necessidade de intervenção médica hospitalar, a Central orienta a família e encaminha o caso para avaliação em estabelecimento habilitado, com responsabilidade médica.",
  },
  {
    question: "Qual é a diferença entre internação voluntária e involuntária?",
    answer:
      "A internação voluntária ocorre com consentimento da pessoa; a involuntária ocorre sem esse consentimento e depende dos requisitos legais e da avaliação e autorização médicas. Ambas são distintas do acolhimento voluntário psicossocial oferecido na unidade própria da Central.",
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
    question: "Como encontrar uma possibilidade de acolhimento na minha região?",
    answer:
      "Oferecemos direcionamento para uma rede de clínicas credenciadas e parceiras em todas as regiões do Estado de São Paulo. A triagem e o plantão ajudam a organizar os próximos passos conforme sua cidade e as necessidades de cuidado. A instituição declara que a rede é regularizada pela Vigilância Sanitária competente; a equipe apoia a família no esclarecimento da identificação, documentação, equipe e disponibilidade do estabelecimento receptor. Essa declaração não equivale à verificação independente das autorizações.",
  },
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content:
          pageDescription,
      },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content:
          pageDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
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
               name: pageTitle,
               description: pageDescription,
              isPartOf: { "@id": `${pageUrl}#website` },
              about: { "@id": `${pageUrl}#organization` },
              inLanguage: "pt-BR",
            },
            {
              "@type": "Organization",
              "@id": `${pageUrl}#organization`,
              name: "Central de Acolhimento e Reabilitação",
              url: pageUrl,
              telephone: "+5516997654579",
              address: institutionalIdentity.postalAddress,
              hasMap: institutionalIdentity.mapsHref,
              areaServed: "Estado de São Paulo",
              sameAs: [facebookHref, instagramHref],
              description:
                pageDescription,
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.9 6.993c-.003 5.45-4.437 9.886-9.892 9.886m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.69 1.448h.005c6.558 0 11.894-5.336 11.897-11.893a11.82 11.82 0 0 0-3.489-8.413Z" />
    </svg>
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
        

        <main id="inicio">
          <section aria-labelledby="institucional-titulo" className="relative -mx-5 overflow-hidden px-5 py-12 sm:-mx-8 sm:px-8 sm:py-16 lg:-mx-12 lg:px-12 lg:py-20">
            <img src={visualAssets.home.hero.src} width={1600} height={1067} decoding="async" fetchPriority="high" alt={visualAssets.home.hero.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-foreground/80" aria-hidden="true" />
            <div className="relative max-w-4xl text-background">
              <p className="text-xs font-semibold uppercase leading-relaxed">CENTRAL DE ACOLHIMENTO E REGULAÇÃO ESTADUAL</p>
              <h1 id="institucional-titulo" className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-background sm:text-5xl lg:text-6xl">
                Central de Acolhimento e Reabilitação no Estado de São Paulo
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/90 sm:text-lg">
                Disponibilizamos orientação e apoio ao acolhimento em todo o Estado de São Paulo — incluindo interior, litoral e capital. Oferecemos acolhimento voluntário, apoio para encaminhamento à internação voluntária ou involuntária em estabelecimentos médicos habilitados e plantão 24 horas para orientar a família e organizar o agendamento de remoção com a rede parceira.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="h-auto min-h-14 whitespace-normal bg-whatsapp px-6 py-4 text-whatsapp-foreground hover:bg-whatsapp/90">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Solicitar Vaga ou Agendar Remoção no Plantão 24h</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-auto min-h-14 whitespace-normal px-6 py-4 text-foreground">
                  <a href="#triagem-familiar" onClick={(event) => { const triage = document.getElementById("triagem-familiar"); if (!triage) return; event.preventDefault(); triage.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }); }}><ArrowRight aria-hidden="true" />Iniciar Triagem Rápida</a>
                </Button>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs leading-relaxed text-background/90" aria-label="Compromissos do atendimento">
                <li className="flex items-start gap-2"><Check className="size-4 shrink-0" aria-hidden="true" />Encaminhamento médico conforme a Lei 13.840/2019</li>
                <li className="flex items-start gap-2"><Check className="size-4 shrink-0" aria-hidden="true" />Orientação 24h para famílias de todas as regiões do Estado de SP</li>
                <li className="flex items-start gap-2"><Check className="size-4 shrink-0" aria-hidden="true" />Rede autorizada pela Vigilância Sanitária, segundo declaração institucional</li>
              </ul>
              <p className="mt-4 max-w-2xl text-xs leading-relaxed text-background/90">Nossa equipe consulta vagas e combina as condições de admissão e transporte com a família. A remoção é agendada conforme avaliação e disponibilidade da rede.</p>
              <p className="mt-6 text-xs text-background/75">{conceptualImageCaption}</p>
            </div>
            <div className="relative mt-8 grid gap-4 md:grid-cols-3" aria-label="Acolhimento, encaminhamento e remoção">
              <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
                <HeartHandshake className="size-6 text-secondary" aria-hidden="true" />
                <h2 className="mt-3 font-display text-xl font-semibold">Acolhimento e internação voluntária</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Oferecemos acolhimento voluntário e suporte psicossocial na Central. Quando há indicação de internação médica com consentimento, apoiamos o encaminhamento a estabelecimento habilitado. Admissão depende de avaliação e disponibilidade.</p>
              </article>
              <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
                <ShieldCheck className="size-6 text-secondary" aria-hidden="true" />
                <h2 className="mt-3 font-display text-xl font-semibold">Encaminhamento para internação involuntária</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Apoiamos a família nos trâmites e no encaminhamento a unidades médicas habilitadas. A medida é excepcional e depende de avaliação, autorização médica e requisitos legais; a solicitação familiar, por si só, não autoriza a internação.</p>
              </article>
              <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
                <Truck className="size-6 text-secondary" aria-hidden="true" />
                <h2 className="mt-3 font-display text-xl font-semibold">Remoção: suporte de agendamento 24h</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O plantão apoia a organização do deslocamento com a família. A execução depende de agendamento, avaliação das necessidades, trajeto e disponibilidade da rede, sem garantia de resgate imediato ou transporte 24h.</p>
              </article>
            </div>
          </section>

          <InteractiveTriage />

          <NetworkSafety />

          <section aria-labelledby="pilares-titulo" className="border-t border-border py-16 lg:py-24">
            <SectionLabel>Compromisso com pessoas e famílias</SectionLabel>
            <h2 id="pilares-titulo" className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">Pilares do cuidado institucional</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-lg border border-border bg-card p-6">
                <Users className="size-6 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">Corpo Clínico Multidisciplinar</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Suporte psicológico, acompanhamento médico e psiquiátrico integrado e enfermagem para supervisão diária e cuidados contínuos, conforme as necessidades de cada pessoa.</p>
              </article>
              <article className="rounded-lg border border-border bg-card p-6">
                <HeartHandshake className="size-6 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">Metodologia Humanizada</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Conscientização em 12 Passos, apoio psicológico, laborterapia, convivência terapêutica e prevenção à recaída. Conteúdos sobre TCC são educativos; o plano de cuidado depende de avaliação individual.</p>
              </article>
              <article className="rounded-lg border border-border bg-card p-6">
                <ShieldCheck className="size-6 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">Segurança e Conformidade Legal</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Acolhimento voluntário na sede própria e orientação familiar conforme as Leis 10.216/2001 e 13.840/2019. Internação hospitalar e decisões médicas pertencem aos estabelecimentos habilitados responsáveis.</p>
                <Link to="/transparencia" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">Transparência institucional <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </article>
            </div>
          </section>

          <section className="border-t border-border py-16 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
              <div className="relative overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-brand/10">
                <img src={visualAssets.home.continuity.src} width={1200} height={1200} loading="lazy" decoding="async" alt={visualAssets.home.continuity.alt} className="aspect-[4/3] w-full object-cover" />
                <p className="absolute inset-x-0 bottom-0 bg-foreground/80 px-5 py-3 text-xs font-medium text-background backdrop-blur-sm">{conceptualImageCaption}</p>
              </div>
              <div>
                <SectionLabel>Sobre a Central</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Sobre a Central de Acolhimento e Reabilitação</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">Oferecemos acolhimento voluntário, suporte psicossocial e apoio à família diante da dependência química e do alcoolismo. Nossa equipe recebe sua demanda e ajuda a organizar o acesso ao cuidado com clareza e responsabilidade.</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">Atuamos como Central de Acolhimento e Regulação Estadual: articulamos o direcionamento para clínicas credenciadas e parceiras e esclarecemos o serviço indicado, as condições de acesso e a disponibilidade. Regulação, aqui, significa articulação privada de encaminhamentos; a Central não é um órgão público regulador e não garante vagas.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-border py-16 lg:py-24">
            <SectionLabel>Informação e caminhos possíveis</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">O apoio que oferecemos à sua família</h2>
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

          <CareSpecialties />
          <FamilyOrientationGuide />

          <section id="acolhimento" className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
              <div>
                <SectionLabel>Sobre o acolhimento</SectionLabel>
                <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-5xl">Acolhimento Humanizado para Dependência Química e Alcoolismo</h2>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  <p>O acolhimento começa com escuta, sem julgamentos. A família pode relatar o que está vivendo, tirar dúvidas e conhecer as possibilidades disponíveis antes de qualquer decisão.</p>
                  <p>Nossa equipe oferece orientação clara sobre cada etapa, considera as necessidades da pessoa e de seus familiares e explica como funciona o cuidado. Veja também as <Link to="/acolhimento" className="font-semibold text-secondary hover:underline">informações sobre acolhimento</Link>.</p>
                </div>
                <Link to="/acolhimento" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-secondary shadow-sm">Conhecer o acolhimento <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
              <figure className="overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-brand/10">
                <img src={visualAssets.home.welcome.src} width={1600} height={1067} loading="lazy" decoding="async" alt={visualAssets.home.welcome.alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-xs leading-relaxed text-muted-foreground">{conceptualImageCaption}</figcaption>
              </figure>
            </div>
          </section>

          <section id="tratamento" className="border-t border-border py-16 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
              <figure className="order-2 overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-brand/10 lg:order-1">
                <img src={visualAssets.home.routine.src} width={1200} height={1200} loading="lazy" decoding="async" alt={visualAssets.home.routine.alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-xs leading-relaxed text-muted-foreground">{conceptualImageCaption}</figcaption>
              </figure>
              <div className="order-1 lg:order-2">
                <SectionLabel>Tratamento para dependência química e alcoolismo</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Metodologia Terapêutica: 12 Passos, Apoio Psicológico e Convivência</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">A proposta de acolhimento voluntário da Central inclui conscientização em 12 Passos, suporte psicológico com Margarete Vasques (CRP 06/130268), laborterapia, convivência terapêutica e prevenção à recaída. O plano considera a história, as condições de saúde e a realidade de cada pessoa; o acompanhamento médico e psiquiátrico integrado e a enfermagem complementam o suporte psicológico, com encaminhamento hospitalar quando indicado. <Link to="/tratamento" className="font-semibold text-secondary hover:underline">Entenda o tratamento</Link>.</p>
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

          <NetworkPlanGuidance />
          <section id="internacao" className="border-t border-border bg-muted/45 py-16 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-24">
            <SectionLabel>Acolhimento e encaminhamento médico</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Internação para dependência química: decisões com responsabilidade</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">V</span>
                  <h3 className="font-display text-xl font-semibold">Acolhimento voluntário na Central</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Oferecemos acolhimento voluntário, suporte psicossocial e participação familiar. Nossa equipe esclarece o plano de cuidado e as condições de admissão. Acolhimento psicossocial não equivale a internação hospitalar.</p>
              </article>
              <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">I</span>
                  <h3 className="font-display text-xl font-semibold">Orientação e encaminhamento hospitalar</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Quando há indicação de desintoxicação médica, cuidado hospitalar ou internação involuntária clínica, a Central apoia a família na organização dos trâmites e no encaminhamento. Avaliação, autorização, admissão e comunicações legais são responsabilidades dos profissionais e estabelecimentos médicos receptores. Transporte depende de confirmação e agendamento.</p>
              </article>
            </div>
            <div className="mt-8 border-y border-border py-6">
              <h3 className="flex items-start gap-3 font-display text-xl font-semibold"><ShieldCheck className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />Segurança jurídica e notificação legal</h3>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">A internação involuntária exige avaliação e autorização médicas e cumprimento dos requisitos legais. Conforme a Lei 10.216/2001, a comunicação ao Ministério Público Estadual deve ocorrer em até 72 horas, sob responsabilidade do responsável técnico do estabelecimento onde a internação ocorreu. A orientação da Central não substitui avaliação médica ou assessoria jurídica e não garante vaga, admissão ou resultado.</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">O escopo de atendimento acima é uma declaração da instituição; não representa verificação independente das habilitações de estabelecimentos parceiros.</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-secondary">{legalSources.slice(0, 2).map(source => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label}</a>)}<Link to="/transparencia" className="underline underline-offset-4">Transparência e responsabilidade técnica</Link></div>
            </div>
          </section>

          <section id="familia" className="border-t border-border py-16 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-brand/10">
                <img src={visualAssets.home.family.src} width={1200} height={1200} loading="lazy" decoding="async" alt={visualAssets.home.family.alt} className="aspect-[4/3] w-full object-cover" />
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
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Rede de clínicas credenciadas e parceiras em todas as regiões do Estado de São Paulo</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Famílias da capital, interior e litoral podem buscar orientação e direcionamento para a rede. Segundo declaração da Central, todas as clínicas credenciadas e parceiras são devidamente regularizadas e autorizadas pela Vigilância Sanitária competente, observadas as normas aplicáveis e as diretrizes da ANVISA. A localização e a disponibilidade de cada estabelecimento são confirmadas no contato, sem garantia de unidade em cada município ou de vaga próxima.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">A equipe apoia a família no esclarecimento da identificação e documentação sanitária do estabelecimento receptor. A regularidade da rede é uma declaração institucional, não uma verificação independente de licenças nem uma certificação geral emitida pela ANVISA. Plantão 24h e transporte funcionam mediante agendamento e disponibilidade da rede.</p>
            <ul className="mt-8 grid gap-3 border-y border-border py-6 sm:grid-cols-2">
              {['Grande São Paulo e Capital', 'Região Central e Centro-Oeste Paulista', 'Ribeirão Preto e Franca', 'Rio Claro, Campinas e Circuito das Águas', 'Demais municípios do interior e litoral'].map(region => <li key={region} className="flex items-start gap-2 text-sm"><MapPin className="size-4 shrink-0 text-secondary" aria-hidden="true" />{region}</li>)}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Regiões de origem das famílias que podem solicitar orientação; esta lista não identifica unidades físicas ou autorizações locais.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-lg border border-border bg-card p-5"><ShieldCheck className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Documentação e segurança</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A instituição declara regularidade sanitária da rede. Oferecemos apoio para esclarecer a identificação, a licença aplicável, a responsabilidade técnica e a modalidade de cuidado do estabelecimento receptor.</p></article>
              <article className="rounded-lg border border-border bg-card p-5"><Users className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Equipe e necessidades de cuidado</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Nossa equipe ajuda a esclarecer com o estabelecimento receptor os profissionais, a supervisão e os recursos adequados ao caso. A composição da equipe varia conforme a unidade e a modalidade.</p></article>
              <article className="rounded-lg border border-border bg-card p-5"><HeartHandshake className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Logística orientada</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">O plantão oferece orientação e suporte para agendamento 24h. Trajeto, condições e disponibilidade de transporte são confirmados antes do deslocamento, sem promessa de remoção imediata.</p></article>
            </div>
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
            <Button asChild size="lg" className="mt-6 h-auto min-h-12 whitespace-normal py-3">
              <Link to="/cidades">Conhecer todas as cidades <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </Button>
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

        
      </div>

    </div>
  );
}