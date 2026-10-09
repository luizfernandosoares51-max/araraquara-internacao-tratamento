import { CircleCheck } from "lucide-react";
import { institutionalIdentity } from "@/lib/institutional";

export function TechnicalResponsibility() {
  const { psychologyResponsible, ownership, generalCoordination } = institutionalIdentity;
  return (
    <dl className="space-y-5">
      <div className="flex items-start gap-3">
        <CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />
        <div className="min-w-0"><dt className="font-semibold">{ownership.role}</dt><dd className="mt-1 text-muted-foreground">{ownership.name}</dd></div>
      </div>
      <div className="flex items-start gap-3">
        <CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />
        <div className="min-w-0"><dt className="font-semibold">{psychologyResponsible.role}</dt><dd className="mt-1 text-muted-foreground">{psychologyResponsible.name}<span className="mt-1 block font-medium text-foreground">{psychologyResponsible.registration}</span></dd></div>
      </div>
      <div className="flex items-start gap-3">
        <CircleCheck className="mt-1 size-5 shrink-0 text-whatsapp" aria-hidden="true" />
        <div className="min-w-0"><dt className="font-semibold">{generalCoordination.role}</dt><dd className="mt-1 text-muted-foreground">{generalCoordination.name}</dd></div>
      </div>
    </dl>
  );
}