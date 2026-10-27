import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { regionalNavigation } from "@/lib/regional-navigation";
import { institutionalNetwork } from "@/lib/institutional";

const featuredCityLinks = [
  { to: "/clinica-de-recuperacao-em-itapolis-sp", label: "Clínica de Recuperação em Itápolis - SP" },
  { to: "/clinica-de-recuperacao-em-ibate-sp", label: "Clínica de Recuperação em Ibaté - SP" },
  { to: "/clinica-de-recuperacao-em-matao-sp", label: "Clínica de Recuperação em Matão - SP" },
  { to: "/clinica-de-recuperacao-em-araraquara", label: "Clínica de Recuperação em Araraquara" },
] as const;

export function RegionalSeoGrid() {
  return (
    <section aria-labelledby="regional-seo-title" className="regional-seo-grid border-t border-border py-10 lg:py-12">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-secondary">
          <MapPin className="size-5" aria-hidden="true" />
          <p className="text-sm font-semibold">Orientação regional</p>
        </div>
        <h2 id="regional-seo-title" className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">Regiões Atendidas no Interior de SP</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {institutionalNetwork.regionalStatement}
        </p>
      </div>
      <nav aria-label="Cidades vizinhas em destaque" className="mt-6">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCityLinks.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="flex min-h-12 items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Páginas de orientação regional" className="mt-6 flex flex-wrap gap-2">
        {regionalNavigation.map((item) => (
          <Button key={item.to} asChild variant="outline" className="h-auto min-h-11 rounded-full px-4 py-2 text-sm font-medium">
            <Link to={item.to}>{item.label}</Link>
          </Button>
        ))}
      </nav>
      <Button asChild className="mt-6 min-h-12 whitespace-normal px-5 py-3 text-center">
        <Link to="/cidades">Ver todas as 19 cidades atendidas<ArrowRight className="size-4" aria-hidden="true" /></Link>
      </Button>
    </section>
  );
}