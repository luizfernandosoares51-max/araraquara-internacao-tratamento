import { Link } from '@tanstack/react-router';
import { ArrowRight, Brain, HeartHandshake, Route, ShieldCheck, WineOff, Users, Pill, BookOpen, Heart, Dices, FileText, HandHeart, UsersRound, Briefcase } from 'lucide-react';
import { ribeiraoSpecialtyList, type RibeiraoSpecialtyKey } from '@/lib/ribeirao-preto-specialties';

const icons = { alcohol: WineOff, cocaine: Brain, involuntary: ShieldCheck, voluntary: HeartHandshake, transport: Route, women: Heart, dual: Users, medication: Pill, youth: BookOpen, gambling: Dices, insurance: FileText, elderly: HandHeart, men: UsersRound, workers: Briefcase };
export function RibeiraoSpecialtyIcon({ name }: { name: RibeiraoSpecialtyKey }) {
  const Icon = icons[name];
  return <Icon className="size-6 text-secondary" aria-hidden="true" />;
}
export function RibeiraoPretoSpecialties() {
  return <section data-ribeirao-specialty-cards className="home-serene border-y border-border bg-background px-5 py-14 text-foreground sm:px-8 lg:px-12 lg:py-16" aria-labelledby="ribeirao-specialty-heading">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-xs font-semibold uppercase text-secondary">Orientação para cada necessidade</p>
      <h2 id="ribeirao-specialty-heading" className="max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Especialidades e Modalidades de Atendimento para Ribeirão Preto</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Orientação individualizada e suporte humanizado para famílias de Ribeirão Preto e região, respeitando os limites de cada modalidade de cuidado.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {ribeiraoSpecialtyList.map(page => <Link key={page.key} to={page.path} className="group flex flex-col rounded-lg border border-border bg-card min-w-0 p-3 sm:p-6 transition-colors hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <RibeiraoSpecialtyIcon name={page.key} />
          <h3 className="mt-3 font-display text-base font-semibold leading-snug sm:mt-5 sm:text-xl">{page.label}</h3>
          <p className="mb-3 mt-2 text-xs leading-snug sm:mb-6 sm:mt-3 sm:text-sm sm:leading-relaxed text-muted-foreground">{page.summary}</p>
          <span className="mt-auto inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-secondary">Saiba mais <ArrowRight className="size-4 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>)}
      </div>
      <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">A única sede em Araraquara reúne acolhimento voluntário, psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar. Orientação e suporte para agendamento 24h; transporte conforme agenda e disponibilidade. Consulte o perfil de admissão para mulheres e jovens; a página não confirma ala feminina, programa para adolescentes ou desmame médico na sede.</p>
    </div>
  </section>;
}
