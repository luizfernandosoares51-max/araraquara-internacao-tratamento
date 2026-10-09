import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstitutionalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <div className="home-serene site-editorial min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <Link to="/" className="max-w-sm font-display text-lg font-semibold">Central de Acolhimento e Reabilitação</Link>
          <Button asChild variant="outline" className="min-h-12"><Link to="/"><ArrowLeft className="size-4" aria-hidden="true" />Início</Link></Button>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-10 max-w-3xl space-y-10 text-base leading-relaxed [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mb-4 [&_a]:text-primary [&_a]:underline [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-6">{children}</div>
      </main>
    </div>
  );
}