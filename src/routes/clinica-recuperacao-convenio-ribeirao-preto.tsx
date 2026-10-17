import { createFileRoute } from '@tanstack/react-router';
import { RibeiraoPretoSpecialtyPage } from '@/components/ribeirao-preto-specialty-page';
import { ribeiraoSpecialtyHead } from '@/lib/ribeirao-preto-specialties';
export const Route = createFileRoute('/clinica-recuperacao-convenio-ribeirao-preto')({
  staticData: { sitemap: true },
  head: () => ribeiraoSpecialtyHead('insurance'),
  component: () => <RibeiraoPretoSpecialtyPage specialty="insurance" />,
});
