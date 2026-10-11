import { createFileRoute } from "@tanstack/react-router";
import { SaoCarlosSpecialtyPage } from "@/components/sao-carlos-specialty-page";
import { saoCarlosSpecialtyHead } from "@/lib/sao-carlos-specialties";

export const Route = createFileRoute("/tratamento-alcoolismo-sao-carlos")({
  staticData: { sitemap: true },
  head: () => saoCarlosSpecialtyHead("alcohol"),
  component: () => <SaoCarlosSpecialtyPage specialty="alcohol" />,
});
