import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleBreadcrumb, IllustratedSections, type IllustratedSection } from "@/components/blog/illustrated-article-shell";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";
import { twelveStepsArticle as article } from "@/lib/twelve-steps-article";
import { phoneDisplay, phoneHref } from "@/lib/site";

const photo = visualAssets.historyTwelveSteps;

export const Route = createFileRoute("/blog/historia-12-passos-clinica-reabilitacao-terapeutica")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ ...article, image: photo.src });
    const script = head.scripts[0];
    if (!script) return head;
    const data = JSON.parse(script.children);
    for (const entry of data["@graph"]) {
      if (entry["@type"] === "BlogPosting") delete entry.image;
    }
    data["@graph"].push({ "@type": "FAQPage", mainEntity: article.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) });
    return { ...head, meta: head.meta.filter((meta) => !("property" in meta && meta.property === "og:image") && !("name" in meta && meta.name === "twitter:image")), scripts: [{ type: "application/ld+json", children: JSON.stringify(data) }] };
  },
  component: HistoryArticle,
});

const sections: IllustratedSection[] = [
  { title: "1. O surgimento dos 12 Passos e seus fundadores", paragraphs: [
    "A dependência química e o alcoolismo foram frequentemente abordados sob uma ótica moral ou punitiva. A transformação desse cenário ganhou força ao longo do século XX com movimentos de ajuda mútua e avanços no cuidado em saúde. Essa história não é uma evolução única e linear: diferentes propostas de cuidado se desenvolveram em contextos distintos.",
    "Em 1935, em Akron, Ohio, o encontro entre Bill Wilson (Bill W.) e o médico Bob Smith (Dr. Bob) deu origem a Alcoólicos Anônimos (A.A.). A data de 10 de junho de 1935 é tradicionalmente considerada o início da irmandade, relacionada à sobriedade de Dr. Bob — não deve ser confundida com a data do primeiro encontro, ocorrido em maio.",
    "Ambos valorizaram a troca de experiências entre pessoas que enfrentavam dificuldades com o álcool, sem julgamento. Em 1939, o livro Alcoholics Anonymous apresentou os 12 Passos. A proposta de ajuda mútua inspirou outras irmandades, incluindo Narcóticos Anônimos, que se organizou nos anos 1950. Compartilhar experiências pode oferecer apoio, mas não garante sobriedade nem substitui assistência profissional.",
  ], items: ["Bill Wilson: corretor de Nova York e cofundador de A.A., cuja experiência com o álcool integrou a história do movimento.", "Dr. Bob Smith: médico de Akron e cofundador de A.A., que também vivenciou dificuldades com o uso de álcool."] },
  { title: "2. A estrutura dos 12 Passos no processo terapêutico", paragraphs: [
    "Para uma leitura introdutória, os Passos podem ser agrupados em três momentos. Essa é uma síntese educativa, não uma classificação clínica oficial nem um protocolo que funcione da mesma maneira para todas as pessoas.",
    "Termos históricos como inventário moral e defeitos de caráter pertencem à linguagem do programa. Não significam que a dependência seja uma falha moral e não justificam culpa, humilhação, coerção ou abandono de cuidados médicos. Espiritualidade e participação precisam respeitar a autonomia individual.",
  ], items: ["Reconhecimento e abertura à ajuda (Passos 1 a 3): reconhecer dificuldades com o álcool e considerar apoio, com a ideia de um Poder Superior conforme a compreensão individual.", "Autoavaliação e reparação (Passos 4 a 9): refletir sobre atitudes, reconhecer danos e considerar reparações sem causar novos prejuízos à própria pessoa ou a terceiros.", "Continuidade e apoio mútuo (Passos 10 a 12): manter reflexão cotidiana, práticas pessoais de espiritualidade e compartilhamento da experiência com outras pessoas."] },
  { title: "3. Da ajuda mútua às clínicas de reabilitação: o Modelo Minnesota", paragraphs: [
    "O Modelo Minnesota se desenvolveu nos Estados Unidos a partir dos anos 1950, aproximando princípios dos 12 Passos, participação de profissionais, experiência de pessoas em recuperação, envolvimento familiar e continuidade do apoio. Ele influenciou programas residenciais, mas não explica sozinho a origem de todas as comunidades terapêuticas ou clínicas modernas.",
    "A Terapia Cognitivo-Comportamental (TCC) não deve ser apresentada como fundamento original do modelo. Em propostas contemporâneas, diferentes intervenções podem integrar um plano individualizado: avaliação médica quando indicada, acompanhamento psicológico, estratégias de prevenção de recaída e apoio social. Sua presença precisa ser confirmada em cada serviço.",
    "Uma revisão Cochrane de 2020 encontrou evidências favoráveis para A.A. e facilitação dos 12 Passos em alguns resultados de abstinência no transtorno por uso de álcool, especialmente em intervenções manualizadas. Isso não comprova eficácia universal para todas as substâncias, não valida automaticamente qualquer instituição e não assegura resultados individuais.",
  ], items: ["Abstinência e desintoxicação: podem exigir supervisão médica e assistência hospitalar, conforme o risco. A abstinência de álcool pode causar convulsões e delirium.", "Cuidado multidisciplinar: as funções e a disponibilidade da equipe devem ser explicadas e verificadas, sem presumir estrutura hospitalar ou presença de todas as especialidades.", "Prevenção de recaída: identificar situações de risco, desenvolver estratégias e planejar a continuidade não se resume a força de vontade.", "Ambiente protetor: convivência respeitosa pode apoiar reorganização da rotina, sem isolamento indevido, violência ou promessa de cura."] },
  { title: "4. O cenário regional no interior de SP e a legislação vigente", paragraphs: [
    "A Lei nº 10.216/2001 protege direitos no cuidado em saúde mental e estabelece requisitos para internações. A Lei nº 13.840/2019 alterou a legislação sobre drogas, priorizando modalidades ambulatoriais e diferenciando acolhimento em comunidade terapêutica de internação em estabelecimento de saúde. Internação não depende apenas do desejo da família: exige avaliação e cumprimento dos requisitos legais aplicáveis.",
    "Acolhimento em comunidade terapêutica é voluntário; internação involuntária não pode ser realizada nessa modalidade. As comunicações legais de uma internação involuntária, incluindo o prazo aplicável de até 72 horas, são responsabilidade do estabelecimento de saúde receptor. A orientação da Central sobre trâmites não substitui autorização médica ou assistência hospitalar.",
  ], context: <div className="space-y-4"><p>Para famílias de <span>{article.regionalLinks.map((city, index) => <span key={city.to}>{index > 0 ? (index === article.regionalLinks.length - 1 ? " e " : ", ") : ""}<Link to={city.to} className="font-semibold text-secondary underline underline-offset-4">{city.name}</Link></span>)}</span>, a Central oferece orientação a partir de sua única unidade física em Araraquara. As páginas regionais são informativas e não representam filiais.</p><p>O plantão de orientação e suporte para agendamento está disponível 24 horas. Deslocamentos e remoção dependem de avaliação e agendamento; não há promessa de execução 24h ou resposta imediata. Situações que exigem intervenção hospitalar são encaminhadas a estabelecimentos habilitados.</p></div> },
];

const sources = [
  { title: "Alcoólicos Anônimos — início e crescimento de A.A.", url: "https://www.aa.org/the-start-and-growth-of-aa" },
  { title: "Alcoólicos Anônimos — o Big Book e os 12 Passos", url: "https://www.aa.org/the-big-book" },
  { title: "História do Modelo Minnesota — referência indexada na PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/10234566/" },
  { title: "Cochrane — A.A. e programas de 12 Passos no transtorno por uso de álcool", url: "https://www.cochrane.org/evidence/CD012880_alcoholics-anonymous-aa-and-other-12-step-programs-alcohol-use-disorder" },
  { title: "Lei nº 10.216/2001 — direitos e requisitos de internação", url: "https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10216.htm" },
  { title: "Lei nº 13.840/2019 — tratamento e acolhimento voluntário", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13840.htm" },
  { title: "Ministério da Saúde — avaliação e conduta nos transtornos por uso de álcool", url: "https://linhasdecuidado.saude.gov.br/portal/transtornos-por-uso-de-alcool-no-adulto/unidade-hospitalar/avaliacao-conduta/" },
];

function HistoryArticle() {
  return <main className="site-editorial min-h-screen bg-deep font-body text-foreground">
    <article className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <ArticleBreadcrumb title="A História da Reabilitação Terapêutica" />
      <header className="mt-9">
        <p className="font-display text-xs font-semibold uppercase text-secondary">História e Ciência da Recuperação</p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">A História da Reabilitação Terapêutica: Como Surgiram os 12 Passos e o Modelo Moderno de Acolhimento</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Da ajuda mútua ao cuidado individualizado: uma história de escuta, dignidade e participação familiar.</p>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Central de Acolhimento e Reabilitação · <time dateTime={article.published}>14 de outubro de 2026</time> · Tempo de leitura: 5 min</p>
        <figure className="mt-8"><img src={photo.src} alt={photo.alt} width={1200} height={630} fetchPriority="high" decoding="async" className="aspect-[1200/630] w-full rounded-lg object-cover" /><figcaption className="mt-3 text-xs leading-5 text-muted-foreground">{conceptualImageCaption}</figcaption></figure>
        <p className="mt-6 max-w-3xl border-l-2 border-secondary pl-5 text-sm leading-7 text-muted-foreground">Conteúdo educativo com fontes públicas. Não substitui avaliação individual e não promete recuperação. Não há revisão técnica multidisciplinar identificada para este artigo.</p>
      </header>
      <IllustratedSections sections={sections} />
      <section className="mt-12 border-t border-border pt-10"><h2 className="font-display text-2xl font-bold">Perguntas frequentes</h2><div className="mt-5 divide-y divide-border">{article.faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold leading-7">{faq.question}</summary><p className="mt-3 max-w-3xl leading-8 text-muted-foreground">{faq.answer}</p></details>)}</div></section>
      <section className="mt-12 border-y border-border py-10"><h2 className="font-display text-2xl font-bold">Precisa de orientação para um familiar?</h2><p className="mt-4 max-w-3xl leading-8 text-muted-foreground">O plantão de orientação da Central está disponível 24 horas, com escuta respeitosa e cuidado com a privacidade. Converse sobre acolhimento voluntário e próximos passos; este contato não é um serviço de emergência.</p><div className="mt-6 flex flex-wrap gap-3"><Button asChild size="lg" className="min-h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"><a href={article.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Orientação pelo WhatsApp</a></Button><Button asChild variant="outline" size="lg" className="min-h-12"><a href={phoneHref}><Phone aria-hidden="true" /> Ligar para a Central</a></Button></div><p className="mt-4 text-sm leading-7 text-muted-foreground">Contato oficial: {phoneDisplay}. Em convulsões, confusão intensa ou risco imediato, acione o <a href="tel:192" className="font-semibold text-secondary underline underline-offset-4">SAMU 192</a>.</p></section>
      <section className="mt-12"><h2 className="font-display text-2xl font-bold">Fontes e responsabilidade editorial</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">Fontes consultadas em 14 de outubro de 2026. Autoria institucional: Central de Acolhimento e Reabilitação. Referências históricas e científicas não constituem certificação da instituição ou comprovação de resultados de seu programa.</p><ul className="mt-5 space-y-3 text-sm leading-7">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-4">{source.title}</a></li>)}</ul><p className="mt-6 text-sm leading-7"><Link to="/transparencia" className="text-secondary underline underline-offset-4">Transparência e responsáveis institucionais</Link> · <Link to="/blog/como-funciona-uma-clinica-de-reabilitacao" className="text-secondary underline underline-offset-4">Como funciona o cuidado</Link></p></section>
    </article>
  </main>;
}