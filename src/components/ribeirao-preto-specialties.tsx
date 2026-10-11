import { Link } from '@tanstack/react-router';
import { ArrowRight, Brain, HeartHandshake, Route, ShieldCheck, WineOff, Users, Pill, BookOpen, Heart } from 'lucide-react';
import { ribeiraoSpecialtyList, type RibeiraoSpecialtyKey } from '@/lib/ribeirao-preto-specialties';

const icons = { alcohol: WineOff, cocaine: Brain, involuntary: ShieldCheck, voluntary: HeartHandshake, transport: Route, women: Heart, dual: Users, medication: Pill, youth: BookOpen };
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
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ribeiraoSpecialtyList.map(page => <Link key={page.key} to={page.path} className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <RibeiraoSpecialtyIcon name={page.key} />
          <h3 className="mt-5 font-display text-xl font-semibold">{page.label}</h3>
          <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">{page.summary}</p>
          <span className="mt-auto inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-secondary">Saiba mais <ArrowRight className="size-4 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>)}
      </div>
      <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">Única sede em Araraquara; sem unidade em Ribeirão Preto. Acolhimento voluntário psicossocial, encaminhamento médico externo e transporte mediante agendamento, não 24h. Temas feminino, diagnóstico duplo, medicamentos e jovens são educativos; não confirmam ala feminina, psiquiatria própria, desmame médico ou programa para adolescentes.</p>
    </div>
  </section>;
}
