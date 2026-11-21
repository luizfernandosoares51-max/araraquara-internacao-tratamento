import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { priorityRegionalLinks } from "@/lib/regional-ctr";

export function RegionalPriorityLinks() {
  return <section className="border-y border-border py-8 sm:py-10" aria-labelledby="priority-region-title">
    <h2 id="priority-region-title" className="font-display text-2xl font-semibold sm:text-3xl">Atendimento Imediato na Região (Plantão 24h)</h2>
    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Plantão de orientação familiar 24h, com atenção à privacidade. Acolhimento, encaminhamento e transporte dependem de avaliação, agendamento e disponibilidade; em emergência, acione o SAMU 192.</p>
    <nav aria-label="Plantão regional de orientação" className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2">
      {priorityRegionalLinks.map(link => <Link key={link.to} to={link.to} className="inline-flex min-h-11 items-center justify-between gap-3 py-2 text-sm font-semibold text-primary underline underline-offset-4"><span>{link.label}</span><ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></Link>)}
    </nav>
  </section>;
}