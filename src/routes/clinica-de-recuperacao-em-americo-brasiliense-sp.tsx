import { createFileRoute } from "@tanstack/react-router";

import { AmericoSpecialties } from "@/components/americo-specialties";
import { MultidisciplinaryTeamSection } from "@/components/multidisciplinary-team";
import { FacilityGallerySection } from "@/components/facility-gallery";
import { LocalCityPageView } from "@/components/local-city-page";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["americo-brasiliense-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-americo-brasiliense-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: AmericoBrasiliensePage,
});

function AmericoBrasiliensePage() {
  return <LocalCityPageView city={city} facilityLink beforeFaq={<><AmericoSpecialties /><FacilityGallerySection cityName={city.name} /><MultidisciplinaryTeamSection /></>} />;
}
