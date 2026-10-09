import { siteUrl } from "./site";

export const institutionalIdentity = {
  publicName: "Central de Acolhimento e Reabilitação",
  cnpj: "40.241.645/0001-30",
  legalName: null,
  fullAddress: null,
  medicalResponsible: null,
  psychologyResponsible: null,
  sanitaryLicense: null,
  dedicatedOmbudsman: null,
} as const;

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

export const legalSources = [
  { label: "Lei nº 10.216/2001", href: "https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10216.htm" },
  { label: "Lei nº 13.840/2019", href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13840.htm" },
  { label: "Lei Geral de Proteção de Dados — Lei nº 13.709/2018", href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" },
] as const;