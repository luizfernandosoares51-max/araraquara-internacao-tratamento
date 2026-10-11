import { createFileRoute } from "@tanstack/react-router";
import { AraraquaraSpecialtyPage } from "@/components/araraquara-specialty-page";
import { specialtyHead } from "@/lib/araraquara-specialties";

export const Route = createFileRoute("/tratamento-cocaina-crack-araraquara")({
  staticData: { sitemap: true },
  head: () => specialtyHead("cocaine"),
  component: () => <AraraquaraSpecialtyPage specialty="cocaine" />,
});