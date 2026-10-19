import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/clinica-recuperacao-convenio-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("insurance"),
  component: () => <FrancaSpecialtyPage specialty="insurance" />,
});
