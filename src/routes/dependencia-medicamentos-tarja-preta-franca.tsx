import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/dependencia-medicamentos-tarja-preta-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("medication"),
  component: () => <FrancaSpecialtyPage specialty="medication" />,
});
