import { createFileRoute } from "@tanstack/react-router";
import { AraraquaraSpecialtyPage } from "@/components/araraquara-specialty-page";
import { specialtyHead } from "@/lib/araraquara-specialties";

export const Route = createFileRoute("/tratamento-alcoolismo-araraquara")({
  staticData: { sitemap: true },
  head: () => specialtyHead("alcohol"),
  component: () => <AraraquaraSpecialtyPage specialty="alcohol" />,
});