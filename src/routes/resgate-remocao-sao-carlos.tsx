import { createFileRoute } from "@tanstack/react-router";
import { SaoCarlosSpecialtyPage } from "@/components/sao-carlos-specialty-page";
import { saoCarlosSpecialtyHead } from "@/lib/sao-carlos-specialties";

export const Route = createFileRoute("/resgate-remocao-sao-carlos")({
  staticData: { sitemap: true },
  head: () => saoCarlosSpecialtyHead("transport"),
  component: () => <SaoCarlosSpecialtyPage specialty="transport" />,
});
