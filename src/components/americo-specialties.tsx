import { Link } from '@tanstack/react-router';
import { ArrowRight, Brain, WineOff, HeartHandshake, ShieldCheck, Route, Heart, Pill, BookOpen, Smartphone, UsersRound } from 'lucide-react';
import { americoSpecialtyList, type AmericoSpecialtyKey } from '@/lib/americo-specialties';

const icons = { cocaine: Brain, alcohol: WineOff, voluntary: HeartHandshake, involuntary: ShieldCheck, transport: Route, women: Heart, medication: Pill, youth: BookOpen, gambling: Smartphone, elderly: UsersRound };
export function AmericoSpecialtyIcon({ name }: { name: AmericoSpecialtyKey }) {
  const Icon = icons[name];
  return <Icon className="size-6 shrink-0 text-secondary" aria-hidden="true" />;
}
export function AmericoSpecialties() {
  return <section data-americo-specialty-cards className="border-b border-border py-14 lg:py-20" aria-labelledby="americo-specialty-heading">
    <p className="text-xs font-semibold uppercase text-secondary">Orientação para cada necessidade</p>
    <h2 id="americo-specialty-heading" className="mt-3 max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Acolhimento Especializado e Modalidades em Américo Brasiliense</h2>
    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Orientação acolhedora, com discrição e equipe multidisciplinar, para famílias de Américo Brasiliense e região. Condições de atendimento esclarecidas em cada conversa.</p>
    <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {americoSpecialtyList.map(page => <Link key={page.key} to={page.path} className="group flex min-w-0 flex-col rounded-lg border border-border bg-glass min-w-0 p-3 sm:p-6 backdrop-blur-sm transition-colors hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        <AmericoSpecialtyIcon name={page.key} />
        <h3 className="mt-3 font-display text-base font-semibold leading-snug sm:mt-5 sm:text-xl leading-snug">{page.label}</h3>
        <p className="mb-3 mt-2 text-xs leading-snug sm:mb-6 sm:mt-3 sm:text-sm sm:leading-relaxed text-muted-foreground">{page.summary}</p>
        <span className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary">Conhecer modalidade <ArrowRight className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span>
      </Link>)}
    </div>
    <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">Acolhimento voluntário na sede em Araraquara, com psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária. Temas específicos também incluem orientação educativa e encaminhamento, sem confirmar programas próprios. Orientação 24h; transporte por agendamento. Em risco imediato, SAMU 192.</p>
  </section>;
}