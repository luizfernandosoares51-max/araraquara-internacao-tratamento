import { createFileRoute } from "@tanstack/react-router";
import image from "@/assets/blog-como-funciona-clinica.webp";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleShell } from "@/components/blog/article-shell";

const title = "Como funciona uma clínica de reabilitação para dependência química?";
const description = "Conheça as etapas de acolhimento, avaliação, rotina terapêutica, participação familiar e continuidade do cuidado em uma clínica de reabilitação.";
const slug = "como-funciona-uma-clinica-de-reabilitacao";

export const Route = createFileRoute("/blog/como-funciona-uma-clinica-de-reabilitacao")({
  staticData: { sitemap: true }, head: () => createArticleHead({ title, description, slug, image, published: "2026-10-02" }), component: Page,
});

function Page() {
  return <ArticleShell category="Tratamento e acolhimento" title={title} description={description} image={image}
    imageAlt="Grupo participa de conversa terapêutica em ambiente de convivência iluminado"
    sections={[
      { title: "O primeiro contato e a avaliação inicial", paragraphs: [
        "O processo costuma começar com uma conversa para compreender o padrão de uso, riscos atuais, condições de saúde, tratamentos anteriores e rede de apoio. Familiares podem contribuir com informações, mas a pessoa precisa ser ouvida com respeito.",
        "Essa etapa não deve servir para encaixar todos no mesmo programa. Ela orienta a modalidade de cuidado, identifica necessidades urgentes e ajuda a definir objetivos iniciais."
      ]},
      { title: "Como acontece o acolhimento", paragraphs: [
        "Quando o acolhimento em ambiente estruturado é indicado, a chegada envolve apresentação das regras, organização de pertences, informações sobre contatos e adaptação à rotina. Procedimentos concretos variam entre instituições e devem ser explicados antecipadamente.",
        "Os primeiros dias podem trazer insegurança. Uma recepção respeitosa, critérios claros e canais de comunicação com a família ajudam a tornar a transição mais compreensível."
      ]},
      { title: "A rotina terapêutica", paragraphs: [
        "Uma rotina estruturada pode combinar atendimentos individuais, atividades em grupo, organização da vida diária, convivência, descanso e práticas que favoreçam responsabilidade e autocuidado. A programação deve ter finalidade terapêutica clara, não apenas ocupar o tempo.",
        "Acompanhamento psicológico ou terapêutico pode trabalhar motivação, emoções, relações, situações associadas ao uso e estratégias para mudanças. A composição da equipe e a frequência dos atendimentos devem ser informadas pela instituição."
      ], subsections: [
        { title: "Acompanhamento médico quando indicado", paragraphs: ["Condições clínicas, sintomas de abstinência, saúde mental e uso de medicamentos podem exigir avaliação médica. Nem toda pessoa terá a mesma necessidade, e nenhuma medicação deve ser apresentada como solução isolada."] },
        { title: "Atividades e convivência", paragraphs: ["Atividades coletivas podem apoiar habilidades sociais e cooperação. Regras de convivência precisam preservar dignidade, segurança e privacidade."] },
      ]},
      { title: "Participação da família durante o processo", paragraphs: [
        "A participação pode incluir orientações, encontros, visitas e construção de acordos para o retorno, conforme a proposta e as condições do caso. A instituição deve explicar como e quando essa comunicação acontece.",
        "O trabalho familiar não é uma cobrança para que todos ajam perfeitamente. É uma oportunidade de compreender padrões, rever limites e preparar um ambiente mais seguro para a continuidade."
      ]},
      { title: "Preparação para depois do tratamento", paragraphs: [
        "A saída não deve ser tratada como linha de chegada. É importante planejar acompanhamento, moradia, trabalho ou estudos, vínculos, rotina e resposta a situações de risco.",
        "O plano de continuidade precisa ser realista e revisto quando necessário. Grupos, serviços de saúde, psicoterapia e outros recursos podem fazer parte da rede, conforme avaliação individual."
      ]},
      { title: "O que perguntar antes do acolhimento", items: [
        "quem realiza a avaliação e como o plano é definido;",
        "quais profissionais participam e com que frequência;",
        "como funcionam contatos, visitas e orientação familiar;",
        "como intercorrências de saúde são atendidas;",
        "como é planejada a continuidade após a saída."
      ]},
    ]}
    faqs={[
      { question: "Toda clínica oferece acompanhamento médico?", answer: "Não necessariamente. A família deve perguntar quais profissionais atuam, em que situações e como são feitos encaminhamentos externos." },
      { question: "Quanto tempo dura o tratamento?", answer: "Não há duração única. Ela depende da avaliação, evolução, objetivos e modalidade de cuidado, e deve ser discutida sem promessas." },
      { question: "A família pode visitar?", answer: "As regras variam. A instituição deve explicar previamente contatos, visitas e atividades de orientação familiar." },
      { question: "O que acontece após a saída?", answer: "O ideal é haver um plano de continuidade com rede de apoio, rotina e acompanhamento adequado às necessidades da pessoa." },
    ]}
    related={[
      { to: "/clinica-de-reabilitacao", label: "Guia completo", description: "Veja o papel da clínica dentro de uma rede de cuidado." },
      { to: "/acolhimento", label: "Acolhimento", description: "Conheça mais sobre a chegada e a orientação inicial." },
      { to: "/familia", label: "Participação da família", description: "Entenda como familiares podem fazer parte do processo." },
      { to: "/cidades", label: "Atendimento por cidade", description: "Consulte a orientação regional, sem confundir atendimento com unidade física." },
      { to: "/blog/como-escolher-uma-clinica-de-reabilitacao", label: "Como escolher uma clínica", description: "Use critérios práticos antes de tomar uma decisão." },
    ]}
  />;
}