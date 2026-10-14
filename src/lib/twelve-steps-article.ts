import { whatsappNumber } from "@/lib/site";

export const twelveStepsArticle = {
  slug: "historia-12-passos-clinica-reabilitacao-terapeutica",
  title: "A História da Reabilitação Terapêutica e os 12 Passos | Central de Acolhimento",
  description: "Conheça a origem do acolhimento terapêutico, de Bill W. e Dr. Bob em 1935 à evolução da medicina com o Modelo Minnesota e internação humanizada.",
  published: "2026-10-14",
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, li o artigo sobre os 12 passos e gostaria de orientações sobre acolhimento.")}`,
  regionalLinks: [
    { name: "Araraquara", to: "/clinica-de-recuperacao-em-araraquara" },
    { name: "São Carlos", to: "/clinica-de-recuperacao-em-sao-carlos-sp" },
    { name: "Matão", to: "/clinica-de-recuperacao-em-matao-sp" },
    { name: "Rio Claro", to: "/clinica-de-recuperacao-em-rio-claro-sp" },
    { name: "Ribeirão Preto", to: "/clinica-de-recuperacao-em-ribeirao-preto-sp" },
  ],
  faqs: [
    { question: "A metodologia dos 12 Passos exige que a pessoa siga uma religião específica?", answer: "Não. A.A. não está vinculado a uma religião específica. O programa utiliza linguagem espiritual e a ideia de um Poder Superior conforme a compreensão de cada pessoa; a participação deve respeitar crenças, ausência de religião e escolhas individuais." },
    { question: "Apenas frequentar reuniões de 12 Passos é suficiente para casos graves?", answer: "Reuniões de ajuda mútua não substituem avaliação médica ou psicológica. A necessidade de internação não é automática: depende da avaliação individual e dos recursos de cuidado disponíveis. Convulsões, confusão intensa, perda de consciência ou risco imediato exigem atendimento de urgência pelo SAMU 192, não acolhimento residencial para estabilização clínica." },
    { question: "Quanto tempo costuma durar o tratamento em uma clínica de reabilitação?", answer: "O período é definido individualmente conforme avaliação profissional, modalidade de cuidado, necessidades e evolução. O plano precisa ser reavaliado, e a continuidade pode ocorrer após o acolhimento. Não existe prazo universal nem garantia de recuperação." },
  ],
} as const;