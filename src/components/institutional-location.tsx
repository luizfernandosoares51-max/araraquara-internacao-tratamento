import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institutionalIdentity } from "@/lib/institutional";

const embedSrc = "https://maps.google.com/maps?q=R.+Alfredo+Micelli,+70+-+Condom%C3%ADnio+Sat%C3%A9lite,+Araraquara+-+SP,+14808-579&t=&z=15&ie=UTF8&iwloc=&output=embed";

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
      <address className="text-sm not-italic leading-relaxed text-muted-foreground">{institutionalIdentity.fullAddress}</address>
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
      <Button asChild variant="outline" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left">
        <a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer"><MapPin className="size-5 shrink-0" aria-hidden="true" /><span>Ver no Google Maps / Como Chegar</span></a>
      </Button>
      {!compact && <p className="text-xs leading-relaxed text-muted-foreground">O mapa é fornecido pelo Google e, quando exibido, transmite dados técnicos como IP e informações do navegador a esse serviço.</p>}
    </div>
  );
}
