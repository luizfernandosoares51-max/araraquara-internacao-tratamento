import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/resgate-remocao-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("transport"),
  component: () => <FrancaSpecialtyPage specialty="transport" />,
});
