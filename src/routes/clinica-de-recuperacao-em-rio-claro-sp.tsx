import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import { Button } from "@/components/ui/button";
import { emailDisplay, emailHref, phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";
import { visualAssets } from "@/lib/visual-assets";

const pagePath = "/clinica-de-recuperacao-em-rio-claro-sp";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Clínica de Recuperação em Rio Claro | Central de Acolhimento";
const description =
  "Orientação para famílias de Rio Claro que buscam tratamento para dependência química, alcoolismo e outras situações relacionadas ao uso de álcool e drogas.";

const warningSigns = [
  {
    title: "Perda de controle",
    text: "A pessoa tenta reduzir ou interromper o consumo, mas volta a usar ou consome além do que pretendia.",
  },
  {
    title: "Relações afetadas",
    text: "Discussões, afastamento, quebra de confiança e dificuldade de manter acordos passam a fazer parte da rotina.",
  },
  {
    title: "Trabalho e compromissos",
    text: "Faltas, atrasos, queda de rendimento ou abandono de responsabilidades começam a causar prejuízos concretos.",
  },
  {
    title: "Isolamento e comportamento",
    text: "Mudanças marcantes de humor, segredo sobre o consumo e afastamento de pessoas próximas merecem atenção.",
  },
  {
    title: "Impacto financeiro e social",
    text: "Dívidas, venda de bens, conflitos ou situações de risco podem indicar que o problema está avançando.",
  },
  {
    title: "Recaídas e tentativas anteriores",
    text: "Retomar o uso após tentativas de parar não significa falta de vontade; pode mostrar a necessidade de apoio adequado.",
  },
];

const supportSteps = [
  "Ouvir a família com atenção e sem julgamentos",
  "Compreender a situação apresentada e os riscos percebidos",
  "Explicar possibilidades de tratamento e seus limites",
  "Esclarecer como funciona o acolhimento",
  "Conversar sobre internação somente quando essa alternativa precisar ser avaliada",
  "Orientar sobre documentos e preparação necessária",
  "Buscar uma unidade compatível com o perfil e as condições do caso",
  "Manter a família informada durante a busca por tratamento",
];

const processSteps = [
  { title: "Primeiro contato", text: "A família inicia a conversa por telefone ou WhatsApp." },
  { title: "Conversa com a família", text: "O relato ajuda a organizar fatos, dúvidas e preocupações." },
  { title: "Entendimento da situação", text: "São considerados histórico, momento atual, riscos e rede de apoio." },
  { title: "Orientação sobre possibilidades", text: "A equipe explica caminhos que podem ser analisados para o cuidado." },
  { title: "Avaliação da necessidade", text: "A indicação de tratamento depende de análise individual; internação não é automática." },
  { title: "Definição da unidade adequada", text: "Quando aplicável, busca-se uma estrutura compatível com as necessidades identificadas." },
  { title: "Preparação para o acolhimento", text: "A família recebe informações sobre documentos, condições e próximos passos." },
];

const faqs = [
  {
    question: "Existe clínica de recuperação em Rio Claro?",
    answer:
      "Rio Claro conta com serviços públicos de saúde mental, e também pode haver instituições privadas na região. A Central não afirma possuir unidade física em Rio Claro: oferece orientação para que a família compreenda possibilidades e procure uma unidade adequada ao caso.",
  },
  {
    question: "Como encontrar tratamento para dependência química em Rio Claro?",
    answer:
      "A busca pode começar pela rede municipal de saúde ou por uma conversa de orientação com a Central. É importante avaliar as necessidades da pessoa, a proposta de cuidado, a regularidade da instituição e as condições apresentadas antes de decidir.",
  },
  {
    question: "Como funciona o acolhimento de uma pessoa de Rio Claro?",
    answer:
      "O processo começa com a apresentação da situação e o esclarecimento de dúvidas. Se o acolhimento for uma possibilidade, ainda será necessário avaliar o caso, confirmar uma unidade adequada, verificar disponibilidade e organizar a preparação. O processo varia conforme cada situação.",
  },
  {
    question: "Onde buscar ajuda para alcoolismo em Rio Claro?",
    answer:
      "A família pode procurar os serviços municipais de saúde mental e álcool e outras drogas ou solicitar orientação à Central. Não é preciso esperar uma crise extrema para conversar sobre os prejuízos relacionados ao álcool.",
  },
  {
    question: "Quando a família deve procurar ajuda para dependência química?",
    answer:
      "Quando o uso passa a prejudicar saúde, relações, trabalho, estudos, finanças ou segurança, já existe motivo para buscar orientação. Dificuldade de controlar o consumo, isolamento e recaídas também merecem atenção.",
  },
  {
    question: "Como funciona uma internação para dependência química?",
    answer:
      "A internação é uma modalidade possível em determinadas situações, mas não é indicada automaticamente. Ela exige avaliação responsável, respeito aos critérios legais e compreensão das necessidades da pessoa. A Central não promete internação ou vaga antes dessa análise.",
  },
  {
    question: "A Central atende famílias de Rio Claro?",
    answer:
      "Sim. Famílias de Rio Claro e região podem entrar em contato para receber informações e orientação sobre tratamento, acolhimento e próximos passos, sempre conforme a situação apresentada.",
  },
  {
    question: "A Central possui unidade em Rio Claro?",
    answer:
      "Não há informação de unidade física da Central em Rio Claro. Esta é uma página de orientação local para moradores da cidade, e qualquer encaminhamento depende da avaliação e da definição de uma unidade adequada.",
  },
  {
    question: "Como saber qual tipo de tratamento é adequado?",
    answer:
      "Não existe uma resposta única. Condições de saúde, padrão de uso, riscos, histórico, apoio familiar e outras necessidades precisam ser considerados por profissionais responsáveis antes de definir uma conduta.",
  },
  {
    question: "É possível receber orientação antes de decidir pelo tratamento?",
    answer:
      "Sim. O primeiro contato serve justamente para organizar informações e esclarecer dúvidas. Pedir orientação não obriga a família a aceitar uma modalidade de tratamento ou internação.",
  },
];

export const Route = createFileRoute("/clinica-de-recuperacao-em-rio-claro-sp")({
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
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
                { "@type": "ListItem", position: 3, name: "Rio Claro", item: pageUrl },
                { "@type": "ListItem", position: 4, name: "Clínica de Recuperação em Rio Claro", item: pageUrl },
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
  component: RioClaroPage,
});

function RioClaroPage() {
  return (
    <div className="site-editorial min-h-screen bg-ice font-body text-deep">
      <header className="border-b border-deep/10 bg-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação — página inicial">
            <img src={logoAsset.url} alt="Logo da Central de Acolhimento e Reabilitação" width={52} height={52} className="size-13 rounded-full object-contain" />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-bold">Central de Acolhimento</span>
              <span className="block text-xs text-deep/60">e Reabilitação</span>
            </span>
          </Link>
          <div className="flex items-center gap-3 text-right">
            <span className="hidden text-xs leading-relaxed text-deep/60 md:block">Orientação para famílias<br />de Rio Claro e região</span>
            <Button asChild size="lg" className="min-h-11 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Falar agora</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-deep text-foreground">
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 lg:px-12 lg:pb-24">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-secondary">Início</Link></li>
                <li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li><Link to="/cidades" className="hover:text-secondary">Cidades</Link></li>
                <li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li>Rio Claro</li>
                <li aria-hidden="true"><ChevronRight className="size-3" /></li>
                <li aria-current="page" className="text-foreground">Clínica de Recuperação em Rio Claro</li>
              </ol>
            </nav>

            <Button asChild variant="outline" className="mt-6 min-h-11 border-border bg-glass text-foreground hover:bg-glass-strong hover:text-foreground">
              <Link to="/"><ArrowLeft aria-hidden="true" /> Voltar para a página inicial</Link>
            </Button>

             <div className="mt-12 grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-secondary">
                  <MapPin className="size-4" aria-hidden="true" /> Rio Claro, São Paulo
                </div>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                  Clínica de Recuperação em Rio Claro – SP
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Se você está em Rio Claro ou região e procura orientação para tratamento da dependência química, alcoolismo ou outras formas de dependência, a Central de Acolhimento e Reabilitação pode orientar você e sua família sobre os próximos passos.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-14 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Conversar pelo WhatsApp</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-h-14 border-border bg-glass px-6 text-foreground hover:bg-glass-strong hover:text-foreground">
                    <a href={phoneHref}><Phone aria-hidden="true" /> Ligar agora · {phoneDisplay}</a>
                  </Button>
                </div>
              </div>
               <div>
               <figure className="overflow-hidden border border-border bg-glass shadow-xl shadow-background/20">
                 <img src={visualAssets.cityCovers["rio-claro-sp"].src} alt={visualAssets.cityCovers["rio-claro-sp"].alt} width={1600} height={1067} fetchPriority="high" decoding="async" className="aspect-[4/3] w-full object-cover" />
                 <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">Imagem conceitual gerada por IA; não representa unidade ou atendimento real em Rio Claro.</figcaption>
               </figure>
               <aside className="mt-4 border-l-4 border-secondary bg-glass p-6">
                <ShieldCheck className="size-7 text-secondary" aria-hidden="true" />
                <p className="mt-4 font-display text-lg font-semibold">Informação transparente</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Esta página atende famílias de Rio Claro, mas não afirma que a Central possua unidade física na cidade. O trabalho começa pela orientação e pela avaliação de possibilidades adequadas a cada caso.
                </p>
              </aside>
               </div>
            </div>
          </div>
        </section>

        <section id="tratamento" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase text-brand">Decisões com informação</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Tratamento para Dependência Química em Rio Claro</h2>
            </div>
            <div className="space-y-5 text-[15px] leading-relaxed text-deep/70">
              <p>Quando a família percebe que o álcool ou outras drogas começaram a dominar escolhas, compromissos e relacionamentos, buscar ajuda pode parecer difícil. Ainda assim, uma conversa orientada permite sair da dúvida e compreender o que precisa ser observado.</p>
              <p>O tratamento para dependência química em Rio Claro deve partir de uma análise individual. O padrão de uso, os prejuízos acumulados, as condições de saúde, os riscos atuais e a rede de apoio influenciam a definição do cuidado. Entre as possibilidades podem estar acompanhamento na rede de saúde, apoio psicossocial, participação familiar e, em casos avaliados, acolhimento ou internação.</p>
              <p>Não existe promessa de cura nem uma solução idêntica para todas as pessoas. A família pode iniciar reunindo fatos sobre o que vem acontecendo e procurando <Link to="/tratamento" className="font-semibold text-brand underline underline-offset-4">orientação sobre tratamento para dependência química</Link> antes de tomar uma decisão.</p>
            </div>
          </div>
        </section>

        <section id="sinais" className="border-y border-deep/10 bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-brand">Observar sem rotular</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Dependência química: quando procurar ajuda?</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-deep/70">Um sinal isolado não define diagnóstico. Quando vários prejuízos se repetem, porém, procurar avaliação e orientação pode proteger a pessoa e a família de um agravamento.</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-deep/10 bg-deep/10 md:grid-cols-2 lg:grid-cols-3">
              {warningSigns.map((item, index) => (
                <article key={item.title} className="bg-ice p-6 sm:p-7">
                  <span className="font-display text-sm font-bold text-brand">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-deep/65">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="alcool-e-drogas" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
            <article className="border-t-4 border-brand bg-foreground p-7 shadow-sm sm:p-9">
              <p className="text-xs font-semibold uppercase text-brand">Álcool</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Tratamento para alcoolismo em Rio Claro</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-deep/70">A dependência de álcool pode avançar aos poucos e afetar saúde, convivência, trabalho e segurança. A família não precisa esperar uma situação extrema para procurar ajuda para uma pessoa com alcoolismo em Rio Claro.</p>
              <p className="mt-4 text-[15px] leading-relaxed text-deep/70">O tratamento para alcoolismo pode envolver estratégias diferentes, conforme avaliação profissional. Reconhecer os prejuízos e conversar sobre recuperação da dependência do álcool são passos possíveis, sem julgamento e sem garantia antecipada de resultado.</p>
            </article>
            <article className="border-t-4 border-secondary bg-deep p-7 text-foreground shadow-sm sm:p-9">
              <p className="text-xs font-semibold uppercase text-secondary">Outras substâncias</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Tratamento para dependência de drogas em Rio Claro</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">O uso problemático pode envolver diferentes substâncias, frequências e consequências. Algumas pessoas mantêm parte da rotina por um período; outras apresentam perdas rápidas. Essa diferença impede conclusões prontas.</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">Quem procura uma clínica de reabilitação para dependência química em Rio Claro precisa considerar o perfil da pessoa e o tipo de cuidado necessário. Cada caso deve ser avaliado individualmente, sem afirmações médicas absolutas.</p>
            </article>
          </div>
        </section>

        <section id="rede-publica" className="bg-deep py-16 text-foreground lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase text-secondary">Informações municipais</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Rede de apoio e saúde mental em Rio Claro</h2>
              </div>
              <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                <p>Rio Claro possui serviços públicos de atenção em saúde mental e para situações relacionadas ao uso de álcool e outras drogas. Entre eles estão o CAPS AD e o CAPS III 18 de Maio, integrantes da estrutura municipal de atenção psicossocial.</p>
                <p>A Central de Acolhimento e Reabilitação não pertence à Prefeitura, ao CAPS ou ao SUS e não afirma manter parceria com esses serviços. As referências abaixo são informativas e permitem consultar diretamente os canais oficiais antes de buscar atendimento.</p>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <a href="https://www.saude-rioclaro.org.br/uac/sistema%20municipal%20de%20saude.htm" target="_blank" rel="noopener noreferrer" className="group border border-border bg-glass p-6 transition-colors hover:bg-glass-strong">
                <HeartHandshake className="size-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold">CAPS AD de Rio Claro</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Consulte a Fundação Municipal de Saúde para confirmar informações atuais sobre a atenção a problemas relacionados ao uso de álcool e outras drogas.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Acessar fonte oficial <ArrowRight className="size-4" aria-hidden="true" /></span>
              </a>
              <a href="https://rioclaro.sp.gov.br/fundacao-de-saude/campanha-janeiro-branco-conscientiza-sobre-saude-mental-2/" target="_blank" rel="noopener noreferrer" className="group border border-border bg-glass p-6 transition-colors hover:bg-glass-strong">
                <Users className="size-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold">CAPS III 18 de Maio</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O serviço integra a atenção psicossocial do município. Endereço, horários e formas de acesso devem ser confirmados no canal oficial.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Acessar fonte oficial <ArrowRight className="size-4" aria-hidden="true" /></span>
              </a>
            </div>
          </div>
        </section>

        <section id="familia" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase text-brand">Escuta e clareza</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Como a Central pode ajudar famílias de Rio Claro</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-deep/70">A orientação começa pela situação real, não por uma resposta pronta. A Central ajuda a família a entender possibilidades, limites e informações necessárias, sem afirmar que toda pessoa precisa de internação.</p>
              <p className="mt-4 text-[15px] leading-relaxed text-deep/70">Na página de <Link to="/familia" className="font-semibold text-brand underline underline-offset-4">orientação para famílias</Link>, você encontra informações complementares para organizar essa conversa.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {supportSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 border border-deep/10 bg-foreground p-4 text-sm leading-relaxed text-deep/70">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" /> {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="acolhimento" className="border-y border-deep/10 bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-brand">Do contato à definição do cuidado</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Como funciona o processo de acolhimento</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-deep/70">Estas etapas apresentam um caminho geral. A ordem e os procedimentos podem variar conforme a situação, a avaliação, a disponibilidade e as condições aplicáveis.</p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="border border-deep/10 bg-ice p-5">
                  <span className="grid size-9 place-items-center rounded-full bg-deep font-display text-sm font-bold text-foreground">{index + 1}</span>
                  <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep/65">{step.text}</p>
                </li>
              ))}
            </ol>
            <Button asChild variant="link" className="mt-6 h-auto px-0 text-brand">
              <Link to="/acolhimento">Saiba mais sobre acolhimento <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

        <section id="regiao" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase text-brand">Orientação regional</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Atendimento para Rio Claro e região</h2>
            </div>
            <div className="text-[15px] leading-relaxed text-deep/70">
              <p>A página foi criada para quem vive em Rio Claro e procura um ponto de partida diante da dependência química ou do alcoolismo. Famílias da região também podem pedir informações, sem que isso represente a existência de uma unidade local ou a garantia de acolhimento.</p>
              <p className="mt-5">Para consultar outras localidades com conteúdo disponível, <Link to="/cidades" className="font-semibold text-brand underline underline-offset-4">conheça nossas cidades de atendimento</Link>. Para conteúdos educativos, leia o artigo sobre os <Link to="/blog/dependencia-quimica-sinais-tratamento" className="font-semibold text-brand underline underline-offset-4">sinais da dependência química e a importância do tratamento</Link>.</p>
            </div>
          </div>
        </section>

        <section id="perguntas" className="bg-deep py-16 text-foreground lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase text-secondary">Perguntas de famílias de Rio Claro</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Dúvidas frequentes sobre tratamento e acolhimento</h2>
            <div className="mt-9 divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-base font-bold marker:content-none sm:text-lg">
                    {faq.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-glass text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 border-l-4 border-brand pl-6 sm:pl-9 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase text-brand">Um primeiro passo possível</p>
                <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Fale com a Central e organize suas dúvidas.</h2>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-deep/70">Conte o que está acontecendo e receba orientação inicial. A conversa não substitui atendimento de saúde e não cria promessa de vaga, internação ou resultado.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg" className="min-h-14 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Fale com a Central</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-14 border-deep/20 bg-foreground px-6">
                  <a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-deep pb-24 pt-10 text-foreground sm:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="font-display font-bold">Central de Acolhimento e Reabilitação</p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground">Orientação para famílias de Rio Claro e região. Não somos um serviço público e não declaramos unidade física da Central no município.</p>
            <a href={emailHref} className="mt-2 flex items-center gap-2 break-all text-xs font-semibold text-secondary hover:underline"><Mail className="size-3.5 shrink-0" aria-hidden="true" /> {emailDisplay}</a>
          </div>
          <nav aria-label="Links complementares" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-secondary">Página inicial</Link>
            <Link to="/cidades" className="hover:text-secondary">Cidades</Link>
            <Link to="/contato" className="hover:text-secondary">Contato</Link>
            <Link to="/blog" className="hover:text-secondary">Blog</Link>
          </nav>
        </div>
      </footer>

    </div>
  );
}
