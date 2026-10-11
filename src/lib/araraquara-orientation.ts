import { institutionalIdentity } from "./institutional";

export const regionalFamilyOrientation = {
  physicalUnitCity: "Araraquara",
  neighboringCities: ["São Carlos", "Matão", "Américo Brasiliense", "Ibaté", "Ribeirão Bonito", "Boa Esperança do Sul"],
  visitsByAppointment: true,
  privateReception: true,
  administrativeDocumentation: true,
  guaranteedReimbursement: false,
} as const;

export const araraquaraOrientationFaqs = [
  {
    question: "A unidade de Araraquara atende famílias de cidades vizinhas?",
    answer: `Sim. A única unidade física da Central fica em ${institutionalIdentity.fullAddress}. Recebemos e orientamos famílias de toda a região, incluindo ${regionalFamilyOrientation.neighboringCities.slice(0, -1).join(", ")} e Boa Esperança do Sul. As páginas de outros municípios são informativas e não representam filiais. Consulte condições de acolhimento e disponibilidade com a equipe.`,
  },
  {
    question: "Como funciona o período de permanência e acolhimento?",
    answer: "O plano de cuidado é individualizado e considera a avaliação psicológica e o suporte psicossocial com Margarete Vasques (CRP 06/130268). O período de permanência é acompanhado e reavaliado conforme as necessidades de cada pessoa, sem prazo fixo ou garantia de resultado. Cuidados médicos, quando indicados, são encaminhados a estabelecimentos habilitados; o acolhimento voluntário na Central não equivale a internação hospitalar.",
  },
  {
    question: "Como é o contato direto com a sede física em Araraquara?",
    answer: "A Central possui unidade própria em Araraquara, conforme informações fornecidas pela instituição. A família pode falar diretamente com a coordenação local pelo telefone e WhatsApp (16) 99765-4579 e organizar visitas por agendamento, respeitando o cronograma terapêutico. O DDD, por si só, não comprova localização, qualidade ou regularidade de um serviço; confirme endereço, responsabilidades e condições de atendimento antes de decidir.",
  },
  {
    question: "A instituição atende pelo SUS ou particular?",
    answer: "O acolhimento na Central é particular. A instituição informa fornecer documentação administrativa para famílias que buscam orientação sobre reembolso junto a planos de saúde. Isso não significa aceitação de convênios nem garantia de cobertura ou reembolso: os requisitos dependem do contrato, da operadora e do serviço indicado. Para atendimento pelo SUS, procure a rede pública de saúde do seu município.",
  },
] as const;