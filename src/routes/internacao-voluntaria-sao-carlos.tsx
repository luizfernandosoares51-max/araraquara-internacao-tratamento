import { createFileRoute } from "@tanstack/react-router";
import { SaoCarlosSpecialtyPage } from "@/components/sao-carlos-specialty-page";
import { saoCarlosSpecialtyHead } from "@/lib/sao-carlos-specialties";

export const Route = createFileRoute("/internacao-voluntaria-sao-carlos")({
  staticData: { sitemap: true },
  head: () => saoCarlosSpecialtyHead("voluntary"),
  component: () => <SaoCarlosSpecialtyPage specialty="voluntary" />,
});
