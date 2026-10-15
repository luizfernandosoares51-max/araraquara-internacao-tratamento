import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
import { americoElderlyOrientation } from '@/lib/americo-elderly-orientation';

export const Route = createFileRoute('/tratamento-dependentes-idosos-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('elderly', americoElderlyOrientation),
  component: () => <AmericoSpecialtyPage specialty="elderly" content={americoElderlyOrientation} />,
});