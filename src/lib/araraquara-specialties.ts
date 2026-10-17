import { careProgram } from "./care-program";
import { institutionalIdentity, institutionalLocalBusiness, legalSources } from "./institutional";
import { siteUrl } from "./site";

export type SpecialtyKey = "alcohol" | "cocaine" | "involuntary" | "voluntary" | "transport";
type Specialty = {
  key: SpecialtyKey;
  path: "/tratamento-alcoolismo-araraquara" | "/tratamento-cocaina-crack-araraquara" | "/internacao-involuntaria-araraquara" | "/internacao-voluntaria-araraquara" | "/resgate-remocao-araraquara";
  label: string;
  summary: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  notice: string;
  condition?: string;
  sections: { title: string; paragraphs: string[] }[];
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const specialtyScope = {
  ownUnitMedicalDetox: careProgram.ownUnitMedicalDetox,
  ownUnitInvoluntaryHospitalization: careProgram.ownUnitInvoluntaryHospitalization,
  transport: careProgram.transport,
  psychology: institutionalIdentity.psychologyResponsible,
  coordination: institutionalIdentity.generalCoordination,
} as const;

export const araraquaraSpecialties: Record<SpecialtyKey, Specialty> = {
  alcohol: {
    key: "alcohol", path: "/tratamento-alcoolismo-araraquara", label: "Tratamento do Alcoolismo",
    summary: "Uso de álcool, avaliação e reconstrução de vínculos.",
    title: "Clínica para Tratamento do Alcoolismo em Araraquara - SP | Acolhimento",
    description: "Orientação sobre alcoolismo em Araraquara, acolhimento voluntário e apoio psicossocial. Desintoxicação médica por encaminhamento a serviços habilitados.",
    heading: "Tratamento do alcoolismo em Araraquara",
    intro: "Quando o álcool começa a comprometer a saúde, a rotina ou os vínculos, a busca por ajuda pode começar com uma conversa. A Central oferece acolhimento voluntário e suporte psicossocial na única sede própria em Araraquara, com orientação à família e avaliação das necessidades de cada pessoa.",
    notice: "A desintoxicação médica não é realizada na Central. Abstinência com convulsões, confusão intensa ou alteração de consciência exige atendimento de urgência: SAMU 192.",
    condition: "Dependência de álcool",
    sections: [
      { title: "Reconhecer os prejuízos sem reduzir a pessoa a um rótulo", paragraphs: [
        "O consumo problemático pode aparecer de formas diferentes: dificuldade de controlar a quantidade, repetidas tentativas de reduzir o uso, conflitos familiares ou abandono de responsabilidades. Manter um emprego não exclui prejuízos importantes. Também não é possível determinar a gravidade apenas pela frequência de consumo ou por uma descrição feita pela família.",
        "Não existe uma sequência de fases igual para todos. Uma avaliação considera história de uso, saúde física e emocional, medicações, outros consumos e condições de vida. Em Araraquara, UBS e CAPS AD são caminhos públicos de acesso ao cuidado. A orientação particular da Central é outra possibilidade, sem substituir a rede pública ou indicar acolhimento automaticamente.",
      ] },
      { title: "Abstinência de álcool e desintoxicação: uma etapa médica", paragraphs: [
        "Após uso intenso ou prolongado, interromper o álcool pode provocar sintomas de abstinência. Tremores, agitação e outros sintomas precisam de avaliação; convulsões, desorientação ou perda de consciência são sinais de urgência. A família não deve improvisar medicamentos, doses ou uma desintoxicação em casa a partir de informações da internet.",
        "A segurança dessa etapa depende de avaliação médica, que define necessidade de monitoramento, local de atendimento e condutas. A Central reúne articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária e cuidados contínuos. Quando há indicação de desintoxicação médica ou assistência hospitalar, orienta o encaminhamento ao estabelecimento habilitado adequado. Protocolos de desintoxicação, prescrições e alta são responsabilidade da equipe do serviço externo, não da unidade de acolhimento psicossocial.",
      ] },
      { title: "Reconstrução emocional e continuidade do cuidado", paragraphs: [
        "Depois de avaliadas as necessidades médicas, o cuidado psicossocial pode ajudar a reconhecer situações associadas ao consumo, reorganizar hábitos e trabalhar relações. Na proposta informada pela Central, suporte psicológico com Margarete Vasques (CRP 06/130268), conscientização em 12 Passos, laborterapia e convivência terapêutica compõem o acolhimento voluntário.",
        "O plano de prevenção à recaída considera sinais de alerta, recursos de apoio e continuidade após o acolhimento. Uma recaída não define o valor da pessoa: exige reavaliação do cuidado e atenção à segurança. Não há prazo universal, promessa de cura ou garantia de que uma única passagem por acolhimento resolverá todas as necessidades.",
      ] },
      { title: "A família participa sem assumir o papel da equipe", paragraphs: [
        "Familiares podem organizar informações sobre mudanças observadas, conversar com respeito e estabelecer limites possíveis. Apoiar não significa vigiar continuamente, ameaçar ou assumir sozinhos a responsabilidade pelo resultado. A própria família também pode precisar de suporte para lidar com desgaste, conflitos e expectativas.",
        "Na sede da R. Alfredo Micelli, 70, as visitas são agendadas conforme a rotina terapêutica. Antes de deslocar-se, consulte a coordenação sobre admissão, visitas e condições do acolhimento particular. A orientação sobre reembolso depende do plano de saúde e não significa convênio aceito ou cobertura garantida.",
      ] },
    ],
    steps: [
      { title: "Relatar a situação", text: "Organize o histórico de uso e as preocupações atuais, sem buscar diagnóstico remoto." },
      { title: "Avaliar a segurança", text: "Necessidades de abstinência e desintoxicação são avaliadas em serviço médico habilitado." },
      { title: "Planejar a continuidade", text: "Acolhimento, apoio familiar e prevenção à recaída dependem da avaliação individual." },
    ],
    faqs: [
      { question: "Qual é o tempo médio de tratamento do alcoolismo?", answer: "Não há um tempo médio aplicável a todas as pessoas. Duração e modalidade dependem da avaliação individual, das necessidades médicas e psicossociais e da evolução do plano. A Central não estabelece prazo de cura; consulte a equipe sobre as condições do acolhimento." },
      { question: "Como a família pode lidar com uma recaída?", answer: "Priorize a segurança, evite acusações e procure reavaliação profissional do plano de cuidado. Uma recaída pode indicar necessidade de ajustar apoios e estratégias. Em alteração de consciência, convulsões ou risco imediato, procure urgência ou ligue 192." },
      { question: "A desintoxicação de álcool acontece na unidade de Araraquara?", answer: "Não. A Central oferece acolhimento voluntário e suporte psicossocial; desintoxicação médica é encaminhada a estabelecimentos habilitados, com avaliação e condutas definidas pela equipe médica externa." },
    ],
  },
  cocaine: {
    key: "cocaine", path: "/tratamento-cocaina-crack-araraquara", label: "Crack e Cocaína",
    summary: "Fissura, saúde mental e reorganização da rotina.",
    title: "Tratamento para Dependência de Cocaína e Crack em Araraquara | Acolhimento",
    description: "Orientação sobre cocaína e crack em Araraquara: fissura, apoio psicológico, acolhimento voluntário e encaminhamento médico conforme avaliação individual.",
    heading: "Cuidado para dependência de cocaína e crack em Araraquara",
    intro: "O cuidado com o uso de cocaína ou crack envolve mais que interromper o consumo. Saúde física, sofrimento emocional, vínculos e condições de vida precisam ser considerados. Em Araraquara, a Central orienta famílias e oferece acolhimento voluntário psicossocial, sem substituir avaliação médica.",
    notice: "Dor no peito, convulsões, alteração de consciência ou risco imediato após uso de substâncias exigem atendimento de urgência. Ligue para o SAMU 192; não aguarde transporte agendado.",
    condition: "Dependência de cocaína",
    sections: [
      { title: "Impactos do uso e avaliação integral", paragraphs: [
        "Cocaína e crack são formas de consumo associadas a efeitos estimulantes. Podem alterar sono, apetite, humor e comportamento, além de trazer riscos cardiovasculares e sofrimento psíquico. A intensidade dos efeitos varia conforme padrão de uso, saúde, outras substâncias e contexto. Não é possível deduzir um diagnóstico neurológico a partir de uma descrição familiar.",
        "Uma avaliação deve considerar tanto riscos imediatos quanto necessidades de acompanhamento. A pessoa não pode ser reduzida à substância utilizada. UBS, CAPS AD e serviços de urgência integram os caminhos públicos; a Central oferece orientação e acolhimento particular quando compatíveis com o caso, encaminhando necessidades médicas a estabelecimentos habilitados.",
      ] },
      { title: "Fissura e compulsão: construir respostas possíveis", paragraphs: [
        "Fissura é um desejo intenso de consumir, que pode surgir em diferentes situações. Identificar momentos, locais, emoções e relações associados ao uso ajuda a organizar um plano com profissionais. Essa compreensão não autoriza a família a aplicar punições ou a tratar qualquer comportamento como prova de consumo.",
        "O suporte psicológico pode trabalhar formas de reconhecer sinais de alerta, pedir ajuda e reorganizar escolhas cotidianas. A proposta confirmada da Central reúne apoio psicológico, 12 Passos, convivência e prevenção à recaída; não é apresentado um protocolo farmacológico próprio nem uma modalidade de terapia cognitivo-comportamental não confirmada pela instituição.",
      ] },
      { title: "Convivência terapêutica não é isolamento forçado", paragraphs: [
        "Um contexto com rotina e apoio pode integrar o cuidado, mas afastamento geográfico não elimina a dependência nem garante interrupção da fissura. Acolhimento voluntário pressupõe consentimento, respeito e compreensão das condições. Não deve ser confundido com confinamento, punição ou internação involuntária realizada na unidade própria.",
        "Na Central, a rotina informada inclui atividades de conscientização, atendimento psicológico, laborterapia e convivência terapêutica. A participação considera o plano individual. Necessidades de atendimento hospitalar ou de manejo de uma crise devem ser avaliadas por serviço habilitado, com apoio do articulação médica e psiquiátrica com serviços parceiros credenciados e da equipe multidisciplinar; necessidades de emergência ou internação hospitalar seguem o serviço adequado.",
      ] },
      { title: "Novas rotinas e apoio familiar em Araraquara", paragraphs: [
        "Reconstruir hábitos de sono, alimentação, convivência e atividades significativas pode fazer parte do plano psicossocial. O retorno às responsabilidades deve ser discutido de forma gradual e realista, conforme as necessidades da pessoa. Metas pequenas e possíveis são diferentes de promessas de recuperação rápida ou de resultado permanente.",
        "Famílias podem procurar orientação no contato regional (16) 99765-4579, organizar dúvidas e planejar visitas agendadas à única sede em Araraquara. A continuidade do cuidado precisa considerar recursos fora do acolhimento e a rede de apoio da pessoa. As informações desta página são educativas e não substituem acompanhamento individual.",
      ] },
    ],
    steps: [
      { title: "Identificar necessidades", text: "Considere saúde, padrão de uso e condições de vida, não apenas a substância." },
      { title: "Organizar o suporte", text: "Avaliação individual orienta o acolhimento voluntário e eventuais encaminhamentos." },
      { title: "Rever o plano", text: "Sinais de alerta, fissura e dificuldades de rotina pedem acompanhamento contínuo." },
    ],
    faqs: [
      { question: "A fissura por cocaína ou crack desaparece em um prazo fixo?", answer: "Não há prazo garantido. Intensidade e frequência variam, e o plano precisa considerar saúde, contexto e história de uso. Procure acompanhamento profissional para organizar estratégias de apoio, sem automedicação." },
      { question: "O isolamento protegido é necessário para todos?", answer: "Não. A modalidade de cuidado depende de avaliação individual. Acolhimento voluntário com rotina e convivência não equivale a isolamento forçado; mudar de ambiente não garante recuperação nem autoriza restrição indevida de direitos." },
      { question: "Como a família pode ajudar durante uma fissura?", answer: "Procure manter uma conversa respeitosa e acionar os apoios previstos no plano profissional. Não utilize ameaças, contenção improvisada ou medicamentos sem prescrição. Em risco imediato ou sintomas graves, procure urgência ou ligue 192." },
    ],
  },
  involuntary: {
    key: "involuntary", path: "/internacao-involuntaria-araraquara", label: "Internação Involuntária",
    summary: "Orientação legal e encaminhamento médico externo.",
    title: "Internação Involuntária em Araraquara - SP | Orientação à Família",
    description: "Orientação familiar sobre internação involuntária em Araraquara, Leis 10.216/2001 e 13.840/2019 e encaminhamento a unidades médicas habilitadas.",
    heading: "Internação involuntária em Araraquara: orientação e direitos",
    intro: "Quando a família considera uma internação sem consentimento, precisa de avaliação médica e informação sobre direitos. A Central orienta sobre os trâmites e encaminhamentos; não realiza internação involuntária clínica na unidade própria de Araraquara.",
    notice: "Recusa de tratamento, conflito familiar ou uso de drogas, isoladamente, não autorizam internação involuntária. A decisão é médica, nos termos legais; em risco imediato, procure urgência ou SAMU 192.",
    sections: [
      { title: "Acolhimento psicossocial e internação hospitalar são distintos", paragraphs: [
        "A sede própria da Central recebe acolhimento voluntário e oferece suporte psicossocial. Internação involuntária é uma intervenção médica sem consentimento, sujeita a critérios e controles legais. Não é uma modalidade de hospedagem, uma punição ou uma decisão que uma família possa executar por conta própria.",
        "A orientação institucional pode ajudar a organizar informações, explicar diferenças e encaminhar a avaliação em estabelecimento habilitado. Isso não garante indicação, vaga ou autorização. Responsabilidade médica, documentação e condições de atendimento cabem ao serviço hospitalar externo e aos profissionais que efetivamente avaliam a pessoa.",
      ] },
      { title: "O que as Leis 10.216/2001 e 13.840/2019 estabelecem", paragraphs: [
        "A Lei 10.216/2001 protege direitos das pessoas com transtornos mentais e prevê internação quando recursos extra-hospitalares forem insuficientes, com laudo médico circunstanciado que caracterize os motivos. Distingue internação voluntária, involuntária e compulsória. Esta última decorre de determinação judicial e não é sinônimo de pedido familiar.",
        "Para questões relacionadas ao uso de drogas, a Lei 13.840/2019 alterou a Lei 11.343/2006, priorizando tratamento ambulatorial e prevendo internação excepcional em unidades de saúde ou hospitais gerais com equipe multidisciplinar, autorizada por médico registrado no CRM. Comunidades terapêuticas acolhedoras não podem realizar internação. Consulte as normas integrais e obtenha avaliação do enquadramento de cada caso.",
      ] },
      { title: "Solicitação, decisão médica e comunicação obrigatória", paragraphs: [
        "No regime previsto para dependência de drogas, a solicitação pode partir de familiar ou responsável legal; na absoluta falta destes, de servidor público da saúde, assistência social ou órgãos públicos do Sisnad, exceto segurança pública. A solicitação não substitui a decisão formal do médico responsável, que deve avaliar a impossibilidade de outras alternativas terapêuticas e as condições previstas em lei.",
        "A Lei 10.216/2001 exige comunicação da internação involuntária ao Ministério Público Estadual em até 72 horas, pelo responsável técnico do estabelecimento, e o mesmo procedimento na alta. A disciplina introduzida pela Lei 13.840/2019 prevê comunicação de internações e altas, em até 72 horas, ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização. Não cabe à família nem à Central substituir as obrigações do estabelecimento médico.",
      ] },
      { title: "Dignidade, segurança e próximos passos da família", paragraphs: [
        "A pessoa tem direito a tratamento humanizado, proteção contra abusos e informação compatível com sua situação. A família deve relatar fatos, histórico e riscos sem ameaçar ou improvisar contenção. Uma crise com risco imediato pede a rede de urgência, não a espera por uma negociação de acolhimento ou por transporte agendado.",
        "A coordenação local pode orientar a preparação para avaliação e eventuais encaminhamentos a unidades habilitadas. A remoção regional informada pela instituição depende de agendamento e disponibilidade, nunca substitui o SAMU e não autoriza deslocamento coercitivo informal. Esta página não oferece parecer jurídico ou diagnóstico; dúvidas legais específicas exigem orientação qualificada.",
      ] },
    ],
    steps: [
      { title: "Priorizar a segurança", text: "Em risco imediato, procure urgência; não tente conduzir a crise por conta própria." },
      { title: "Buscar avaliação médica", text: "Indicação e alternativas são avaliadas por profissionais do serviço habilitado." },
      { title: "Entender os direitos", text: "Solicitação, documentação e notificações seguem o enquadramento legal aplicável." },
    ],
    faqs: [
      { question: "A internação involuntária é legal?", answer: "Ela é prevista em lei, mas apenas com requisitos legais e avaliação médica, não por simples recusa de ajuda. As Leis 10.216/2001 e 13.840/2019 estabelecem critérios, direitos e obrigações. A Central orienta e encaminha; não realiza internação involuntária na sede própria." },
      { question: "Quem pode solicitar a internação involuntária por dependência de drogas?", answer: "A legislação prevê familiar ou responsável legal; na absoluta falta deles, servidor público da saúde, assistência social ou órgãos públicos do Sisnad, exceto segurança pública. A solicitação não autoriza automaticamente: a decisão é formalizada pelo médico responsável, conforme os requisitos legais." },
      { question: "É necessário laudo médico e comunicação aos órgãos competentes?", answer: "Sim. A Lei 10.216/2001 prevê laudo médico circunstanciado e comunicação ao Ministério Público Estadual em até 72 horas. A disciplina da Lei 13.840/2019 também prevê comunicação de internações e altas ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização. Essas obrigações cabem ao estabelecimento médico conforme o regime aplicável." },
    ],
  },
  voluntary: {
    key: "voluntary", path: "/internacao-voluntaria-araraquara", label: "Tratamento Voluntário",
    summary: "Consentimento, plano individual e convivência terapêutica.",
    title: "Tratamento Voluntário para Dependência Química em Araraquara",
    description: "Acolhimento voluntário em Araraquara com suporte psicológico, 12 Passos, convivência e plano individual. Orientação familiar sem promessa de resultados.",
    heading: "Acolhimento e tratamento voluntário em Araraquara",
    intro: "Escolher buscar ajuda é um passo que merece escuta e respeito. A Central oferece acolhimento voluntário contínuo em Araraquara, com suporte psicossocial e participação da pessoa no planejamento do cuidado. Acolhimento não equivale a internação hospitalar.",
    notice: "O consentimento e a avaliação individual orientam o acolhimento. Necessidades de desintoxicação médica ou internação hospitalar são encaminhadas a estabelecimentos habilitados.",
    sections: [
      { title: "Uma decisão consciente, sem ameaças ou falsas promessas", paragraphs: [
        "Adesão voluntária envolve compreender a proposta, perguntar sobre as condições e manifestar consentimento. Pode existir ambivalência, medo ou dificuldade de reconhecer prejuízos. A conversa inicial deve acolher essas dúvidas sem transformar o ingresso em obrigação familiar ou vender a ideia de uma solução instantânea.",
        "Antes de qualquer admissão, é importante avaliar saúde, necessidades e compatibilidade com o suporte disponível. A equipe multidisciplinar integra psicologia, articulação médica e psiquiátrica com parceiros e equipe multidisciplinar. Emergências exigem o serviço de urgência adequado. Quando a avaliação indica cuidado hospitalar, há orientação para serviços habilitados; a unidade própria permanece voltada ao acolhimento voluntário psicossocial.",
      ] },
      { title: "Construir metas com participação da pessoa", paragraphs: [
        "O plano individual considera a história, as dificuldades e os recursos da pessoa. Reconhecer padrões de consumo, organizar hábitos e trabalhar vínculos podem ser objetivos, mas não são metas idênticas para todos. A avaliação psicológica e a evolução do acompanhamento ajudam a discutir prioridades sem estabelecer prazo de cura.",
        "Na proposta confirmada pela instituição, Margarete Vasques (CRP 06/130268) atua no suporte psicológico. Conscientização em 12 Passos, laborterapia, convivência terapêutica e prevenção à recaída integram a rotina. O articulação médica e psiquiátrica com serviços parceiros credenciados e a equipe multidisciplinar complementam essa rotina. Medicamentos e condutas seguem orientação dos profissionais responsáveis; técnicas específicas devem ser discutidas na avaliação individual.",
      ] },
      { title: "Rotina, autoestima e convivência", paragraphs: [
        "A rotina informada vai das 07h às 22h em períodos definidos para organização pessoal, alimentação, conscientização, apoio psicológico, atividades ao ar livre, partilha e repouso. A participação considera o plano e a avaliação da equipe. Não se trata de impor um desempenho igual a todos ou de associar uma atividade a um resultado garantido.",
        "Cuidar de pequenas responsabilidades e conviver com respeito podem fazer parte da reconstrução da autonomia. Autoestima e vínculos não se recuperam por decreto; exigem tempo, suporte e acompanhamento. A família pode colaborar mantendo diálogo, limites claros e expectativas compatíveis com a situação, sem pressionar por uma mudança imediata.",
      ] },
      { title: "Planejar a continuidade e o retorno à vida cotidiana", paragraphs: [
        "O cuidado não termina necessariamente com a saída do acolhimento. Prevenção à recaída e continuidade podem envolver acompanhamento psicológico, serviços de saúde e apoio comunitário. Retomar trabalho, estudo ou relações exige planejamento individual; a Central não promete reinserção profissional ou recuperação de vínculos em prazo determinado.",
        "As visitas familiares à R. Alfredo Micelli, 70, são agendadas conforme a rotina terapêutica. Converse previamente sobre condições de permanência, direitos, participação familiar e acolhimento particular. A documentação administrativa pode apoiar a orientação sobre reembolso, mas a decisão de cobertura cabe à operadora do plano de saúde.",
      ] },
    ],
    steps: [
      { title: "Conhecer a proposta", text: "Esclareça consentimento, condições de acolhimento e limites do suporte disponível." },
      { title: "Definir prioridades", text: "Avaliação individual e participação ativa orientam as metas do plano." },
      { title: "Preparar a continuidade", text: "Planeje vínculos, acompanhamento e prevenção à recaída além da permanência." },
    ],
    faqs: [
      { question: "Quais são as vantagens da adesão voluntária?", answer: "A adesão permite participação consciente nas decisões e no plano de cuidado. Pode favorecer diálogo e envolvimento, mas não garante resultado. A indicação e as condições de acolhimento dependem da avaliação individual." },
      { question: "Como funcionam as visitas familiares?", answer: "As visitas à sede em Araraquara seguem dias e horários agendados conforme o cronograma terapêutico. Consulte a coordenação antes do deslocamento; não há frequência semanal automática ou visita sem agendamento." },
      { question: "Acolhimento voluntário é o mesmo que internação médica?", answer: "Não. Na Central, o acolhimento é voluntário e psicossocial. Desintoxicação médica, necessidades hospitalares e internação involuntária clínica são encaminhadas a estabelecimentos habilitados, com responsabilidade médica externa." },
    ],
  },
  transport: {
    key: "transport", path: "/resgate-remocao-araraquara", label: "Resgate e Remoção Agendada",
    summary: "Translado regional com consulta prévia à coordenação.",
    title: "Remoção e Translado Agendado em Araraquara | Orientação Familiar",
    description: "Orientação sobre remoção e translado especializado agendado em Araraquara e municípios vizinhos. Orientação e suporte para agendamento 24h; execução conforme agenda e disponibilidade.",
    heading: "Remoção e translado agendado em Araraquara",
    intro: "Planejar um deslocamento para cuidado exige informação, avaliação e respeito à pessoa. A instituição informa suporte de remoção e translado especializado para Araraquara e municípios vizinhos, mediante agendamento com a coordenação operacional de Luiz Fernando Soares.",
    notice: "O plantão de orientação e o suporte para agendamento de resgate/remoção funcionam 24 horas; a execução do transporte depende da confirmação de agenda e condições. Em surto com risco imediato, alteração de consciência ou outra urgência, procure a rede de urgência ou ligue para o SAMU 192.",
    sections: [
      { title: "Transporte agendado não substitui atendimento de urgência", paragraphs: [
        "O pedido de transporte deve distinguir um deslocamento planejado de uma situação que exige avaliação imediata. Não é seguro aguardar agenda particular diante de convulsões, dor no peito, alteração de consciência ou risco à integridade da pessoa ou de terceiros. O SAMU 192 é um recurso público de urgência, separado do contato da Central.",
        "A expressão resgate é frequentemente usada pela família na busca por ajuda, mas não significa que a instituição disponibilize serviço de emergência. Horários, destino, condições e disponibilidade precisam ser consultados antes do deslocamento. A orientação e o suporte para agendamento estão disponíveis 24h. A execução do transporte depende de agenda, condições e disponibilidade, sem prazo de chegada garantido.",
      ] },
      { title: "Organização do acesso e definição do destino", paragraphs: [
        "A conversa com a coordenação operacional ajuda a organizar origem, necessidades informadas, condições de deslocamento e destino adequado. A única sede própria da Central fica em Araraquara. Receber famílias da região não significa possuir bases, filiais ou equipes permanentemente disponíveis em cada município.",
        "Quando há necessidade de intervenção médica ou internação involuntária clínica, o destino deve ser um estabelecimento habilitado, conforme avaliação e critérios legais. Transporte não determina a indicação médica nem assegura vaga. A família deve confirmar o planejamento com a coordenação e o serviço de destino antes de sair.",
      ] },
      { title: "Recusa, crise e respeito aos direitos", paragraphs: [
        "Uma pessoa recusar ajuda não autoriza remoção forçada informal. Os trâmites de internação involuntária exigem avaliação médica e cumprimento da legislação. Familiares não devem tentar contenção, sedação, uso de força ou deslocamento coercitivo por conta própria. Em crise com risco imediato, acione a rede de urgência.",
        "A orientação deve preservar dignidade, informação e segurança, sem violência. O acolhimento conta com articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar. A organização do transporte considera as necessidades individuais, os direitos da pessoa e os recursos efetivamente disponíveis; equipe de emergência e equipamentos de transporte devem ser esclarecidos antes da contratação. As condições efetivas de transporte devem ser esclarecidas diretamente com a instituição.",
      ] },
      { title: "Privacidade e preparação da família", paragraphs: [
        "Compartilhe somente informações necessárias para discutir a possibilidade de atendimento. O contato oficial permite orientar o agendamento, mas não é necessário publicar relatos pessoais em comentários ou redes sociais. O respeito à privacidade não equivale a promessa de sigilo absoluto ou a dispensa de obrigações legais dos serviços envolvidos.",
        "Antes de confirmar o deslocamento, pergunte sobre documentação, custos, acompanhamento familiar e orientações do serviço de destino. Não são anunciados veículo sem identificação ou procedimentos operacionais que não foram informados. O acolhimento e eventual encaminhamento continuam sujeitos a avaliação; preparar um contato não representa reserva, autorização ou atendimento já realizado.",
      ] },
    ],
    steps: [
      { title: "Distinguir a urgência", text: "Risco imediato pertence à rede de urgência, não ao transporte agendado." },
      { title: "Consultar a coordenação", text: "Informe origem e necessidades para consultar condições e disponibilidade." },
      { title: "Confirmar o destino", text: "Deslocamento e admissão dependem de avaliação e alinhamento com o serviço." },
    ],
    faqs: [
      { question: "Qual é a região atendida pelo transporte?", answer: "A instituição informa remoção e translado especializado para Araraquara e municípios vizinhos mediante agendamento. Não foi confirmado um raio fixo em quilômetros; consulte a coordenação sobre sua origem, destino e disponibilidade." },
      { question: "A remoção funciona à noite ou 24 horas?", answer: "A orientação e o suporte para agendamento funcionam 24 horas. A execução da remoção depende de agendamento, condições e disponibilidade confirmadas com a coordenação. Em urgência ou risco imediato, procure atendimento de emergência ou ligue para o SAMU 192." },
      { question: "O transporte garante sigilo absoluto ou veículo sem identificação?", answer: "Não são prometidos sigilo absoluto ou características de veículo não confirmadas. A orientação deve respeitar a privacidade e as obrigações legais. Consulte diretamente a coordenação sobre as condições efetivas do deslocamento." },
    ],
  },
};

export const specialtyList = Object.values(araraquaraSpecialties);
export const specialtySources = [
  { label: "Ministério da Saúde — Rede de Atenção Psicossocial", href: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps" },
  ...legalSources.slice(0, 2),
];

export function specialtyHead(key: SpecialtyKey) {
  const page = araraquaraSpecialties[key];
  const url = `${siteUrl}${page.path}`;
  const graph: object[] = [
    institutionalLocalBusiness,
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "pt-BR", publisher: { "@id": `${siteUrl}/#organization` }, ...(page.condition ? { about: { "@type": "MedicalCondition", name: page.condition } } : {}) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
      { "@type": "ListItem", position: 3, name: "Araraquara", item: `${siteUrl}/clinica-de-recuperacao-em-araraquara` },
      { "@type": "ListItem", position: 4, name: page.label, item: url },
    ] },
    { "@type": "FAQPage", mainEntity: page.faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];
  return {
    meta: [
      { title: page.title }, { name: "description", content: page.description }, { name: "robots", content: "index,follow" },
      { property: "og:title", content: page.title }, { property: "og:description", content: page.description },
      { property: "og:type", content: "website" }, { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }],
  };
}