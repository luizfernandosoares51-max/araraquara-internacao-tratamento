import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/clinica-recuperacao-feminina-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("women"),
  component: () => <FrancaSpecialtyPage specialty="women" />,
});
