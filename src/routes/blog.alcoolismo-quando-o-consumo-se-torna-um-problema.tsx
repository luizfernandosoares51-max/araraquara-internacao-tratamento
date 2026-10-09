import { createFileRoute, Link } from "@tanstack/react-router";
import image from "@/assets/blog-alcoolismo-consumo-problema.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";

const title = "Alcoolismo: quando o consumo de álcool se torna um problema?";
const description = "Saiba reconhecer quando o consumo de álcool começa a causar perda de controle e prejuízos, e quando procurar orientação profissional.";
const slug = "alcoolismo-quando-o-consumo-se-torna-um-problema";

export const Route = createFileRoute("/blog/alcoolismo-quando-o-consumo-se-torna-um-problema")({
  staticData: { sitemap: true }, head: () => createArticleHead({ title, description, slug, image, published: "2026-10-02" }), component: Page,
});

function Page() {
  return <ArticleShell category="Alcoolismo" title={title} description={description} image={image}
    imageAlt="Familiar oferece apoio durante uma conversa sobre problemas relacionados ao álcool"
    sections={[
      { title: "Mais importante que o rótulo é observar o padrão", paragraphs: [
        "Nem todo consumo de álcool indica dependência. A preocupação aumenta quando beber deixa de ser uma escolha ocasional e passa a organizar a rotina, gerar riscos ou produzir prejuízos repetidos.",
        "Quantidade e frequência importam, mas não contam toda a história. Contexto, dificuldade de parar, efeitos sobre a saúde e consequências para outras pessoas também precisam ser considerados."
      ]},
      { title: "Sinais de que o consumo se tornou problemático", items: [
        "beber mais do que planejava ou perder a noção da quantidade;",
        "não conseguir cumprir períodos de redução ou abstinência;",
        "usar álcool para lidar com ansiedade, tristeza, sono ou conflitos;",
        "ter apagões de memória, acidentes ou comportamentos de risco;",
        "faltar a compromissos ou prejudicar relações por causa da bebida;",
        "sentir tremores, suor, ansiedade ou mal-estar ao ficar sem beber."
      ], paragraphs: ["Sintomas após a interrupção podem exigir avaliação médica. Em pessoas com consumo intenso e frequente, parar de forma abrupta sem orientação pode trazer riscos."]},
      { title: "Por que reduzir ou parar pode ser tão difícil", paragraphs: [
        "O álcool pode se associar a hábitos, ambientes, emoções e relações sociais. Com o tempo, mudanças no organismo e na rotina tornam a simples decisão de parar insuficiente para algumas pessoas.",
        "Vergonha e medo de julgamento costumam atrasar a busca de ajuda. Uma abordagem profissional procura entender função do consumo, riscos e condições associadas, em vez de reduzir a pessoa ao problema."
      ]},
      { title: "Impactos para a família e a vida social", paragraphs: [
        "Discussões, promessas quebradas, preocupação financeira e imprevisibilidade podem desgastar a confiança. Crianças e outros familiares também podem ser afetados pelo clima de tensão.",
        "Estabelecer limites de segurança não é abandonar a pessoa. A família pode deixar claro o que não aceita, evitar encobrir consequências e procurar orientação para conduzir conversas difíceis."
      ]},
      { title: "Quando e como procurar ajuda", context: <p>A <Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">orientação institucional sobre modalidades de cuidado</Link> complementa a busca por avaliação. Os riscos relacionados ao álcool precisam ser considerados individualmente.</p>, paragraphs: [
        "Procure avaliação quando houver perda de controle, sintomas de abstinência, riscos, prejuízos persistentes ou tentativas frustradas de mudança. Em uma emergência, busque imediatamente o serviço de urgência local.",
        "O tratamento pode incluir cuidado médico, psicoterapia, intervenções familiares, grupos e outras estratégias. O acolhimento estruturado é uma possibilidade para alguns casos, não uma resposta automática para todos."
      ]},
      { title: "Apoio familiar sem vigilância constante", paragraphs: [
        "Familiares ajudam mais quando incentivam o cuidado, participam das orientações e mantêm acordos claros. Monitorar cada movimento ou ameaçar sem condições de cumprir tende a aumentar o desgaste.",
        "A continuidade após uma fase mais intensiva inclui rede de apoio, rotina, manejo de gatilhos e acompanhamento. Não existem resultados garantidos, mas um plano ajustado oferece direção ao processo."
      ]},
    ]}
    faqs={[
      { question: "Beber todos os dias significa alcoolismo?", answer: "A frequência é um fator de atenção, mas a avaliação considera também controle, riscos, sintomas e prejuízos." },
      { question: "A pessoa deve parar de beber de uma vez?", answer: "Quem bebe intensamente ou apresenta sintomas ao interromper deve buscar avaliação médica, pois a abstinência pode envolver riscos." },
      { question: "A família pode participar do tratamento?", answer: "Sim. Orientação familiar pode melhorar comunicação, limites e apoio à continuidade do cuidado." },
      { question: "Todo tratamento para alcoolismo exige acolhimento?", answer: "Não. A modalidade depende de avaliação individual, condições clínicas, riscos e rede de apoio." },
    ]}
    related={[
      { to: "/clinica-de-reabilitacao", label: "Clínica de reabilitação", description: "Entenda quando um cuidado mais estruturado pode ser considerado." },
      { to: "/tratamento", label: "Caminhos de tratamento", description: "Veja princípios do acompanhamento individualizado." },
      { to: "/familia", label: "Orientação familiar", description: "Saiba como procurar ajuda e estabelecer limites." },
      { to: "/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao", label: "Quando considerar uma clínica", description: "Observe prejuízos e critérios para buscar avaliação." },
    ]}
  />;
}