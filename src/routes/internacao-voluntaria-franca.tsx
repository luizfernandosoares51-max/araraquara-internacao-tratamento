import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/internacao-voluntaria-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("voluntary"),
  component: () => <FrancaSpecialtyPage specialty="voluntary" />,
});
