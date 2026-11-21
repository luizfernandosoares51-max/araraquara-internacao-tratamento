import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cityWhatsappHref } from "@/lib/regional-city-access";
import { phoneHref } from "@/lib/site";

export function RegionalContactActions({ cityName }: { cityName: string }) {
  return <div className="mt-4 flex flex-col gap-2 sm:flex-row" aria-label="Contato com o plantão de orientação">
    <Button asChild className="h-auto min-h-11 whitespace-normal bg-whatsapp px-4 py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={cityWhatsappHref(cityName)} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />WhatsApp Plantão 24h</a></Button>
    <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal px-4 py-3"><a href={phoneHref}><Phone className="size-4 shrink-0" aria-hidden="true" />Ligar Agora</a></Button>
  </div>;
}