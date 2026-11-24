import { ClipboardCheck, HeartHandshake, ShieldCheck, Users, Compass, FileCheck2 } from "lucide-react";
import { multidisciplinaryTeam } from "@/lib/multidisciplinary-team";

const teamIcons = [ClipboardCheck, HeartHandshake, ShieldCheck, Users, Compass, FileCheck2];

export function MultidisciplinaryTeamSection() {
  return (
    <section aria-labelledby="equipe-titulo" className="border-t border-border py-8 sm:py-10 text-foreground">
      <h2 id="equipe-titulo" className="font-display text-2xl font-semibold sm:text-3xl">Nossa Equipe Multidisciplinar</h2>
      <MultidisciplinaryTeam />
    </section>
  );
}

export function MultidisciplinaryTeam() {
  return (
    <div data-team-catalog>
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {multidisciplinaryTeam.map((member, index) => {
          const Icon = teamIcons[index] ?? Users;
          return (
            <article key={member.id} className="flex h-full min-w-0 flex-col items-center rounded-lg border border-border bg-card p-3 text-center text-card-foreground sm:p-4">
              {member.portrait ? (
                <img src={member.portrait.url} alt={member.portrait.alt} width={96} height={96} loading="lazy" decoding="async" className="size-24 shrink-0 rounded-full object-cover ring-2 ring-secondary/30" />
              ) : (
                <span className="flex size-24 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary"><Icon className="size-9" aria-hidden="true" /></span>
              )}
              <h3 className="mt-3 w-full break-words text-sm font-semibold leading-snug">{member.name}</h3>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-secondary">{member.role}</p>
              {member.registration && <span className="mt-2 max-w-full rounded-md bg-muted px-2 py-1 text-xs font-medium leading-relaxed">{member.registration}</span>}
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{member.description}</p>
            </article>
          );
        })}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Equipe, funções e registros informados pela instituição; não representam verificação independente das credenciais.</p>
    </div>
  );
}