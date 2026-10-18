import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

const directionsHref = "https://www.google.com/maps/dir/?api=1&destination=R.+Alfredo+Micelli,+70+-+Condominio+Satelite,+Araraquara+-+SP,+14808-579";
const wazeHref = "https://waze.com/ul?q=R.+Alfredo+Micelli,+70,+Araraquara";
import { Button } from "@/components/ui/button";
import { institutionalIdentity } from "@/lib/institutional";

const embedSrc = "https://maps.google.com/maps?q=R.+Alfredo+Micelli,+70+-+Condominio+Satelite,+Araraquara+-+SP,+14808-579&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function InstitutionalLocation({ compact = false }: { compact?: boolean }) {
  const [referrerPolicy, setReferrerPolicy] = useState<React.HTMLAttributeReferrerPolicy>("no-referrer");
  const [showMap, setShowMap] = useState(false);
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hostname = window.location.hostname;
    // Never disclose credential-bearing preview hostnames to Google.
    if (!hostname.endsWith(".lovableproject.com")) setReferrerPolicy("no-referrer-when-downgrade");
  }, []);

  useEffect(() => {
    const el = holderRef.current;
    if (!el || showMap) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [showMap]);

  return (
    <div className="min-w-0 space-y-4">
      <address className="text-sm not-italic leading-relaxed text-muted-foreground"><strong className="block font-semibold text-foreground">Central de Acolhimento e Reabilitação (Sede Própria)</strong>{institutionalIdentity.fullAddress}</address>
      <div ref={holderRef} className="h-[260px] w-full overflow-hidden rounded-[12px] bg-muted">
        {showMap ? (
          <iframe title="Localização da Central em Araraquara no Google Maps" src={embedSrc} width="100%" height="260px" className="block h-[260px] w-full border-0" loading="lazy" referrerPolicy={referrerPolicy} allowFullScreen />
        ) : (
          <div className="grid h-full place-items-center px-4 text-center">
            <Button type="button" variant="outline" className="h-auto min-h-12 whitespace-normal py-3" onClick={() => setShowMap(true)}>
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              Carregar mapa interativo
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left">
          <a href={directionsHref} target="_blank" rel="noopener noreferrer"><Navigation className="size-5 shrink-0" aria-hidden="true" /><span>Traçar Rota no Google Maps</span></a>
        </Button>
        <Button asChild variant="outline" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left">
          <a href={wazeHref} target="_blank" rel="noopener noreferrer"><Navigation className="size-5 shrink-0" aria-hidden="true" /><span>Abrir no Waze</span></a>
        </Button>
      </div>
      <Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal px-0 py-3 text-left">
        <a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer"><MapPin className="size-5 shrink-0" aria-hidden="true" /><span>Ver no Google Maps / Como Chegar</span></a>
      </Button>
      {!compact && <p className="text-xs leading-relaxed text-muted-foreground">O mapa é fornecido pelo Google e, quando exibido, transmite dados técnicos como IP e informações do navegador a esse serviço.</p>}
    </div>
  );
}
