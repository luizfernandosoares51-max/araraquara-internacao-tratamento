import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/tratamento-jogos-compulsivos-apostas-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("gambling"),
  component: () => <RioClaroSpecialtyPage specialty="gambling" />,
});
