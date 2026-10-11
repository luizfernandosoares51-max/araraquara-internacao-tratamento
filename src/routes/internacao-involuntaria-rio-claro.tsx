import { createFileRoute } from "@tanstack/react-router";
import { RioClaroSpecialtyPage } from "@/components/rio-claro-specialty-page";
import { rioClaroSpecialtyHead } from "@/lib/rio-claro-specialties";

export const Route = createFileRoute("/internacao-involuntaria-rio-claro")({
  staticData: { sitemap: true },
  head: () => rioClaroSpecialtyHead("involuntary"),
  component: () => <RioClaroSpecialtyPage specialty="involuntary" />,
});
