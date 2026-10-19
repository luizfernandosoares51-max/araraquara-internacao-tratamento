import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/tratamento-alcoolismo-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("alcohol"),
  component: () => <FrancaSpecialtyPage specialty="alcohol" />,
});
