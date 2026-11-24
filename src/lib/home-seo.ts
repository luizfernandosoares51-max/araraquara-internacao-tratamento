import { whatsappHref } from "./site";
import { conversionFaqs, conversionFaqSchema } from "./conversion-faq";

export const homeTitle = "Central de Acolhimento e Reabilitação no Interior de São Paulo";
export const homeDescription = "Acolhimento e orientação 24h no Interior de São Paulo, com base em Araraquara e São Carlos. Vagas e encaminhamentos sujeitos à avaliação e disponibilidade.";
export const vacancyConsultationHref = whatsappHref;

export const homeRegionalLinks = [
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Clínica e acolhimento em Araraquara" },
  { to: "/clinica-de-recuperacao-em-ribeirao-preto-sp", label: "Orientação para famílias de Ribeirão Preto" },
  { to: "/clinica-de-recuperacao-em-sao-carlos-sp", label: "Orientação para famílias de São Carlos" },
  { to: "/clinica-de-recuperacao-em-rio-claro-sp", label: "Orientação para famílias de Rio Claro" },
  { to: "/clinica-de-recuperacao-em-matao-sp", label: "Orientação para famílias de Matão" },
] as const;

export const homeFaqs = conversionFaqs;
export const homeFaqSchema = conversionFaqSchema;