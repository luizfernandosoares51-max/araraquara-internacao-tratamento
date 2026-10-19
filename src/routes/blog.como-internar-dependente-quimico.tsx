import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import image from "@/assets/concept-specialty-involuntary.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";
import { phoneDisplay, whatsappHref } from "@/lib/site";

const metaTitle = "Como Internar um Dependente Químico? Guia Jurídico e Passo a Passo (2026)";
const h1 = "Como Internar uma Pessoa Dependente Química: Passo a Passo, Direitos e Legislação";
const description = "Entenda os requisitos médicos e legais da Lei 13.840/19 para internação de dependentes químicos voluntária e involuntária no interior de SP.";
const slug = "como-internar-dependente-quimico";

const faqs = [
  { question: "Quem pode pedir a internação involuntária?", answer: "Pela Lei 13.840/2019, o pedido pode ser feito por familiar ou responsável legal e, na falta deles, por servidor público da saúde, da assistência social ou de órgãos do Sisnad. A decisão depende de avaliação e laudo médico." },
  { question: "A família precisa avisar o Ministério Público?", answer: "A comunicação da internação involuntária ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização deve ocorrer em até 72 horas. Essa obrigação é da unidade de saúde responsável pela internação." },
  { question: "A internação involuntária acontece em comunidade terapêutica?", answer: "Não. Ela é realizada em unidades de saúde ou hospitais habilitados, com médico responsável. O acolhimento em comunidade terapêutica é sempre voluntário." },
  { question: "Quanto tempo pode durar a internação involuntária?", answer: "O tempo é o necessário à desintoxicação, com prazo máximo de 90 dias, e pode ser encerrado a qualquer momento por solicitação da família ou do responsável legal." },
  { question: "A Central faz a internação involuntária?", answer: "Não. A Central oferece acolhimento voluntário em sua sede em Araraquara e orienta famílias sobre os caminhos legais e o encaminhamento a unidades habilitadas." },
];

const cities = [
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Araraquara" },
  { to: "/internacao-involuntaria-ribeirao-preto", label: "Ribeirão Preto" },
  { to: "/internacao-involuntaria-franca", label: "Franca" },
  { to: "/clinica-de-recuperacao-em-sao-carlos-sp", label: "São Carlos" },
  { to: "/internacao-involuntaria-rio-claro", label: "Rio Claro" },
  { to: "/clinica-de-recuperacao-em-matao-sp", label: "Matão" },
] as const;

export const Route = createFileRoute("/blog/como-internar-dependente-quimico")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ title: metaTitle, description, slug, image, published: "2026-10-19" });
    const data = JSON.parse(head.scripts[0].children);
    data["@graph"].push({ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) });
    return { ...head, scripts: [{ type: "application/ld+json", children: JSON.stringify(data) }] };
  },
  component: Page,
});

function RegionalBox() {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <p className="font-display text-lg font-bold text-foreground">Precisa de orientação imediata sobre internação na sua cidade?</p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {cities.map((c) => (
          <Link key={c.to} to={c.to} className="rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary">
            {c.label}
          </Link>
        ))}
      </div>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground">
        <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp {phoneDisplay} · Plantão 24h
      </a>
    </div>
  );
}

function Page() {
  return <ArticleShell category="Família e Acolhimento" title={h1} description={description} image={image}
    imageAlt="Imagem ilustrativa de familiares buscando orientação sobre internação"
    sections={[
      { title: "Quando a família sente que precisa agir", paragraphs: [
        "Ver alguém querido perder o controle sobre o uso de álcool ou outras drogas é doloroso. Promessas quebradas, riscos à saúde e conflitos em casa fazem muitas famílias pensarem em internação.",
        "Agir com urgência é compreensível, mas agir com segurança é essencial. A internação tem regras médicas e legais, e conhecê-las protege a pessoa, a família e os direitos de todos.",
      ]},
      { title: "As modalidades legais segundo a Lei 13.840/2019", subsections: [
        { title: "Internação voluntária", paragraphs: [
          "Acontece com o consentimento explícito da pessoa, que declara por escrito que aceita o tratamento. Ela pode pedir o término a qualquer momento.",
        ]},
        { title: "Internação involuntária", paragraphs: [
          "Acontece sem o consentimento da pessoa, a pedido de familiar ou responsável legal. Exige laudo médico circunstanciado que justifique a medida, e só é indicada quando outros recursos não foram suficientes.",
          "A unidade de saúde responsável deve comunicar a internação ao Ministério Público e à Defensoria Pública em até 72 horas. O prazo máximo é de 90 dias, destinado à desintoxicação.",
        ]},
      ]},
      { title: "Passo a passo prático", items: [
        "Avaliação médica inicial: um médico avalia o quadro, os riscos e indica a modalidade adequada.",
        "Escolha da instituição: confira o cadastro no CNES e a licença da Vigilância Sanitária antes de qualquer decisão.",
        "Logística de remoção: o transporte deve ser planejado com segurança e respeito, conforme a indicação médica.",
        "Acolhimento e continuidade: após a fase inicial, planeje acompanhamento, participação da família e prevenção à recaída.",
      ], paragraphs: ["Em situação de risco imediato, ligue para o SAMU (192) ou procure o pronto-socorro mais próximo."] },
      { title: "Como a Central pode ajudar", context: <><p>A Central oferece <Link to="/internacao-voluntaria-araraquara" className="font-semibold text-secondary underline underline-offset-4">acolhimento voluntário</Link> em sua sede em Araraquara e orienta famílias sobre a <Link to="/internacao-involuntaria-araraquara" className="font-semibold text-secondary underline underline-offset-4">internação involuntária e o amparo legal</Link>, com encaminhamento a unidades habilitadas. Não prometemos resultados: cada caso precisa de avaliação individual.</p><RegionalBox /></> },
    ]}
    faqs={faqs}
    related={[
      { to: "/transparencia", label: "Transparência e normas legais", description: "Veja as responsabilidades da Central e das unidades receptoras." },
      { to: "/blog/como-escolher-uma-clinica-de-reabilitacao", label: "Como escolher uma clínica", description: "Perguntas práticas sobre documentação, equipe e segurança." },
    ]}
  />;
}
