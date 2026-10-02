import { createFileRoute } from "@tanstack/react-router";
import image from "@/assets/blog-como-saber-clinica-reabilitacao.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";

const title = "Como saber se uma pessoa precisa de uma clínica de reabilitação?";
const description = "Entenda quais prejuízos merecem atenção, quando buscar avaliação profissional e como a família pode ajudar sem tentar fazer um diagnóstico sozinha.";
const slug = "como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao";

export const Route = createFileRoute("/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao")({
  staticData: { sitemap: true },
  head: () => createArticleHead({ title, description, slug, image, published: "2026-10-02" }),
  component: Page,
});

function Page() {
  return <ArticleShell category="Família e busca de ajuda" title={title} description={description} image={image}
    imageAlt="Família reunida em conversa acolhedora sobre a busca de ajuda"
    sections={[
      { title: "Não existe um único sinal que defina a necessidade de acolhimento", paragraphs: [
        "A decisão de procurar uma clínica não deve nascer de um rótulo ou de uma discussão isolada. O ponto de partida é observar o conjunto: frequência do uso, perda de controle, riscos, prejuízos acumulados e capacidade de manter cuidados básicos.",
        "Somente uma avaliação profissional pode indicar o cuidado adequado. Em algumas situações, acompanhamento ambulatorial e apoio da rede de saúde podem ser suficientes; em outras, um ambiente protegido pode ser considerado."
      ]},
      { title: "Quando o uso começa a causar prejuízos", items: [
        "faltas frequentes, queda de rendimento ou perda de compromissos no trabalho e nos estudos;",
        "conflitos recorrentes, afastamento de pessoas próximas ou quebra de acordos familiares;",
        "gastos difíceis de explicar e abandono de responsabilidades;",
        "exposição a acidentes, violência ou outras situações de risco;",
        "continuidade do uso mesmo após consequências percebidas pela própria pessoa."
      ], paragraphs: ["Um episódio, sozinho, não permite concluir que exista dependência. A repetição dos prejuízos e a dificuldade de mudar o padrão tornam a busca de orientação mais importante."]},
      { title: "Mudanças de comportamento e perda de controle", paragraphs: [
        "Irritabilidade, isolamento, alterações bruscas de rotina, mentiras para encobrir o consumo e perda de interesse por atividades antes importantes podem aparecer. Também merecem atenção as tentativas frustradas de reduzir ou parar e o tempo crescente dedicado a obter, usar ou se recuperar dos efeitos da substância.",
        "A conversa tende a ser mais produtiva quando ocorre em um momento de segurança e sobriedade, com exemplos concretos e sem humilhação. O objetivo é expressar preocupação e abrir caminho para ajuda, não vencer uma discussão."
      ]},
      { title: "Quando procurar ajuda profissional", paragraphs: [
        "Não é necessário esperar uma crise grave. A família pode procurar orientação quando não sabe como conversar, quando os conflitos se repetem ou quando o uso afeta saúde e segurança. Se houver risco imediato, alteração intensa de consciência, convulsão, ameaça de violência ou ideação suicida, procure o serviço de urgência da sua região.",
        "Uma avaliação individualizada considera condições clínicas, saúde mental, rede de apoio e contexto social. Ela ajuda a comparar opções de tratamento e a compreender se o acolhimento é indicado naquele momento."
      ]},
      { title: "A participação da família", paragraphs: [
        "Familiares podem organizar informações sobre a rotina, estabelecer limites coerentes e buscar apoio para si. Isso não significa vigiar todos os passos nem assumir a responsabilidade pela recuperação da outra pessoa.",
        "Conhecer como funciona uma clínica, quais alternativas existem e como ocorre a orientação familiar permite decisões mais conscientes. O plano de cuidado pode mudar ao longo do tempo conforme a resposta e as necessidades da pessoa."
      ]},
    ]}
    faqs={[
      { question: "A família pode pedir orientação sem a pessoa presente?", answer: "Sim. Uma conversa inicial pode ajudar a família a organizar fatos e entender possibilidades, mas a indicação de tratamento depende de avaliação individualizada." },
      { question: "Toda pessoa que usa álcool ou drogas precisa de uma clínica?", answer: "Não. Existem diferentes níveis e modalidades de cuidado. A escolha depende dos riscos, prejuízos, condições de saúde e rede de apoio." },
      { question: "É preciso esperar a pessoa chegar ao limite?", answer: "Não. Procurar orientação diante de prejuízos repetidos pode ampliar as possibilidades de cuidado antes de uma crise." },
      { question: "Como conversar sem aumentar o conflito?", answer: "Prefira um momento seguro, descreva fatos concretos, escute e evite ameaças que a família não conseguirá cumprir." },
    ]}
    related={[
      { to: "/clinica-de-reabilitacao", label: "Clínica de reabilitação", description: "Entenda modalidades, tratamento e continuidade do cuidado." },
      { to: "/acolhimento", label: "Como funciona o acolhimento", description: "Conheça o início do processo e os critérios de avaliação." },
      { to: "/familia", label: "Orientação para a família", description: "Veja como buscar apoio e participar com limites saudáveis." },
      { to: "/blog/dependencia-quimica-sinais-consequencias-tratamento", label: "Sinais e consequências", description: "Aprofunde a compreensão sobre dependência química." },
    ]}
  />;
}