import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/tratamento-jogos-compulsivos-apostas-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("gambling"),
  component: () => <FrancaSpecialtyPage specialty="gambling" />,
});
