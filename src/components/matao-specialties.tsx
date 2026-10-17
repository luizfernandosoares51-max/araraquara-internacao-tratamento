import { Link } from '@tanstack/react-router';
import { ArrowRight, Brain, WineOff, HeartHandshake, ShieldCheck, Route, Heart, Pill, BookOpen, Smartphone, BriefcaseBusiness, Activity, UsersRound } from 'lucide-react';
import { mataoSpecialtyList, type MataoSpecialtyKey } from '@/lib/matao-specialties';

const icons = { cocaine: Brain, alcohol: WineOff, voluntary: HeartHandshake, involuntary: ShieldCheck, transport: Route, women: Heart, medication: Pill, youth: BookOpen, gambling: Smartphone, workers: BriefcaseBusiness, crisis: Activity, elderly: UsersRound };
export function MataoSpecialtyIcon({ name }: { name: MataoSpecialtyKey }) {
  const Icon = icons[name];
  return <Icon className="size-6 shrink-0 text-secondary" aria-hidden="true" />;
}
export function MataoSpecialties() {
  return <section data-matao-specialty-cards className="border-b border-border py-14 lg:py-20" aria-labelledby="matao-specialty-heading">
    <p className="text-xs font-semibold uppercase text-secondary">Orientação para cada necessidade</p>
    <h2 id="matao-specialty-heading" className="mt-3 max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Modalidades de Tratamento e Acolhimento em Matão e Região</h2>
    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Orientação para diferentes necessidades da nossa comunidade, com respeito à privacidade e acolhimento humanizado. Conheça os caminhos de cuidado e as condições de cada modalidade.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {mataoSpecialtyList.map(page => <Link key={page.key} to={page.path} className="group flex min-w-0 flex-col rounded-lg border border-border bg-glass p-6 backdrop-blur-sm transition-colors hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        <MataoSpecialtyIcon name={page.key} />
        <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{page.label}</h3>
        <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">{page.summary}</p>
        <span className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary">Saiba mais <ArrowRight className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span>
      </Link>)}
    </div>
    <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">Acolhimento voluntário na sede em Araraquara, com psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária. Temas específicos também incluem orientação educativa e encaminhamento, sem confirmar programas próprios. Orientação 24h; transporte por agendamento. Em risco imediato, SAMU 192.</p>
  </section>;
}