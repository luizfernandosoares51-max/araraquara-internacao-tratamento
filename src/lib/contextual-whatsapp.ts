import { regionalCityAccess } from "./regional-city-access";
import { whatsappHref, whatsappNumber } from "./site";

export function routeCityName(pathname: string): string | undefined {
  const path = pathname.replace(/\/$/, "");
  if (path.startsWith("/blog") || path.startsWith("/lp-")) return undefined;
  return Object.entries(regionalCityAccess).find(([slug]) =>
    path.endsWith(`-${slug}`) || path.endsWith(`-${slug.replace(/-sp$/, "")}`),
  )?.[1].name;
}

export function contextualWhatsappHref(pathname: string): string {
  const city = routeCityName(pathname);
  if (!city) return whatsappHref;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, vim pelo site (página de ${city}) e preciso de orientação sobre acolhimento.`)}`;
}

export function showConversionFaq(pathname: string): boolean {
  return pathname === "/" || Boolean(routeCityName(pathname)) || pathname === "/clinica-de-reabilitacao" || pathname === "/tratamento-jogos-compulsivos-apostas";
}