import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import image from "@/assets/blog-como-funciona-clinica.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";
import { phoneDisplay, whatsappNumber } from "@/lib/site";

const metaTitle = "Quanto Tempo Dura o Tratamento para Dependência Química? Ciclos e Etapas";
const h1 = "Quanto Tempo Dura o Tratamento para Dependência Química? Conheça as Etapas";
const description = "Entenda o tempo médio de internação (90 a 180 dias), fases de desintoxicação, conscientização e reinserção social no interior de SP.";
const slug = "tempo-tratamento-dependencia-quimica";
const ctaHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de uma avaliação sobre o tempo de tratamento indicado para um familiar.")}`;

const faqs = [
  { question: "Existe tratamento de 30 dias que resolve a dependência?", answer: "Não existe cura mágica. A dependência química é uma condição crônica, e o tempo de cuidado varia conforme a substância, o tempo de uso, a saúde física e mental e o apoio familiar." },
  { question: "Quanto tempo dura, em média, o tratamento?", answer: "Muitos programas trabalham com ciclos de 90 a 180 dias, mas o tempo exato só pode ser definido após avaliação individual e revisto ao longo do processo." },
  { question: "A desintoxicação é feita na sede da Central?", answer: "Não. Desintoxicação e manejo da abstinência exigem acompanhamento médico e acontecem em serviços de saúde habilitados. A Central oferece acolhimento voluntário em Araraquara e orienta o encaminhamento." },
  { question: "O que acontece depois do tratamento?", answer: "É importante manter acompanhamento ambulatorial, por exemplo em CAPS AD ou com profissionais de confiança, e frequentar grupos de mútua ajuda, como Alcoólicos Anônimos e Narcóticos Anônimos." },
];

const cities = [
  { to: "/clinica-de-recuperacao-em-sao-carlos-sp", label: "São Carlos" },
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Araraquara" },
  { to: "/clinica-de-recuperacao-em-matao-sp", label: "Matão" },
  { to: "/clinica-de-recuperacao-em-rio-claro-sp", label: "Rio Claro" },
] as const;

export const Route = createFileRoute("/blog/tempo-tratamento-dependencia-quimica")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ title: metaTitle, description, slug, image, published: "2026-10-19" });
    const data = JSON.parse(head.scripts[0]?.children ?? '{"@graph":[]}');
    data["@graph"].push({ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) });
    return { ...head, scripts: [{ type: "application/ld+json", children: JSON.stringify(data) }] };
  },
  component: Page,
});

function CtaBox() {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <p className="font-display text-lg font-bold text-foreground">Quer entender o tempo de cuidado indicado para o seu familiar?</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {cities.map((c) => (
          <Link key={c.to} to={c.to} className="rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary">{c.label}</Link>
        ))}
      </div>
      <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground">
        <MessageCircle className="size-5" aria-hidden="true" /> Avaliação no WhatsApp {phoneDisplay}
      </a>
    </div>
  );
}

function Page() {
  return <ArticleShell category="Clínica de Reabilitação e Tratamento" title={h1} description={description} image={image}
    imageAlt="Imagem ilustrativa sobre as etapas do tratamento da dependência química"
    sections={[
      { title: "Cada pessoa tem o seu tempo", paragraphs: [
        "Não existe cura mágica em 30 dias. O corpo e a mente de cada pessoa reagem de forma diferente, conforme a substância, o tempo de uso, a idade, outras condições de saúde e o apoio da família.",
        "Por isso, os prazos abaixo são referências comuns, não promessas. O plano de cada pessoa deve ser definido por profissionais após avaliação individual.",
      ]},
      { title: "As três fases do tratamento", subsections: [
        { title: "1. Desintoxicação e manejo da abstinência (primeiros 15 a 30 dias)", paragraphs: [
          "O organismo se adapta à ausência da substância. Essa fase exige acompanhamento médico em serviço de saúde habilitado, porque a abstinência pode trazer riscos.",
        ]},
        { title: "2. Conscientização e reestruturação emocional (30 a 90 dias)", paragraphs: [
          "A pessoa começa a compreender seus gatilhos e comportamentos. Abordagens como a Terapia Cognitivo-Comportamental, conduzida por profissionais habilitados, e o programa de 12 Passos costumam fazer parte desse momento.",
        ]},
        { title: "3. Prevenção de recaída e preparação para a reinserção social (90 a 180 dias)", paragraphs: [
          "O foco passa a ser a volta à rotina: trabalho, estudo, convivência familiar e estratégias para lidar com situações de risco.",
        ]},
      ]},
      { title: "Depois do tratamento", paragraphs: [
        "A recuperação continua depois da saída. Manter acompanhamento ambulatorial, como no CAPS AD da sua cidade, e frequentar grupos de mútua ajuda ajuda a sustentar as mudanças.",
        "Em situação de risco imediato, ligue para o SAMU (192).",
      ]},
      { title: "Como a Central pode ajudar", context: <><p>A Central oferece acolhimento voluntário em sua sede em Araraquara, com convivência, 12 Passos e prevenção à recaída, e orienta o encaminhamento a serviços de saúde quando há necessidade médica. Não prometemos resultados nem prazos fixos.</p><CtaBox /></> },
    ]}
    faqs={faqs}
    related={[
      { to: "/blog/quanto-custa-clinica-de-recuperacao", label: "Quanto custa uma clínica", description: "Fatores de custo e planos de saúde." },
      { to: "/blog/diferenca-internacao-voluntaria-involuntaria", label: "Voluntária vs. involuntária", description: "Diferenças legais entre as modalidades." },
    ]}
  />;
}
