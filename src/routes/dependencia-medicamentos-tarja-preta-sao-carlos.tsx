import { createFileRoute } from "@tanstack/react-router";
import { SaoCarlosSpecialtyPage } from "@/components/sao-carlos-specialty-page";
import { saoCarlosSpecialtyHead } from "@/lib/sao-carlos-specialties";

export const Route = createFileRoute("/dependencia-medicamentos-tarja-preta-sao-carlos")({
  staticData: { sitemap: true },
  head: () => saoCarlosSpecialtyHead("medication"),
  component: () => <SaoCarlosSpecialtyPage specialty="medication" />,
});
