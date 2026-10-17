import { createFileRoute } from "@tanstack/react-router";
import { AraraquaraSpecialtyPage } from "@/components/araraquara-specialty-page";
import { specialtyHead } from "@/lib/araraquara-specialties";

export const Route = createFileRoute("/tratamento-jogos-compulsivos-apostas-araraquara")({
  staticData: { sitemap: true },
  head: () => specialtyHead("gambling"),
  component: () => <AraraquaraSpecialtyPage specialty="gambling" />,
});
