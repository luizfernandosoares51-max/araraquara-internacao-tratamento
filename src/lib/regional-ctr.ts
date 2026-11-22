export const regionalCtrMetadata: Record<string, { title: string; description: string }> = {
  "sao-carlos-sp": {
    title: "Clínica de Recuperação em São Carlos SP | Atendimento 24h",
    description: "São Carlos SP: orientação 24h para dependência química e álcool. Acolhimento voluntário em Araraquara e encaminhamento médico quando indicado. Fale agora.",
  },
  "itapolis-sp": {
    title: "Clínica de Recuperação em Itápolis SP | Plantão 24h",
    description: "Orientação 24h para famílias de Itápolis, com privacidade. Acolhimento voluntário em Araraquara e apoio para agendar remoção. Fale pelo WhatsApp.",
  },
  "ibate-sp": {
    title: "Clínica de Recuperação em Ibaté SP | Atendimento 24h",
    description: "Famílias de Ibaté: orientação 24h para dependência química e alcoolismo. Acolhimento em Araraquara e transporte sob agendamento. Fale no WhatsApp.",
  },
  "ibitinga-sp": {
    title: "Clínica de Recuperação em Ibitinga SP | Plantão 24h",
    description: "Orientação 24h para famílias de Ibitinga. Acolhimento voluntário em Araraquara e encaminhamento médico conforme a Lei 13.840/2019. Consulte a equipe.",
  },
  "americo-brasiliense-sp": {
    title: "Clínica de Recuperação em Américo Brasiliense | Plantão 24h",
    description: "Orientação 24h para Américo Brasiliense, com privacidade e apoio familiar. Sede em Araraquara; acolhimento e transporte conforme avaliação e agenda.",
  },
  "matao-sp": {
    title: "Clínica de Recuperação em Matão SP | Acolhimento 24h",
    description: "Famílias de Matão: plantão de orientação 24h, acolhimento voluntário em Araraquara e agendamento de remoção. Encaminhamento médico quando indicado.",
  },
};

export const priorityRegionalLinks = [
  { to: "/clinica-de-recuperacao-em-sao-carlos-sp", label: "Clínica de Recuperação em São Carlos SP" },
  { to: "/clinica-de-recuperacao-em-itapolis-sp", label: "Clínica de Recuperação em Itápolis SP" },
  { to: "/clinica-de-recuperacao-em-ibate-sp", label: "Clínica de Recuperação em Ibaté SP" },
  { to: "/clinica-de-recuperacao-em-ibitinga-sp", label: "Clínica de Recuperação em Ibitinga SP" },
  { to: "/clinica-de-recuperacao-em-americo-brasiliense-sp", label: "Clínica de Recuperação em Américo Brasiliense SP" },
  { to: "/clinica-de-recuperacao-em-matao-sp", label: "Clínica de Recuperação em Matão SP" },
  { to: "/resgate-remocao-araraquara", label: "Resgate e Remoção 24h em Araraquara" },
  { to: "/resgate-remocao-ribeirao-preto", label: "Resgate e Remoção 24h em Ribeirão Preto" },
] as const;

export const capsCareScope = {
  uniformBusinessHours: false,
  capsIIIContinuousCare: true,
  emergencyPhone: "192",
  ownUnitMedicalDetox: false,
  immediateTransportGuaranteed: false,
} as const;

export function municipalCapsFaq(city: string) {
  return {
    question: "Qual a diferença entre o atendimento do CAPS municipal e uma clínica de internação especializada 24h?",
    answer: `O CAPS é um serviço público do SUS, aberto à comunidade, que oferece cuidado multiprofissional em saúde mental e álcool e drogas. Em ${city}, confirme a modalidade, os horários e o acesso nos canais municipais: não existe um horário comercial único para todos os CAPS, e CAPS III e CAPS AD III podem oferecer cuidado contínuo, inclusive acolhimento noturno. Internação médica não é indicada automaticamente por recaída: depende de avaliação individual e, quando involuntária, dos requisitos das Leis 10.216/2001 e 13.840/2019, em unidade de saúde habilitada. A Central oferece acolhimento voluntário em Araraquara e orientação familiar 24h, não desintoxicação médica própria nem resgate imediato. Transporte depende de avaliação, agenda e disponibilidade. Em risco agudo, surto com risco ou alteração de consciência, procure a urgência local ou ligue SAMU ${capsCareScope.emergencyPhone}.`,
  };
}

export const saoCarlosSearchFaqs = [
  {
    question: "Como funciona a internação clínica voluntária e involuntária em São Carlos SP?",
    answer: "Famílias de São Carlos podem conversar com o plantão de orientação 24h da Central para organizar os próximos passos. O acolhimento voluntário ocorre na sede em Araraquara, conforme avaliação, consentimento e disponibilidade. Internação médica, inclusive involuntária, exige avaliação e decisão médica em unidade de saúde habilitada, com os requisitos das Leis 10.216/2001 e 13.840/2019. A Central orienta e articula encaminhamentos; o plantão de orientação não significa avaliação médica 24h nem vaga imediata. Em risco à vida, procure urgência ou ligue SAMU 192.",
  },
  {
    question: "Qual a diferença entre atendimento gratuito na rede pública (CAPS) e internação particular especializada?",
    answer: "O CAPS oferece cuidado gratuito pelo SUS, multiprofissional e aberto à comunidade. As modalidades e os horários variam: CAPS III e CAPS AD III podem oferecer cuidado contínuo e acolhimento noturno, não apenas atendimento ambulatorial em horário comercial. Confirme o acesso na rede municipal de São Carlos. Internação particular depende de indicação médica e das condições da unidade habilitada; desintoxicação monitorada é um cuidado médico, não o acolhimento voluntário da Central em Araraquara. A escolha deve considerar necessidades, direitos e continuidade do cuidado, sem pressupor que o particular seja superior ao público.",
  },
  {
    question: "Como solicitar resgate e remoção humanizada em São Carlos e região?",
    answer: "Entre em contato pelo (16) 99765-4579 para orientação 24h a famílias de São Carlos, Ibaté, Ribeirão Bonito e região. Informe a cidade de origem e as necessidades atuais; a equipe organiza avaliação, destino e agendamento, com respeito e discrição. Transporte depende de condições clínicas, consentimento ou requisitos legais aplicáveis, agenda e disponibilidade operacional; não há garantia de deslocamento imediato ou execução 24h. Intoxicação grave, perda de consciência ou risco à vida exigem urgência local ou SAMU 192, sem esperar transporte particular.",
  },
] as const;