import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/tratamento-dependencia-jovens-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("youth"),
  component: () => <RioClaroSpecialtyPage specialty="youth" />,
});
