import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import image from "@/assets/concept-family-dialogue.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";
import { phoneDisplay, whatsappHref } from "@/lib/site";

const metaTitle = "Como Ajudar um Filho Dependente Químico? Estratégias e Acolhimento";
const h1 = "Como Ajudar um Filho Dependente Químico: Da Negação ao Tratamento Humanizado";
const description = "Descubra como mães e pais podem acolher um filho com dependência sem cair na codependência. Saiba como intervir com amor e firmeza.";
const slug = "como-ajudar-filho-dependente-quimico";

const faqs = [
  { question: "Pagar as dívidas do meu filho ajuda?", answer: "Em geral, não. Quitar dívidas ligadas ao uso, encobrir faltas ou assumir responsabilidades dele tende a afastar as consequências e adiar a busca por tratamento. Apoiar a pessoa é diferente de sustentar o uso." },
  { question: "Qual o melhor momento para conversar?", answer: "Quando ele estiver sóbrio e calmo, em um lugar reservado. Fale sobre fatos e sentimentos, sem acusações, e deixe claros os limites da casa." },
  { question: "A família também precisa de apoio?", answer: "Sim. Psicoterapia familiar e grupos de apoio, como o Amor Exigente, ajudam pais e mães a lidar com a culpa, manter limites e participar do cuidado." },
  { question: "E se meu filho for menor de idade?", answer: "Crianças e adolescentes devem ser atendidos pela rede pública preparada para essa idade, como o CAPS IJ, a UBS e o Conselho Tutelar quando houver risco. A Central pode orientar a família sobre esses caminhos." },
];

const links = [
  { to: "/tratamento-dependencia-jovens-ribeirao-preto", label: "Jovens · Ribeirão Preto" },
  { to: "/tratamento-dependencia-jovens-franca", label: "Jovens · Franca" },
  { to: "/tratamento-dependencia-jovens-rio-claro", label: "Jovens · Rio Claro" },
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Acolhimento · Araraquara" },
] as const;

export const Route = createFileRoute("/blog/como-ajudar-filho-dependente-quimico")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ title: metaTitle, description, slug, image, published: "2026-10-19" });
    const data = JSON.parse(head.scripts[0]?.children ?? '{"@graph":[]}');
    data["@graph"].push({ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) });
    return { ...head, scripts: [{ type: "application/ld+json", children: JSON.stringify(data) }] };
  },
  component: Page,
});

function RegionalBox() {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <p className="font-display text-lg font-bold text-foreground">Orientação para famílias da sua região</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {links.map((c) => (
          <Link key={c.to} to={c.to} className="rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary">
            {c.label}
          </Link>
        ))}
      </div>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground">
        <MessageCircle className="size-5" aria-hidden="true" /> Triagem familiar no WhatsApp {phoneDisplay}
      </a>
    </div>
  );
}

function Page() {
  return <ArticleShell category="Família e Acolhimento" title={h1} description={description} image={image}
    imageAlt="Imagem ilustrativa de família em conversa cuidadosa"
    sections={[
      { title: "Da negação à decisão de agir", paragraphs: [
        "Muitos pais demoram a aceitar que o filho tem um problema com álcool ou outras drogas. A negação é comum e nasce do medo e da culpa.",
        "Reconhecer o problema não é desistir do filho. É o primeiro passo para ajudá-lo com amor e firmeza.",
      ]},
      { title: "A armadilha da codependência", paragraphs: [
        "Encobrir erros, pagar dívidas de drogas, mentir para parentes ou assumir as responsabilidades dele parece proteção, mas costuma atrasar a recuperação.",
        "Quando as consequências desaparecem, o uso continua sem motivo para mudar. Apoiar é cuidar da pessoa, não do vício.",
      ]},
      { title: "Comunicação Não-Violenta e limites em casa", items: [
        "Converse nos momentos de sobriedade, em local calmo e reservado.",
        "Fale de fatos e sentimentos: \"eu fico preocupado quando...\", em vez de acusações.",
        "Combine regras claras e inegociáveis para o lar, como não usar nem guardar drogas em casa.",
        "Cumpra o que foi combinado, com firmeza e sem agressão.",
      ]},
      { title: "Sinais de agravamento", items: [
        "Mudanças bruscas de humor e irritação frequente.",
        "Isolamento da família e dos amigos de antes.",
        "Sumiço de dinheiro ou objetos de casa.",
        "Abandono dos estudos ou do trabalho.",
      ], paragraphs: ["Em situação de risco imediato, ligue para o SAMU (192) ou procure o pronto-socorro mais próximo."] },
      { title: "O papel da família na reabilitação", paragraphs: [
        "A família faz parte do cuidado. Psicoterapia familiar e grupos de apoio, como o Amor Exigente, ajudam pais e mães a manter limites e a cuidar da própria saúde.",
        "Cada caso precisa de avaliação individual. Não há promessa de cura, mas há caminhos de cuidado.",
      ]},
      { title: "Como a Central pode ajudar", context: <><p>A Central oferece <Link to="/internacao-voluntaria-araraquara" className="font-semibold text-secondary underline underline-offset-4">acolhimento voluntário</Link> para adultos em sua sede em Araraquara e orienta famílias de toda a região sobre os próximos passos.</p><RegionalBox /></> },
    ]}
    faqs={faqs}
    related={[
      { to: "/blog/como-internar-dependente-quimico", label: "Como internar um dependente químico", description: "Modalidades legais e passo a passo seguro." },
      { to: "/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao", label: "Quando buscar uma clínica", description: "Sinais e prejuízos que merecem avaliação." },
    ]}
  />;
}
