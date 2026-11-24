import { createFileRoute } from "@tanstack/react-router";

import { FacilityGallerySection } from "@/components/facility-gallery";
import { LocalCityPageView } from "@/components/local-city-page";
import { MataoSpecialties } from "@/components/matao-specialties";
import { MultidisciplinaryTeamSection } from "@/components/multidisciplinary-team";
import { localCityHead } from "@/lib/local-city-head";
import { localCityPages } from "@/lib/local-city-pages";

const city = localCityPages["matao-sp"];

export const Route = createFileRoute("/clinica-de-recuperacao-em-matao-sp")({
  staticData: { sitemap: true },
  head: () => localCityHead(city),
  component: MataoPage,
});

function MataoPage() {
  return <LocalCityPageView city={city} facilityLink beforeFaq={<><MataoSpecialties /><FacilityGallerySection cityName={city.name} /><MultidisciplinaryTeamSection /></>} />;
}
