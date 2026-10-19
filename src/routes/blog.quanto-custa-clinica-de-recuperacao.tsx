import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import image from "@/assets/blog-como-escolher-clinica.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";
import { phoneDisplay, whatsappNumber } from "@/lib/site";

const metaTitle = "Quanto Custa uma Clínica de Recuperação? Valores, Custos e Convênios";
const h1 = "Quanto Custa uma Clínica de Recuperação? Fatores, Transparência e Planos de Saúde";
const description = "Saiba quais fatores compõem os valores de uma clínica de reabilitação, cobertura por planos de saúde e possibilidades de reembolso no interior de SP.";
const slug = "quanto-custa-clinica-de-recuperacao";
const coverageHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de uma triagem financeira e orientação para consultar a cobertura do meu plano de saúde.")}`;

const faqs = [
  { question: "Existe um valor fixo para o tratamento?", answer: "Não. O valor depende da modalidade, do tempo de permanência, da estrutura da unidade e da equipe envolvida. Por isso cada caso passa por triagem individual antes de qualquer orçamento." },
  { question: "O plano de saúde é obrigado a cobrir?", answer: "A Lei 9.656/98 e as regras da ANS preveem cobertura para transtornos mentais, incluindo dependência química, conforme o tipo de plano e o contrato. As condições, a rede e a autorização são definidas pela operadora." },
  { question: "A Central garante o reembolso?", answer: "Não. A Central orienta a família sobre a documentação e os caminhos de consulta, mas a aprovação de cobertura ou reembolso depende da operadora, do contrato e da unidade receptora." },
  { question: "Como reconhecer uma clínica clandestina?", answer: "Desconfie de preços muito baixos, ausência de alvará sanitário visível, falta de responsável técnico, proibição de visitas sem explicação e promessas de cura. Peça documentos antes de qualquer decisão." },
];

const links = [
  { to: "/clinica-recuperacao-convenio-rio-claro", label: "Convênio · Rio Claro" },
  { to: "/clinica-recuperacao-convenio-franca", label: "Convênio · Franca" },
  { to: "/clinica-de-recuperacao-em-ribeirao-preto-sp", label: "Ribeirão Preto" },
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Araraquara" },
] as const;

export const Route = createFileRoute("/blog/quanto-custa-clinica-de-recuperacao")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ title: metaTitle, description, slug, image, published: "2026-10-19" });
    const data = JSON.parse(head.scripts[0]?.children ?? '{"@graph":[]}');
    data["@graph"].push({ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) });
    return { ...head, scripts: [{ type: "application/ld+json", children: JSON.stringify(data) }] };
  },
  component: Page,
});

function CoverageBox() {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <p className="font-display text-lg font-bold text-foreground">Convênio e orientação na sua região</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {links.map((c) => (
          <Link key={c.to} to={c.to} className="rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary">
            {c.label}
          </Link>
        ))}
      </div>
      <a href={coverageHref} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground">
        <MessageCircle className="size-5" aria-hidden="true" /> Consultar cobertura no WhatsApp {phoneDisplay}
      </a>
    </div>
  );
}

function Page() {
  return <ArticleShell category="Clínica de Reabilitação e Tratamento" title={h1} description={description} image={image}
    imageAlt="Imagem ilustrativa de família analisando informações sobre tratamento"
    sections={[
      { title: "O que costuma compor a mensalidade", paragraphs: ["Em clínicas médicas habilitadas, o valor normalmente reflete a estrutura e a equipe envolvidas no cuidado. Os itens variam de unidade para unidade:"], items: [
        "Acompanhamento multiprofissional, que pode incluir psiquiatria, psicologia, enfermagem e nutrição.",
        "Alimentação, em geral com 4 a 5 refeições por dia.",
        "Hotelaria: acomodação, limpeza e lavanderia.",
        "Segurança e supervisão durante a permanência.",
        "Terapias ocupacionais e atividades de convivência.",
      ]},
      { title: "Planos de saúde: o que diz a lei", paragraphs: [
        "A Lei 9.656/98 e as diretrizes da ANS preveem cobertura para transtornos mentais, incluindo a dependência química, com internação psiquiátrica nos planos com segmentação hospitalar, conforme o contrato.",
        "Quando a operadora nega uma cobertura prevista, a família pode pedir a negativa por escrito, registrar reclamação na ANS e, com apoio de um advogado, avaliar uma ação judicial com pedido de liminar.",
        "Outra via é o reembolso: a família paga a unidade e solicita a devolução à operadora, com relatório médico, notas fiscais e documentos exigidos pelo contrato. O valor reembolsado segue as regras do plano.",
      ]},
      { title: "Os riscos das clínicas baratas ou clandestinas", items: [
        "Ausência de alvará sanitário e de licenças de funcionamento.",
        "Falta de médico e de responsável técnico.",
        "Relatos de maus-tratos, contenção indevida e isolamento da família.",
        "Risco de denúncias públicas e fechamento da unidade durante o tratamento.",
      ], paragraphs: ["Antes de decidir, peça documentos, visite a unidade e confirme quem é o responsável técnico."] },
      { title: "Por que cada plano exige triagem individual", paragraphs: [
        "Cada pessoa chega com uma história, uma substância, condições de saúde e necessidades familiares diferentes. Por isso não existe um preço único e honesto sem avaliação.",
        "A triagem define a modalidade indicada, o tempo previsto e o tipo de unidade. Só depois disso é possível apresentar valores com clareza. Não há promessa de cura.",
      ]},
      { title: "Como a Central pode ajudar", context: <><p>A Central oferece <Link to="/internacao-voluntaria-araraquara" className="font-semibold text-secondary underline underline-offset-4">acolhimento voluntário</Link> em sua sede em Araraquara e orienta famílias sobre consulta de cobertura e reembolso, sem garantir aprovação pela operadora.</p><CoverageBox /></> },
    ]}
    faqs={faqs}
    related={[
      { to: "/blog/como-internar-dependente-quimico", label: "Como internar um dependente químico", description: "Modalidades legais e passo a passo seguro." },
      { to: "/blog/como-escolher-uma-clinica-de-reabilitacao", label: "Como escolher uma clínica", description: "Critérios para comparar instituições." },
    ]}
  />;
}
