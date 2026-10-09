import { createFileRoute, Link } from "@tanstack/react-router";
import image from "@/assets/blog-como-escolher-clinica.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";

const title = "Como escolher uma clínica de reabilitação para um familiar?";
const description = "Veja critérios e perguntas para avaliar equipe, estrutura, proposta terapêutica, participação familiar, valores e contrato antes de escolher.";
const slug = "como-escolher-uma-clinica-de-reabilitacao";

export const Route = createFileRoute("/blog/como-escolher-uma-clinica-de-reabilitacao")({
  staticData: { sitemap: true }, head: () => createArticleHead({ title, description, slug, image, published: "2026-10-02" }), component: Page,
});

function Page() {
  return <ArticleShell category="Clínica de Reabilitação e Tratamento" title={title} description={description} image={image}
    imageAlt="Família anota informações durante conversa com uma profissional"
    sections={[
      { title: "Comece pela necessidade da pessoa, não pela promessa da instituição", context: <p>Antes de comparar instituições, consulte a <Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">visão institucional sobre clínica de reabilitação</Link> para distinguir modalidades de cuidado. Este artigo se concentra nas perguntas da visita e na verificação das condições oferecidas.</p>, paragraphs: [
        "Antes de comparar locais, procure entender riscos, condições de saúde, padrão de uso e apoio disponível. Uma avaliação profissional ajuda a saber qual modalidade faz sentido e evita decisões baseadas apenas em urgência emocional.",
        "Desconfie de respostas prontas antes de qualquer escuta. Uma instituição responsável explica limites, não garante resultados e informa quando outro serviço pode ser mais adequado."
      ]},
      { title: "Equipe e acompanhamento", paragraphs: [
        "Pergunte quem realiza avaliação, atendimentos e supervisão da rotina. Solicite informações sobre formação, responsabilidades e disponibilidade dos profissionais, sem presumir que todos os cuidados acontecem diariamente.",
        "Também é importante saber como a equipe registra evolução, conversa com a família e lida com necessidades médicas ou de saúde mental que ultrapassem sua estrutura."
      ]},
      { title: "Estrutura, segurança e rotina", paragraphs: [
        "Se possível, conheça o ambiente e observe higiene, conservação, privacidade, espaços de descanso e condições de convivência. Pergunte como são armazenados medicamentos, como funcionam alimentação e contatos e quais são os procedimentos em emergências.",
        "Peça uma explicação da rotina. Atividades devem ter propósito claro, horários compreensíveis e espaço para necessidades individuais. Regras não podem justificar humilhação, violência ou isolamento indevido."
      ]},
      { title: "Proposta terapêutica e participação familiar", paragraphs: [
        "A instituição deve conseguir explicar objetivos, métodos, frequência de atendimentos e critérios para rever o plano. Frases como “funciona para todos” ou “resultado garantido” não substituem informação concreta.",
        "Entenda como a família participa, recebe atualizações e se prepara para o retorno. A ausência total de comunicação ou regras vagas merece esclarecimento antes da decisão."
      ]},
      { title: "Valores, contrato e condições oferecidas", paragraphs: [
        "Solicite por escrito o que está incluído, quais itens podem gerar cobrança adicional, datas de pagamento, regras de cancelamento e condições de encerramento. Leia o contrato com calma e guarde uma cópia.",
        "Confirme se a estrutura, os profissionais e os serviços apresentados na conversa constam do documento. Se uma informação importante não estiver clara, peça explicação antes de assinar."
      ]},
      { title: "Perguntas essenciais antes de decidir", items: [
        "Como é feita a avaliação e quem define o plano de cuidado?",
        "Quais profissionais atuam e qual é a disponibilidade de cada um?",
        "Como a família recebe informações e participa do processo?",
        "O que está incluído no valor e quais cobranças podem surgir?",
        "Como são atendidas intercorrências clínicas ou psiquiátricas?",
        "Quais são os critérios de saída e o plano de continuidade?",
        "É possível visitar o local e ler o contrato antes da decisão?"
      ]},
      { title: "Sinais de alerta na escolha", paragraphs: [
        "Pressão para pagamento imediato, impedimento de conhecer condições, promessas de cura, informações contraditórias e falta de clareza sobre equipe ou contrato são motivos para interromper a decisão e verificar melhor.",
        "Em uma situação urgente, a família ainda merece informações objetivas. Comparar critérios não é falta de confiança: é uma forma de proteger a pessoa e tomar uma decisão responsável."
      ]},
    ]}
    faqs={[
      { question: "É importante visitar o local antes?", answer: "Quando possível, sim. A visita ajuda a comparar o que foi informado com as condições observadas e permite fazer perguntas concretas." },
      { question: "O que deve ficar claro sobre valores?", answer: "Valor total, itens incluídos, cobranças extras, datas, reajustes, cancelamento e condições de encerramento devem ser explicados e registrados." },
      { question: "Como saber se a proposta é séria?", answer: "Procure avaliação individual, objetivos claros, equipe identificada, contrato compreensível, limites honestos e ausência de promessas de resultado." },
      { question: "A família deve participar?", answer: "A forma varia, mas é importante saber como haverá orientação, comunicação e preparação para a continuidade do cuidado." },
    ]}
    related={[
      { to: "/clinica-de-reabilitacao", label: "Entenda a clínica de reabilitação", description: "Conheça finalidades e modalidades antes de comparar opções." },
      { to: "/familia", label: "Orientação para familiares", description: "Organize a busca de ajuda com informação e limites." },
      { to: "/cidades", label: "Orientação por cidade", description: "Encontre conteúdos regionais e caminhos para contato." },
      { to: "/blog/como-funciona-uma-clinica-de-reabilitacao", label: "Como funciona uma clínica", description: "Entenda etapas e rotina para fazer perguntas melhores." },
      { to: "/blog/dependencia-quimica-em-araraquara-tratamento", label: "Critérios de segurança", description: "Veja orientações detalhadas sobre verificação e documentação." },
    ]}
  />;
}