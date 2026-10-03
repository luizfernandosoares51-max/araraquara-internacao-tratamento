import { createFileRoute } from "@tanstack/react-router";

import { LocalCityPageView } from "@/components/local-city-page";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["ibitinga-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-ibitinga-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: IbitingaPage,
});

function IbitingaPage() {
  return <LocalCityPageView city={city} />;
}
