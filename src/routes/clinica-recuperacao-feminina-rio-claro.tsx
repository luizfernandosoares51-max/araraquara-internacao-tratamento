import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/clinica-recuperacao-feminina-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("women"),
  component: () => <RioClaroSpecialtyPage specialty="women" />,
});
