import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, HeartHandshake, Route as RouteIcon, ShieldCheck, WineOff, Heart, Dices, FileText, Pill, BookOpen } from "lucide-react";
import { rioClaroSpecialtyList } from "@/lib/rio-claro-specialties";
import type { RioClaroSpecialtyKey as SpecialtyKey } from "@/lib/rio-claro-specialties";

const specialtyIcons = { alcohol: WineOff, cocaine: Brain, involuntary: ShieldCheck, voluntary: HeartHandshake, transport: RouteIcon, women: Heart, gambling: Dices, insurance: FileText, medication: Pill, youth: BookOpen };

export function SpecialtyIcon({ name }: { name: SpecialtyKey }) {
  const Icon = specialtyIcons[name];
  return <Icon className="size-6 text-secondary" aria-hidden="true" />;
}

export function RioClaroSpecialties() {
  return <section data-rio-claro-specialty-cards className="border-y border-border bg-background px-5 py-14 text-foreground sm:px-8 lg:px-12 lg:py-16" aria-labelledby="rio-claro-specialty-heading">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-xs font-semibold uppercase text-secondary">Informação para cada necessidade</p>
      <h2 id="rio-claro-specialty-heading" className="max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Especialidades e Modalidades de Atendimento para Rio Claro</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">Orientação sobre modalidades de cuidado e suporte humanizado para famílias de Rio Claro e região.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {rioClaroSpecialtyList.map(page => <Link key={page.key} to={page.path} className="group flex flex-col rounded-lg border border-border bg-card min-w-0 p-3 sm:p-6 transition-colors hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <SpecialtyIcon name={page.key} />
          <h3 className="mt-3 font-display text-base font-semibold leading-snug sm:mt-5 sm:text-xl">{page.label}</h3>
          <p className="mb-3 mt-2 text-xs leading-snug sm:mb-6 sm:mt-3 sm:text-sm sm:leading-relaxed text-muted-foreground">{page.summary}</p>
          <span className="mt-auto inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-secondary">Saiba mais <ArrowRight className="size-4 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>)}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">Famílias de Rio Claro contam com orientação e suporte para agendamento 24h, a partir da única sede em Araraquara. Acolhimento voluntário com psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar; transporte agendado e encaminhamento hospitalar conforme avaliação.</p>
    </div>
  </section>;
}