import { whatsappNumber } from "./site";

export const homeTitle = "Clínica de Recuperação e Internação em SP | Central 24h";
export const homeDescription = "Consulte acolhimento, encaminhamento à internação e cobertura de planos no Estado de São Paulo. Orientação 24h: fale com a Central pelo WhatsApp.";
export const vacancyConsultationHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de consultar a disponibilidade atual para acolhimento e receber orientação sobre encaminhamento à internação no Estado de São Paulo.")}`;

export const homeRegionalLinks = [
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Clínica e acolhimento em Araraquara" },
  { to: "/clinica-de-recuperacao-em-ribeirao-preto-sp", label: "Orientação para famílias de Ribeirão Preto" },
  { to: "/clinica-de-recuperacao-em-sao-carlos-sp", label: "Orientação para famílias de São Carlos" },
  { to: "/clinica-de-recuperacao-em-rio-claro-sp", label: "Orientação para famílias de Rio Claro" },
  { to: "/clinica-de-recuperacao-em-matao-sp", label: "Orientação para famílias de Matão" },
] as const;

export const homeFaqs = [
  {
    question: "Como funciona a internação involuntária de acordo com a lei?",
    answer: "É uma medida excepcional em estabelecimento médico habilitado, com avaliação e autorização médica e cumprimento das Leis 10.216/2001 e 13.840/2019. O pedido familiar, sozinho, não autoriza a internação. A Central oferece orientação e encaminhamento; seu acolhimento próprio em Araraquara é voluntário.",
  },
  {
    question: "A Central atende cidades do interior e litoral de SP?",
    answer: "Oferecemos orientação para famílias da capital, interior e litoral do Estado de São Paulo a partir da sede própria em Araraquara. A rede parceira é declarada pela instituição; vagas, documentação e condições da unidade receptora são consultadas caso a caso, sem indicar filiais em outras cidades.",
  },
  {
    question: "O plano de saúde cobre a internação para dependência química?",
    answer: "Cobertura, autorização e eventual reembolso dependem do contrato, da operadora, da indicação profissional e da unidade receptora. A Central oferece assessoria administrativa para consulta; os planos citados não representam convênios confirmados nem cobertura garantida.",
  },
  {
    question: "Como consultar remoção especializada com o plantão 24 horas?",
    answer: "Entre em contato pelo WhatsApp (16) 99765-4579 para orientação e suporte ao agendamento. O plantão de orientação funciona 24 horas, mas a execução do transporte depende de avaliação, equipe, trajeto e disponibilidade, sem resgate imediato garantido. Em risco à vida, ligue para o SAMU 192.",
  },
] as const;

export const homeFaqSchema = {
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(({ question, answer }) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};