export const careProgram = {
  voluntaryReception: true,
  psychosocialSupport: true,
  twelveSteps: true,
  occupationalActivities: true,
  relapsePrevention: true,
  ownUnitMedicalDetox: false,
  ownUnitInvoluntaryHospitalization: false,
  genderSpecificEnvironmentsConfirmed: false,
  methodology: {
    cbt: "educational",
    relapsePrevention: "confirmed",
    comorbidities: "external-referral",
    ownPsychiatryConfirmed: false,
    ownNutritionistConfirmed: false,
    ownRoundTheClockNursingConfirmed: false,
  },
  visitsByAppointment: true,
  transport: { byAppointment: true, roundTheClock: false, area: "Araraquara e municípios vizinhos" },
  finance: { privateReception: true, reimbursementGuidance: true, guaranteedCoverage: false },
} as const;

export const careMethodology = [
  {
    title: "Terapia Cognitivo-Comportamental (TCC): orientação educativa",
    description: "A TCC é uma abordagem psicológica que trabalha relações entre pensamentos, emoções e comportamentos e pode apoiar o desenvolvimento de estratégias de enfrentamento. Sua indicação depende de avaliação profissional; a Central não apresenta a TCC como modalidade própria confirmada.",
  },
  {
    title: "Plano de Prevenção à Recaída (PPR)",
    description: "A prevenção à recaída integra o suporte psicossocial confirmado pela instituição. O plano considera situações de risco, gatilhos percebidos, estratégias de enfrentamento e rede de apoio, respeitando as necessidades individuais, sem garantir abstinência ou resultados.",
  },
  {
    title: "Diagnóstico duplo e comorbidades: avaliação externa",
    description: "O uso de substâncias pode coexistir com depressão, ansiedade, transtorno bipolar ou TDAH. Esses sinais exigem avaliação individual por profissionais habilitados, não um diagnóstico pela internet. A Central orienta a família e encaminha necessidades médicas e psiquiátricas a serviços externos habilitados; não anuncia acompanhamento médico integrado na unidade própria.",
  },
] as const;

export const therapeuticSchedule = [
  { start: "07:00", end: "08:30", title: "Despertar e organização pessoal", activities: "Café da manhã e preparação para o dia." },
  { start: "08:30", end: "11:30", title: "Conscientização e diálogo", activities: "Espiritualidade ecumênica, reuniões de conscientização (12 Passos) e psicoterapia em grupo." },
  { start: "11:30", end: "14:00", title: "Alimentação e descanso", activities: "Almoço balanceado e período de descanso." },
  { start: "14:00", end: "17:00", title: "Acompanhamento e atividades", activities: "Atendimento psicológico individual com Margarete Vasques (CRP 06/130268), laborterapia e atividades ao ar livre." },
  { start: "18:00", end: "20:00", title: "Partilha e planejamento", activities: "Jantar, reuniões temáticas e partilha de metas de prevenção à recaída." },
  { start: "20:00", end: "22:00", title: "Lazer e repouso", activities: "Momento de lazer, leitura e repouso." },
] as const;