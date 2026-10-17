import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, HeartHandshake, Route as RouteIcon, ShieldCheck, WineOff } from "lucide-react";
import { saoCarlosSpecialtyList } from "@/lib/sao-carlos-specialties";
import type { SpecialtyKey } from "@/lib/araraquara-specialties";

const specialtyIcons = { alcohol: WineOff, cocaine: Brain, involuntary: ShieldCheck, voluntary: HeartHandshake, transport: RouteIcon };

export function SpecialtyIcon({ name }: { name: SpecialtyKey }) {
  const Icon = specialtyIcons[name];
  return <Icon className="size-6 text-secondary" aria-hidden="true" />;
}

export function SaoCarlosSpecialties() {
  return <section data-sao-carlos-specialty-cards className="border-y border-border bg-background px-5 py-14 text-foreground sm:px-8 lg:px-12 lg:py-16" aria-labelledby="sao-carlos-specialty-heading">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-xs font-semibold uppercase text-secondary">Informação para cada necessidade</p>
      <h2 id="sao-carlos-specialty-heading" className="max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">Especialidades e Modalidades de Atendimento em São Carlos</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">Abordagens terapêuticas e orientação para suporte humanizado a famílias de São Carlos e região.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {saoCarlosSpecialtyList.map(page => <Link key={page.key} to={page.path} className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <SpecialtyIcon name={page.key} />
          <h3 className="mt-5 font-display text-xl font-semibold">{page.label}</h3>
          <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">{page.summary}</p>
          <span className="mt-auto inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-secondary">Saiba mais <ArrowRight className="size-4 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>)}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">Famílias de São Carlos contam com orientação e suporte para agendamento 24h, a partir da única sede em Araraquara. Acolhimento voluntário com psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar; transporte agendado e encaminhamento hospitalar conforme avaliação.</p>
    </div>
  </section>;
}