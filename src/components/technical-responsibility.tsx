import { CircleCheck } from "lucide-react";
import { institutionalIdentity } from "@/lib/institutional";

export function TechnicalResponsibility() {
  const { psychologyResponsible, ownership, generalCoordination } = institutionalIdentity;
  return (
    <dl className="space-y-5">
      <div className="min-w-0">
        <dt className="flex items-start gap-3 font-semibold"><CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />{ownership.role}</dt><dd className="ml-8 mt-1 text-muted-foreground">{ownership.name}</dd>
      </div>
      <div className="min-w-0">
        <dt className="flex items-start gap-3 font-semibold"><CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />{psychologyResponsible.role}</dt><dd className="ml-8 mt-1 text-muted-foreground">{psychologyResponsible.name}<span className="mt-1 block font-medium text-foreground">{psychologyResponsible.registration}</span></dd>
      </div>
      <div className="min-w-0">
        <dt className="flex items-start gap-3 font-semibold"><CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />{generalCoordination.role}</dt><dd className="ml-8 mt-1 text-muted-foreground">{generalCoordination.name}</dd>
      </div>
      <div className="min-w-0">
        <dt className="flex items-start gap-3 font-semibold"><CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />Articulação Médica e Psiquiátrica Especializada</dt><dd className="ml-8 mt-1 text-muted-foreground">Encaminhamento, avaliação clínica e acompanhamento com profissionais e serviços parceiros credenciados, conforme o plano terapêutico individual.</dd>
      </div>
      <div className="min-w-0">
        <dt className="flex items-start gap-3 font-semibold"><CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />Supervisão e Cuidados Contínuos</dt><dd className="ml-8 mt-1 text-muted-foreground">Equipe multidisciplinar para suporte diário na rotina de acolhimento, estabilização e bem-estar dos acolhidos.</dd>
      </div>
    </dl>
  );
}