import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { createArticleHead } from "@/components/blog/article-head";
import { ArticleBreadcrumb, IllustratedSections, type IllustratedSection } from "@/components/blog/illustrated-article-shell";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";
import { whatsappHref, phoneDisplay } from "@/lib/site";

const title = "Clínica de Reabilitação: Como Funciona o Tratamento e Como Escolher";
const description = "Entenda avaliação, acolhimento, cuidados com a abstinência, participação familiar e critérios para escolher uma clínica de reabilitação com responsabilidade.";
const slug = "como-funciona-uma-clinica-de-reabilitacao";
const photos = visualAssets.rehabilitationArticle;

export const Route = createFileRoute("/blog/como-funciona-uma-clinica-de-reabilitacao")({
  staticData: { sitemap: true },
  head: () => {
    const head = createArticleHead({ title, description, slug, image: photos.welcome.src, published: "2026-10-02" });
    return {
      ...head,
      // Bundled artwork has no stable absolute public URL: let hosting provide social previews.
      meta: head.meta.filter((meta) => !("property" in meta && meta.property === "og:image") && !("name" in meta && meta.name === "twitter:image")),
      scripts: head.scripts.map((script) => {
        const data = JSON.parse(script.children);
        for (const entry of data["@graph"]) {
          if (entry["@type"] === "BlogPosting") {
            entry.dateModified = "2026-10-09";
            delete entry.image;
          }
        }
        return { ...script, children: JSON.stringify(data) };
      }),
    };
  },
  component: RehabilitationArticle,
});

const sections: IllustratedSection[] = [
  { title: "Quando procurar uma clínica de reabilitação?", paragraphs: [
    "A busca por ajuda merece atenção quando o uso de álcool ou outras drogas começa a comprometer a saúde, o sono, os relacionamentos, o trabalho ou a segurança. Dificuldade de controlar o consumo, tentativas frustradas de reduzir e continuidade do uso apesar dos prejuízos são motivos para procurar avaliação — não um diagnóstico feito pela internet.",
    "Não é preciso esperar uma crise para conversar com um profissional. A avaliação ajuda a compreender o que está acontecendo e quais recursos são adequados. Procurar uma clínica de reabilitação não significa que o acolhimento residencial seja sempre necessário: cuidados no território, acompanhamento ambulatorial e serviços de saúde mental também podem ser considerados.",
  ]},
  { title: "O que é uma clínica de reabilitação?", paragraphs: [
    "A expressão é utilizada para serviços com propostas diferentes. Por isso, o nome da instituição não basta para identificar sua capacidade de atendimento. É preciso verificar a natureza do serviço, os profissionais envolvidos, os cuidados disponíveis e os limites da estrutura.",
    "Uma busca por clínica para dependentes químicos deve começar pelas necessidades da pessoa, não por um programa padronizado. Tratamento da dependência química e tratamento do alcoolismo podem envolver diferentes pontos da rede de saúde, com objetivos e intensidade de cuidado definidos individualmente.",
  ], subsections: [
    { title: "Acolhimento não é sinônimo de atendimento médico", paragraphs: ["Acolhimento é a escuta inicial e também pode designar permanência temporária em ambiente residencial, conforme o serviço. Isso não comprova, por si só, a existência de estrutura clínica para desintoxicação, manejo de crises ou atendimento hospitalar. Pergunte exatamente qual modalidade está sendo oferecida."] },
    { title: "Acompanhamento terapêutico, cuidado clínico e saúde mental", paragraphs: ["Atendimentos psicológicos e outras intervenções terapêuticas podem apoiar mudanças, vínculos e autocuidado. Já o tratamento clínico envolve necessidades médicas, avaliação de sintomas e medicamentos quando indicados. O atendimento de saúde mental considera também sofrimento psíquico e condições associadas. Essas frentes podem se complementar, mas não são intercambiáveis."] },
  ]},
  { title: "Como funciona o processo de acolhimento?", image: photos.assessment, paragraphs: [
    "O primeiro contato deve oferecer escuta respeitosa e informações claras. A avaliação inicial considera o padrão de uso, a última utilização da substância, sintomas atuais, condições de saúde, medicamentos, tratamentos anteriores e apoio disponível. A pessoa precisa ser ouvida; familiares podem colaborar sem substituir sua participação.",
    "O objetivo não é encaixar todos no mesmo programa. É identificar riscos, compreender necessidades e definir próximos passos. Se houver uma condição urgente ou que ultrapasse os recursos da instituição, o encaminhamento para um serviço de saúde adequado deve ter prioridade.",
    "Quando o acolhimento residencial fizer sentido, esclareça antes da chegada as regras de convivência, privacidade, comunicação com a família, pertences, valores e procedimentos de saída. A adaptação deve preservar dignidade, direitos e compreensão do que foi combinado.",
  ]},
  { title: "Desintoxicação e abstinência: por que a avaliação profissional é importante?", paragraphs: [
    "Desintoxicação se refere ao cuidado relacionado à interrupção ou redução do uso e aos sintomas desse período. Reabilitação é um processo mais amplo: envolve saúde, relações, autonomia, rotina e continuidade do acompanhamento. Passar pela abstinência não encerra o tratamento.",
    "Os riscos variam conforme a substância, o padrão de consumo, a saúde e o histórico da pessoa. A abstinência de álcool pode causar complicações graves, como convulsões e delirium, e exigir assistência hospitalar. Determinados medicamentos também requerem cuidado na retirada. Não interrompa medicamentos por conta própria e não tente realizar desintoxicação sem supervisão.",
    "Convulsões, confusão intensa, dificuldade para respirar, perda de consciência ou risco imediato de autoagressão exigem atendimento de urgência. Acione o SAMU pelo 192. Uma conversa de orientação ou vaga de acolhimento não substitui assistência de emergência.",
  ]},
  { title: "Quais etapas podem fazer parte do tratamento?", image: photos.therapy, paragraphs: [
    "Depois da avaliação, o plano precisa ter objetivos compreensíveis e ser revisto conforme as necessidades. Acompanhamento psicológico, avaliação médica quando indicada, atividades terapêuticas e apoio social podem compor o cuidado. Nem toda instituição oferece todos esses recursos ou os oferece com a mesma frequência.",
    "Nas conversas terapêuticas, podem ser trabalhados motivação, emoções, relações, situações associadas ao consumo e estratégias para lidar com dificuldades. A instituição deve identificar os profissionais responsáveis e explicar como a evolução é acompanhada, respeitando a confidencialidade.",
  ], subsections: [
    { title: "Cuidado individualizado e rede de saúde", paragraphs: ["O plano pode exigir articulação com outros serviços, inclusive para condições clínicas e de saúde mental associadas. Na rede pública, UBS e CAPS são caminhos para buscar avaliação e acompanhamento; a oferta e a organização local devem ser confirmadas no município."] },
  ]},
  { title: "Rotina, convivência e atividades de recuperação", image: photos.routine, caption: "A jardinagem ilustra uma atividade cotidiana possível, não um serviço confirmado da Central nem uma prática obrigatória de tratamento.", paragraphs: [
    "Construir uma rotina pode ajudar a organizar sono, alimentação, autocuidado e compromissos. Quando houver atividades individuais ou coletivas, pergunte sobre sua finalidade, quem as acompanha e como são adaptadas às condições de cada pessoa.",
    "Convivência, descanso e atividades significativas não devem ser confundidos com apenas ocupar o tempo. Regras precisam preservar segurança e respeito. Humilhação, violência, exploração e isolamento indevido não se tornam aceitáveis por estarem apresentados como disciplina.",
  ]},
  { title: "Como escolher uma clínica de reabilitação com responsabilidade?", context: <p>Esta seção resume cuidados que ajudam a compreender a jornada. Para comparar opções durante uma visita, use as <Link to="/blog/como-escolher-uma-clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">perguntas práticas de escolha de uma instituição</Link>; para modalidades e finalidades, consulte a <Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">orientação institucional sobre clínica de reabilitação</Link>.</p>, paragraphs: [
    "Compare informações verificáveis antes de decidir. Uma instituição responsável esclarece sua proposta e suas limitações, não promete cura e informa quando outro recurso de saúde é mais apropriado. Visitar o local, quando possível, ajuda a confrontar a apresentação com as condições observadas.",
  ], items: [
    "Regularidade: solicite identificação da instituição e documentos de funcionamento e licenças aplicáveis à modalidade. Confirme vigência e correspondência com o endereço junto aos órgãos competentes; um documento isolado não garante a qualidade do cuidado.",
    "Profissionais: pergunte nomes, habilitação, responsabilidades e disponibilidade. Verifique registros nos conselhos profissionais quando aplicáveis, sem presumir presença médica diária.",
    "Programa e avaliação: entenda como o plano é definido, quais atendimentos existem e quando será revisto. Desconfie de uma indicação pronta sem escuta ou avaliação.",
    "Segurança e direitos: esclareça resposta a emergências, encaminhamentos, administração de medicamentos, privacidade, comunicação, consentimento e condições de saída.",
    "Família e continuidade: peça informações sobre orientação familiar, contatos durante o acolhimento e planejamento após a saída.",
    "Contrato: leia valores, itens incluídos, cobranças adicionais, cancelamento e encerramento. Não aceite pressão para pagar antes de compreender as condições.",
  ], subsections: [{ title: "Uma decisão sem promessas", paragraphs: ["Nenhuma licença, estrutura ou método assegura um resultado individual. Promessas de recuperação garantida, informação contraditória e recusa em esclarecer equipe ou contrato são sinais para interromper a decisão e verificar melhor."] }]},
  { title: "Qual é o papel da família durante o tratamento?", image: photos.family, paragraphs: [
    "A família pode contribuir com informações, apoiar a busca de ajuda e participar de orientações quando apropriado. O cuidado não depende de familiares agirem perfeitamente: culpabilizar a família dificulta o diálogo e não substitui uma avaliação profissional.",
    "Conversas em um momento seguro e sem intoxicação, com exemplos concretos de preocupação, costumam ser mais respeitosas que acusações. É possível oferecer apoio e estabelecer limites sobre dinheiro, convivência e segurança, sem ameaças ou promessas de que uma única atitude resolverá a situação.",
    "Se a pessoa não aceita ajuda, familiares ainda podem procurar orientação para planejar abordagens e proteger a própria saúde. Não tente conter ou transportar alguém à força por conta própria. Em risco imediato, procure urgência; fora dele, as decisões precisam considerar avaliação, direitos e as regras legais aplicáveis.",
  ]},
  { title: "Quanto tempo dura o tratamento?", paragraphs: [
    "Não existe uma duração que sirva para todos. Necessidades clínicas, modalidade de cuidado, evolução, objetivos e condições para continuidade influenciam o planejamento. Um período contratado de permanência não equivale a um prazo de recuperação.",
    "Três ou seis meses não devem ser apresentados como garantia. Pergunte quando o plano será reavaliado, quais critérios orientam mudanças e como a saída é preparada. O acompanhamento pode continuar mesmo após o término do acolhimento residencial.",
  ]},
  { title: "O que acontece depois do acolhimento?", image: photos.continuity, paragraphs: [
    "O retorno deve ser preparado antes da saída. O planejamento pode incluir seguimento de saúde, apoio psicológico quando indicado, organização de moradia, trabalho ou estudos, vínculos e uma rotina possível. A rede de apoio precisa corresponder aos recursos realmente disponíveis.",
    "Recuperação e prevenção de recaídas envolvem reconhecer situações de risco, combinar a quem recorrer e rever estratégias quando surgirem dificuldades. Uma retomada do uso não deve ser tratada como falha moral: exige avaliar riscos e reorganizar o cuidado, inclusive com assistência urgente se necessário.",
    "A continuidade não pode depender apenas da força de vontade nem ficar restrita a um documento de saída. A pessoa e sua rede precisam compreender os próximos contatos, compromissos e possibilidades de apoio, com ajustes ao longo do tempo.",
  ]},
];

const faqs = [
  { question: "Quando é indicado procurar uma clínica de reabilitação?", answer: "Quando o consumo traz prejuízos ou riscos, vale buscar avaliação profissional. A indicação de acolhimento residencial não é automática: depende das necessidades e das alternativas de cuidado." },
  { question: "Qual é a diferença entre desintoxicação e reabilitação?", answer: "Desintoxicação aborda a interrupção ou redução do uso e seus sintomas. Reabilitação envolve um processo mais amplo de cuidado, autonomia, relações, rotina e acompanhamento continuado." },
  { question: "A família pode participar do tratamento?", answer: "Pode, conforme as condições do caso, os direitos da pessoa e a proposta do serviço. Pergunte como funcionam orientação, contatos e preparação para a continuidade." },
  { question: "Como avaliar se uma clínica é confiável?", answer: "Verifique documentação aplicável, profissionais habilitados, avaliação individual, segurança, direitos, contrato e plano de continuidade. Ausência de promessas é importante, mas nenhum critério isolado garante resultados." },
  { question: "Quanto tempo pode durar o tratamento?", answer: "A duração varia com a avaliação, a modalidade, a evolução e os objetivos. Um prazo de permanência não garante recuperação; o plano precisa ser revisto." },
  { question: "O que fazer quando a pessoa não aceita ajuda?", answer: "Busque orientação profissional, dialogue com respeito e estabeleça limites de segurança sem coerção por conta própria. Em risco imediato, acione atendimento de urgência pelo SAMU 192." },
  { question: "O acompanhamento deve continuar após o acolhimento?", answer: "A continuidade deve ser planejada conforme as necessidades, com recursos de saúde e apoio disponíveis. A saída não significa que todas as necessidades de cuidado terminaram." },
];

function RehabilitationArticle() {
  return <main className="site-editorial min-h-screen bg-deep font-body text-foreground">
    <article className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <ArticleBreadcrumb title="Como funciona o tratamento" />
      <header className="mt-9">
        <p className="font-display text-xs font-semibold uppercase text-secondary">Clínica de Reabilitação e Tratamento</p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Central de Acolhimento e Reabilitação · Publicado em 2 de outubro de 2026 · Atualizado em 9 de outubro de 2026</p>
        <figure className="mt-8">
          <img src={photos.welcome.src} alt={photos.welcome.alt} width={1440} height={960} fetchPriority="high" decoding="async" className="aspect-[3/2] w-full rounded-lg object-cover sm:aspect-[16/8]" />
          <figcaption className="mt-3 text-xs leading-5 text-muted-foreground">{conceptualImageCaption}</figcaption>
        </figure>
        <p className="mt-6 max-w-3xl border-l-2 border-secondary pl-5 text-sm leading-7 text-muted-foreground">Conteúdo educativo: não substitui diagnóstico, indicação de tratamento ou avaliação individual. As modalidades descritas não constituem uma lista de serviços confirmados da Central.</p>
      </header>
      <IllustratedSections sections={sections} />
      <section className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold">Perguntas frequentes</h2>
        <div className="mt-5 divide-y divide-border">{faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold leading-7">{faq.question}</summary><p className="mt-3 max-w-3xl leading-8 text-muted-foreground">{faq.answer}</p></details>)}</div>
      </section>
      <section className="mt-10 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold">Cada situação merece orientação individual</h2>
        <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">Compreender diferenças entre acolhimento, tratamento e acompanhamento ajuda a fazer perguntas melhores e evitar decisões baseadas em promessas. Converse com a Central de Acolhimento e Reabilitação para receber orientação sobre possibilidades de cuidado. A única unidade física da Central fica em Araraquara.</p>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-lg bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Conversar pelo WhatsApp</a>
        <p className="mt-3 text-sm text-muted-foreground">Contato oficial: {phoneDisplay}. Em emergência, SAMU 192.</p>
      </section>
      <section className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold">Leituras para aprofundar sua decisão</h2>
        <ul className="mt-5 space-y-4 leading-7 text-muted-foreground">
          <li><Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">Guia central sobre clínica de reabilitação</Link> — visão integrada das possibilidades de cuidado.</li>
          <li><Link to="/blog/como-escolher-uma-clinica-de-reabilitacao" className="font-semibold text-secondary underline underline-offset-4">Como escolher uma clínica para um familiar</Link> — perguntas práticas sobre visita, equipe e contrato.</li>
          <li><Link to="/acolhimento" className="font-semibold text-secondary underline underline-offset-4">Acolhimento e orientação inicial</Link> — informações para organizar o primeiro contato.</li>
          <li><Link to="/familia" className="font-semibold text-secondary underline underline-offset-4">Orientação para familiares</Link> — apoio responsável e participação no cuidado.</li>
          <li><Link to="/blog/alcoolismo-quando-o-consumo-se-torna-um-problema" className="font-semibold text-secondary underline underline-offset-4">Quando o consumo de álcool se torna um problema</Link> — sinais e riscos que merecem avaliação.</li>
          <li><Link to="/blog/dependencia-quimica-sinais-consequencias-tratamento" className="font-semibold text-secondary underline underline-offset-4">Dependência química: sinais, consequências e tratamento</Link> — aprofundamento dos impactos e caminhos de cuidado.</li>
        </ul>
      </section>
      <section className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold">Fontes e limites deste conteúdo</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">Referências públicas consultadas em 9 de outubro de 2026. Não há revisor técnico identificado para este artigo; as informações são educativas e precisam ser aplicadas por profissionais habilitados à situação individual.</p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
          <li><a href="https://linhasdecuidado.saude.gov.br/portal/transtornos-por-uso-de-alcool-no-adulto/unidade-hospitalar/avaliacao-conduta/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ministério da Saúde — Transtornos por uso de álcool: avaliação e conduta em situações agudas</a></li>
          <li><a href="https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ministério da Saúde — Rede de Atenção Psicossocial (RAPS)</a></li>
          <li><a href="https://www.gov.br/saude/pt-br/composicao/saes/samu-192" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ministério da Saúde — SAMU 192 e situações de urgência</a></li>
        </ul>
      </section>
    </article>
  </main>;
}
