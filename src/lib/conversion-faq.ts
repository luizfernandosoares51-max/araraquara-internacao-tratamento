export const conversionCareScope = {
  orientationHours: 24,
  transportByAppointment: true,
  immediateDispatchGuaranteed: false,
  underageAdmissionConfirmed: false,
  involuntaryCareRequiresMedicalUnit: true,
  inssApprovalGuaranteed: false,
  maleUnitCity: "Araraquara",
  femaleUnitCity: "São Carlos",
} as const;

export const conversionFaqs = [
  {
    question: "Vocês atendem menor de idade?",
    answer: "Oferecemos orientação familiar pelo WhatsApp do plantão 24h. Para crianças e adolescentes, a avaliação e o encaminhamento devem seguir a rede de saúde e proteção, conforme a legislação; não anunciamos vagas de acolhimento para menores. Em risco imediato, procure a emergência ou ligue para o SAMU 192.",
  },
  {
    question: "Como funciona a internação involuntária pela Lei 13.840/2019?",
    answer: "É uma medida excepcional, realizada em unidade médica habilitada após avaliação e autorização médica, conforme as Leis 10.216/2001 e 13.840/2019. O pedido familiar não basta para autorizá-la. A Central orienta a família e organiza o encaminhamento; a unidade receptora responde pela internação e pelas comunicações legais aos órgãos competentes.",
  },
  {
    question: "Como funciona a separação entre unidade masculina e feminina?",
    answer: "A instituição informa unidade masculina em Araraquara (SP) e unidade feminina em São Carlos (SP), com acompanhamento multidisciplinar e ambientes separados. Consulte o plantão sobre o perfil de acolhimento, disponibilidade e visitas. O endereço da unidade de São Carlos é informado pelo contato oficial.",
  },
  {
    question: "Quanto tempo demora a equipe de remoção 24 horas?",
    answer: "O plantão de orientação e suporte ao agendamento funciona 24 horas. A execução da remoção depende de avaliação, origem, trajeto, equipe e disponibilidade confirmada; não há prazo fixo nem saída imediata garantida. Araraquara e São Carlos são referências regionais no Interior de São Paulo. Em risco à vida, ligue para o SAMU 192.",
  },
  {
    question: "Vocês fornecem documentação para afastamento pelo INSS?",
    answer: "A Central orienta sobre documentação administrativa referente ao acolhimento. Laudos e atestados médicos dependem da avaliação e da competência dos profissionais responsáveis; confirme com o plantão quais documentos podem ser emitidos no seu caso. A concessão do benefício por incapacidade temporária depende dos requisitos e da análise do INSS, sem aprovação garantida.",
  },
] as const;

export const conversionFaqSchema = {
  "@type": "FAQPage",
  mainEntity: conversionFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};