import { regionalAccessFaqs, regionalCityAccess } from "./regional-city-access";

export type EditorialFaq = { question: string; answer: string };
export type CityEditorial = {
  name: string;
  focus: string;
  access: string;
  preparation: string;
  articleTitle: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: EditorialFaq[];
};

export const cityEditorial: Record<string, CityEditorial> = {
  "sao-carlos-sp": {
    name: "São Carlos", focus: "estudos, isolamento e convivência terapêutica",
    access: regionalCityAccess["sao-carlos-sp"].route,
    preparation: regionalCityAccess["sao-carlos-sp"].visits,
    articleTitle: "Do isolamento ao convívio terapêutico: estudos, apoio psicológico e 12 Passos",
    introduction: "Na rotina de estudos e trabalho, afastamento de amigos, noites sem dormir e uso de substâncias para manter o rendimento podem passar despercebidos. Para famílias de São Carlos, o ponto de partida é entender o que mudou, sem atribuir o consumo à universidade ou à profissão e sem concluir um diagnóstico pela internet.",
    sections: [
      { heading: "Pressão por desempenho não deve esconder prejuízos", paragraphs: ["Álcool, estimulantes e substâncias sintéticas exigem uma conversa sobre frequência, contexto e consequências, não apenas sobre o nome da substância. Pergunte se há perda de sono, faltas, conflitos ou dificuldade de interromper o uso. Medicamentos prescritos também devem ser relatados aos profissionais, sem suspensão por conta própria.", "A família pode descrever episódios concretos e ouvir a pessoa em um momento seguro. Atribuir tudo à falta de disciplina ou ao ambiente acadêmico pode fechar o diálogo. Quando houver confusão intensa, intoxicação ou risco à vida, não organize uma viagem para acolhimento: procure urgência ou acione o SAMU 192."] },
      { heading: "Convivência e apoio psicológico têm papéis diferentes", paragraphs: ["A proposta da Central em Araraquara inclui apoio psicológico com Margareth C. V. Moraes (CRP 06/130268), conscientização em 12 Passos e convivência terapêutica. Compartilhar uma rotina pode criar oportunidades de diálogo e participação, mas não substitui avaliação individual nem garante interrupção do consumo.", "Trabalhar pensamentos, emoções e respostas a situações difíceis pode integrar o cuidado psicológico conforme avaliação profissional. A terapia cognitivo-comportamental é uma referência educativa; as práticas confirmadas incluem apoio psicológico, 12 Passos e prevenção à recaída, com objetivos individualizados."] },
      { heading: "Preparar o retorno à vida em São Carlos", paragraphs: ["Se houver acolhimento voluntário indicado, a família deve conversar sobre vínculos, estudos, trabalho e acompanhamento posterior desde o planejamento. Uma mudança de ambiente pode reduzir a exposição a contextos associados ao consumo, enquanto o plano de prevenção à recaída prepara apoio para a retomada da rotina.", "Combine visitas com antecedência e pergunte como compartilhar informações relevantes respeitando a privacidade. A mudança temporária de contexto pode integrar um plano que também preserve os cuidados e os vínculos de apoio em São Carlos."] },
    ],
    faqs: [
      { question: "Como organizar visitas saindo de São Carlos?", answer: "Fale com a equipe pelo (16) 99765-4579, confirme dia e horário de visita e planeje o percurso até a sede em Araraquara. A SP-310 é uma referência regional, mas não há tempo de viagem ou frequência de visitas garantidos." },
      { question: "Como a mudança de ambiente pode apoiar o cuidado de quem vem de São Carlos?", answer: "Uma mudança de ambiente pode reduzir a exposição a contextos associados ao consumo. Na sede em Araraquara, convivência, apoio psicológico e prevenção à recaída integram o cuidado individual, mantendo os vínculos familiares e a continuidade em São Carlos, sem garantia de resultado." },
    ],
  },
  "americo-brasiliense-sp": {
    name: "Américo Brasiliense", focus: "sinais iniciais e diálogo familiar",
    access: regionalCityAccess["americo-brasiliense-sp"].route,
    preparation: regionalCityAccess["americo-brasiliense-sp"].visits,
    articleTitle: "Acolhimento precoce: reconhecer mudanças de comportamento sem rotular o familiar",
    introduction: "Para quem mora em Américo Brasiliense, a proximidade com Araraquara facilita o contato e a participação familiar. Buscar orientação cedo ajuda a compreender mudanças de comportamento e escolher, com os profissionais, o cuidado adequado.",
    sections: [
      { heading: "Observar uma sequência, não um episódio isolado", paragraphs: ["Sono desorganizado, afastamento, conflitos e dificuldades com compromissos podem ter causas diferentes. Anote desde quando ocorrem, em que situações aparecem e quais prejuízos se repetem. Se o uso de álcool ou outras drogas é conhecido, relate o que sabe sem preencher lacunas com suspeitas.", "Uma conversa inicial pode começar com uma observação concreta e uma pergunta aberta: o que está acontecendo e que ajuda a pessoa aceitaria? Evite interrogatórios, ameaças ou exposição a vizinhos. A família não precisa investigar a vida inteira do familiar para procurar orientação."] },
      { heading: "Proximidade e orientação para escolher a porta de cuidado", paragraphs: ["O CAPS Doçura e os canais de Saúde de Américo Brasiliense são referências públicas independentes da Central. A família pode confirmar com o município a porta adequada, enquanto uma conversa privada esclarece a proposta de acolhimento voluntário em Araraquara.", "A Central informa remoção e translado regional por agendamento, conforme condições e disponibilidade. Isso não equivale a resgate imediato. Perda de consciência, convulsão, intoxicação grave ou risco à vida exigem urgência pública e SAMU 192, mesmo quando a sede fica em município próximo."] },
      { heading: "Participação familiar com combinados claros", paragraphs: ["Ao considerar acolhimento voluntário, pergunte sobre avaliação, rotina, consentimento, condições particulares e visitas. A frequência deve ser combinada com a equipe conforme o plano de cuidado; a proximidade geográfica ajuda a planejar encontros nas datas acordadas.", "A família também merece apoio para estabelecer limites e dividir responsabilidades. A orientação ajuda a construir uma abordagem respeitosa, com escuta, proteção e atenção às necessidades individuais."] },
    ],
    faqs: [
      { question: "Como organizar transporte para acolhimento saindo de Américo Brasiliense?", answer: "A equipe orienta a organização do transporte regional, combina o local de saída em Américo Brasiliense e confirma avaliação, condições e agendamento. O plantão de orientação funciona 24h; em risco à vida, o atendimento de urgência ou SAMU 192 tem prioridade." },
      { question: "Como combinar visitas regulares de familiares de Américo Brasiliense?", answer: "A proximidade facilita combinar visitas regulares. A equipe e a família definem dias e horários conforme o cronograma terapêutico e as necessidades individuais." },
    ],
  },
  "matao-sp": {
    name: "Matão", focus: "álcool, trabalho e sigilo profissional",
    access: regionalCityAccess["matao-sp"].route,
    preparation: regionalCityAccess["matao-sp"].visits,
    articleTitle: "Álcool no trabalho e na família: reconhecer prejuízos que a rotina pode esconder",
    introduction: "Uma pessoa pode manter emprego e compromissos enquanto o consumo de álcool causa perdas em outras áreas. Para famílias de Matão, olhar apenas para a presença no trabalho pode adiar a busca de ajuda. O termo popular alcoolismo funcional não substitui diagnóstico nem significa consumo seguro.",
    sections: [
      { heading: "Rendimento não é a única medida de saúde", paragraphs: ["Observe conflitos depois do expediente, mudanças no sono, gastos com álcool, tentativas frustradas de reduzir e situações em que o consumo afeta segurança. Em atividades industriais, agrícolas ou com máquinas e direção, relate riscos concretos ao profissional sem estigmatizar trabalhadores ou setores da cidade.", "Estresse crônico e turnos podem fazer parte da história, mas não explicam sozinhos uma dependência. Falar sobre rotina ajuda a avaliação a considerar contexto. Evite normalizar o consumo como a única forma de descansar ou exigir uma interrupção abrupta sem orientação quando houver possível dependência de álcool."] },
      { heading: "Múltiplas substâncias precisam ser relatadas", paragraphs: ["Álcool, medicamentos e outras drogas podem aparecer em diferentes momentos da mesma rotina. Informe substâncias conhecidas, uso prescrito, tentativas anteriores e sintomas que ocorreram ao reduzir. Não faça combinações, substituições ou mudanças de medicação por conta própria.", "Abstinência com convulsões, confusão intensa ou piora importante exige avaliação urgente. A Central conta com articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar na sede; a desintoxicação médica e as necessidades hospitalares são encaminhadas ao serviço habilitado adequado. Laborterapia e 12 Passos não substituem esse cuidado médico."] },
      { heading: "Privacidade e participação não são opostas", paragraphs: ["A família pode compartilhar fatos que auxiliam a avaliação, mas não deve presumir acesso irrestrito a informações psicológicas. Pergunte como funcionam consentimento, comunicação com familiares e limites do sigilo profissional. Não há promessa de sigilo absoluto: existem deveres legais e situações de proteção.", "Se houver acolhimento em Araraquara, combine a participação familiar e as visitas conforme a orientação da equipe. Ao planejar continuidade em Matão, considere a rede municipal de saúde mental e outras necessidades de acompanhamento, sem interromper cuidados anteriores sem avaliação."] },
    ],
    faqs: [
      { question: "Como funciona o sigilo para moradores de Matão?", answer: "A família deve perguntar à equipe sobre privacidade, consentimento e comunicação de informações. O cuidado psicológico observa deveres profissionais e limites legais; não se promete sigilo absoluto nem acesso irrestrito dos familiares aos atendimentos." },
      { question: "Como a família de Matão participa do cuidado?", answer: "A equipe pode orientar como compartilhar fatos relevantes e organizar visitas agendadas. Participação em encontros ou comunicação sobre atendimentos depende do plano de cuidado e dos limites de privacidade; não há calendário familiar automático." },
    ],
  },
  "ibate-sp": {
    name: "Ibaté", focus: "limites familiares e rede de apoio",
    access: regionalCityAccess["ibate-sp"].route,
    preparation: regionalCityAccess["ibate-sp"].visits,
    articleTitle: "Apoio à família e codependência: cuidar de quem acompanha sem atribuir culpa",
    introduction: "Em Ibaté, a busca por orientação pode envolver tanto a pessoa que usa substâncias quanto familiares sobrecarregados. O termo codependência é usado para discutir relações de cuidado e controle, mas não deve virar um rótulo ou responsabilizar a família pelo consumo de outra pessoa.",
    sections: [
      { heading: "Apoiar não é assumir todas as consequências", paragraphs: ["Exaustão, vigilância constante e medo de dizer não podem sinalizar que a família também precisa conversar com um profissional. Descreva o que está acontecendo e o impacto em sono, finanças e relações. Isso não equivale a diagnóstico de codependência nem significa falta de amor.", "Limites podem envolver proteger recursos, recusar situações inseguras e definir quem participa de cada decisão. Eles precisam ser realistas e comunicados sem humilhação. Não use privação de cuidados, ameaças ou contenção improvisada para tentar controlar o consumo."] },
      { heading: "Apoio em Ibaté e acolhimento regional em Araraquara", paragraphs: ["As referências municipais publicadas incluem Ambulatório de Saúde Mental e Secretaria de Saúde. Confirme diretamente o fluxo atual e qual serviço avalia necessidades relacionadas a álcool e outras drogas. A Secretaria Municipal de Saúde orienta qual porta de atendimento corresponde à necessidade apresentada.", "Na Central, o contato explica a única sede em Araraquara e as condições de acolhimento voluntário. A proximidade facilita visitas agendadas e permite manter os cuidados territoriais, com avaliação e condições de acolhimento combinadas."] },
      { heading: "Preservar autonomia e distribuir responsabilidades", paragraphs: ["Pergunte quais decisões cabem à pessoa acolhida, quais informações a família pode oferecer e como será a comunicação durante o cuidado. Uma rede de apoio não precisa concentrar toda a responsabilidade em um único familiar.", "Organize também o apoio para quem permanece em Ibaté. Buscar orientação própria pode ajudar a sustentar limites e reconhecer riscos. Em emergência, a prioridade é atendimento público de urgência; a família não deve tentar resolver uma crise clínica apenas pelo diálogo ou por deslocamento à Central."] },
    ],
    faqs: [
      { question: "Familiares de Ibaté podem buscar orientação sem decidir pelo acolhimento?", answer: "Sim. A conversa inicial pode esclarecer dúvidas sobre limites, riscos e próximos passos. Não obriga a contratar acolhimento nem permite diagnosticar a pessoa ou a família pela internet." },
      { question: "Como manter o apoio da rede de Ibaté durante o acolhimento?", answer: "Não. A escolha deve considerar avaliação individual e continuidade. O Ambulatório de Saúde Mental e os canais municipais são independentes da Central e podem orientar o acesso público local." },
    ],
  },
  "itapolis-sp": {
    name: "Itápolis", focus: "rotina, laborterapia e reinserção social",
    access: regionalCityAccess["itapolis-sp"].route,
    preparation: regionalCityAccess["itapolis-sp"].visits,
    articleTitle: "Laborterapia, rotina equilibrada e reinserção social: o que não é desintoxicação médica",
    introduction: "Famílias de Itápolis podem procurar um ambiente diferente da rotina habitual para compreender possibilidades de cuidado. Essa escolha precisa separar organização do cotidiano de tratamento clínico: atividades, alimentação e repouso não são uma desintoxicação natural nem substituem avaliação médica.",
    sections: [
      { heading: "Abstinência não se resolve com uma rotina pronta", paragraphs: ["Antes de interromper álcool ou outras substâncias, relate sintomas anteriores, uso de medicamentos e condições de saúde aos profissionais. A necessidade de desintoxicação e seu local adequado dependem de avaliação médica. Não há orientação nesta página para reduzir doses ou conduzir abstinência em casa.", "A unidade própria da Central oferece acolhimento voluntário psicossocial; desintoxicação médica e intervenções hospitalares ocorrem por encaminhamento externo. Convulsão, confusão ou risco à vida exigem urgência. Não planeje a viagem de Itápolis como substituto de pronto atendimento."] },
      { heading: "Atividades devem respeitar o plano individual", paragraphs: ["A laborterapia integra a proposta informada pela instituição junto ao apoio psicológico, 12 Passos e convivência. Pergunte sobre objetivos, atividades, participação e adaptação às condições da pessoa. Não confunda uma prática de cuidado com trabalho obrigatório ou promessa de recuperação.", "O cronograma diário informado vai das 07h às 22h e inclui alimentação, descanso, grupos, apoio psicológico e atividades. A família deve compreender como essa rotina se aplica ao caso, em vez de escolher apenas pela quantidade de atividades anunciadas."] },
      { heading: "Reinserção começa no planejamento", paragraphs: ["Retomar vínculos, responsabilidades e acompanhamento em Itápolis exige mais do que concluir um período de permanência. Converse sobre necessidades de saúde, apoio familiar e situações em que o consumo costumava ocorrer. Defina com os responsáveis quais contatos e retornos serão necessários.", "O CAPS Guido Cavicchiolli e a rede municipal são caminhos públicos independentes da Central. Confirme o fluxo atual com a Saúde de Itápolis. A proposta privada não deve ser apresentada como substituição universal desses serviços ou garantia de retorno ao trabalho."] },
    ],
    faqs: [
      { question: "A laborterapia substitui desintoxicação médica para quem vem de Itápolis?", answer: "Não. A laborterapia faz parte da proposta psicossocial; desintoxicação médica exige avaliação e serviço habilitado externo à unidade própria. Sintomas graves demandam atendimento de urgência." },
      { question: "Como planejar continuidade depois do acolhimento para Itápolis?", answer: "Converse com os profissionais sobre acompanhamento, rede de apoio, responsabilidades e situações de risco no retorno. Confirme também as portas públicas locais; não há prazo ou reinserção garantidos." },
    ],
  },
  "jaboticabal-sp": {
    name: "Jaboticabal", focus: "uso de substâncias, ansiedade e depressão",
    access: regionalCityAccess["jaboticabal-sp"].route,
    preparation: regionalCityAccess["jaboticabal-sp"].visits,
    articleTitle: "Uso de substâncias, ansiedade e depressão: por que a avaliação precisa ser integrada",
    introduction: "Para famílias de Jaboticabal, mudanças de humor e consumo podem gerar uma dúvida difícil: o que começou primeiro? Uma página não responde essa pergunta clinicamente. O importante é apresentar o conjunto de sintomas para avaliação, sem reduzir tudo à droga ou tratar ansiedade e depressão como explicações automáticas.",
    sections: [
      { heading: "Diagnóstico duplo não pode ser concluído pela família", paragraphs: ["A expressão descreve a coexistência de condições que precisam de avaliação profissional. Sintomas podem aparecer antes, durante ou depois do consumo e ter diferentes causas. Anote a sequência observada, períodos sem uso e mudanças importantes, sem tentar fechar um diagnóstico.", "Informe acompanhamentos existentes, prescrições e episódios de risco. Não suspenda medicamentos nem acrescente substâncias para tentar compensar ansiedade, tristeza ou insônia. Quando houver risco de suicídio, confusão intensa ou perda de consciência, procure urgência ou SAMU 192."] },
      { heading: "Apoio psicológico não equivale a internação psiquiátrica", paragraphs: ["A Central informa suporte psicossocial com Margareth C. V. Moraes (CRP 06/130268) e acolhimento voluntário em Araraquara. O articulação médica e psiquiátrica com serviços parceiros credenciados apoia a avaliação clínica, a estabilização e o manejo de comorbidades, em conjunto com a equipe multidisciplinar para supervisão diária e cuidados contínuos. Necessidades hospitalares recebem encaminhamento ao serviço habilitado adequado.", "O CAPS II de Jaboticabal é uma referência pública municipal, com proposta independente. A família deve confirmar atribuições e acesso nos canais oficiais. Considerar a Central não implica recomendação do CAPS nem superioridade do acolhimento residencial."] },
      { heading: "Planejar comunicação entre necessidades de cuidado", paragraphs: ["Ao avaliar a possibilidade de acolhimento, pergunte como apresentar informações de profissionais que já acompanham a pessoa e como organizar cuidados indicados fora da unidade. Consentimento e privacidade precisam ser respeitados nessa comunicação.", "Não escolha a modalidade somente pela distância ou por um rótulo de diagnóstico duplo. Necessidades clínicas, disponibilidade, autonomia e continuidade em Jaboticabal devem orientar a decisão. Faixa etária e perfil de admissão precisam ser confirmados diretamente com a equipe."] },
    ],
    faqs: [
      { question: "Ansiedade e consumo em Jaboticabal permitem concluir diagnóstico duplo?", answer: "Não. A coexistência de sintomas exige avaliação profissional, considerando histórico e contexto. A página e o WhatsApp não diagnosticam ansiedade, depressão ou dependência." },
      { question: "A sede da Central realiza internação psiquiátrica?", answer: "Não é a proposta da unidade própria. Ela oferece acolhimento voluntário e suporte psicossocial; conta com articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar; a internação hospitalar é organizada por encaminhamento, conforme avaliação e disponibilidade do estabelecimento receptor." },
    ],
  },
  "descalvado-sp": {
    name: "Descalvado", focus: "gatilhos emocionais e prevenção à recaída",
    access: regionalCityAccess["descalvado-sp"].route,
    preparation: regionalCityAccess["descalvado-sp"].visits,
    articleTitle: "Prevenção à recaída: reconhecer gatilhos emocionais e construir respostas possíveis",
    introduction: "Famílias de Descalvado podem procurar tranquilidade e uma rotina diferente ao considerar acolhimento em Araraquara. Porém, prevenção à recaída não depende apenas de afastamento: exige compreender riscos e construir apoio que continue existindo quando a pessoa retornar ao seu cotidiano.",
    sections: [
      { heading: "Gatilhos são pessoais, não uma lista universal", paragraphs: ["Conflitos, solidão, celebrações, cansaço ou contatos associados ao uso podem ser relevantes para determinadas pessoas. Anote situações que ocorreram antes de episódios de consumo, sem presumir que toda emoção difícil levará a recaída.", "A avaliação pode explorar também sono, saúde, responsabilidades e acesso a apoio. A família contribui com fatos, mas não precisa vigiar todas as emoções. O objetivo é compreender necessidades e possibilidades, não responsabilizar alguém por não controlar o familiar."] },
      { heading: "Construir alternativas e procurar ajuda cedo", paragraphs: ["O plano de prevenção à recaída integra a proposta confirmada da Central, junto ao apoio psicológico, 12 Passos e convivência. Pergunte como o plano considera sinais de dificuldade, pessoas de apoio e necessidades de acompanhamento. Nenhuma técnica é uma garantia de que o consumo não voltará.", "Se houver retomada do uso, procure avaliação sem humilhar ou abandonar a pessoa. Recaída não deve ser tratada como falta de caráter, mas também não elimina a necessidade de revisar riscos e limites. Intoxicação ou abstinência grave exigem assistência médica, não apenas uma conversa sobre hábitos."] },
      { heading: "O retorno a Descalvado precisa de continuidade", paragraphs: ["Durante o planejamento, converse sobre acompanhamento no território, contatos de apoio e responsabilidades que serão retomadas. Não interrompa cuidados anteriores sem orientação dos profissionais. A rede municipal e o CAPS de Descalvado têm atribuições próprias que devem ser confirmadas.", "Visitas agendadas à sede em Araraquara permitem à família acompanhar o processo. A instituição informa ambiente reservado e área verde, integrados à rotina de cuidado; as imagens são conceituais e não retratam as instalações reais."] },
    ],
    faqs: [
      { question: "Como o ambiente terapêutico pode apoiar quem vem de Descalvado?", answer: "O ambiente reservado e a rotina de cuidado podem ajudar a trabalhar situações associadas ao consumo. Apoio psicológico, prevenção à recaída e continuidade em Descalvado são planejados individualmente, sem garantia de resultado." },
      { question: "O que relatar depois de uma retomada do consumo?", answer: "Informe substâncias conhecidas, situações recentes, sintomas, riscos e tratamentos em andamento. Procure avaliação sem acusação; intoxicação ou abstinência grave exige urgência médica." },
    ],
  },
  "porto-ferreira-sp": {
    name: "Porto Ferreira", focus: "espiritualidade, convivência e autoestima",
    access: regionalCityAccess["porto-ferreira-sp"].route,
    preparation: regionalCityAccess["porto-ferreira-sp"].visits,
    articleTitle: "Espiritualidade ecumênica e convivência em grupo: apoio sem imposição ou promessa",
    introduction: "Quem busca orientação a partir de Porto Ferreira pode querer entender como convivência e espiritualidade aparecem na rotina da Central. A proposta precisa ser explicada com clareza, respeitando a pessoa e sem confundir participação em atividades com garantia de autoestima ou recuperação.",
    sections: [
      { heading: "Crenças não substituem cuidado em saúde", paragraphs: ["A instituição informa espiritualidade ecumênica no cronograma, junto a 12 Passos e atividades de apoio. A família deve perguntar sobre a participação e a adaptação às convicções da pessoa. Não se presume adesão religiosa nem se apresenta falta de fé como causa de consumo.", "Atividades espirituais não substituem avaliação psicológica ou médica. Sintomas, prescrições e necessidades clínicas continuam exigindo profissionais responsáveis. O acolhimento voluntário da Central não é internação hospitalar, e conta com articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar, com encaminhamento hospitalar quando indicado."] },
      { heading: "Um grupo pode apoiar, mas não deve expor", paragraphs: ["Convivência e psicoterapia em grupo fazem parte da rotina informada. Pergunte sobre combinados, respeito à privacidade e formas de lidar com conflitos. Compartilhar experiências não significa obrigação de revelar toda a história pessoal a outros participantes.", "Reconstruir confiança pode envolver pequenos compromissos, escuta e revisão de expectativas. Não há promessa de resgate da autoestima em prazo definido. Cada pessoa tem ritmo e necessidades próprios, que precisam ser considerados no plano de cuidado."] },
      { heading: "A família mantém vínculos com Porto Ferreira", paragraphs: ["Ao considerar a sede em Araraquara, organize visitas por agendamento e pergunte como acompanhar os próximos passos respeitando consentimento e sigilo profissional. Conheça as funções da equipe e esclareça suas dúvidas na página de transparência.", "A rede de Porto Ferreira pode continuar relevante para avaliação e acompanhamento público. Os serviços municipais citados nesta página não endossam a Central. Converse sobre a proposta, as condições particulares e a participação nos grupos para construir uma escolha informada e acolhedora."] },
    ],
    faqs: [
      { question: "A espiritualidade na Central substitui atendimento psicológico?", answer: "Não. A espiritualidade ecumênica é uma atividade informada da rotina. O apoio psicológico com Margareth C. V. Moraes (CRP 06/130268) e as necessidades médicas têm papéis distintos; crenças não substituem cuidados em saúde." },
      { question: "Como familiares de Porto Ferreira podem conhecer a proposta dos grupos?", answer: "No primeiro contato, pergunte sobre rotina, participação, privacidade e adaptações individuais. Visitas dependem de agendamento, e atividades em grupo não garantem recuperação ou mudança de autoestima." },
    ],
  },
  "taquaritinga-sp": {
    name: "Taquaritinga", focus: "direitos e internação involuntária",
    access: regionalCityAccess["taquaritinga-sp"].route,
    preparation: regionalCityAccess["taquaritinga-sp"].visits,
    articleTitle: "Internação involuntária e direitos: o que a família precisa distinguir antes de decidir",
    introduction: "Para famílias de Taquaritinga, uma recusa de ajuda pode gerar medo e pedidos de internação imediata. A legislação não transforma a vontade da família em autorização médica. É essencial separar acolhimento voluntário, cuidado hospitalar involuntário e determinação judicial.",
    sections: [
      { heading: "Recusa não autoriza intervenção improvisada", paragraphs: ["A Lei 10.216/2001 protege direitos e regula internações psiquiátricas. A indicação exige avaliação e autorização médica, e a internação deve considerar os limites dos recursos extra-hospitalares. Esta orientação educativa não permite decidir a modalidade pela internet.", "A Lei 13.840/2019 traz regras específicas relacionadas ao cuidado de usuários de drogas. Procedimentos, responsabilidades e comunicações legais cabem aos serviços habilitados. A família deve buscar orientação profissional e jurídica quando necessária, sem tentar conter ou transportar coercitivamente a pessoa por conta própria."] },
      { heading: "Acolhimento voluntário e encaminhamento hospitalar responsável", paragraphs: ["A Central oferece acolhimento voluntário contínuo e suporte psicossocial em Araraquara. Quando a situação requer intervenção médica ou internação involuntária clínica, orienta os trâmites e o encaminhamento a estabelecimentos habilitados; avaliação e autorização são médicas.", "Remoção e translado regional dependem de agendamento, avaliação, condições e disponibilidade, com orientação e suporte para agendamento disponíveis 24h. A execução do transporte e a admissão hospitalar exigem confirmação das condições. Em emergência, priorize o serviço de urgência. Em risco à vida, acione SAMU 192 ou procure urgência, independentemente de contato prévio com a Central."] },
      { heading: "Direitos permanecem durante o cuidado", paragraphs: ["Pergunte sobre informações compreensíveis, tratamento respeitoso, comunicação e responsabilidade profissional. Internação involuntária não deve ser usada como punição, ameaça ou solução para conflitos familiares. A pessoa não perde sua dignidade por precisar de cuidado.", "Em Taquaritinga, confirme a porta municipal atualmente disponível nos canais oficiais antes de se deslocar. Se quiser conhecer a proposta privada em Araraquara, faça essa consulta separadamente: a Central não integra a Prefeitura ou o CAPS e não oferece assessoria jurídica substitutiva."] },
    ],
    faqs: [
      { question: "A família de Taquaritinga pode autorizar internação involuntária sozinha?", answer: "Não. A indicação e a autorização dependem de avaliação médica e dos requisitos legais aplicáveis. Acolhimento voluntário na Central é distinto de internação involuntária clínica, que ocorre em serviços habilitados externos." },
      { question: "A remoção agendada dispensa avaliação médica?", answer: "Não. Transporte não define indicação de internação nem substitui avaliação. Condições devem ser esclarecidas com os responsáveis; em emergência, procure urgência ou SAMU 192." },
    ],
  },
  "ibitinga-sp": {
    name: "Ibitinga", focus: "negação e comunicação familiar",
    access: regionalCityAccess["ibitinga-sp"].route,
    preparation: regionalCityAccess["ibitinga-sp"].visits,
    articleTitle: "Como conversar com um familiar que nega o problema: comunicação assertiva e acolhimento",
    introduction: "Famílias de Ibitinga que conciliam trabalho e cuidado podem se sentir pressionadas a resolver tudo em uma única conversa. Quando a pessoa não reconhece prejuízos, a abordagem precisa priorizar segurança e fatos. Nenhuma frase ou técnica garante aceitação de ajuda.",
    sections: [
      { heading: "Trocar acusações por observações verificáveis", paragraphs: ["Em vez de afirmar que a pessoa nunca se importa, descreva um episódio recente e seu efeito na família. Pergunte como ela percebe a situação e escute sem transformar a conversa em disputa. Evite usar trabalho, reputação ou vizinhos como ameaça.", "Escolha um momento sem intoxicação aparente e com segurança para todos. Não reúna muitas pessoas para constranger o familiar. Se houver agressividade, confusão ou risco à vida, a prioridade é proteção e urgência, não insistência no diálogo."] },
      { heading: "Uma proposta pequena pode abrir o próximo passo", paragraphs: ["Pode ser mais claro oferecer uma conversa com um serviço de saúde do que exigir que a pessoa aceite acolhimento de imediato. Explique que avaliação não significa internação automática. A família pode buscar orientação própria mesmo quando o familiar ainda recusa participar.", "No contato com a Central, relate mudanças, riscos e tentativas anteriores. A equipe explica a sede em Araraquara e as condições de acolhimento voluntário. Não há diagnóstico pelo WhatsApp nem promessa de convencer a pessoa a aderir ao cuidado."] },
      { heading: "Limites e rede de apoio sustentam a conversa", paragraphs: ["Combine responsabilidades realistas e preserve a segurança financeira e física da família. Não confunda limite com punição ou retirada de cuidados essenciais. Se a conversa não avançar, procure orientação para planejar outra abordagem em vez de aumentar ameaças.", "O SAMS é uma referência para confirmar os serviços públicos de Ibitinga. O cuidado local e a consulta privada à Central são independentes. Ao considerar viagem, visitas ou transporte, confirme condições e disponibilidade; situações de crise não devem esperar deslocamento regional agendado."] },
    ],
    faqs: [
      { question: "Como a orientação ajuda famílias de Ibitinga a conversar sobre acolhimento?", answer: "A orientação ajuda a organizar fatos, limites e uma conversa segura, com respeito à autonomia. A equipe apoia os próximos passos e avalia as possibilidades de acolhimento voluntário; a decisão e a adesão são individuais." },
      { question: "É melhor conversar durante a intoxicação para mostrar os prejuízos?", answer: "Não é um momento seguro para confronto. Priorize proteção e procure avaliação adequada se houver risco. Emergências devem ser encaminhadas à urgência ou SAMU 192." },
    ],
  },
  "rio-claro-sp": {
    name: "Rio Claro", focus: "12 Passos, custos e continuidade do cuidado",
    access: regionalCityAccess["rio-claro-sp"].route,
    preparation: regionalCityAccess["rio-claro-sp"].visits,
    articleTitle: "12 Passos, acolhimento e continuidade: perguntas da admissão ao retorno a Rio Claro",
    introduction: "A decisão de uma família de Rio Claro não deve se limitar a encontrar um nome de clínica ou um valor. É importante compreender o papel dos 12 Passos, da avaliação, da rotina e do acompanhamento posterior, mantendo clara a diferença entre acolhimento psicossocial e internação médica.",
    sections: [
      { heading: "A avaliação vem antes de uma rotina ou prazo", paragraphs: ["Histórico de uso, riscos, saúde e condições familiares orientam a análise individual. A Central apresenta sua proposta de acolhimento voluntário em Araraquara, mas não promete duração ou indicação automática. Necessidades de desintoxicação e internação hospitalar são avaliadas em serviços médicos habilitados.", "Pergunte quais informações e documentos são necessários, quais limites se aplicam e como são esclarecidas as condições de contratação. Não viaje de Rio Claro sem combinar a etapa seguinte e confirmar disponibilidade; uma conversa inicial não representa reserva de vaga."] },
      { heading: "12 Passos fazem parte de uma proposta mais ampla", paragraphs: ["A conscientização em 12 Passos é informada junto ao apoio psicológico, convivência, laborterapia e prevenção à recaída. Não é uma sequência que assegura recuperação por si só. Objetivos e participação devem considerar a pessoa e o plano de cuidado.", "Converse sobre como as atividades em grupo, o atendimento individual e o descanso se organizam. A família precisa entender o cuidado oferecido, não apenas a agenda. A existência de um cronograma não comprova resultado clínico nem substitui responsabilidade profissional."] },
      { heading: "Custos e retorno precisam de clareza desde o início", paragraphs: ["O acolhimento da Central é particular. A instituição informa fornecer documentação administrativa para orientar pedidos de reembolso, mas aprovação e cobertura dependem da operadora, do contrato e do serviço. Não se anuncia atendimento pelo SUS nem convênio aceito como fato.", "Ao planejar retorno a Rio Claro, considere acompanhamento e rede de apoio no município, incluindo as portas públicas quando pertinentes. Pergunte sobre responsabilidades e situações de risco. Não há programa pós-tratamento ou contato de duração determinada garantidos nesta página: condições devem ser esclarecidas com a equipe."] },
    ],
    faqs: [
      { question: "Famílias de Rio Claro têm reembolso garantido pelo plano?", answer: "Não. O acolhimento é particular, e a documentação administrativa fornecida pela Central não garante aprovação, cobertura ou reembolso. Confirme os requisitos diretamente com a operadora antes de contratar." },
      { question: "Os 12 Passos definem um prazo de permanência para quem vem de Rio Claro?", answer: "Não. A conscientização em 12 Passos integra a proposta psicossocial, mas o cuidado é individualizado e não há prazo fixo ou resultado garantido. Pergunte sobre avaliação e continuidade." },
    ],
  },
  "ribeirao-preto-sp": {
    name: "Ribeirão Preto", focus: "mudança de ambiente e preservação de vínculos",
    access: regionalCityAccess["ribeirao-preto-sp"].route,
    preparation: regionalCityAccess["ribeirao-preto-sp"].visits,
    articleTitle: "Mudar de ambiente sem romper vínculos: o que o afastamento geográfico pode e não pode fazer",
    introduction: "Uma família de Ribeirão Preto pode considerar acolhimento fora do município quando a rotina parece ligada a episódios recorrentes de consumo. Essa escolha não equivale a fugir de uma cidade nem assegura cura. O cuidado precisa preservar autonomia, apoio e acesso aos serviços necessários.",
    sections: [
      { heading: "Uma mudança de ambiente integrada ao plano de cuidado", paragraphs: ["O ritmo de trabalho, relações e acesso a substâncias podem ser discutidos na avaliação, mas não definem que toda pessoa deva sair de Ribeirão Preto. A rede municipal de saúde mental e álcool e drogas oferece caminhos próprios que precisam ser considerados conforme a necessidade.", "A Central tem única sede em Araraquara e oferece acolhimento voluntário psicossocial. O articulação médica e psiquiátrica com serviços parceiros credenciados e a equipe multidisciplinar complementam o cuidado; necessidades hospitalares recebem encaminhamento adequado. Não se afirma que o ambiente seja protegido de todo risco ou que afastar contatos produza recuperação garantida."] },
      { heading: "Afastar riscos não significa cortar apoio", paragraphs: ["Ao planejar uma mudança temporária de rotina, identifique com os profissionais quais vínculos ajudam e quais situações precisam de limites. A família não deve presumir que proibir toda comunicação seja parte do cuidado. Direitos, consentimento e privacidade permanecem importantes.", "Visitas devem ser agendadas conforme o cronograma da sede. Para moradores de Ribeirão Preto, considere custos, deslocamento e quem pode acompanhar cada etapa. A coordenação ajuda a consultar e organizar transporte programado conforme a origem, a avaliação e as condições operacionais."] },
      { heading: "O retorno precisa conversar com a vida real", paragraphs: ["Os fatores que preocupavam a família podem continuar existindo depois do acolhimento. Pergunte sobre prevenção à recaída, necessidades de acompanhamento e responsabilidades no retorno. Um plano deve considerar saúde, vínculos e condições concretas, não apenas afastamento.", "Se houver crise psiquiátrica, intoxicação ou risco imediato em Ribeirão Preto, procure a urgência local ou SAMU 192. Não adie atendimento para viajar a Araraquara. Conhecer uma proposta privada é diferente de receber uma indicação médica ou ter uma vaga reservada."] },
    ],
    faqs: [
      { question: "Como a mudança de rotina pode apoiar famílias de Ribeirão Preto?", answer: "A mudança de rotina pode reduzir a exposição a contextos associados ao consumo, junto ao cuidado multidisciplinar e à prevenção à recaída. A família participa do planejamento, com vínculos e continuidade preservados; a localização, por si só, não garante recuperação." },
      { question: "Como planejar transporte de Ribeirão Preto com a equipe operacional?", answer: "O plantão de orientação e suporte de agendamento funciona 24h. Informe o local de saída em Ribeirão Preto para a coordenação analisar e combinar a possibilidade de transporte, as condições e o horário. A execução é programada; em emergência, acione o SAMU 192." },
    ],
  },
  "franca-sp": {
    name: "Franca", focus: "decisão à distância e continuidade na RAPS",
    access: regionalCityAccess["franca-sp"].route,
    preparation: regionalCityAccess["franca-sp"].visits,
    articleTitle: "Acolhimento fora de Franca: decidir à distância sem perder o cuidado no território",
    introduction: "Famílias de Franca podem conhecer a proposta da Central pelo contato remoto e planejar acolhimento em Araraquara com tranquilidade. A mudança temporária de rotina pode integrar o cuidado, preservando os vínculos familiares e os acompanhamentos existentes na rede local.",
    sections: [
      { heading: "Conhecer a proposta antes de viajar", paragraphs: ["O primeiro contato com a Central pode esclarecer a única sede na R. Alfredo Micelli, 70, avaliação, condições particulares e disponibilidade. A família deve saber o que é acolhimento voluntário e como psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar participam do cuidado e quais necessidades hospitalares recebem encaminhamento.", "Faça perguntas sobre perfil de admissão, documentos e participação familiar antes de organizar a saída de Franca. Não há indicação automática por telefone, reserva implícita de vaga ou promessa de duração. Se a situação exige urgência, procure a rede local e não espere a viagem."] },
      { heading: "Preservar referências e comunicação", paragraphs: ["A RAPS e o CAPS AD III Renascer são serviços públicos de Franca independentes da Central. A família deve confirmar os fluxos atuais nos canais oficiais. Considerar acolhimento privado não significa abandonar acompanhamentos existentes sem orientação.", "Se profissionais já acompanham a pessoa, pergunte como apresentar histórico e informações relevantes respeitando consentimento. Combine visitas e comunicação com a equipe da sede. A coordenação analisa a origem em Franca e ajuda a organizar as possibilidades de transporte seguro, conforme avaliação, agendamento e condições operacionais."] },
      { heading: "Mudança de rotina com prevenção à recaída e vínculos preservados", paragraphs: ["Mudar de ambiente pode ter sentido para algumas situações, mas os fatores emocionais e sociais precisam continuar sendo trabalhados. A proposta da Central inclui apoio psicológico, 12 Passos, convivência e prevenção à recaída, sem prometer cura pelo afastamento.", "No planejamento do retorno a Franca, considere acompanhamento, rede de apoio e condições de vida. Esclareça custos, documentação administrativa e requisitos de eventual reembolso diretamente com a operadora. A orientação financeira não garante cobertura e não transforma a Central em serviço do SUS."] },
    ],
    faqs: [
      { question: "A família de Franca precisa viajar para iniciar a avaliação de possibilidades?", answer: "Não. Comece pelo (16) 99765-4579 para esclarecer proposta, documentos, condições e disponibilidade. O contato inicial não garante acolhimento nem substitui avaliação profissional." },
      { question: "Acolhimento em Araraquara substitui a RAPS de Franca?", answer: "Não automaticamente. A RAPS e o CAPS AD III são referências públicas independentes. A escolha deve considerar necessidades individuais e continuidade; cuidados em andamento não devem ser interrompidos sem orientação." },
    ],
  },
  araraquara: {
    name: "Araraquara", focus: "avaliação, rotina e participação familiar na sede",
    access: regionalCityAccess["araraquara"].route,
    preparation: regionalCityAccess["araraquara"].visits,
    articleTitle: "Cuidado na sede de Araraquara: da avaliação ao vínculo com a família",
    introduction: "Para moradores de Araraquara, conhecer um endereço próximo pode tornar a busca por ajuda mais concreta. Ainda assim, a primeira pergunta não é quando entrar, mas qual cuidado é necessário. A Central distingue acolhimento voluntário psicossocial de intervenção médica e hospitalar.",
    sections: [
      { heading: "A rotina precisa caber nas necessidades da pessoa", paragraphs: ["A instituição informa apoio psicológico com Margareth C. V. Moraes (CRP 06/130268), 12 Passos, laborterapia, convivência e prevenção à recaída. O cronograma das 07h às 22h descreve atividades da sede, mas não define resultado nem substitui avaliação individual.", "Pergunte sobre participação, adaptações e acompanhamento. Desintoxicação médica e internação involuntária clínica não são realizadas na unidade própria. Quando indicadas, exigem avaliação e serviços habilitados externos; em emergência, procure urgência ou SAMU 192."] },
      { heading: "Proximidade da família e visitas integradas ao cuidado", paragraphs: ["Visitas familiares seguem dias e horários agendados conforme o plano e o cronograma terapêutico. A proximidade de quem mora em Araraquara facilita organizar esses encontros. A família pode contribuir com informações relevantes sem presumir acesso irrestrito a atendimentos psicológicos.", "A rede pública municipal e o CAPS AD possuem funções independentes da Central. Acolhimento particular não equivale a acesso pelo SUS. Documentação administrativa para orientação de reembolso não garante cobertura ou aprovação pela operadora."] },
      { heading: "Continuar cuidando além do período de permanência", paragraphs: ["Converse sobre responsabilidades, vínculos e necessidades de acompanhamento desde a avaliação. Um plano de prevenção à recaída deve considerar situações reais do cotidiano; estar perto da sede não elimina riscos nem assegura retorno sem dificuldades.", "O plantão de orientação 24h, pelo contato oficial DDD 16, acolhe as dúvidas da família e esclarece avaliação, documentação e condições. A coordenação local ajuda a organizar o primeiro encontro e a participação no cuidado."] },
    ],
    faqs: [
      { question: "Como combinar a recepção na sede de Araraquara?", answer: "O plantão de orientação 24h ajuda a combinar a avaliação e a recepção na sede local, confirmando disponibilidade e necessidades individuais. Visitas são agendadas conforme o cronograma terapêutico; emergências recebem prioridade na rede de urgência." },
      { question: "O cronograma das 07h às 22h significa atendimento de emergência?", answer: "Não. Trata-se da rotina terapêutica informada da unidade, não de plantão de urgência. Em risco imediato, procure atendimento público de urgência ou acione SAMU 192." },
    ],
  },
};

const cityMetadataOverrides: Record<string, { title: string; description: string }> = {
  "itapolis-sp": {
    title: "Clínica de Recuperação para Itápolis - SP | Atendimento 24h (Unidade Araraquara)",
    description: "Tratamento especializado em dependência química, alcoolismo e saúde mental para famílias de Itápolis - SP. Unidade física estruturada na vizinha Araraquara com suporte e resgate 24h.",
  },
  "jaboticabal-sp": {
    title: "Clínica de Recuperação para Jaboticabal - SP | Triagem e Suporte 24h",
    description: "Acolhimento humanizado e equipe multidisciplinar para moradores de Jaboticabal - SP. Acolhimento voluntário na sede em Araraquara e orientação sobre internação involuntária. Plantão 24h.",
  },
};

export function cityEditorialMetadata(slug: string) {
  const editorial = cityEditorial[slug];
  if (!editorial) throw new Error("City editorial not registered");
  const override = cityMetadataOverrides[slug];
  if (override) return override;
  return {
    title: slug === "araraquara"
      ? "Clínica de Recuperação em Araraquara - SP | Acolhimento e Vagas 24h"
      : `Clínica de Recuperação: ${editorial.name} | Sede Araraquara | (16) 99765-4579`,
    description: `Acolhimento para famílias de ${editorial.name}: ${editorial.focus}. Sede terapêutica em Araraquara, visitas agendadas e orientação 24h. (16) 99765-4579.`,
  };
}

export function cityEditorialFaqs(slug: string): EditorialFaq[] {
  return [...regionalAccessFaqs(slug), ...(cityEditorial[slug]?.faqs ?? [])];
}