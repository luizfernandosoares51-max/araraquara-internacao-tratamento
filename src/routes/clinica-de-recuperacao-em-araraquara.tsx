import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Camera,
  Check,
  ExternalLink,
  HeartHandshake,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
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
const cityHealthNetworkUrl =
  "https://www.araraquara.sp.gov.br/secretarias/saude/sobre-a-secretaria-saude/atencao-especializada";
const cityCapsInformationUrl =
  "https://araraquara.sp.gov.br/atendimento-psicossocial-e-tema-do-canal-direto-com-a-prefeitura";
const ministryRapsUrl = "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps";

const careSteps = [
  {
    title: "Buscar informação",
    text: "A pessoa ou a família pode começar esclarecendo dúvidas, relatando a situação e conhecendo caminhos possíveis, sem assumir um diagnóstico.",
  },
  {
    title: "Receber orientação",
    text: "A conversa inicial ajuda a organizar as informações e a entender quais serviços podem ser considerados para aquela realidade.",
  },
  {
    title: "Avaliar o cuidado",
    text: "Qualquer acolhimento ou tratamento deve partir de uma avaliação individual, com participação de profissionais habilitados.",
  },
];

const faqs = [
  {
    question: "Como procurar ajuda para dependência química em Araraquara?",
    answer:
      "É possível começar por uma unidade da rede pública de saúde, pelo CAPS AD do município ou por uma conversa de orientação com a Central. Em situações de risco imediato, procure um serviço de urgência. O primeiro passo é apresentar a situação com clareza para que as possibilidades sejam avaliadas de forma responsável.",
  },
  {
    question: "Quando a família deve procurar orientação?",
    answer:
      "A família pode buscar orientação quando percebe mudanças persistentes no comportamento, conflitos, prejuízos na saúde, no trabalho ou nas relações associados ao uso de álcool e outras drogas. Não é necessário esperar a situação se agravar para pedir informação, mas somente uma avaliação profissional pode indicar o cuidado adequado.",
  },
  {
    question: "Existe tratamento para alcoolismo em Araraquara?",
    answer:
      "Araraquara conta com serviços da rede pública de atenção psicossocial, e a Central também oferece informações sobre possibilidades de acolhimento e tratamento. A escolha do caminho depende das necessidades da pessoa, da avaliação individual e das condições de cada serviço.",
  },
  {
    question: "Como funciona o acolhimento para dependência química?",
    answer:
      "O acolhimento começa com escuta e levantamento das necessidades. A pessoa e a família recebem explicações sobre o cuidado, a rotina e os próximos passos. As condições e a modalidade apropriada precisam ser analisadas antes de qualquer decisão.",
  },
  {
    question: "A internação é indicada para todos os casos?",
    answer:
      "Não. A internação é apenas uma das possibilidades e não deve ser tratada como resposta automática. Sua indicação depende de avaliação individual e profissional, das condições de saúde, dos riscos envolvidos e dos critérios legais aplicáveis.",
  },
  {
    question: "Como conversar com uma pessoa que precisa de tratamento?",
    answer:
      "Procure um momento seguro, fale com respeito, descreva fatos concretos e evite ameaças ou acusações. Ouvir também é importante. Quando o diálogo estiver difícil, a família pode buscar orientação profissional para planejar uma abordagem mais cuidadosa.",
  },
];

const localLinks = [
  { label: "Voltar para a Home", to: "/" as const },
  { label: "Orientações para a família", to: "/familia" as const },
  { label: "Entender o tratamento", to: "/tratamento" as const },
  { label: "Conhecer o acolhimento", to: "/acolhimento" as const },
  { label: "Ler o Blog", to: "/blog" as const },
  { label: "Entrar em contato", to: "/contato" as const },
];

export const Route = createFileRoute("/clinica-de-recuperacao-em-araraquara")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Clínica de Recuperação em Araraquara | Central de Acolhimento" },
      {
        name: "description",
        content:
          "Informações e orientação para famílias que procuram clínica de recuperação, acolhimento e tratamento para dependência química e alcoolismo em Araraquara e região.",
      },
      { property: "og:title", content: "Clínica de Recuperação em Araraquara | Central de Acolhimento" },
      {
        property: "og:description",
        content:
          "Informações e orientação para famílias que procuram clínica de recuperação, acolhimento e tratamento para dependência química e alcoolismo em Araraquara e região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica de Recuperação em Araraquara | Central de Acolhimento" },
      {
        name: "twitter:description",
        content:
          "Informações e orientação para famílias que procuram acolhimento e tratamento para dependência química e alcoolismo em Araraquara.",
      },
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
                "Informações e orientação sobre acolhimento e tratamento relacionado à dependência química e alcoolismo em Araraquara e região.",
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

function SocialIcon({ network }: { network: "facebook" | "instagram" }) {
  return network === "facebook" ? (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ) : (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675A6.162 6.162 0 1 0 12 18.163 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

function AraraquaraPage() {
  return (
    <div className="min-h-screen bg-ice font-body text-deep">
      <header className="bg-deep text-foreground">
        <div className="mx-auto max-w-6xl px-5 pb-5 pt-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação — página inicial">
              <img src={logoAsset.url} alt="Logo da Central de Acolhimento e Reabilitação" width={48} height={48} className="size-12 shrink-0 rounded-full object-contain" loading="eager" />
              <span className="leading-tight">
                <span className="block font-display text-[13px] font-semibold sm:text-sm">Central de Acolhimento</span>
                <span className="block text-[11px] text-muted-foreground">e Reabilitação · Araraquara</span>
              </span>
            </Link>
            <div className="hidden items-center gap-2 sm:flex">
              <a href={araraquaraFacebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Central em Araraquara" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-secondary"><SocialIcon network="facebook" /></a>
              <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Central" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-secondary"><SocialIcon network="instagram" /></a>
              <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground"><MapPin className="size-3" aria-hidden="true" /> Araraquara/SP</span>
            </div>
          </div>
          <nav aria-label="Menu principal" className="-mx-5 mt-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <ul className="flex min-w-max items-center gap-x-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {mainNav.map((item) =>
                item.href.includes("#") ? (
                  <li key={item.label}><a href={item.href.slice(item.href.indexOf("#"))} className="transition-colors hover:text-secondary">{item.label}</a></li>
                ) : (
                  <li key={item.label}><Link to={item.href as "/" | "/cidades" | "/blog" | "/videos"} className="transition-colors hover:text-secondary">{item.label}</Link></li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="bg-deep text-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-16">
            <div>
              <nav aria-label="Navegação estrutural" className="mb-7 text-xs text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-2"><li><Link to="/" className="hover:text-secondary">Início</Link></li><li aria-hidden="true">/</li><li><Link to="/cidades" className="hover:text-secondary">Cidades</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-foreground">Araraquara</li></ol>
              </nav>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary"><span className="size-1.5 rounded-full bg-accent" /> Informação local e orientação</div>
              <h1 className="mt-5 max-w-3xl font-display text-[2.25rem] font-bold leading-[1.05] sm:text-5xl lg:text-[3.75rem]">Clínica de Recuperação em <span className="text-secondary">Araraquara</span></h1>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-lg">Informações sobre acolhimento e tratamento para dependência química e alcoolismo em Araraquara, com orientação para famílias que procuram ajuda.</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">A Central de Acolhimento e Reabilitação orienta pessoas que enfrentam o uso problemático de álcool e outras drogas, sempre considerando a história e as necessidades de cada caso.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <WhatsAppLink className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><MessageCircle className="size-5" aria-hidden="true" /> Falar com nossa equipe</WhatsAppLink>
                <a href={phoneHref} className="flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border bg-glass px-5 py-4 text-center text-sm font-semibold transition-colors hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}</a>
                <a href="#galeria-araraquara" className="flex min-h-14 items-center justify-center gap-2 rounded-lg border border-secondary/40 px-5 py-4 text-center text-sm font-semibold text-secondary transition-colors hover:bg-glass sm:col-span-2"><Camera className="size-4" aria-hidden="true" /> Galeria de fotos da unidade de Araraquara</a>
              </div>
              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" /> Orientação inicial com respeito e discrição. Nenhuma modalidade de cuidado é indicada sem avaliação individual.</p>
            </div>
            <figure className="overflow-hidden rounded-lg border border-border bg-glass shadow-2xl shadow-background/30">
              <img src={acolhimentoImage} width={1024} height={640} decoding="async" alt="Ambiente ilustrativo de escuta e acolhimento" className="aspect-[16/10] w-full object-cover" />
              <figcaption className="border-t border-border px-5 py-4 text-xs leading-relaxed text-muted-foreground">Imagem ilustrativa de um ambiente de escuta. Não representa fotografia confirmada da unidade de Araraquara.</figcaption>
            </figure>
          </div>
        </section>

        <section id="tratamento" className="scroll-mt-6 bg-ice">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>Informação antes da decisão</SectionLabel>
            <div className="mt-3 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-4xl">Tratamento e acolhimento para dependência química em Araraquara</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-deep/75 sm:text-base">
                <p>A dependência química é uma condição complexa relacionada ao uso persistente de substâncias, mesmo quando surgem prejuízos à saúde, à rotina ou aos vínculos. Uma página na internet não substitui avaliação e não deve ser usada para diagnosticar alguém.</p>
                <p>Famílias de Araraquara podem procurar orientação quando o consumo de álcool ou outras drogas começa a provocar preocupação, conflitos, perda de autonomia ou riscos. Buscar informação é diferente de iniciar acolhimento, e acolhimento não significa necessariamente internação.</p>
                <p>O tratamento pode envolver diferentes estratégias e profissionais. Por isso, cada situação precisa ser analisada individualmente, considerando saúde física e mental, rede familiar, contexto social e disponibilidade dos serviços adequados.</p>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {careSteps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-deep/10 bg-foreground p-5 text-deep shadow-sm sm:p-6">
                  <span className="grid size-9 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-deep/70">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="acolhimento" className="scroll-mt-6 border-y border-deep/10 bg-ice">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start lg:gap-16">
              <div>
                <SectionLabel>Acolhimento responsável</SectionLabel>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Atendimento para famílias de Araraquara e região</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-deep/75 sm:text-base">Pessoas e famílias de Araraquara e dos municípios próximos podem procurar a Central para entender possibilidades de acolhimento e tratamento. A conversa inicial serve para ouvir a situação, esclarecer limites e orientar os próximos passos, conforme a avaliação e a disponibilidade.</p>
                <p className="mt-4 text-[15px] leading-relaxed text-deep/75 sm:text-base">A proximidade com a família pode ser relevante no planejamento do cuidado, mas nenhum caminho deve ser escolhido apenas pela localização. A segurança, as necessidades individuais e a indicação profissional precisam vir primeiro.</p>
              </div>
              <aside id="familia" className="scroll-mt-6 rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
                <Users className="size-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl font-semibold">Quando a família pode pedir ajuda?</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">Quando há preocupação com mudanças de comportamento, conflitos frequentes, riscos à saúde ou prejuízos na vida cotidiana. A orientação pode ajudar a família a organizar uma conversa e procurar avaliação adequada.</p>
                <Link to="/familia" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">Ler orientações para a família <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-ice">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>Cuidado em rede</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Rede de apoio e serviços públicos em Araraquara</h2>
            <p className="mt-5 max-w-4xl text-[15px] leading-relaxed text-deep/75 sm:text-base">A rede pública faz parte dos caminhos de cuidado disponíveis no município. A Prefeitura de Araraquara informa que o CAPS Álcool e Drogas atende questões relacionadas ao uso abusivo de substâncias e que as Unidades Básicas de Saúde e Unidades de Saúde da Família também podem orientar o acesso à rede. A Central oferece informação sobre possibilidades de acolhimento e tratamento, mas não substitui o SUS nem os serviços de urgência.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a href={cityCapsInformationUrl} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-deep/10 bg-foreground p-5 text-deep shadow-sm transition-transform hover:-translate-y-0.5"><Building2 className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-4 font-display text-lg font-semibold">CAPS Álcool e Drogas</h3><p className="mt-3 text-sm leading-relaxed text-deep/70">Consulte a explicação oficial da Prefeitura sobre o atendimento psicossocial e o acesso à rede.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Fonte oficial <ExternalLink className="size-4" aria-hidden="true" /></span></a>
              <a href={cityHealthNetworkUrl} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-deep/10 bg-foreground p-5 text-deep shadow-sm transition-transform hover:-translate-y-0.5"><HeartHandshake className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-4 font-display text-lg font-semibold">Saúde especializada municipal</h3><p className="mt-3 text-sm leading-relaxed text-deep/70">Veja os canais oficiais da atenção especializada e da saúde mental do município.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Prefeitura de Araraquara <ExternalLink className="size-4" aria-hidden="true" /></span></a>
              <a href={ministryRapsUrl} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-deep/10 bg-foreground p-5 text-deep shadow-sm transition-transform hover:-translate-y-0.5"><Info className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-4 font-display text-lg font-semibold">Rede de Atenção Psicossocial</h3><p className="mt-3 text-sm leading-relaxed text-deep/70">Conheça a organização nacional da rede de cuidados em saúde mental pelo Ministério da Saúde.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ministério da Saúde <ExternalLink className="size-4" aria-hidden="true" /></span></a>
            </div>
          </div>
        </section>

        <section className="bg-deep text-foreground">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Conversa confidencial</p><h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Precisa conversar sobre uma situação de dependência química ou alcoolismo?</h2><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Explique o que está acontecendo e receba informações sobre possibilidades de cuidado. A orientação não substitui uma avaliação profissional.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><WhatsAppLink className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp</WhatsAppLink><a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border px-6 py-4 text-sm font-semibold"><Phone className="size-4" aria-hidden="true" /> Ligar agora</a></div>
            </div>
          </div>
        </section>

        <section id="galeria-araraquara" className="scroll-mt-6 border-b border-deep/10 bg-ice">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>Registros reais, sem imagens genéricas</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Conheça a unidade de Araraquara</h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-deep/75">Esta área é exclusiva para fotos identificadas da unidade de Araraquara. No momento, o projeto não possui fotografias confirmadas da unidade; por isso, nenhuma imagem fictícia ou de outra cidade é exibida aqui.</p>
            <div className="mt-8 grid min-h-56 place-items-center rounded-lg border border-dashed border-primary/35 bg-foreground px-6 py-12 text-center text-deep">
              <div><Camera className="mx-auto size-8 text-primary" aria-hidden="true" /><h3 className="mt-4 font-display text-lg font-semibold">Galeria de fotos da unidade de Araraquara</h3><p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-deep/65">Espaço preparado para receber somente fotografias reais e confirmadas da unidade.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-ice">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid gap-9 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              <div><SectionLabel>Informação direcionada</SectionLabel><h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Por que esta página é específica para Araraquara?</h2></div>
              <div><p className="text-[15px] leading-relaxed text-deep/75 sm:text-base">Esta página reúne informações para quem pesquisa acolhimento, tratamento para dependência química, tratamento para alcoolismo ou ajuda relacionada ao uso de álcool e outras drogas em Araraquara e região. O objetivo é facilitar o acesso a informações locais, caminhos públicos e contato com a Central, sem transformar uma busca por ajuda em promessa de resultado.</p><nav aria-label="Links úteis da página de Araraquara" className="mt-7 grid gap-2 sm:grid-cols-2">{localLinks.map((item) => <Link key={item.label} to={item.to} className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-deep/10 bg-foreground px-4 py-3 text-sm font-semibold text-deep transition-colors hover:border-primary/40">{item.label}<ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" /></Link>)}<a href="#galeria-araraquara" className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-deep/10 bg-foreground px-4 py-3 text-sm font-semibold text-deep transition-colors hover:border-primary/40">Galeria de Araraquara<ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" /></a></nav></div>
            </div>
          </div>
        </section>

        <section id="perguntas" className="border-y border-deep/10 bg-ice">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <SectionLabel>Dúvidas locais</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Perguntas frequentes sobre tratamento em Araraquara</h2>
            <div className="mt-8 divide-y divide-deep/10 border-y border-deep/10">
              {faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-[15px] font-semibold marker:content-none sm:text-base">{faq.question}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-relaxed text-deep/70">{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-6 bg-deep text-foreground">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="max-w-4xl"><p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Orientação em Araraquara</p><h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Precisa conversar sobre uma situação de dependência química ou alcoolismo?</h2><p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">A equipe pode ouvir sua dúvida e explicar possibilidades de acolhimento e tratamento. Cada caso é analisado individualmente, sem garantia de resultado e sem afirmar que internação seja sempre necessária.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><WhatsAppLink className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp</WhatsAppLink><a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border px-6 py-4 text-sm font-semibold"><Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}</a></div></div>
          </div>
        </section>
      </main>

      <footer className="bg-deep text-foreground">
        <div className="mx-auto max-w-6xl border-t border-border px-5 pb-28 pt-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-display font-semibold">Central de Acolhimento e Reabilitação</p><p className="mt-1 text-xs text-muted-foreground">Informações e orientação em Araraquara e região</p><a href={phoneHref} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-secondary"><Phone className="size-3.5" aria-hidden="true" /> {phoneDisplay}</a></div><div className="flex flex-wrap gap-5 text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">Home</Link><Link to="/blog" className="hover:text-foreground">Blog</Link><Link to="/contato" className="hover:text-foreground">Contato</Link><a href={araraquaraFacebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Central em Araraquara" className="inline-flex items-center gap-2 hover:text-secondary"><SocialIcon network="facebook" /> Facebook</a><a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Central" className="inline-flex items-center gap-2 hover:text-secondary"><SocialIcon network="instagram" /> Instagram</a></div></div>
          <p className="mt-7 max-w-3xl text-[11px] leading-relaxed text-muted-foreground/70">As informações desta página têm caráter orientativo. A indicação de qualquer modalidade de cuidado depende de avaliação individual e profissional.</p>
        </div>
      </footer>

      <WhatsAppLink className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-xl shadow-background/40 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:left-auto sm:right-6"><MessageCircle className="size-5" aria-hidden="true" /> WhatsApp</WhatsAppLink>
    </div>
  );
}
