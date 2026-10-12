import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { regionalNavigation } from "@/lib/regional-navigation";

export function RegionalSeoGrid() {
  return (
    <section aria-labelledby="regional-seo-title" className="regional-seo-grid border-t border-border py-12 lg:py-16">
      <h2 id="regional-seo-title" className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
        Atendimento Regional e Orientação sobre Remoção
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Acolhimento voluntário na única sede da Central, em Araraquara, e orientação às famílias da região.
        Remoção e translado dependem de avaliação e agendamento; cuidados médicos e internação hospitalar
        são encaminhados a estabelecimentos habilitados, sem garantia de vaga ou admissão imediata.
      </p>
      <nav aria-label="Atendimento regional e orientação sobre remoção" className="links-columns mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {regionalNavigation.map((item) => (
          <Button key={item.to} asChild variant="link" className="h-auto min-h-12 justify-start whitespace-normal border-b border-border px-0 py-3 text-left leading-relaxed text-secondary">
            <Link to={item.to}>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}
      </nav>
    </section>
  );
}