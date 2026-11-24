import { createFileRoute } from "@tanstack/react-router";

import { FacilityGallerySection } from "@/components/facility-gallery";
import { LocalCityPageView } from "@/components/local-city-page";
import { PublicNetworkGuidance } from "@/components/public-network-guidance";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["itapolis-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-itapolis-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: ItapolisPage,
});

function ItapolisPage() {
  return <LocalCityPageView city={city} facilityLink beforeFaq={<><PublicNetworkGuidance /><FacilityGallerySection cityName={city.name} /></>} />;
}
