import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

import { emailDisplay, emailHref, phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";

const pageUrl = `${siteUrl}/clinica-de-reabilitacao`;
const imageUrl = `${siteUrl}${visualAssets.clinic.src}`;
const title = "Clínica de Reabilitação | Tratamento e Acolhimento";
const description =
  "Entenda como funcionam clínica de reabilitação, acolhimento e tratamento para dependência química e alcoolismo, com orientação responsável às famílias.";

const treatmentStages = [
  {
    title: "Acolhimento e avaliação inicial",
    text: "O primeiro contato reúne informações sobre a pessoa, o padrão de uso de álcool ou outras drogas, as condições de saúde, a rede de apoio e os riscos presentes. Essa escuta não substitui diagnóstico: ela organiza o caso para que profissionais habilitados possam indicar possibilidades de cuidado.",
  },
  {
    title: "Plano de cuidado individualizado",
    text: "Necessidades, objetivos e limites variam de pessoa para pessoa. Por isso, a modalidade, a rotina e os acompanhamentos devem ser definidos de forma individual, explicados com clareza e reavaliados ao longo do processo.",
  },
  {
    title: "Rotina e acompanhamento",
    text: "Conforme a proposta e a indicação profissional, a rotina pode incluir atividades terapêuticas, educação em saúde, organização de hábitos, convivência e acompanhamento clínico. A composição do cuidado precisa ser compatível com a situação real de cada pessoa.",
  },
  {
    title: "Participação da família",
    text: "Quando possível e apropriado, a família pode receber orientação, compreender limites, rever formas de comunicação e participar da preparação para a continuidade do cuidado, sempre respeitando a privacidade e a autonomia da pessoa acolhida.",
  },
] as const;

const choiceCriteria = [
  "Solicite explicações claras sobre a proposta, a rotina e as etapas do cuidado.",
  "Verifique quem realiza as avaliações e quais profissionais participam do acompanhamento.",
  "Pergunte como são tratados medicamentos, urgências e outras condições de saúde.",
  "Entenda como funciona a comunicação com a família e a proteção da privacidade.",
  "Confirme regras, documentos, condições financeiras e critérios de entrada e saída antes da decisão.",
  "Desconfie de promessas de cura, prazos garantidos ou resultados iguais para todas as pessoas.",
] as const;

const faqs = [
  {
    question: "O que é uma clínica de reabilitação?",
    answer:
      "É uma estrutura voltada ao cuidado de pessoas que enfrentam problemas relacionados ao uso de álcool ou outras drogas. A proposta, a modalidade e os acompanhamentos variam, por isso é importante conhecer o serviço e buscar avaliação individual antes de decidir.",
  },
  {
    question: "Quando procurar ajuda para dependência química?",
    answer:
      "A orientação pode ser procurada quando o uso começa a causar prejuízos à saúde, às relações, ao trabalho, aos estudos, à segurança ou à autonomia. Não é necessário esperar uma crise grave. Em risco imediato, procure um serviço de urgência.",
  },
  {
    question: "Como funciona o acolhimento?",
    answer:
      "O acolhimento começa com escuta, levantamento de necessidades e explicação das possibilidades de cuidado. A modalidade adequada depende de avaliação profissional, das condições de saúde e da situação social e familiar.",
  },
  {
    question: "A família pode buscar orientação mesmo sem a pessoa presente?",
    answer:
      "Sim. A família pode pedir informações para compreender a situação, organizar uma conversa mais segura e conhecer caminhos de cuidado. Uma orientação inicial, porém, não substitui a avaliação da pessoa que precisa de ajuda.",
  },
  {
    question: "Como funciona o tratamento para alcoolismo?",
    answer:
      "O cuidado pode combinar avaliação de saúde, acompanhamento psicológico e médico quando indicado, apoio social, mudanças na rotina e participação familiar. O plano depende das necessidades e dos riscos de cada caso; interromper o consumo sem orientação pode ser perigoso em algumas situações.",
  },
  {
    question: "Internação é indicada para todos os casos?",
    answer:
      "Não. A internação é uma possibilidade entre diferentes formas de cuidado e não deve ser uma resposta automática. A indicação depende de avaliação individual, critérios clínicos, condições de segurança e requisitos legais.",
  },
  {
    question: "Quanto tempo pode durar um tratamento?",
    answer:
      "Não existe um prazo único. A duração depende das necessidades, da modalidade escolhida, da evolução e das reavaliações realizadas pela equipe. Um serviço responsável não garante resultado nem estabelece o mesmo prazo para todas as pessoas.",
  },
  {
    question: "O que acontece depois do tratamento?",
    answer:
      "A continuidade pode envolver acompanhamento em saúde, rede de apoio, organização da rotina, atenção a situações de risco e um plano para buscar ajuda diante de dificuldades. Recaídas podem ocorrer e devem ser tratadas como sinal para reavaliar o cuidado, não como motivo para abandonar o acompanhamento.",
  },
] as const;

const relatedArticles = [
  {
    title: "Como saber se uma pessoa precisa de uma clínica de reabilitação?",
    description: "Sinais de prejuízo, busca de avaliação e formas responsáveis de a família oferecer apoio.",
    to: "/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao" as const,
  },
  {
    title: "Dependência química: sinais, consequências e caminhos para o tratamento",
    description: "Uma visão aprofundada dos impactos e das possibilidades de cuidado ao longo da recuperação.",
    to: "/blog/dependencia-quimica-sinais-consequencias-tratamento" as const,
  },
  {
    title: "Alcoolismo: quando o consumo de álcool se torna um problema?",
    description: "Critérios de atenção para compreender perda de controle, riscos e prejuízos relacionados ao álcool.",
    to: "/blog/alcoolismo-quando-o-consumo-se-torna-um-problema" as const,
  },
  {
    title: "Como funciona uma clínica de reabilitação para dependência química?",
    description: "Entenda avaliação, acolhimento, rotina de cuidado, participação familiar e preparação para a continuidade.",
    to: "/blog/como-funciona-uma-clinica-de-reabilitacao" as const,
  },
  {
    title: "Como escolher uma clínica de reabilitação para um familiar?",
    description: "Perguntas importantes sobre proposta, equipe, estrutura, contrato e segurança antes de decidir.",
    to: "/blog/como-escolher-uma-clinica-de-reabilitacao" as const,
  },
] as const;

export const Route = createFileRoute("/clinica-de-reabilitacao")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: visualAssets.clinic.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: title,
              description,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${siteUrl}#website` },
              about: [
                { "@type": "Thing", name: "Clínica de reabilitação" },
                { "@type": "Thing", name: "Tratamento da dependência química" },
                { "@type": "Thing", name: "Tratamento do alcoolismo" },
              ],
              primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Clínica de Reabilitação", item: pageUrl },
              ],
            },
            {
              "@type": "Organization",
              "@id": `${siteUrl}#organization`,
              name: "Central de Acolhimento e Reabilitação",
              url: siteUrl,
              telephone: "+5516997654579",
              areaServed: "Estado de São Paulo",
            },
          ],
        }),
      },
    ],
  }),
  component: RehabilitationClinicPage,
});

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-primary">{children}</p>;
}

function RehabilitationClinicPage() {
  return (
    <div className="min-h-screen bg-ice font-body text-deep">
      <header className="border-b border-border bg-deep text-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <Link to="/" className="font-display text-sm font-semibold sm:text-base" aria-label="Central de Acolhimento e Reabilitação — página inicial">
            Central de Acolhimento <span className="block text-xs font-normal text-muted-foreground sm:inline">e Reabilitação</span>
          </Link>
          <nav aria-label="Navegação principal">
            <ul className="flex items-center gap-4 text-xs font-semibold sm:gap-6 sm:text-sm">
              <li><Link to="/cidades" className="text-muted-foreground transition-colors hover:text-secondary">Cidades</Link></li>
              <li><Link to="/blog" className="text-muted-foreground transition-colors hover:text-secondary">Blog</Link></li>
              <li><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-secondary transition-colors hover:text-foreground">Falar agora</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-deep text-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-16">
            <div>
              <nav aria-label="Navegação estrutural" className="mb-7 text-xs text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link to="/" className="hover:text-secondary">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-foreground">Clínica de Reabilitação</li>
                </ol>
              </nav>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Guia completo e responsável</p>
              <h1 className="mt-5 max-w-3xl font-display text-[2.35rem] font-bold leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
                Clínica de Reabilitação: Tratamento, Acolhimento e Recuperação
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Informações para compreender quando buscar ajuda, como avaliar possibilidades de cuidado e qual pode ser o papel da família diante da dependência química e do alcoolismo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <MessageCircle className="size-5" aria-hidden="true" /> Buscar orientação
                </a>
                <a href="#entenda" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border bg-glass px-6 py-4 text-sm font-semibold transition-colors hover:bg-glass-strong">
                  Entender o cuidado <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className="overflow-hidden rounded-lg border border-border bg-glass">
              <img src={visualAssets.clinic.src} alt={visualAssets.clinic.alt} width={1600} height={1067} className="aspect-[4/3] w-full object-cover" loading="eager" fetchPriority="high" />
              <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">{conceptualImageCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section id="entenda" className="bg-ice px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Conceito e finalidade</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">O que é uma clínica de reabilitação?</h2>
            </div>
            <div className="space-y-5 text-[15px] leading-7 text-deep/80 sm:text-base">
              <p>Uma clínica de reabilitação é um espaço de cuidado organizado para pessoas que enfrentam prejuízos relacionados ao uso de álcool ou outras drogas. Seu papel não se resume ao afastamento temporário da substância: o atendimento responsável procura compreender saúde, comportamento, relações, rotina, riscos e recursos de apoio.</p>
              <p>“Clínica de recuperação” é uma expressão frequentemente usada com sentido semelhante. Em ambos os casos, o nome sozinho não informa a qualidade nem a modalidade do serviço. É necessário conhecer a proposta, os profissionais envolvidos, os critérios de atendimento e a forma como os direitos da pessoa são respeitados.</p>
              <p>A recuperação é um processo individual. Pode envolver avanços, dificuldades e revisões do plano de cuidado. Por esse motivo, nenhuma instituição séria deve prometer cura, prazo fixo ou resultado garantido.</p>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Reconhecer a necessidade</SectionLabel>
            <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Quando procurar uma clínica de reabilitação?</h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">Buscar informação pode ser adequado antes de uma crise. Mudanças persistentes e prejuízos associados ao consumo merecem atenção, mas somente uma avaliação profissional pode orientar a modalidade de cuidado.</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Riscos à saúde ou à segurança",
                  "Dificuldade de reduzir ou interromper o uso",
                  "Conflitos familiares recorrentes",
                  "Prejuízos no trabalho ou nos estudos",
                  "Abandono de responsabilidades e autocuidado",
                  "Tentativas anteriores que precisam ser reavaliadas",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-border bg-glass p-4 text-sm leading-6"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <p className="mt-8 border-l-2 border-secondary pl-5 text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Situações urgentes:</strong> alteração importante da consciência, risco de violência, tentativa de suicídio, convulsão ou outro risco imediato exigem atendimento de urgência. Uma página informativa ou conversa por mensagem não substitui esse cuidado.</p>
          </div>
        </section>

        <section className="bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-24" aria-labelledby="related-articles-heading">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Informação para cada decisão</SectionLabel>
            <div className="mt-3 grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
              <div>
                <h2 id="related-articles-heading" className="font-display text-3xl font-bold leading-tight sm:text-4xl">Leituras para compreender cada etapa</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Aprofunde dúvidas sobre sinais de atenção, possibilidades de cuidado e critérios para uma decisão informada.</p>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary hover:text-foreground">Ver todos os conteúdos <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((article) => (
                  <article key={article.to} className="rounded-lg border border-border bg-glass p-5 sm:p-6">
                    <h3 className="font-display text-lg font-bold leading-snug">{article.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p>
                    <Link to={article.to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-foreground">Ler artigo <ArrowRight className="size-4" aria-hidden="true" /></Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ice px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Etapas possíveis</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Como funciona o tratamento?</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-deep/80">O tratamento não é uma sequência idêntica para todos. Em um cuidado responsável, cada etapa tem finalidade clara e depende das necessidades identificadas na avaliação.</p>
            <figure className="mt-9 overflow-hidden rounded-lg border border-deep/10 bg-foreground shadow-sm">
              <img src={visualAssets.treatment.src} alt={visualAssets.treatment.alt} width={1600} height={1067} loading="lazy" decoding="async" className="aspect-[16/7] w-full object-cover" />
              <figcaption className="px-5 py-3 text-xs leading-relaxed text-deep/60">{conceptualImageCaption}</figcaption>
            </figure>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {treatmentStages.map((stage, index) => (
                <article key={stage.title} className="rounded-lg border border-deep/10 bg-foreground p-6 shadow-sm sm:p-7">
                  <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{index + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-bold">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-deep/75">{stage.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tratamento" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Entenda mais sobre tratamento <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link to="/acolhimento" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Conheça o processo de acolhimento <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-glass p-6 sm:p-8">
              <ClipboardCheck className="size-7 text-secondary" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Tratamento para dependência química</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">Dependência química envolve uma relação complexa com substâncias e pode afetar saúde, escolhas, vínculos e rotina. O cuidado pode reunir abordagens psicológicas, médicas e sociais, conforme avaliação. Mais do que interromper o uso, é importante compreender gatilhos, desenvolver recursos para lidar com dificuldades e reconstruir formas de apoio.</p>
              <Link to="/blog/dependencia-quimica-sinais-tratamento" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-foreground">Ler sobre sinais e busca de ajuda <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </article>
            <article className="rounded-lg border border-border bg-glass p-6 sm:p-8">
              <HeartHandshake className="size-7 text-secondary" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Tratamento para alcoolismo</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">O álcool é socialmente aceito, mas seu uso pode causar dependência e consequências graves. A avaliação deve considerar frequência, quantidade, sintomas de abstinência, condições de saúde e impactos cotidianos. Em alguns casos, parar abruptamente sem acompanhamento pode trazer riscos; a orientação de profissionais de saúde é essencial.</p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-foreground">Conversar sobre a situação <ArrowRight className="size-4" aria-hidden="true" /></a>
            </article>
          </div>
        </section>

        <section className="bg-ice px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <SectionLabel>Decisão informada</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Como escolher uma clínica de reabilitação?</h2>
              <p className="mt-5 text-base leading-7 text-deep/80">Compare informações, faça perguntas e evite decisões baseadas apenas em urgência comercial. Transparência é parte do cuidado.</p>
            </div>
            <ul className="space-y-3">
              {choiceCriteria.map((criterion) => (
                <li key={criterion} className="flex gap-3 rounded-lg border border-deep/10 bg-foreground p-4 text-sm leading-6 text-deep/80"><Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />{criterion}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <article>
              <Users className="size-7 text-secondary" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight">O papel da família no processo de recuperação</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">A família não causa nem resolve sozinha a dependência. Ainda assim, pode ter participação importante ao buscar orientação, reconhecer limites, apoiar o tratamento e cuidar da própria saúde emocional. Conversas respeitosas e baseadas em fatos tendem a ser mais úteis do que acusações, ameaças ou promessas que não poderão ser mantidas.</p>
              <Link to="/familia" className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary hover:text-foreground">Ver orientações para famílias <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </article>
            <article>
              <ShieldCheck className="size-7 text-secondary" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight">Depois do tratamento: continuidade do cuidado e prevenção de recaídas</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">O retorno à rotina merece planejamento. Rede de apoio, acompanhamento de saúde, atividades significativas, atenção a gatilhos e estratégias para momentos de risco podem integrar essa etapa. Uma recaída não apaga todo o percurso, mas indica que o plano precisa ser revisto e que buscar ajuda novamente é importante.</p>
            </article>
          </div>
        </section>

        <section className="bg-ice px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-deep/10 bg-foreground p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <MapPin className="size-7 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-bold">Encontre atendimento por cidade</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-deep/75">Consulte informações locais e caminhos de orientação para cidades atendidas. As páginas locais explicam o contexto de cada região sem afirmar a existência de unidade física onde ela não existe.</p>
            </div>
            <Link to="/cidades" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Ver todas as cidades <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="bg-foreground px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>Dúvidas frequentes</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Perguntas sobre clínicas de reabilitação</h2>
            <div className="mt-8 divide-y divide-deep/10 border-y border-deep/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-semibold sm:text-lg">
                    {faq.question}<ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-deep/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>Primeiro contato</SectionLabel>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Como buscar orientação com responsabilidade</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Conte o que está acontecendo, tire dúvidas e peça explicações sobre as possibilidades. A conversa inicial ajuda a organizar os próximos passos, mas não substitui avaliação profissional nem atendimento de urgência.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp</a>
              <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border bg-glass px-6 py-4 text-sm font-semibold"><Phone className="size-5 text-secondary" aria-hidden="true" /> {phoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-deep px-5 py-8 text-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div><p>Central de Acolhimento e Reabilitação</p><a href={emailHref} className="mt-2 flex items-center gap-2 break-all font-semibold text-secondary hover:underline"><Mail className="size-3.5 shrink-0" aria-hidden="true" /> {emailDisplay}</a></div>
          <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-5">
            <Link to="/">Início</Link>
            <Link to="/cidades">Cidades</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/videos">Vídeos</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
