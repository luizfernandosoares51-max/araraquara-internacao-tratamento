import { whatsappNumber } from "./site";

export type RegionalCityAccess = {
  name: string;
  roads: readonly string[];
  referenceMinutes?: readonly [number, number];
  route: string;
  welcome: string;
  visits: string;
};

export const regionalCityAccess: Record<string, RegionalCityAccess> = {
  araraquara: {
    name: "Araraquara", roads: [],
    route: "Nossa sede local fica na R. Alfredo Micelli, 70, Condomínio Satélite, com acesso a partir dos bairros de Araraquara e dos municípios próximos. O plantão de orientação 24h ajuda a organizar a recepção e o primeiro encontro com a equipe.",
    welcome: "Em Araraquara, sua família encontra uma sede terapêutica própria, com ambiente reservado, área verde e uma rotina dedicada ao acolhimento voluntário. A proximidade permite conversar diretamente com a equipe e participar do cuidado com visitas combinadas.",
    visits: "Para quem vive nos bairros de Araraquara, o acesso à sede facilita encontros e acompanhamento familiar, com dias e horários combinados conforme o plano terapêutico.",
  },
  "americo-brasiliense-sp": {
    name: "Américo Brasiliense", roads: ["SP-255"], referenceMinutes: [10, 15],
    route: "Américo Brasiliense tem proximidade direta com Araraquara, com acesso regional pela SP-255, favorecendo a recepção e as visitas. A referência indicativa fornecida pela instituição é de 10 a 15 minutos; confira no mapa a saída do seu bairro e o acesso ao Condomínio Satélite.",
    welcome: "Famílias de Américo Brasiliense contam com acolhimento regional próximo, na sede terapêutica da Central em Araraquara. O ambiente reservado, a área verde e a rotina de cuidado oferecem um espaço para reorganizar o cotidiano, mantendo os vínculos familiares por perto.",
    visits: "A proximidade entre Américo Brasiliense e Araraquara facilita organizar visitas periódicas e dividir o acompanhamento entre familiares, sempre com agendamento junto à equipe.",
  },
  "ibate-sp": {
    name: "Ibaté", roads: ["SP-310"], referenceMinutes: [25, 25],
    route: "A Rodovia Washington Luís (SP-310) é a principal referência regional entre Ibaté e Araraquara. A instituição fornece cerca de 25 minutos como estimativa indicativa, a conferir conforme o bairro de saída e o acesso final à sede.",
    welcome: "Para famílias de Ibaté, a sede em Araraquara oferece acolhimento voluntário em ambiente reservado, com área verde e acompanhamento multidisciplinar. A ligação regional ajuda a manter a família presente enquanto a pessoa constrói uma rotina de cuidado.",
    visits: "O corredor da Washington Luís facilita o planejamento de visitas de familiares de Ibaté. A equipe combina os encontros conforme o cronograma e as necessidades da pessoa acolhida.",
  },
  "sao-carlos-sp": {
    name: "São Carlos", roads: ["SP-310"], referenceMinutes: [35, 35],
    route: "São Carlos e Araraquara se conectam pela Rodovia Washington Luís (SP-310), um corredor regional para acolhimento e visitas. A referência fornecida pela instituição é de aproximadamente 35 minutos, sujeita à conferência do percurso completo até a sede.",
    welcome: "Quem busca ajuda em São Carlos encontra na Central uma opção regional de acolhimento voluntário, com sede própria em Araraquara. Ambiente reservado, área verde e acompanhamento multidisciplinar apoiam uma nova rotina, com espaço para a participação da família.",
    visits: "A ligação pela SP-310 permite planejar visitas saindo de São Carlos e manter a família envolvida no cuidado, com encontros agendados e comunicação alinhada à equipe.",
  },
  "matao-sp": {
    name: "Matão", roads: ["SP-310"], referenceMinutes: [30, 30],
    route: "Para Matão, a Rodovia Washington Luís (SP-310) é a referência direta de ligação com Araraquara. A instituição indica cerca de 30 minutos como estimativa inicial, não como duração medida do trajeto até a sede; confira a origem e os acessos locais no mapa.",
    welcome: "A família de Matão pode contar com escuta e acolhimento regional na sede terapêutica de Araraquara. O espaço reservado, com área verde, favorece uma rotina de cuidado fora dos contextos habituais de consumo, sem afastar a família da participação no processo.",
    visits: "As ligações rodoviárias da região de Matão ajudam a organizar visitas à sede de Araraquara. Combine os horários com a equipe e distribua o acompanhamento conforme a rotina familiar.",
  },
  "taquaritinga-sp": {
    name: "Taquaritinga", roads: ["SP-333", "SP-310"],
    route: "Para famílias de Taquaritinga, a SP-333, com conexão à Washington Luís (SP-310), é uma referência regional até Araraquara. A equipe operacional ajuda a alinhar origem, recepção e possibilidade de transporte programado, com o percurso completo conferido no mapa.",
    welcome: "Famílias de Taquaritinga encontram apoio para organizar o cuidado na sede da Central em Araraquara. O acolhimento voluntário reúne ambiente reservado, área verde e acompanhamento, com orientação familiar para cada etapa e encaminhamento hospitalar quando indicado.",
    visits: "Planejar as conexões rodoviárias desde Taquaritinga permite combinar visitas periódicas com antecedência. A equipe orienta a participação familiar de acordo com o plano terapêutico.",
  },
  "ibitinga-sp": {
    name: "Ibitinga", roads: ["SP-331", "SP-310"],
    route: "A Rodovia Deputado Victor Maida (SP-331), com conexão à Washington Luís (SP-310), é uma referência de Ibitinga para Araraquara. A equipe ajuda a organizar o acolhimento e a consultar transporte conforme a necessidade, com os acessos locais conferidos no mapa.",
    welcome: "Para quem vive em Ibitinga, buscar acolhimento em Araraquara pode abrir espaço para uma rotina de cuidado com tranquilidade e apoio. A sede da Central tem ambiente reservado e área verde, com orientação para que a família continue próxima ao processo.",
    visits: "Familiares de Ibitinga podem combinar visitas periódicas, planejando as conexões rodoviárias e os horários junto à equipe, além de esclarecer formas de comunicação durante o acolhimento.",
  },
  "itapolis-sp": {
    name: "Itápolis", roads: ["SP-317", "SP-333", "SP-310"],
    route: "De Itápolis, uma referência regional é a SP-317, conectada à SP-333 e à Washington Luís (SP-310) em direção a Araraquara. Famílias da cidade e da microrregião podem conversar com a equipe sobre recepção, visitas e deslocamento programado, conferindo o percurso no mapa.",
    welcome: "Famílias de Itápolis e da microrregião têm na sede de Araraquara uma opção de acolhimento voluntário com escuta, rotina e apoio multidisciplinar. O ambiente reservado e a área verde oferecem espaço para cuidar do cotidiano e fortalecer os vínculos familiares.",
    visits: "O planejamento pelas rodovias regionais ajuda familiares de Itápolis a participar de visitas agendadas e acompanhar os próximos passos, respeitando o cronograma terapêutico.",
  },
  "jaboticabal-sp": {
    name: "Jaboticabal", roads: ["SP-326", "SP-310"],
    route: "A Brigadeiro Faria Lima (SP-326), com conexão à Washington Luís (SP-310), é uma referência regional de Jaboticabal para Araraquara. Confira os acessos do seu bairro e o trecho final até a sede para organizar a chegada e as visitas.",
    welcome: "A Central acolhe a busca por ajuda de famílias de Jaboticabal a partir de sua sede em Araraquara. Ambiente reservado, área verde e acompanhamento integrado permitem considerar uma rotina diferente, com a família participando das decisões e do cuidado.",
    visits: "A conexão da SP-326 com a SP-310 ajuda no planejamento das visitas de quem sai de Jaboticabal. Dias e horários são combinados com a equipe conforme as necessidades individuais.",
  },
  "descalvado-sp": {
    name: "Descalvado", roads: ["SP-215", "SP-310"],
    route: "O eixo da SP-215, conectado à Rodovia Washington Luís (SP-310), é uma referência para o deslocamento de Descalvado a Araraquara. A família pode planejar o percurso completo com o mapa da sede e combinar a recepção pelo plantão de orientação.",
    welcome: "Para famílias de Descalvado, a sede terapêutica em Araraquara oferece um espaço reservado, com área verde e uma rotina de acolhimento voluntário. A mudança de contexto pode ajudar a trabalhar situações associadas ao consumo, junto ao apoio psicológico e à prevenção à recaída.",
    visits: "As conexões da SP-215 com a SP-310 permitem planejar visitas de familiares de Descalvado. Os encontros são periódicos conforme o plano de cuidado e agendados com a equipe.",
  },
  "porto-ferreira-sp": {
    name: "Porto Ferreira", roads: ["SP-215", "SP-310"],
    route: "Para Porto Ferreira, o eixo da SP-215 e sua conexão à Washington Luís (SP-310) são referências regionais até Araraquara. A equipe orienta o planejamento de chegada e analisa a possibilidade de transporte programado conforme a origem e as condições do caso.",
    welcome: "Famílias de Porto Ferreira podem encontrar na sede de Araraquara um espaço de acolhimento voluntário com ambiente reservado, área verde e convivência terapêutica. A orientação regional ajuda a organizar o cuidado sem deixar a família sozinha nas decisões.",
    visits: "A família de Porto Ferreira pode planejar visitas pelo eixo regional da SP-215 e SP-310, combinando datas e horários para participar do cuidado com tranquilidade.",
  },
  "rio-claro-sp": {
    name: "Rio Claro", roads: ["SP-310"],
    route: "A Rodovia Washington Luís (SP-310) liga o corredor de Rio Claro à região de Araraquara. Essa referência facilita organizar o trajeto para acolhimento e visitas, com conferência dos acessos locais e do horário de recepção.",
    welcome: "Para quem procura ajuda em Rio Claro, a Central oferece acolhimento regional em sua sede terapêutica de Araraquara. O ambiente reservado, com área verde, integra uma rotina de apoio psicológico e convivência, mantendo a família envolvida no plano de cuidado.",
    visits: "O corredor da Washington Luís ajuda familiares de Rio Claro a planejar visitas periódicas à sede em Araraquara. Combine a participação e os horários conforme o plano terapêutico.",
  },
  "ribeirao-preto-sp": {
    name: "Ribeirão Preto", roads: ["SP-255"],
    route: "A Rodovia Antônio Machado Sant’Anna (SP-255) é uma referência de ligação entre Ribeirão Preto e Araraquara. A família pode planejar uma mudança temporária de rotina em ambiente tranquilo e organizar o percurso completo até o Condomínio Satélite.",
    welcome: "Famílias de Ribeirão Preto podem considerar a sede terapêutica da Central em Araraquara para acolhimento voluntário em ambiente reservado e com área verde. Uma rotina diferente pode reduzir a exposição a contextos associados ao consumo, preservando vínculos e acompanhamento familiar.",
    visits: "A ligação pela SP-255 ajuda a organizar visitas desde Ribeirão Preto. A equipe combina encontros e comunicação familiar, considerando o deslocamento e o plano individual de cuidado.",
  },
  "franca-sp": {
    name: "Franca", roads: ["SP-334", "SP-255"],
    route: "Para quem sai de Franca, a Rodovia Cândido Portinari (SP-334), com conexão pela região de Ribeirão Preto à SP-255, é uma referência para chegar a Araraquara. A equipe orienta o planejamento do acolhimento e consulta as condições de transporte seguro e programado.",
    welcome: "A família de Franca pode iniciar o contato com a Central sem sair de casa e conhecer uma opção regional de acolhimento voluntário em Araraquara. A sede tem ambiente reservado e área verde, com apoio para planejar o deslocamento e manter a participação familiar.",
    visits: "Para familiares de Franca, combinar as visitas com antecedência permite organizar o percurso regional, as paradas e os horários. A equipe também esclarece formas de comunicação e acompanhamento familiar.",
  },
};

export const regionalAccessPolicy = {
  physicalUnitCity: "Araraquara",
  visitsByAppointment: true,
  orientationHours: 24,
  transportByAppointment: true,
  immediateAdmissionGuaranteed: false,
  travelTimesGuaranteed: false,
  specificVehicleFleetConfirmed: false,
  hospitalCareByReferral: true,
} as const;

export function cityContactLabel(name: string) {
  return `Falar com Plantão de Atendimento para ${name}`;
}

export function cityWhatsappHref(name: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, sou de ${name} e gostaria de orientação sobre acolhimento e apoio à minha família.`)}`;
}

export function regionalAccessFaqs(slug: string) {
  const city = regionalCityAccess[slug];
  if (!city) return [];
  return [
    { question: `Como funciona a visitação familiar para quem vive em ${city.name}?`, answer: city.visits + " A participação respeita o consentimento, a privacidade e as orientações dos profissionais." },
    { question: `Há apoio de translado e remoção para quem sai de ${city.name}?`, answer: `Sim. A equipe oferece orientação para organizar transporte seguro e acolhimento, com veículo adequado à necessidade avaliada. Informe o local de saída em ${city.name}; a coordenação confirma a possibilidade operacional, as condições e o agendamento. Para necessidades hospitalares, o destino é um estabelecimento habilitado. O plantão de orientação 24h é distinto da execução do transporte.` },
    { question: `Como iniciar o atendimento agendado ou pedir orientação em ${city.name}?`, answer: "Fale diretamente pelo WhatsApp ou telefone (16) 99765-4579. O plantão de orientação funciona 24h, acolhe o relato e ajuda a organizar informações para avaliação, recepção e agendamento. Em risco à vida, intoxicação grave ou perda de consciência, acione o SAMU 192 ou procure urgência local; o atendimento de emergência tem prioridade." },
  ];
}