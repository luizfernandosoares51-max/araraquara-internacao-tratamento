import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ExternalLink,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

import guidanceImage from "@/assets/blog-dependencia-quimica-sinais.jpg";
import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import { Button } from "@/components/ui/button";
import { phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";

const pagePath = "/clinica-de-recuperacao-em-bauru-sp";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Clínica de Reabilitação em Bauru | Dependência Química e Alcoolismo";
const description =
  "Orientação para famílias de Bauru que procuram tratamento para dependência química e alcoolismo. Conheça as possibilidades de acolhimento e tratamento.";

const familySignals = [
  {
    title: "Mudanças de comportamento",
    text: "Alterações persistentes de humor, rotina, sono ou convivência podem indicar que algo precisa ser observado com mais atenção.",
  },
  {
    title: "Perda de controle",
    text: "A pessoa tenta reduzir o consumo, mas volta a usar álcool ou outras drogas, ou consome além do que havia planejado.",
  },
  {
    title: "Prejuízos na vida cotidiana",
    text: "Faltas no trabalho, abandono de compromissos, dívidas e conflitos recorrentes mostram impactos concretos do consumo.",
  },
  {
    title: "Tentativas anteriores",
    text: "Quando tentativas de parar não se mantêm, uma avaliação profissional pode ajudar a compreender quais apoios são necessários.",
  },
  {
    title: "Uso mais frequente",
    text: "O aumento da frequência ou a preocupação constante com álcool, cocaína, crack, maconha ou outras substâncias merece atenção.",
  },
  {
    title: "Relações fragilizadas",
    text: "Afastamento, perda de confiança e discussões causadas pelo consumo podem sinalizar a necessidade de procurar orientação.",
  },
];

const centralSupport = [
  "Escutar o relato da família sem julgamentos",
  "Entender o momento vivido e as principais preocupações",
  "Apresentar possibilidades de tratamento de forma clara",
  "Explicar o que significa acolhimento e quais são seus limites",
  "Organizar as necessidades que precisam de avaliação",
  "Orientar um possível encaminhamento quando houver indicação e disponibilidade",
];

const welcomeSteps = [
  { title: "Primeiro contato", text: "A família procura a Central por WhatsApp ou telefone e apresenta suas dúvidas." },
  { title: "Escuta da situação", text: "A conversa reúne informações sobre o momento atual, o histórico e os impactos percebidos." },
  { title: "Necessidades do caso", text: "As condições relatadas são organizadas para orientar uma avaliação individual responsável." },
  { title: "Possibilidades existentes", text: "A família recebe informações sobre caminhos de cuidado que podem ser considerados." },
  { title: "Avaliação do acolhimento", text: "Quando houver indicação, concordância e disponibilidade, avalia-se uma unidade adequada." },
  { title: "Continuidade do cuidado", text: "O acompanhamento segue conforme o plano definido para a pessoa e as condições do tratamento." },
];

const faqs = [
  {
    question: "Existe clínica de reabilitação em Bauru para dependência química?",
    answer:
      "Bauru possui serviços públicos e pode contar com instituições privadas na região. A Central não possui unidade física em Bauru. Ela oferece orientação inicial para que a família compreenda possibilidades de tratamento e, quando aplicável, avalie uma unidade adequada ao caso.",
  },
  {
    question: "Como uma família de Bauru pode procurar tratamento para dependência química?",
    answer:
      "A família pode buscar a rede municipal de saúde ou iniciar uma conversa com a Central. É importante reunir informações sobre o consumo, os prejuízos observados, riscos atuais e tentativas anteriores, sem tentar definir sozinha um diagnóstico.",
  },
  {
    question: "Como funciona o acolhimento para uma pessoa de Bauru?",
    answer:
      "O processo começa com escuta e orientação. Se o acolhimento for uma possibilidade, o caso precisa ser avaliado, a disponibilidade confirmada e as condições explicadas à família. O contato inicial não garante vaga nem internação.",
  },
  {
    question: "Existe tratamento para alcoolismo para pessoas de Bauru?",
    answer:
      "Existem diferentes caminhos de cuidado para a dependência de álcool, tanto na rede pública quanto em outros serviços. A alternativa adequada depende da avaliação individual e dos riscos e necessidades apresentados.",
  },
  {
    question: "Como saber qual tipo de tratamento é adequado?",
    answer:
      "Não há uma resposta única. Histórico de consumo, condições de saúde, segurança, vínculos familiares e capacidade de manter o cuidado precisam ser considerados por profissionais responsáveis.",
  },
  {
    question: "Qual a diferença entre CAPS AD e uma comunidade terapêutica?",
    answer:
      "O CAPS AD integra a rede pública de atenção psicossocial e oferece cuidado em saúde mental relacionado ao uso de álcool e outras drogas. Comunidades terapêuticas são serviços de acolhimento com características próprias. A indicação deve considerar a necessidade de cada pessoa e as regras aplicáveis a cada modalidade.",
  },
  {
    question: "Quando a família deve procurar ajuda?",
    answer:
      "Quando o consumo provoca prejuízos repetidos na saúde, segurança, convivência, trabalho ou finanças, já há motivo para procurar orientação. Em situação de urgência ou risco à vida, a família deve acionar imediatamente os serviços de emergência.",
  },
  {
    question: "Como entrar em contato com a Central de Acolhimento e Reabilitação?",
    answer: `O primeiro contato pode ser feito pelo WhatsApp ou pelo telefone ${phoneDisplay}. A família de Bauru pode explicar a situação e pedir informações antes de tomar qualquer decisão.`,
  },
];

export const Route = createFileRoute("/clinica-de-recuperacao-em-bauru-sp")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
              isPartOf: { "@type": "WebSite", name: "Central de Acolhimento e Reabilitação", url: siteUrl },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
                { "@type": "ListItem", position: 3, name: "Bauru", item: pageUrl },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: BauruPage,
});

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-widest text-brand">{children}</p>;
}

function BauruPage() {
  return (
    <div className="min-h-screen bg-foreground font-body text-deep">
      <header className="border-b border-deep/10 bg-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação — página inicial">
            <img src={logoAsset.url} alt="Logo da Central de Acolhimento e Reabilitação" width={48} height={48} className="size-12 rounded-full object-contain" />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-bold">Central de Acolhimento</span>
              <span className="block text-xs text-deep/60">e Reabilitação</span>
            </span>
          </Link>
          <Button asChild className="min-h-11 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Conversar agora</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="bg-ice">
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 lg:px-12 lg:pb-24">
            <nav aria-label="Navegação estrutural" className="text-xs text-deep/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-brand">Início</Link></li><li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li><Link to="/cidades" className="hover:text-brand">Cidades</Link></li><li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li aria-current="page">Bauru</li>
              </ol>
            </nav>

            <Link to="/" className="mt-6 inline-flex min-h-11 items-center gap-2 border border-deep/15 px-4 py-3 text-sm font-semibold hover:border-brand hover:text-brand">
              <ArrowLeft className="size-4" aria-hidden="true" /> Voltar para a página inicial
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 border-l-2 border-brand pl-3 text-xs font-bold uppercase tracking-widest text-brand">
                  <MapPin className="size-4" aria-hidden="true" /> Orientação para Bauru e região
                </div>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Clínica de Reabilitação em Bauru – SP
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-deep/70 sm:text-lg">
                  Famílias de Bauru que procuram tratamento para dependência química, alcoolismo ou uso problemático de drogas podem encontrar na Central de Acolhimento e Reabilitação orientação inicial e informações sobre possibilidades de cuidado.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-14 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Falar pelo WhatsApp</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-14 border-deep/20 bg-transparent px-6 text-deep hover:bg-deep/5">
                    <a href={phoneHref}><Phone aria-hidden="true" /> Ligar agora · {phoneDisplay}</a>
                  </Button>
                </div>
              </div>

              <aside className="border border-deep/10 bg-foreground p-7 shadow-xl shadow-deep/5 sm:p-9" aria-label="Informação de transparência">
                <ShieldCheck className="size-8 text-brand" aria-hidden="true" />
                <h2 className="mt-5 font-display text-xl font-bold">Informação clara antes de decidir</h2>
                <p className="mt-3 text-sm leading-7 text-deep/65">
                  A Central não possui unidade física em Bauru. O atendimento começa com orientação à família, e qualquer possibilidade de acolhimento depende de avaliação individual, indicação, concordância e disponibilidade da unidade adequada.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-deep/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-24">
            <div><Eyebrow>Compreender antes de agir</Eyebrow><h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Tratamento para dependência química em Bauru</h2></div>
            <div className="space-y-5 text-base leading-8 text-deep/70">
              <p>Quando o uso de álcool ou drogas começa a comprometer relações, trabalho, saúde, segurança ou finanças, a família pode sentir que precisa agir imediatamente. Ainda assim, procurar orientação, iniciar acompanhamento e definir um tratamento são etapas diferentes.</p>
              <p>Uma avaliação individual ajuda a compreender o padrão de uso, os riscos atuais, o histórico e a rede de apoio. Dependendo do caso, podem ser considerados cuidados ambulatoriais, acompanhamento na rede de saúde ou acolhimento. A internação para dependência química não é uma resposta automática para toda pessoa.</p>
              <p>A participação familiar pode contribuir com informações e apoio durante o processo. Em situações de urgência ou risco à vida, a orientação é procurar imediatamente os serviços de emergência adequados.</p>
              <Link to="/tratamento" className="inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">Entenda como funciona o tratamento <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="bg-deep text-foreground">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <Eyebrow>Percepção da família</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Quando a família de Bauru percebe que precisa procurar ajuda</h2>
              <p className="mt-5 leading-7 text-muted-foreground">Os sinais abaixo não substituem diagnóstico. Eles ajudam a reconhecer prejuízos que merecem avaliação e orientação profissional.</p>
            </div>
            <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {familySignals.map((signal, index) => (
                <article key={signal.title} className="min-h-52 border-b border-r border-border p-6 sm:p-7">
                  <span className="font-display text-sm font-bold text-secondary">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-lg font-bold">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{signal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-deep/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:px-12 lg:py-24">
            <div>
              <Eyebrow>Referência pública local</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Rede de atenção e saúde mental em Bauru</h2>
              <p className="mt-5 text-base leading-8 text-deep/70">Bauru possui serviços públicos voltados à saúde mental e às demandas relacionadas ao uso de álcool e outras drogas. Essas referências pertencem à rede municipal e não possuem parceria, convênio ou vínculo institucional com a Central.</p>
              <a href="https://www2.bauru.sp.gov.br/saude/servicos_saude.aspx" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">Consultar serviços de saúde da Prefeitura de Bauru <ExternalLink className="size-4" aria-hidden="true" /></a>
            </div>
            <div className="divide-y divide-deep/10 border-y border-deep/10">
              <article className="py-7">
                <h3 className="font-display text-xl font-bold">CAPS AD II de Bauru</h3>
                <p className="mt-3 text-sm leading-7 text-deep/65">Serviço da rede pública municipal relacionado ao cuidado em saúde mental para demandas decorrentes do uso de álcool e outras drogas.</p>
              </article>
              <article className="py-7">
                <h3 className="font-display text-xl font-bold">CAPS AD III Infantojuvenil</h3>
                <p className="mt-3 text-sm leading-7 text-deep/65">Serviço público municipal voltado ao público infantojuvenil com necessidades relacionadas ao uso de substâncias. Informações atualizadas devem ser confirmadas diretamente nos canais oficiais.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-ice">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              <div>
                <Eyebrow>Escuta e próximos passos</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Como a Central pode orientar famílias de Bauru</h2>
                <p className="mt-5 leading-8 text-deep/70">A conversa inicial ajuda a transformar preocupação em perguntas objetivas. Não há promessa de resultado, vaga ou modalidade específica antes de compreender a situação.</p>
                <Link to="/familia" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">Veja orientações para a família <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {centralSupport.map((item) => <li key={item} className="flex items-start gap-3 border border-deep/10 bg-foreground p-5 text-sm leading-6"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" /> {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-deep/10">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="overflow-hidden border border-deep/10">
                <img src={guidanceImage} alt="Conversa de orientação sobre dependência química para uma família de Bauru" width={1200} height={800} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                <p className="border-t border-deep/10 px-5 py-4 text-xs leading-5 text-deep/55">Imagem ilustrativa de uma conversa de orientação; não representa uma unidade física em Bauru.</p>
              </div>
              <div>
                <Eyebrow>Álcool e outras drogas</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Tratamento para alcoolismo e outras dependências</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-deep/70">
                  <p>O alcoolismo pode se desenvolver de forma gradual. A família não precisa esperar uma situação extrema para procurar ajuda para a dependência de álcool. Prejuízos persistentes e dificuldade de reduzir o consumo já justificam uma conversa profissional.</p>
                  <p>O uso problemático de cocaína, crack, maconha ou outras substâncias também se apresenta de maneiras diferentes. Um tratamento para álcool e drogas deve considerar a pessoa, seu contexto e os riscos envolvidos, sem fórmulas prontas.</p>
                </div>
                <Link to="/blog/dependencia-quimica-sinais-tratamento" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">Saiba mais sobre dependência química <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ice">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <Eyebrow>Etapas gerais</Eyebrow>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Como funciona o processo de acolhimento</h2>
            <p className="mt-5 max-w-3xl leading-8 text-deep/70">O percurso pode variar conforme cada situação. Estas etapas apresentam uma visão geral, sem substituir avaliação individual.</p>
            <ol className="mt-10 grid gap-px overflow-hidden bg-deep/10 md:grid-cols-2 lg:grid-cols-3">
              {welcomeSteps.map((step, index) => (
                <li key={step.title} className="bg-foreground p-6 sm:p-7">
                  <span className="grid size-9 place-items-center bg-deep font-display text-sm font-bold text-foreground">{index + 1}</span>
                  <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-deep/65">{step.text}</p>
                </li>
              ))}
            </ol>
            <Link to="/acolhimento" className="mt-7 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">Conheça mais sobre acolhimento <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="border-b border-deep/10">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="flex items-start gap-4 border-l-4 border-brand bg-ice p-6 sm:p-8">
              <CircleAlert className="mt-1 size-6 shrink-0 text-brand" aria-hidden="true" />
              <div><h2 className="font-display text-2xl font-bold">Acolhimento não significa internação automática</h2><p className="mt-3 leading-7 text-deep/70">Buscar informações é um primeiro passo. A necessidade de internação para dependência química ou alcoolismo deve ser avaliada de forma responsável, respeitando critérios aplicáveis e as condições de cada pessoa.</p></div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Dúvidas de famílias que procuram ajuda em Bauru</h2>
            <div className="mt-9 divide-y divide-deep/10 border-y border-deep/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-base font-bold marker:content-none sm:text-lg">{faq.question}<span className="text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-deep/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep text-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">Primeiro contato sem compromisso</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Família de Bauru, precisa de orientação?</h2>
              <p className="mt-5 leading-7 text-muted-foreground">Converse com a Central para organizar suas dúvidas e conhecer possibilidades. A equipe explica os próximos passos com clareza, sem garantir resultado, vaga ou internação.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="min-h-14 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><HeartHandshake aria-hidden="true" /> Converse com nossa equipe</a></Button>
              <Button asChild size="lg" variant="outline" className="min-h-14 border-foreground/30 bg-transparent px-6 text-foreground hover:bg-foreground/10 hover:text-foreground"><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></Button>
            </div>
          </div>
        </section>

        <section className="bg-ice">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div><p className="font-display font-bold">Continue navegando</p><p className="mt-1 text-sm text-deep/60">Informações institucionais e páginas já existentes.</p></div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link to="/" className="border border-deep/15 px-4 py-3 hover:border-brand hover:text-brand">Página inicial</Link>
              <Link to="/cidades" className="border border-deep/15 px-4 py-3 hover:border-brand hover:text-brand">Veja outras cidades atendidas</Link>
              <Link to="/contato" className="border border-deep/15 px-4 py-3 hover:border-brand hover:text-brand">Fale com a Central</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-deep/10 bg-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div><p className="font-display font-bold">Central de Acolhimento e Reabilitação</p><p className="mt-1 text-xs text-deep/60">Unidade física em Araraquara/SP</p></div>
          <a href={phoneHref} className="inline-flex items-center gap-2 font-semibold text-brand"><Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}</a>
        </div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-xl shadow-deep/30 sm:left-auto sm:right-6"><MessageCircle className="size-5" aria-hidden="true" /> WhatsApp</a>
    </div>
  );
}