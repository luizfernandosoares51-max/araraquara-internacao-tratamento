import { createFileRoute } from "@tanstack/react-router";

import { LocalCityPageView } from "@/components/local-city-page";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["porto-ferreira-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-porto-ferreira-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: PortoFerreiraPage,
});

function PortoFerreiraPage() {
  return <LocalCityPageView city={city} />;
}
