import { createFileRoute } from "@tanstack/react-router";

import { LocalCityPageView } from "@/components/local-city-page";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["ibate-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-ibate-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: IbatePage,
});

function IbatePage() {
  return <LocalCityPageView city={city} />;
}
