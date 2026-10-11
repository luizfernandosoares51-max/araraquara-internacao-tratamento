import { createFileRoute } from "@tanstack/react-router";
import { AraraquaraSpecialtyPage } from "@/components/araraquara-specialty-page";
import { specialtyHead } from "@/lib/araraquara-specialties";

export const Route = createFileRoute("/resgate-remocao-araraquara")({
  staticData: { sitemap: true },
  head: () => specialtyHead("transport"),
  component: () => <AraraquaraSpecialtyPage specialty="transport" />,
});