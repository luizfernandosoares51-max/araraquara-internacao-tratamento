import { createFileRoute } from "@tanstack/react-router";
import { FrancaSpecialtyPage } from "@/components/franca-specialty-page";
import { francaSpecialtyHead } from "@/lib/franca-specialties";

export const Route = createFileRoute("/internacao-involuntaria-franca")({
  staticData: { sitemap: true },
  head: () => francaSpecialtyHead("involuntary"),
  component: () => <FrancaSpecialtyPage specialty="involuntary" />,
});
