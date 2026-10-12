import { campaignDefinitionHead, type CampaignDefinition } from "./ads-pages";
import { whatsappNumber } from "./site";

export const localCampaignPolicy = {
  physicalUnitCity: "Araraquara", femaleUnitConfirmed: false,
  accreditedNetworkConfirmed: false, orientationHours: 24,
  transportByAppointment: true, transport24HoursConfirmed: false,
  robots: "noindex, nofollow", sitemap: false,
} as const;

export const localCampaigns = {
  "sao-carlos": { path: "/lp-sao-carlos", city: "São Carlos", image: "sao-carlos", audience: "family", focus: "Planejar o cuidado junto à família, conciliando a rotina em São Carlos com visitas agendadas em Araraquara." },
  "sao-carlos-feminina": { path: "/lp-sao-carlos-feminina", city: "São Carlos", image: "sao-carlos-feminina", audience: "women", focus: "Conversar sobre autonomia, vínculos familiares e necessidades de cuidado das mulheres de São Carlos." },
  "araraquara": { path: "/lp-araraquara", city: "Araraquara", image: "araraquara", audience: "family", focus: "Organizar uma primeira conversa próxima de casa e conhecer as condições de acolhimento voluntário em Araraquara." },
  "araraquara-feminina": { path: "/lp-araraquara-feminina", city: "Araraquara", image: "araraquara-feminina", audience: "women", focus: "Apoiar mulheres e familiares de Araraquara na busca de uma avaliação cuidadosa e de encaminhamentos adequados." },
  "ribeirao-preto": { path: "/lp-ribeirao-preto", city: "Ribeirão Preto", image: "ribeirao-preto", audience: "family", focus: "Combinar os próximos passos com familiares de Ribeirão Preto antes de organizar o deslocamento para Araraquara." },
  "ribeirao-preto-feminina": { path: "/lp-ribeirao-preto-feminina", city: "Ribeirão Preto", image: "ribeirao-preto-feminina", audience: "women", focus: "Acolher a primeira conversa de mulheres e familiares de Ribeirão Preto, considerando sua rede de apoio." },
  "rio-claro": { path: "/lp-rio-claro", city: "Rio Claro", image: "rio-claro", audience: "family", focus: "Construir com a família de Rio Claro um planejamento de cuidado que preserve vínculos e participação." },
  "americo-brasiliense": { path: "/lp-americo-brasiliense", city: "Américo Brasiliense", image: "americo-brasiliense", audience: "family", focus: "Aproveitar a proximidade entre Américo Brasiliense e Araraquara para organizar a participação familiar, conforme agendamento." },
  "ibate": { path: "/lp-ibate", city: "Ibaté", image: "ibate", audience: "family", focus: "Alinhar com familiares de Ibaté as necessidades de avaliação e as possibilidades de acompanhamento em Araraquara." },
  "matao": { path: "/lp-matao", city: "Matão", image: "matao", audience: "family", focus: "Conversar com a família de Matão sobre acolhimento e uma rotina de visitas compatível com o plano de cuidado." },
  "taquaritinga": { path: "/lp-taquaritinga", city: "Taquaritinga", image: "taquaritinga", audience: "family", focus: "Preparar o primeiro contato de famílias de Taquaritinga com informações essenciais, sem exigir relatos detalhados de saúde pelo WhatsApp." },
  "ibitinga": { path: "/lp-ibitinga", city: "Ibitinga", image: "ibitinga", audience: "family", focus: "Envolver a rede de apoio em Ibitinga na organização do cuidado, definindo quem acompanha cada etapa." },
  "itapolis": { path: "/lp-itapolis", city: "Itápolis", image: "itapolis", audience: "family", focus: "Orientar famílias de Itápolis sobre escolhas de cuidado e condições de acolhimento antes de combinar uma viagem." },
  "jaboticabal": { path: "/lp-jaboticabal", city: "Jaboticabal", image: "jaboticabal", audience: "family", focus: "Ajudar familiares de Jaboticabal a reunir dúvidas e organizar a avaliação com respeito às escolhas da pessoa." },
  "descalvado": { path: "/lp-descalvado", city: "Descalvado", image: "descalvado", audience: "family", focus: "Preparar com familiares de Descalvado o contato, a avaliação e os responsáveis por um eventual deslocamento." },
  "porto-ferreira": { path: "/lp-porto-ferreira", city: "Porto Ferreira", image: "porto-ferreira", audience: "family", focus: "Planejar com a família de Porto Ferreira o acesso ao acolhimento e a continuidade dos vínculos de apoio." },
  "franca": { path: "/lp-franca", city: "Franca", image: "franca", audience: "family", focus: "Organizar com famílias de Franca as etapas de avaliação e contato antes de confirmar condições de transporte e visitas." },
  "leme": { path: "/lp-leme", city: "Leme", image: "leme", audience: "family", focus: "Conversar com famílias de Leme sobre o cuidado necessário e avaliar as condições de acesso antes de qualquer deslocamento." },
  "araras": { path: "/lp-araras", city: "Araras", image: "araras", audience: "family", focus: "Apoiar famílias de Araras na definição do próximo passo, com atenção à participação familiar e ao planejamento de viagem." },
  "pirassununga": { path: "/lp-pirassununga", city: "Pirassununga", image: "pirassununga", audience: "family", focus: "Construir com familiares de Pirassununga um plano de contato e acompanhamento que considere sua rotina e necessidades." }
} as const;
export type LocalCampaignKey = keyof typeof localCampaigns;

export function localCampaignDefinition(key: LocalCampaignKey): CampaignDefinition {
  const data = localCampaigns[key];
  const women = data.audience === "women";
  return {
    path: data.path, image: data.image,
    eyebrow: `${data.city} e região • ${women ? "Orientação para mulheres e famílias" : "Apoio à família"}`,
    title: women ? `Orientação sobre Acolhimento Feminino para ${data.city} e Região` : `Clínica de Recuperação e Acolhimento para ${data.city} e Região`,
    description: women
      ? `Escuta respeitosa e orientação para mulheres e famílias de ${data.city}, com avaliação das necessidades e dos caminhos de cuidado a partir de Araraquara.`
      : `Acolhimento humanizado e orientação para famílias de ${data.city}, com suporte psicológico e planejamento do acesso à sede em Araraquara.`,
    intro: data.focus,
    sections: women ? [
      { title: "Uma conversa com respeito e sensibilidade", text: `Mulheres e famílias de ${data.city} podem conversar com a Central sobre necessidades de cuidado, autonomia e relações familiares. A escuta considera a história de cada pessoa, sem julgamento ou indicação automática de acolhimento.` },
      { title: "Privacidade e participação familiar", text: "Compartilhe apenas o necessário no primeiro contato. Questões de saúde, maternidade e participação dos familiares devem ser abordadas em avaliação adequada, respeitando o consentimento e os limites éticos e legais do sigilo." },
      { title: "Avaliação dos caminhos de cuidado", text: "A Central oferece orientação regional para mulheres e famílias. Converse com a equipe sobre a adequação do atendimento e possíveis encaminhamentos. Esta página não anuncia unidade feminina especializada, quartos exclusivos ou disponibilidade de vagas para mulheres." },
      { title: `Planejamento com a família de ${data.city}`, text: "O plantão de orientação e suporte para agendamento funciona 24h. Antes de qualquer deslocamento, confirme a modalidade indicada, o local receptor, as condições de atendimento e a organização do transporte, que depende de agendamento e confirmação operacional." },
    ] : [
      { title: `Acolhimento com apoio para ${data.city}`, text: "Acolhimento voluntário e reabilitação biopsicossocial na sede própria em Araraquara, com suporte psicológico de Margarete Vasques (CRP 06/130268), coordenação de Luiz Fernando Soares, supervisão diária de enfermagem e acompanhamento médico e psiquiátrico integrado. A admissão depende de avaliação e disponibilidade." },
      { title: "Rotina e presença familiar", text: "Ambiente reservado e área verde, com conscientização em 12 Passos, convivência terapêutica, atividades ao ar livre e prevenção à recaída. A família participa conforme o plano de cuidado; visitas são organizadas por agendamento." },
      { title: `Organização do acesso para ${data.city}`, text: `${data.focus} O plantão de orientação e suporte para agendamento de resgate e remoção funciona 24h. A execução do transporte depende de agendamento, avaliação das necessidades e confirmação operacional; não é um serviço de emergência.` },
      { title: "Cuidado responsável e orientação financeira", text: "Quando há indicação hospitalar, a Central orienta e encaminha para estabelecimentos médicos habilitados; avaliação, autorização e comunicações legais cabem ao receptor. O acolhimento é particular, com orientação sobre documentação administrativa para cobertura ou reembolso, sem garantia de aprovação ou anúncio de convênios." },
    ],
  };
}
export function localCampaignWhatsappHref(key: LocalCampaignKey) {
  const data = localCampaigns[key];
  const message = data.audience === "women"
    ? `Olá, sou de ${data.city} e gostaria de orientação sobre acolhimento e caminhos de cuidado para mulheres e famílias.`
    : `Olá, sou de ${data.city} e gostaria de orientação sobre acolhimento e apoio à minha família.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function localCampaignHead(key: LocalCampaignKey) {
  return campaignDefinitionHead(localCampaignDefinition(key));
}
