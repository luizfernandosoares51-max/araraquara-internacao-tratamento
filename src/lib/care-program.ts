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
    comorbidities: "integrated-medical-care",
    ownPsychiatryConfirmed: true,
    ownDailyNursingConfirmed: true,
    ownContinuousNursingCareConfirmed: true,
    ownNutritionistConfirmed: false,
    ownRoundTheClockNursingConfirmed: false,
  },
  visitsByAppointment: true,
  transport: { byAppointment: true, roundTheClock: false, area: "Araraquara e municípios vizinhos" },
  orientation: { roundTheClock: true, transportSchedulingRoundTheClock: true, emergencyService: false },
  finance: { privateReception: true, reimbursementGuidance: true, guaranteedCoverage: false },
} as const;

export const careMethodology = [
  {
    title: "Terapia Cognitivo-Comportamental (TCC): orientação educativa",
    description: "A TCC trabalha relações entre pensamentos, emoções e comportamentos e pode apoiar estratégias de enfrentamento. Apresentamos essa abordagem como informação educativa; a escolha das técnicas de cuidado deve ser discutida com o profissional responsável conforme a avaliação individual.",
  },
  {
    title: "Plano de Prevenção à Recaída (PPR)",
    description: "A prevenção à recaída integra o suporte psicossocial confirmado pela instituição. O plano considera situações de risco, gatilhos percebidos, estratégias de enfrentamento e rede de apoio, respeitando as necessidades individuais, sem garantir abstinência ou resultados.",
  },
  {
    title: "Diagnóstico duplo e comorbidades: acompanhamento integrado",
    description: "O uso de substâncias pode coexistir com ansiedade, depressão ou transtorno bipolar. A Central reúne suporte psicológico e acompanhamento médico e psiquiátrico integrado para avaliação clínica, estabilização e manejo de comorbidades, conforme as necessidades individuais. Diagnósticos e condutas são definidos pelos profissionais responsáveis em avaliação, e necessidades hospitalares seguem encaminhamento ao serviço adequado.",
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