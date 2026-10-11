import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/resgate-remocao-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("transport"),
  component: () => <RioClaroSpecialtyPage specialty="transport" />,
});
