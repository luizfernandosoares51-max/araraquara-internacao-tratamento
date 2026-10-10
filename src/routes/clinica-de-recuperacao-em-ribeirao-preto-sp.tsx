import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Route as RouteIcon,
  ShieldCheck,
  Users,
} from "lucide-react";

import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import { Button } from "@/components/ui/button";
import { RegionalCare } from "@/components/care-program-sections";
import { emailDisplay, emailHref, phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";
import { visualAssets } from "@/lib/visual-assets";

export const Route = createFileRoute("/clinica-de-recuperacao-em-ribeirao-preto-sp")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
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
              isPartOf: {
                "@type": "WebSite",
                name: "Central de Acolhimento e Reabilitação",
                url: siteUrl,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
                { "@type": "ListItem", position: 3, name: "Ribeirão Preto", item: pageUrl },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Clínica de Reabilitação em Ribeirão Preto",
                  item: pageUrl,
                },
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
  component: OfficialRibeiraoPretoPage,
});

const pageUrl = "https://centraldeacolhimentoereabilitacao.com/clinica-de-recuperacao-em-ribeirao-preto-sp";
const title = "Clínica de Reabilitação em Ribeirão Preto | Dependência Química e Alcoolismo";
const description =
  "Orientação para famílias de Ribeirão Preto que procuram tratamento para dependência química e alcoolismo. Conheça possibilidades de acolhimento e tratamento.";

const familySituations = [
  {
    title: "O consumo saiu do controle",
    text: "A pessoa tenta reduzir ou interromper o uso, mas não consegue manter a decisão ou consome mais do que pretendia.",
  },
  {
    title: "A convivência está desgastada",
    text: "Conflitos frequentes, afastamento, quebra de confiança e mudanças de comportamento passaram a afetar a família.",
  },
  {
    title: "Surgiram prejuízos concretos",
    text: "Problemas profissionais, perda de emprego, dívidas ou abandono de compromissos mostram impactos na vida cotidiana.",
  },
  {
    title: "As tentativas não se mantiveram",
    text: "A pessoa já tentou parar e voltou a usar álcool, cocaína, crack, maconha ou outras substâncias.",
  },
  {
    title: "O consumo está aumentando",
    text: "A frequência, a quantidade ou as situações de risco cresceram e passaram a preocupar quem convive com a pessoa.",
  },
  {
    title: "A família não sabe como agir",
    text: "O medo de piorar a situação ou tomar uma decisão precipitada impede que os próximos passos fiquem claros.",
  },
];

const carePaths = [
  {
    title: "Atenção básica e rede de saúde",
    text: "Serviços de saúde podem ser uma porta de entrada para avaliação, acompanhamento e organização do cuidado.",
  },
  {
    title: "Saúde mental e CAPS",
    text: "A rede psicossocial oferece cuidado territorial e serviços específicos para demandas relacionadas ao álcool e outras drogas.",
  },
  {
    title: "Urgência, quando necessária",
    text: "Risco à vida, intoxicação grave, alteração importante de consciência e outras emergências exigem atendimento imediato.",
  },
  {
    title: "Acolhimento e tratamento",
    text: "Instituições adequadas podem ser consideradas quando essa modalidade fizer sentido após avaliação individual.",
  },
];

const orientationSteps = [
  "A família entra em contato e apresenta sua principal preocupação.",
  "A situação, o histórico de uso e os impactos atuais são compreendidos.",
  "Informações iniciais ajudam a identificar dúvidas, riscos e necessidades.",
  "A família recebe orientação sobre os caminhos que podem ser considerados.",
  "Possibilidades de tratamento são apresentadas conforme o caso, sem resposta pronta.",
  "Se houver indicação e disponibilidade, pode ser avaliada uma unidade adequada.",
  "Os próximos passos, condições e preparativos são explicados com clareza.",
];

const faqs = [
  {
    question: "Existe clínica de reabilitação em Ribeirão Preto para dependência química?",
    answer:
      "Ribeirão Preto possui uma rede pública de saúde mental e pode contar com instituições de tratamento na região. A Central não afirma ter unidade física na cidade: oferece orientação inicial e pode apresentar possibilidades conforme o caso e a disponibilidade.",
  },
  {
    question: "Como uma família de Ribeirão Preto pode procurar tratamento para dependência química?",
    answer:
      "A busca pode começar pela rede municipal de saúde ou por uma conversa com a Central. Reunir informações sobre o padrão de uso, prejuízos, riscos atuais e tentativas anteriores ajuda a tornar a orientação mais objetiva.",
  },
  {
    question: "Onde procurar ajuda para alcoolismo em Ribeirão Preto?",
    answer:
      "A rede pública municipal oferece atenção em saúde mental e álcool e outras drogas. A família também pode conversar com a Central para conhecer possibilidades de tratamento, sem precisar esperar uma situação extrema.",
  },
  {
    question: "Qual é a diferença entre CAPS AD e clínica de recuperação?",
    answer:
      "O CAPS AD integra a rede pública de atenção psicossocial e presta cuidado territorial relacionado ao uso de álcool e outras drogas. Uma instituição de acolhimento possui proposta e condições próprias. A escolha não é automática e depende das necessidades da pessoa.",
  },
  {
    question: "Quando a família deve procurar ajuda profissional?",
    answer:
      "Quando o consumo provoca prejuízos recorrentes na saúde, segurança, convivência, trabalho ou finanças, já há motivo para procurar orientação. Em uma emergência, a família deve acionar imediatamente os serviços adequados.",
  },
  {
    question: "Como funciona o acolhimento de uma pessoa que precisa de tratamento?",
    answer:
      "O processo começa pela compreensão do perfil, histórico, momento atual e necessidades de acompanhamento. Qualquer possibilidade de acolhimento depende de avaliação, indicação, condições aplicáveis e disponibilidade.",
  },
  {
    question: "A Central possui unidade em Ribeirão Preto?",
    answer:
      "Não há unidade física da Central em Ribeirão Preto. A Central atua na orientação de famílias da cidade e pode apresentar possibilidades de tratamento em uma unidade adequada, conforme o caso e a disponibilidade.",
  },
  {
    question: "Como entrar em contato com a Central de Acolhimento e Reabilitação?",
    answer: `O contato pode ser feito pelo WhatsApp ou pelo telefone ${phoneDisplay}. A família pode explicar a situação e pedir orientação inicial antes de decidir sobre qualquer tratamento.`,
  },
];


function OfficialRibeiraoPretoPage() {
  return (
    <div className="site-editorial min-h-screen bg-foreground font-body text-deep">
      <header className="border-b border-deep/10 bg-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Central de Acolhimento e Reabilitação — página inicial"
          >
            <img
              src={logoAsset.url}
              alt="Logo da Central de Acolhimento e Reabilitação"
              width={52}
              height={52}
              className="size-13 rounded-full object-contain"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-bold">Central de Acolhimento</span>
              <span className="block text-xs text-deep/60">e Reabilitação</span>
            </span>
          </Link>
          <Button asChild className="min-h-11 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> Falar com a Central
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="bg-deep text-foreground">
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 lg:px-12 lg:pb-24">
            <nav aria-label="Navegação estrutural" className="text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-secondary">Início</Link></li>
                <li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li><Link to="/cidades" className="hover:text-secondary">Cidades</Link></li>
                <li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li>Ribeirão Preto</li>
                <li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li aria-current="page" className="text-foreground">Clínica de Reabilitação</li>
              </ol>
            </nav>

            <Button asChild variant="outline" className="mt-6 min-h-11 border-border bg-glass text-foreground hover:bg-glass-strong hover:text-foreground">
              <Link to="/"><ArrowLeft aria-hidden="true" /> Voltar para a página inicial</Link>
            </Button>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase text-secondary">
                  <MapPin className="size-4" aria-hidden="true" /> Orientação para Ribeirão Preto e região
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                  Clínica de Reabilitação em Ribeirão Preto – SP
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Quando o álcool ou outras drogas começam a mudar a rotina de uma família, saber por onde começar pode ser difícil. A Central oferece orientação inicial a moradores de Ribeirão Preto e informações sobre possibilidades de tratamento e acolhimento.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-14 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden="true" /> Pedir orientação
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-14 border-border bg-glass px-6 text-foreground hover:bg-glass-strong hover:text-foreground">
                    <a href={phoneHref}><Phone aria-hidden="true" /> Ligar · {phoneDisplay}</a>
                  </Button>
                </div>
              </div>

               <div>
               <figure className="overflow-hidden border border-border bg-glass shadow-xl shadow-background/20">
                 <img src={visualAssets.cityCovers["ribeirao-preto-sp"].src} alt={visualAssets.cityCovers["ribeirao-preto-sp"].alt} width={1600} height={1067} fetchPriority="high" decoding="async" className="aspect-[4/3] w-full object-cover" />
                 <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">Imagem conceitual gerada por IA; não representa unidade ou atendimento real em Ribeirão Preto.</figcaption>
               </figure>
               <aside className="mt-4 border-t-4 border-secondary bg-glass p-7" aria-label="Transparência sobre a localização">
                <ShieldCheck className="size-8 text-secondary" aria-hidden="true" />
                <h2 className="mt-5 font-display text-xl font-bold">Orientação sem criar falsas expectativas</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  A Central não possui unidade física em Ribeirão Preto. O contato serve para compreender a situação e apresentar possibilidades conforme o caso e a disponibilidade das unidades, sem garantia de vaga, internação ou resultado.
                </p>
              </aside>
               </div>
            </div>
          </div>
        </section>

        <section className="border-b border-deep/10 py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase text-brand">Um ponto de partida</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Buscar tratamento para dependência química em Ribeirão Preto</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-deep/70">
              <p>Uma família costuma começar a procurar ajuda quando percebe que o consumo deixou de ser um episódio isolado e passou a interferir em escolhas, vínculos, trabalho, finanças ou segurança. A dificuldade de controlar o uso e as tentativas anteriores de parar também podem indicar a necessidade de avaliação.</p>
              <p>O tratamento para dependência química em Ribeirão Preto não deve partir de um diagnóstico feito pela internet nem de uma solução igual para todos. Histórico de uso, condições de saúde, riscos atuais, apoio familiar e necessidades de acompanhamento precisam ser compreendidos individualmente.</p>
              <p>A participação da família pode contribuir com fatos importantes e apoio ao longo do processo. Procurar orientação é diferente de decidir por uma internação: esse contato inicial ajuda a conhecer caminhos e limites antes de qualquer escolha.</p>
              <Link to="/tratamento" className="inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">
                Entenda como funciona o tratamento <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-ice py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-brand">Atenção aos prejuízos</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Família de Ribeirão Preto: quando é hora de procurar ajuda?</h2>
              <p className="mt-5 leading-8 text-deep/70">Os exemplos abaixo não substituem avaliação ou diagnóstico. Eles ajudam a organizar fatos que já estão afetando a pessoa e quem está ao redor.</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-deep/10 bg-deep/10 md:grid-cols-2 lg:grid-cols-3">
              {familySituations.map((item, index) => (
                <article key={item.title} className="bg-foreground p-6 sm:p-7">
                  <span className="font-display text-sm font-bold text-brand">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-deep/65">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-4 border-l-4 border-brand bg-foreground p-6">
              <HeartHandshake className="mt-1 size-6 shrink-0 text-brand" aria-hidden="true" />
              <p className="leading-7 text-deep/70">Pedir orientação não significa que a pessoa será internada. Cada situação precisa ser avaliada individualmente, com atenção às necessidades e aos riscos presentes.</p>
            </div>
          </div>
        </section>

        <section className="bg-deep py-16 text-foreground lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase text-secondary">Informação pública local</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Rede de saúde mental e atenção ao álcool e outras drogas em Ribeirão Preto</h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                <p>Ribeirão Preto possui uma rede municipal de saúde mental com serviços voltados a diferentes necessidades. Conhecer essa rede ajuda a família a identificar portas de entrada e a buscar atendimento adequado ao momento vivido.</p>
                <p>Segundo a Prefeitura, o CAPS II AD – Álcool e Drogas atende pessoas a partir de 18 anos com sofrimento relacionado ao uso de álcool e outras drogas. O acolhimento ocorre por demanda espontânea, dentro das regras e horários oficiais do serviço.</p>
                <p>A Central não pertence à Prefeitura, ao CAPS ou ao SUS e não mantém parceria ou convênio declarado com esses serviços. A referência é apenas informativa e deve ser confirmada no canal municipal.</p>
                <a href="https://www.ribeiraopreto.sp.gov.br/portal/saude/caps-ad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-secondary underline underline-offset-4">
                  Consultar a página oficial do CAPS II AD <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-brand">Possibilidades de cuidado</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Quais caminhos existem para quem procura tratamento em Ribeirão Preto?</h2>
              <p className="mt-5 leading-8 text-deep/70">Não existe um caminho melhor para todas as pessoas. A escolha depende da situação, da avaliação responsável e das necessidades identificadas.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {carePaths.map((path, index) => (
                <article key={path.title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-deep/10 pb-7">
                  <span className="grid size-10 place-items-center bg-deep font-display text-sm font-bold text-foreground">{index + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{path.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-deep/65">{path.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-deep/10 bg-ice py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
            <article className="border-t-4 border-brand bg-foreground p-7 sm:p-9">
              <p className="text-xs font-bold uppercase text-brand">Dependência de álcool</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Tratamento para alcoolismo em Ribeirão Preto</h2>
              <p className="mt-5 leading-8 text-deep/70">O impacto do álcool pode crescer gradualmente. Dificuldade de reduzir o consumo, conflitos e prejuízos repetidos já justificam a busca por ajuda, sem que a família precise esperar uma situação extrema.</p>
              <p className="mt-4 leading-8 text-deep/70">O tratamento para alcoolismo deve considerar a dependência de álcool, a saúde, o contexto familiar e os riscos de cada pessoa. Recuperação não é promessa: é um processo que pode exigir acompanhamento especializado e continuidade do cuidado.</p>
            </article>
            <article className="border-t-4 border-secondary bg-deep p-7 text-foreground sm:p-9">
              <p className="text-xs font-bold uppercase text-secondary">Outras drogas</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Ajuda para o uso problemático de outras substâncias</h2>
              <p className="mt-5 leading-8 text-muted-foreground">Cocaína, crack, maconha e outras substâncias podem estar associadas a padrões e consequências diferentes. Não é responsável concluir, apenas pelo nome da droga, qual tratamento será necessário.</p>
              <p className="mt-4 leading-8 text-muted-foreground">Quem procura tratamento para drogas em Ribeirão Preto pode começar descrevendo o que mudou na rotina, quais riscos existem e o que já foi tentado. Essas informações apoiam uma avaliação individual, sem afirmações médicas absolutas.</p>
            </article>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase text-brand">Escuta e orientação</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Como a Central pode ajudar uma família de Ribeirão Preto</h2>
              <p className="mt-5 leading-8 text-deep/70">O papel da Central é ajudar a organizar informações e apresentar possibilidades com transparência. Não há atendimento presencial da Central em Ribeirão Preto nem garantia antecipada de acolhimento.</p>
              <Link to="/familia" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">
                Veja orientações para famílias <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ol className="border-l border-deep/15">
              {orientationSteps.map((step, index) => (
                <li key={step} className="relative border-b border-deep/10 py-5 pl-8 first:pt-0">
                  <span className="absolute -left-4 top-5 grid size-8 place-items-center rounded-full bg-brand font-display text-xs font-bold text-primary-foreground first:top-0">{index + 1}</span>
                  <p className="leading-7 text-deep/70">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-ice py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-xs font-bold uppercase text-brand">Antes de uma decisão</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Como funciona o acolhimento</h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-deep/70">
                <p>O primeiro contato busca compreender o perfil da pessoa, o histórico de uso, as necessidades atuais, a situação familiar e o tipo de acompanhamento que pode ser necessário. Esses pontos ajudam a avaliar quais modalidades de tratamento fazem sentido.</p>
                <p>Quando uma forma de acolhimento é considerada, a família precisa conhecer proposta, condições, localização, disponibilidade e preparativos. Cada caso é individual, e o contato inicial não representa indicação automática de internação.</p>
                <Link to="/acolhimento" className="inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">
                  Saiba mais sobre acolhimento <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deep py-16 text-foreground">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid gap-6 border border-border bg-glass p-7 sm:grid-cols-[auto_1fr] sm:p-9">
              <AlertTriangle className="size-8 text-secondary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-2xl font-bold">Quando a situação exige atendimento imediato</h2>
                <p className="mt-4 leading-8 text-muted-foreground">Risco à vida, intoxicação grave, abstinência grave, tentativa de suicídio, alteração importante de consciência ou outras emergências exigem atendimento imediato pelos serviços adequados.</p>
                <p className="mt-4 leading-8 text-muted-foreground">Ribeirão Preto possui Pronto Atendimento de Saúde Mental municipal para urgências e emergências psiquiátricas. A Central não possui vínculo com esse serviço.</p>
                <a href="https://www.ribeiraopreto.sp.gov.br/portal/noticia/ribeirao-preto-inaugura-o-primeiro-pronto-atendimento-de-saude-mental-24-horas-do-brasil" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-secondary underline underline-offset-4">
                  Consultar a informação oficial da Prefeitura <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs font-bold uppercase text-brand">Perguntas de famílias da cidade</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Dúvidas sobre tratamento e reabilitação em Ribeirão Preto</h2>
            <div className="mt-9 divide-y divide-deep/10 border-y border-deep/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-base font-bold marker:content-none sm:text-lg">
                    {faq.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ice text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-deep/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-deep/10 bg-ice py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-brand">Conversa inicial</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Família de Ribeirão Preto, precisa de orientação?</h2>
              <p className="mt-5 leading-8 text-deep/70">Entre em contato com a Central de Acolhimento e Reabilitação para conversar sobre a situação e conhecer as possibilidades de tratamento.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="min-h-14 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><HeartHandshake aria-hidden="true" /> Falar com a Central</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-14 border-deep/20 bg-transparent px-6 text-deep">
                <a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-deep/10 bg-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <p className="flex items-center gap-2 font-display font-bold"><RouteIcon className="size-5 text-brand" aria-hidden="true" /> Continue navegando</p>
              <p className="mt-1 text-sm text-deep/60">Informações gerais para apoiar uma decisão consciente.</p>
            </div>
            <nav aria-label="Links complementares" className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link to="/" className="border border-deep/15 px-4 py-3 hover:border-brand hover:text-brand">Página inicial</Link>
              <Link to="/blog/dependencia-quimica-sinais-tratamento" className="border border-deep/15 px-4 py-3 hover:border-brand hover:text-brand">Saiba mais sobre dependência química</Link>
              <Link to="/cidades" className="border border-deep/15 px-4 py-3 hover:border-brand hover:text-brand">Conheça outras cidades atendidas</Link>
            </nav>
          </div>
        </section>
        <div className="bg-background px-5 text-foreground sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><RegionalCare cityName="Ribeirão Preto" /></div></div>
      </main>

      

    </div>
  );
}