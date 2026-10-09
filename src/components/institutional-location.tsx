import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institutionalIdentity } from "@/lib/institutional";

export function InstitutionalLocation({ compact = false }: { compact?: boolean }) {
  const [authorizedOrigin, setAuthorizedOrigin] = useState(false);
  useEffect(() => {
    const hostname = window.location.hostname;
    // Managed browser credentials are restricted to Lovable origins. Never leak credential-bearing preview hostnames.
    setAuthorizedOrigin(hostname.endsWith(".lovable.app"));
  }, []);
  const browserKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const embedSrc = authorizedOrigin && browserKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(browserKey)}&q=${encodeURIComponent(institutionalIdentity.fullAddress)}`
    : undefined;
  return (
    <div className="min-w-0 space-y-4">
      <address className="text-sm not-italic leading-relaxed text-muted-foreground">{institutionalIdentity.fullAddress}</address>
      <div className={`w-full overflow-hidden rounded-lg border border-border bg-muted ${compact ? "h-56" : "h-80 sm:h-96"}`}>
        {embedSrc ? <iframe title="Localização da Central em Araraquara no Google Maps" src={embedSrc} className="h-full w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          : <div className="flex h-full flex-col items-center justify-center gap-3 px-5 text-center text-sm text-muted-foreground"><MapPin className="size-7 text-primary" aria-hidden="true" /><span>Localização da unidade em Araraquara</span><span>Consulte o endereço pelo botão abaixo.</span></div>}
      </div>
      <Button asChild variant="outline" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left">
        <a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer"><MapPin className="size-5 shrink-0" aria-hidden="true" /><span>Ver no Google Maps / Como Chegar</span></a>
      </Button>
      {!compact && <p className="text-xs leading-relaxed text-muted-foreground">O mapa é fornecido pelo Google e, quando exibido, transmite dados técnicos como IP e informações do navegador a esse serviço.</p>}
    </div>
  );
}