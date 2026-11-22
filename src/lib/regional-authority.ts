/**
 * Blocos de autoridade regional: resumo rápido, logística por cidade e protocolo ético.
 * Fatos limitados ao que a instituição confirmou: sede própria somente em Araraquara,
 * orientação 24h, internação involuntária apenas em unidade médica habilitada e
 * deslocamento por agendamento. Tempos são estimativas informadas, nunca garantias.
 */

export function quickAnswerTitle(cityName: string) {
  return `Resumo Rápido: Como Funciona o Atendimento em ${cityName}`;
}

export function quickAnswerText(cityName: string) {
  return `Em ${cityName}, a Central orienta a família pelo WhatsApp e telefone 24h. O acolhimento voluntário acontece na sede própria em Araraquara, com equipe multidisciplinar e acompanhamento médico e psiquiátrico integrado. A internação involuntária segue a Lei 13.840/2019 e ocorre somente em unidade médica habilitada. O deslocamento discreto é combinado por agendamento.`;
}

export function wordCount(text: string) {
  return text.trim().split(/\s+/).length;
}

export type RegionalLogistics = {
  roads: readonly string[];
  districts: readonly string[];
  /** Estimativa informada pela instituição, em minutos, até a sede em Araraquara. */
  referenceMinutes?: readonly [number, number];
  text: string;
};

export const regionalLogistics: Record<string, RegionalLogistics> = {
  Araraquara: {
    roads: ["SP-310 (Washington Luís)", "SP-255"],
    districts: ["Vila Xavier", "Jardim América", "Fonte Luminosa", "Melhado", "Selmi Dei"],
    text: "A sede própria fica na R. Alfredo Micelli, 70, Condomínio Satélite. Famílias de todos os bairros de Araraquara são orientadas pelo plantão e chegam à sede pelas vias urbanas, com acesso regional pela Washington Luís (SP-310) e pela SP-255.",
  },
  "São Carlos": {
    roads: ["SP-310 (Washington Luís)", "SP-215"],
    districts: ["Centro", "Vila Prado", "Santa Felícia", "Cidade Aracy", "Jockey Club"],
    referenceMinutes: [35, 35],
    text: "Famílias de toda São Carlos são orientadas pelo plantão e seguem pela Washington Luís (SP-310) até a sede em Araraquara; a SP-215 atende quem vem da região de Descalvado e Porto Ferreira.",
  },
  "Matão": {
    roads: ["SP-310 (Washington Luís)", "Via Augusto Bambozzi"],
    districts: ["Centro", "Vila Cardim", "Jardim Buscardi", "distritos"],
    referenceMinutes: [20, 25],
    text: "De Matão, o trajeto até a sede em Araraquara segue pela Via Augusto Bambozzi e pela SP-310, cobrindo o Centro, os bairros e os distritos do município.",
  },
  "Itápolis": {
    roads: ["SP-333", "SP-317"],
    districts: ["Centro", "bairros", "microrregião"],
    text: "Itápolis e a microrregião se ligam a Araraquara pela SP-333 e pela SP-317. O deslocamento discreto é combinado com a equipe por agendamento.",
  },
  Ibitinga: {
    roads: ["SP-333", "SP-317", "SP-331"],
    districts: ["Centro", "bairros", "microrregião"],
    text: "Ibitinga e a microrregião contam com orientação 24h e acesso a Araraquara pelas rodovias SP-333, SP-317 e SP-331. O deslocamento discreto é combinado por agendamento.",
  },
  "Ibaté": {
    roads: ["SP-310 (Washington Luís)"],
    districts: ["Centro", "bairros"],
    referenceMinutes: [25, 25],
    text: "Ibaté fica no corredor da Washington Luís (SP-310), vizinha de São Carlos e Araraquara, com triagem por telefone e WhatsApp para a família.",
  },
  "Américo Brasiliense": {
    roads: ["SP-255", "SP-310 (Washington Luís)"],
    districts: ["Centro", "bairros"],
    referenceMinutes: [10, 15],
    text: "Américo Brasiliense é vizinha de Araraquara, com acesso pela SP-255 e SP-310 e triagem imediata por telefone e WhatsApp para a família.",
  },
  "Ribeirão Preto": {
    roads: ["SP-330 (Anhanguera)", "SP-255", "SP-310 (Washington Luís)"],
    districts: ["Centro", "zonas Norte, Sul, Leste e Oeste"],
    text: "De Ribeirão Preto, a ligação com a sede em Araraquara segue pela SP-255, com conexões pela Anhanguera (SP-330) e pela SP-310. O transporte especializado é combinado por agendamento.",
  },
  "Rio Claro": {
    roads: ["SP-310 (Washington Luís)", "SP-330 (Anhanguera)"],
    districts: ["Centro", "bairros"],
    text: "Rio Claro se liga a Araraquara pela Washington Luís (SP-310), com conexões pela Anhanguera (SP-330). O transporte especializado é combinado por agendamento.",
  },
};

export function logisticsTitle(cityName: string) {
  return `Logística, Acesso e Cobertura Regional em ${cityName}`;
}

export function minutesLabel(minutes: readonly [number, number]) {
  const [min, max] = minutes;
  return min === max ? `cerca de ${min} minutos` : `cerca de ${min} a ${max} minutos`;
}

export const ethicsProtocol = {
  title: "Transparência, Segurança e Protocolo Ético",
  items: [
    { title: "Lei Federal nº 13.840/2019", text: "Acolhimento voluntário com adesão da pessoa; internação involuntária somente em unidade médica habilitada." },
    { title: "Equipe multidisciplinar", text: "Plantão de orientação 24h e equipe multidisciplinar na rotina de acolhimento." },
    { title: "Sigilo e LGPD", text: "Conversas tratadas com sigilo; dados usados só para orientar a família." },
    { title: "Emergência", text: "Em risco imediato à vida, ligue primeiro para o SAMU 192." },
  ],
} as const;

export const contactLabels = {
  whatsapp: "Falar no WhatsApp Agora (Plantão 24h)",
  call: "Ligar com Sigilo",
} as const;
