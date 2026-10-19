import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import image from "@/assets/concept-specialty-involuntary.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";
import { phoneDisplay, whatsappNumber } from "@/lib/site";

const metaTitle = "Diferença Entre Internação Voluntária e Involuntária | Lei 13.840";
const h1 = "Internação Voluntária vs. Involuntária: Quais as Diferenças e Quando Indicar?";
const description = "Entenda as distinções legais, médicas e operacionais entre internação voluntária, involuntária e compulsória de acordo com a legislação brasileira.";
const slug = "diferenca-internacao-voluntaria-involuntaria";
const ctaHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Preciso de orientação urgente sobre acolhimento e as modalidades de internação para um familiar.")}`;

const faqs = [
  { question: "Qual a diferença entre internação involuntária e compulsória?", answer: "A involuntária é pedida pela família ou responsável legal e depende de laudo médico circunstanciado. A compulsória é determinada por ordem judicial de um juiz." },
  { question: "Na internação voluntária a pessoa pode sair quando quiser?", answer: "Sim. A pessoa assina um termo de adesão e pode solicitar o término por escrito a qualquer momento." },
  { question: "Quem comunica a internação involuntária ao Ministério Público?", answer: "A unidade de saúde responsável pela internação, em até 72 horas, ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização." },
  { question: "A Central realiza internação involuntária?", answer: "Não. A Central oferece acolhimento voluntário em sua sede em Araraquara e orienta famílias sobre o encaminhamento a unidades de saúde habilitadas." },
];

const rows = [
  ["Consentimento", "Sim, por escrito (termo de adesão)", "Não; pedido de familiar ou responsável legal", "Não; determinada pela Justiça"],
  ["Exigência de laudo", "Avaliação de profissional habilitado", "Laudo médico circunstanciado obrigatório", "Ordem judicial, com avaliação médica"],
  ["Desligamento", "A pedido da própria pessoa, a qualquer momento", "Prazo máximo de 90 dias; pode ser encerrada a pedido da família ou por decisão médica", "Conforme determinação judicial"],
  ["Comunicação ao Ministério Público", "Não exigida", "Obrigatória em até 72 horas, pela unidade de saúde", "Processo já tramita na Justiça"],
  ["Local", "Unidade de acolhimento ou saúde", "Somente unidade de saúde ou hospital habilitado", "Unidade definida pela decisão judicial"],
];

const links = [
  { to: "/internacao-voluntaria-araraquara", label: "Internação voluntária em Araraquara" },
  { to: "/internacao-involuntaria-rio-claro", label: "Internação involuntária em Rio Claro" },
  { to: "/internacao-involuntaria-franca", label: "Internação involuntária em Franca" },
  { to: "/internacao-involuntaria-ribeirao-preto", label: "Internação involuntária em Ribeirão Preto" },
] as const;

export const Route = createFileRoute("/blog/diferenca-internacao-voluntaria-involuntaria")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ title: metaTitle, description, slug, image, published: "2026-10-19" });
    const data = JSON.parse(head.scripts[0]?.children ?? '{"@graph":[]}');
    data["@graph"].push({ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) });
    return { ...head, scripts: [{ type: "application/ld+json", children: JSON.stringify(data) }] };
  },
  component: Page,
});

function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <caption className="sr-only">Comparativo entre internação voluntária, involuntária e compulsória</caption>
        <thead className="bg-muted text-foreground">
          <tr><th scope="col" className="p-3">Critério</th><th scope="col" className="p-3">Voluntária</th><th scope="col" className="p-3">Involuntária</th><th scope="col" className="p-3">Compulsória</th></tr>
        </thead>
        <tbody>
          {rows.map(([c, ...v]) => (
            <tr key={c} className="border-t border-border align-top">
              <th scope="row" className="p-3 font-semibold text-foreground">{c}</th>
              {v.map((x) => <td key={x} className="p-3 text-muted-foreground">{x}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <p className="font-display text-lg font-bold text-foreground">Sua família precisa de orientação agora?</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {links.map((c) => (
          <Link key={c.to} to={c.to} className="rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary">{c.label}</Link>
        ))}
      </div>
      <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground">
        <MessageCircle className="size-5" aria-hidden="true" /> Acolhimento familiar no WhatsApp {phoneDisplay}
      </a>
      <p className="mt-3 text-xs text-muted-foreground">Em risco imediato à vida, ligue para o SAMU 192.</p>
    </div>
  );
}

function Page() {
  return <ArticleShell category="Família e Acolhimento" title={h1} description={description} image={image}
    imageAlt="Imagem ilustrativa de família buscando orientação sobre modalidades de internação"
    sections={[
      { title: "Comparativo entre as modalidades", context: <ComparisonTable /> },
      { title: "Internação voluntária", paragraphs: [
        "A pessoa reconhece a perda de controle sobre o uso e assina o termo de adesão, declarando que aceita o tratamento. Ela pode pedir o término por escrito a qualquer momento.",
      ]},
      { title: "Internação involuntária", paragraphs: [
        "Acontece sem o consentimento da pessoa quando a capacidade de discernimento está comprometida pelo uso crônico, com risco à integridade física própria ou de terceiros, e quando outros recursos não foram suficientes.",
        "É pedida pela família ou responsável legal, exige laudo médico circunstanciado e só ocorre em unidade de saúde ou hospital habilitado. A unidade comunica o Ministério Público em até 72 horas, e o prazo máximo é de 90 dias (Lei 13.840/2019).",
      ]},
      { title: "E a internação compulsória?", paragraphs: [
        "A compulsória é determinada por ordem judicial de um juiz. É diferente da involuntária, que é solicitada pela família com laudo médico, sem necessidade de processo judicial.",
      ]},
      { title: "Como a Central pode ajudar", context: <><p>A Central oferece acolhimento voluntário em sua sede em Araraquara e orienta famílias sobre o encaminhamento a unidades habilitadas. Não prometemos resultados: cada caso precisa de avaliação individual.</p><CtaBox /></> },
    ]}
    faqs={faqs}
    related={[
      { to: "/blog/como-internar-dependente-quimico", label: "Como internar um dependente químico", description: "Passo a passo legal e seguro para a família." },
      { to: "/transparencia", label: "Transparência e normas legais", description: "Responsabilidades da Central e das unidades receptoras." },
    ]}
  />;
}
