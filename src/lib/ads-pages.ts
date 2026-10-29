import { siteUrl, whatsappNumber } from "./site";

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption { campaignPage?: boolean }
}

export const campaignPolicy = {
  robots: "noindex, nofollow", sitemap: false, orientationHours: 24,
  immediateAdmissionGuaranteed: false, transportByAppointment: true,
  emergencyService: false, reimbursementGuaranteed: false,
  gamblingSpecializedProgramConfirmed: false,
} as const;

export const adsPages = {
  family: {
    path: "/lp-acolhimento-familia", image: "family", eyebrow: "Acolhimento • Família • Interior de SP",
    title: "Acolhimento Humanizado e Apoio para Recuperação de Dependentes em SP",
    description: "Estrutura terapêutica com ampla área verde em Araraquara, atendimento especializado e apoio contínuo para a família.",
    intro: "Um próximo passo com apoio, respeito e presença familiar.",
    sections: [
      { title: "Como acolhemos", text: "Acolhimento voluntário e reabilitação biopsicossocial com suporte psicológico especializado de Margareth C. V. Moraes (CRP 06/130268), coordenação de Luiz Fernando Soares, supervisão da equipe multidisciplinar e articulação médica e psiquiátrica com serviços parceiros credenciados. O plano de cuidado considera a avaliação e as necessidades de cada pessoa." },
      { title: "Estrutura e rotina", text: "A sede própria em Araraquara oferece ambiente reservado e área verde. A rotina reúne conscientização em 12 Passos, convivência terapêutica, atividades ao ar livre e prevenção à recaída. Visitas familiares são organizadas por agendamento." },
      { title: "Acesso para famílias do interior", text: "Oferecemos apoio às famílias de Araraquara, São Carlos, Ribeirão Preto e do interior de SP. A equipe ajuda a planejar o acesso ao acolhimento em Araraquara e a participação da família, com atenção às necessidades de cada pessoa." },
      { title: "Orientação sobre planos de saúde", text: "Oferecemos orientação sobre processos de cobertura e reembolso e documentação administrativa. Laudos e relatórios clínicos são emitidos pelos profissionais responsáveis, conforme sua competência. A análise cabe à operadora e ao contrato: não há garantia de cobertura ou reembolso nem anúncio de convênio." },
    ],
  },
  orientation: {
    path: "/lp-plantao-urgencia-remocao", image: "orientation", eyebrow: "Orientação familiar • Plantão 24h",
    title: "Plantão de Atendimento e Orientação para Acolhimento 24h",
    description: "Orientação segura e apoio para organizar o acolhimento em momentos difíceis, com respeito aos direitos e à privacidade.",
    intro: "Sua família pode conversar com o plantão sobre o próximo passo.",
    sections: [
      { title: "Apoio quando a família precisa", text: "O plantão de orientação está disponível 24 horas para escutar a família, esclarecer opções e apoiar o agendamento. Acolhimento depende de avaliação, disponibilidade e condições de admissão; o contato não garante vaga ou resposta imediata." },
      { title: "Organização do deslocamento", text: "O suporte para agendamento de resgate e remoção funciona 24 horas. A execução do transporte depende de agendamento e confirmação das condições pela equipe operacional. Combine o percurso, os responsáveis e as necessidades de cuidado antes de sair." },
      { title: "Segurança, direitos e respaldo legal", text: "A sede da Central realiza acolhimento voluntário. Quando há indicação de cuidado hospitalar ou internação involuntária clínica, a família recebe orientação e encaminhamento para estabelecimentos médicos habilitados, conforme as Leis 10.216/2001 e 13.840/2019. A avaliação e autorização médicas e as comunicações legais, em até 72 horas, cabem ao estabelecimento receptor e aos profissionais responsáveis." },
      { title: "Risco imediato exige atendimento de emergência", text: "A Central não substitui um serviço de emergência. Em caso de risco à vida, perda de consciência, dificuldade para respirar ou ameaça imediata à segurança, ligue para o SAMU 192 ou procure o serviço de emergência mais próximo." },
    ],
  },
  gambling: {
    path: "/lp-ajuda-jogos-apostas", image: "gambling", eyebrow: "Escuta • Orientação • Apoio familiar",
    title: "Orientação e Apoio para Compulsão em Jogos e Apostas Online",
    description: "Uma conversa acolhedora para compreender os impactos das apostas e buscar caminhos de cuidado, com respeito à privacidade.",
    intro: "Compreender o problema é um passo para procurar apoio.",
    sections: [
      { title: "Quando jogar afeta a vida cotidiana", text: "A busca frequente por recuperar perdas, o endividamento e a dificuldade de interromper as apostas podem afetar o comportamento, as finanças e os vínculos familiares. Uma avaliação profissional ajuda a compreender a situação, sem julgamento e sem diagnóstico automático." },
      { title: "Impulsos, vínculos e uma nova rotina", text: "O controle de impulsos, a conscientização comportamental, o suporte psicológico e a reorganização da rotina são temas educativos para discutir com profissionais. A indicação de tratamento depende de avaliação individual; esta orientação não anuncia um programa especializado para apostas." },
      { title: "Acolhimento com respeito à privacidade", text: "A Central oferece escuta e orientação familiar a partir de sua sede em Araraquara. Consulte a equipe sobre a adequação do atendimento e possíveis encaminhamentos. Informações pessoais são tratadas com cuidado, respeitando os limites éticos e legais do sigilo." },
      { title: "Uma primeira conversa, sem julgamento", text: "Pelo WhatsApp, você pode pedir orientação sobre os próximos passos. Compartilhe apenas o necessário no primeiro contato; avaliações e relatos detalhados de saúde devem ser tratados no atendimento adequado. Não há promessa de resultado ou indicação automática de acolhimento." },
    ],
  },
} as const;

export type AdsPageKey = keyof typeof adsPages;
export interface CampaignDefinition {
  path: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: readonly { title: string; text: string }[];
}
export function campaignWhatsappHref(key: AdsPageKey) {
  const message = key === "gambling" ? "Olá, gostaria de orientação sobre apoio relacionado a jogos e apostas." : key === "orientation" ? "Olá, gostaria de falar com o plantão sobre orientação e agendamento de acolhimento." : "Olá, gostaria de orientação sobre acolhimento e apoio à minha família.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function campaignHead(key: AdsPageKey) {
  return campaignDefinitionHead(adsPages[key]);
}
export function campaignDefinitionHead(page: CampaignDefinition) {
  return {
    meta: [
      { title: `${page.title} | Central de Acolhimento` },
      { name: "description", content: page.description },
      { name: "robots", content: campaignPolicy.robots },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}${page.path}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}${page.path}` }],
  };
}