import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/tratamento-alcoolismo-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("alcohol"),
  component: () => <RioClaroSpecialtyPage specialty="alcohol" />,
});
