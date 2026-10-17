import { createFileRoute } from "@tanstack/react-router";
import { SaoCarlosSpecialtyPage } from "@/components/sao-carlos-specialty-page";
import { saoCarlosSpecialtyHead } from "@/lib/sao-carlos-specialties";

export const Route = createFileRoute("/clinica-recuperacao-convenio-sao-carlos")({
  staticData: { sitemap: true },
  head: () => saoCarlosSpecialtyHead("insurance"),
  component: () => <SaoCarlosSpecialtyPage specialty="insurance" />,
});
