import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/tratamento-dependencia-jovens-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("youth"),
  component: () => <FrancaSpecialtyPage specialty="youth" />,
});
