import { createFileRoute, Link } from "@tanstack/react-router";
import image from "@/assets/blog-dependencia-sinais-consequencias.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";

const title = "Dependência química: sinais, consequências e caminhos para o tratamento";
const description = "Compreenda a dependência química, seus impactos e os diferentes caminhos de cuidado profissional para a pessoa e sua família.";
const slug = "dependencia-quimica-sinais-consequencias-tratamento";

export const Route = createFileRoute("/blog/dependencia-quimica-sinais-consequencias-tratamento")({
  staticData: { sitemap: true }, head: () => createArticleHead({ title, description, slug, image, published: "2026-10-02" }), component: Page,
});

function Page() {
  return <ArticleShell category="Dependência Química" title={title} description={description} image={image}
    imageAlt="Pessoa em conversa de apoio com profissional e familiar em ambiente acolhedor"
    sections={[
      { title: "O que é dependência química", paragraphs: [
        "Dependência química é uma condição de saúde complexa. Ela pode envolver desejo intenso, dificuldade de controlar o uso, prioridade crescente dada à substância e manutenção do consumo apesar de consequências negativas.",
        "A experiência varia conforme a substância, a frequência, a saúde física e emocional e o contexto de vida. Por isso, listas de sinais orientam a observação, mas não substituem avaliação profissional.",
        "Este artigo aprofunda consequências, alternativas de cuidado e acompanhamento após a avaliação. Para perceber mudanças recentes e organizar a primeira conversa familiar, use a leitura introdutória indicada ao final."
      ]},
      { title: "Sinais que merecem atenção", items: [
        "usar mais ou por mais tempo do que pretendia;",
        "tentar reduzir e não conseguir manter a mudança;",
        "precisar de quantidades maiores para obter o mesmo efeito;",
        "abandonar atividades e compromissos importantes;",
        "apresentar sintomas físicos ou emocionais ao interromper o uso;",
        "continuar consumindo mesmo reconhecendo prejuízos."
      ], paragraphs: ["Os sinais precisam ser interpretados no contexto. Alterações abruptas também podem ter outras causas e merecem escuta cuidadosa."]},
      { title: "Consequências pessoais, familiares e sociais", paragraphs: [
        "O impacto pode aparecer no sono, na alimentação, na saúde mental, nas finanças, no trabalho e nas relações. Familiares frequentemente alternam medo, raiva, culpa e tentativas de controlar a situação.",
        "A dependência não deve ser tratada como falta de caráter. Ao mesmo tempo, reconhecer a condição não significa ignorar danos ou retirar responsabilidades: cuidado e limites podem caminhar juntos."
      ]},
      { title: "Caminhos possíveis para o tratamento", context: <p>Para compreender a jornada da avaliação à continuidade, leia <Link to="/blog/como-funciona-uma-clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">como funciona o processo de cuidado</Link>; aqui o foco são os impactos da dependência e os critérios que orientam as alternativas.</p>, paragraphs: [
        "O cuidado pode combinar acompanhamento médico, psicológico, terapêutico e social. Há alternativas ambulatoriais, grupos de apoio, serviços públicos e, quando indicado, acolhimento em ambiente estruturado.",
        "A escolha considera riscos clínicos, padrão de uso, presença de outras condições, apoio disponível e autonomia da pessoa. O plano deve ter objetivos claros, ser revisto periodicamente e preparar a continuidade do cuidado."
      ], subsections: [
        { title: "Acompanhamento profissional", paragraphs: ["Profissionais habilitados avaliam necessidades, riscos e possíveis encaminhamentos. Medicamentos, quando utilizados, dependem de indicação e acompanhamento médico."] },
        { title: "Papel da família na recuperação", paragraphs: ["A família pode participar de orientações, rever formas de comunicação e construir limites. Também precisa cuidar do próprio bem-estar e evitar assumir tarefas que cabem à pessoa em tratamento."] },
      ]},
      { title: "Recuperação é continuidade, não um evento isolado", paragraphs: [
        "Mudanças sustentáveis costumam envolver reorganização de rotina, identificação de situações de risco, fortalecimento de vínculos e acesso contínuo à rede de cuidado.",
        "Uma recaída não deve ser usada para desqualificar todo o percurso. Ela exige reavaliação rápida do plano, dos riscos e do suporte disponível, sem normalizar o retorno ao uso."
      ]},
    ]}
    faqs={[
      { question: "Dependência química tem os mesmos sinais em todas as pessoas?", answer: "Não. A apresentação varia, e somente uma avaliação profissional pode considerar o conjunto da situação." },
      { question: "É possível buscar ajuda antes de a pessoa aceitar tratamento?", answer: "A família pode receber orientação e aprender formas mais seguras de conversar, ainda que o cuidado da pessoa exija sua avaliação." },
      { question: "O tratamento precisa ser em regime de acolhimento?", answer: "Nem sempre. Existem diferentes modalidades, escolhidas conforme riscos, necessidades e suporte disponível." },
      { question: "A recuperação termina quando a pessoa deixa a clínica?", answer: "Não. A continuidade do acompanhamento e a reorganização da rotina são partes importantes do cuidado." },
    ]}
    related={[
      { to: "/clinica-de-reabilitacao", label: "Guia sobre clínica de reabilitação", description: "Veja como tratamento, acolhimento e recuperação se relacionam." },
      { to: "/tratamento", label: "Tratamento", description: "Conheça aspectos gerais do cuidado individualizado." },
      { to: "/familia", label: "Apoio à família", description: "Encontre orientação para lidar com esse processo." },
      { to: "/blog/dependencia-quimica-sinais-tratamento", label: "Primeiros sinais e busca de orientação", description: "Comece por uma introdução para famílias que perceberam mudanças recentes." },
      { to: "/blog/alcoolismo-quando-o-consumo-se-torna-um-problema", label: "Uso problemático de álcool", description: "Entenda sinais específicos relacionados ao consumo de álcool." },
    ]}
  />;
}