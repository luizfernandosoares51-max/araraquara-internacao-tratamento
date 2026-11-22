import { MessageCircle, Phone } from "lucide-react";
import { QuickAnswerCard } from "@/components/regional-authority-blocks";
import { Button } from "@/components/ui/button";
import { contactLabels } from "@/lib/regional-authority";
import { cityWhatsappHref } from "@/lib/regional-city-access";
import { phoneHref } from "@/lib/site";

export function RegionalContactActions({ cityName, summary = true }: { cityName: string; summary?: boolean }) {
  return <div data-regional-contact>
    <p className="mt-3 max-w-2xl text-sm font-medium leading-snug text-foreground/85">Família de {cityName}, você não está sozinha: fale agora com sigilo, a qualquer hora.</p>
    <div className="mt-3 flex flex-col gap-2 sm:flex-row" aria-label="Contato com o plantão de orientação">
      <Button asChild className="h-auto min-h-11 whitespace-normal bg-whatsapp px-4 py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={cityWhatsappHref(cityName)} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />{contactLabels.whatsapp}</a></Button>
      <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal px-4 py-3"><a href={phoneHref}><Phone className="size-4 shrink-0" aria-hidden="true" />{contactLabels.call}</a></Button>
    </div>
    {summary ? <QuickAnswerCard cityName={cityName} /> : null}
  </div>;
}
