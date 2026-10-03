import { createFileRoute } from "@tanstack/react-router";

import { LocalCityPageView } from "@/components/local-city-page";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["franca-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-franca-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: FrancaPage,
});

function FrancaPage() {
  return <LocalCityPageView city={city} />;
}
