import { createFileRoute } from "@tanstack/react-router";
import { SaoCarlosSpecialtyPage } from "@/components/sao-carlos-specialty-page";
import { saoCarlosSpecialtyHead } from "@/lib/sao-carlos-specialties";

export const Route = createFileRoute("/tratamento-jogos-compulsivos-apostas-sao-carlos")({
  staticData: { sitemap: true },
  head: () => saoCarlosSpecialtyHead("gambling"),
  component: () => <SaoCarlosSpecialtyPage specialty="gambling" />,
});
