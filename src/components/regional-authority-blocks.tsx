import { Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Lock, MapPin, Route as RouteIcon, Scale, ShieldCheck, Siren, Users } from "lucide-react";
import { ethicsProtocol, logisticsTitle, minutesLabel, quickAnswerText, quickAnswerTitle, regionalLogistics } from "@/lib/regional-authority";

export function QuickAnswerCard({ cityName }: { cityName: string }) {
  return (
    <aside aria-label={quickAnswerTitle(cityName)} className="mt-5 max-w-3xl rounded-lg border border-secondary/30 bg-card/60 p-4 sm:p-5" data-quick-answer>
      <h2 className="font-display text-base font-semibold leading-snug sm:text-lg">{quickAnswerTitle(cityName)}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{quickAnswerText(cityName)}</p>
    </aside>
  );
}

export function SatelliteBreadcrumb({ cityName, cityPath, label }: { cityName: string; cityPath: string; label: string }) {
  const parentLabel = `Clínica de Recuperação em ${cityName}`;
  return (
    <div data-satellite-breadcrumb>
      <nav aria-label="Navegação estrutural" className="text-xs leading-relaxed text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li><Link to="/" className="hover:text-secondary">Início</Link></li><li aria-hidden="true">›</li>
          <li><Link to="/cidades" className="hover:text-secondary">Cidades</Link></li><li aria-hidden="true">›</li>
          <li><a href={cityPath} className="hover:text-secondary">{parentLabel}</a></li><li aria-hidden="true">›</li>
          <li aria-current="page" className="text-foreground">{label}</li>
        </ol>
      </nav>
      <a href={cityPath} className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-2 text-sm font-semibold text-primary hover:bg-muted">
        <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />Voltar para {cityName}
      </a>
    </div>
  );
}

export function RegionalLogisticsSection({ cityName }: { cityName: string }) {
  const data = regionalLogistics[cityName];
  if (!data) return null;
  return (
    <section aria-labelledby="logistica-regional" className="border-b border-border py-10 sm:py-12" data-regional-logistics>
      <div className="flex items-center gap-2 text-secondary"><RouteIcon className="size-5" aria-hidden="true" /><p className="text-xs font-semibold uppercase">Acesso regional</p></div>
      <h2 id="logistica-regional" className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">{logisticsTitle(cityName)}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{data.text}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card/60 p-4"><MapPin className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-2 text-sm font-semibold">Bairros e áreas</h3><p className="mt-1 text-sm text-muted-foreground">{data.districts.join(", ")}</p></div>
        <div className="rounded-lg border border-border bg-card/60 p-4"><RouteIcon className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-2 text-sm font-semibold">Rodovias de acesso</h3><p className="mt-1 text-sm text-muted-foreground">{data.roads.join(" · ")}</p></div>
        <div className="col-span-2 rounded-lg border border-border bg-card/60 p-4 lg:col-span-1"><Clock className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-2 text-sm font-semibold">Até a sede em Araraquara</h3><p className="mt-1 text-sm text-muted-foreground">{data.referenceMinutes ? `Estimativa informada: ${minutesLabel(data.referenceMinutes)}, conforme o bairro e o trânsito.` : "Trajeto confirmado com a equipe conforme o bairro de saída."} Deslocamento por agendamento.</p></div>
      </div>
    </section>
  );
}

const ethicsIcons = [Scale, Users, Lock, Siren] as const;

export function EthicsProtocolBlock() {
  return (
    <section aria-labelledby="protocolo-etico" className="border-t border-border py-10 sm:py-12" data-ethics-protocol>
      <div className="flex items-center gap-2 text-secondary"><ShieldCheck className="size-5" aria-hidden="true" /><p className="text-xs font-semibold uppercase">Protocolo ético</p></div>
      <h2 id="protocolo-etico" className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">{ethicsProtocol.title}</h2>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {ethicsProtocol.items.map((item, index) => {
          const Icon = ethicsIcons[index] ?? ShieldCheck;
          return <li key={item.title} className="rounded-lg border border-border bg-card/60 p-4"><Icon className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-2 text-sm font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p></li>;
        })}
      </ul>
      <Link to="/transparencia" className="mt-5 inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">Ver transparência completa</Link>
    </section>
  );
}
