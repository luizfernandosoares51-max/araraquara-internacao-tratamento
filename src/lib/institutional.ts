import { siteUrl, phoneDisplay, emailDisplay } from "./site";

export const institutionalIdentity = {
  publicName: "Central de Acolhimento e Reabilitação",
  cnpj: "40.241.645/0001-30",
  legalName: "Adelmo João Antunes",
  fullAddress: "R. Alfredo Micelli, 70 - Condomínio Satélite, Araraquara - SP, CEP 14808-579",
  postalAddress: {
    "@type": "PostalAddress",
    streetAddress: "R. Alfredo Micelli, 70 - Condomínio Satélite",
    addressLocality: "Araraquara",
    addressRegion: "SP",
    postalCode: "14808-579",
    addressCountry: "BR",
  },
  mapsHref: "https://maps.app.goo.gl/LuhVM9HZwsrFWbXk9",
  generalCoordination: { name: "Luiz Fernando Soares", role: "Coordenação Geral / Operacional" },
  medicalResponsible: null,
  psychologyResponsible: {
    name: "Margareth C. V. Moraes",
    registration: "CRP 06/130268",
    role: "Responsável Técnica Psicóloga",
  },
  ownership: {
    name: "Adelmo João Antunes",
    role: "Proprietário / Direção",
  },
  sanitaryStatement: "A instituição declara que sua unidade e sua rede parceira seguem os protocolos sanitários e as diretrizes da Vigilância Sanitária local para acolhimento e reabilitação psicossocial, observando as Leis Federais 10.216/2001 e 13.840/2019 conforme o enquadramento aplicável.",
  sanitaryLicense: null,
  dedicatedOmbudsman: null,
  careScope: {
    ownUnitReception: "voluntary",
    ownUnitMedicalHospitalization: false,
    hospitalReferral: true,
    transport24HoursConfirmed: false,
    integratedMedicalPsychiatricCare: true,
    dailyNursingSupervision: true,
    continuousNursingCare: true,
    orientation24Hours: true,
    transportScheduling24Hours: true,
  },
  receptionStatement: "A Central oferece acolhimento voluntário em sua unidade própria em Araraquara, com suporte psicológico especializado, coordenação operacional, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária e cuidados contínuos. A família conta com plantão de orientação e suporte para agendamento de resgate/remoção 24 horas, além de orientação sobre os trâmites legais da internação involuntária, conforme as Leis 10.216/2001 e 13.840/2019.",
  referralStatement: "Quando a avaliação indica desintoxicação médica, cuidado hospitalar ou internação involuntária clínica, a Central apoia a família na triagem, organização dos trâmites e encaminhamento para estabelecimentos médicos habilitados. A decisão clínica, a admissão hospitalar e as comunicações legais são conduzidas pelos profissionais e estabelecimentos responsáveis. A sede própria mantém acolhimento voluntário; remoções são organizadas mediante agendamento e confirmação das condições.",
} as const;

export const institutionalLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: institutionalIdentity.publicName,
  legalName: institutionalIdentity.legalName,
  url: siteUrl,
  telephone: phoneDisplay,
  email: emailDisplay,
  taxID: institutionalIdentity.cnpj,
  address: institutionalIdentity.postalAddress,
  hasMap: institutionalIdentity.mapsHref,
};

export const institutionalLinks = [
  { href: "/transparencia", label: "Transparência e Responsabilidade Técnica" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade e LGPD" },
  { href: "/termos-de-acolhimento", label: "Termos de Acolhimento e Atendimento" },
] as const;

export function institutionalHead(path: string, title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Central de Acolhimento` },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: `${title} | Central de Acolhimento` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}${path}` }],
  };
}

export const institutionalNetwork = {
  administrativeCity: "Araraquara - SP",
  coverageGuaranteed: false,
  insurerPartnershipsVerified: false,
  individualSanitaryLicensesVerified: false,
  roundTheClockPhysiciansVerified: false,
  insurers: ["Bradesco Saúde", "SulAmérica Saúde", "Amil", "Unimed", "NotreDame Intermédica", "Porto Seguro Saúde"],
  regionalStatement: "Oferecemos acolhimento voluntário e direcionamento para clínicas credenciadas e parceiras em todo o Estado de São Paulo, conforme declaração institucional. Nossa sede administrativa de atendimento e acolhimento às famílias localiza-se em Araraquara - SP. Oferecemos apoio às famílias de Ribeirão Preto, São Carlos, Rio Claro, Campinas, Grande São Paulo e interior; a unidade receptora, suas autorizações e a disponibilidade são confirmadas antes do encaminhamento.",
} as const;

export const legalSources = [
  { label: "Lei nº 10.216/2001", href: "https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10216.htm" },
  { label: "Lei nº 13.840/2019", href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13840.htm" },
  { label: "Lei Geral de Proteção de Dados — Lei nº 13.709/2018", href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" },
] as const;

export const involuntaryHospitalizationSafeguards = {
  notificationDeadlineHours: 72,
  authorization: "registered-physician",
  responsibleEstablishment: "receiving-medical-unit",
  performedAtOwnUnit: false,
} as const;