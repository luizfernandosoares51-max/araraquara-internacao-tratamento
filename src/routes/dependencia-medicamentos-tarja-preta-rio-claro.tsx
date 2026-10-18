import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/dependencia-medicamentos-tarja-preta-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("medication"),
  component: () => <RioClaroSpecialtyPage specialty="medication" />,
});
