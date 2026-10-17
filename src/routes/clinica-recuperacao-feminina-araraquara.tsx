import { createFileRoute } from "@tanstack/react-router";
import { AraraquaraSpecialtyPage } from "@/components/araraquara-specialty-page";
import { specialtyHead } from "@/lib/araraquara-specialties";

export const Route = createFileRoute("/clinica-recuperacao-feminina-araraquara")({
  staticData: { sitemap: true },
  head: () => specialtyHead("women"),
  component: () => <AraraquaraSpecialtyPage specialty="women" />,
});
