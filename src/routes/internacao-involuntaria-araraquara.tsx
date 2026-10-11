import { createFileRoute } from "@tanstack/react-router";
import { AraraquaraSpecialtyPage } from "@/components/araraquara-specialty-page";
import { specialtyHead } from "@/lib/araraquara-specialties";

export const Route = createFileRoute("/internacao-involuntaria-araraquara")({
  staticData: { sitemap: true },
  head: () => specialtyHead("involuntary"),
  component: () => <AraraquaraSpecialtyPage specialty="involuntary" />,
});