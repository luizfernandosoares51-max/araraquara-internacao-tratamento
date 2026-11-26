import { useRef, useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Expand, MessageCircle, Phone } from "lucide-react";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { facilityGalleryId, facilityGallerySchema, facilityPhotos, femaleGalleryId, femaleGallerySchema, femalePhotos, maleGalleryId, type FacilityPhoto } from "@/lib/facility-gallery";
import { cityWhatsappHref } from "@/lib/regional-city-access";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";

function scrollToGallery(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById(facilityGalleryId);
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "start" });
  target.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
}

export function FacilityGalleryLink({ className = "" }: { className?: string }) {
  return (
    <Button asChild variant="outline" className={`h-auto min-h-11 whitespace-normal px-4 py-3 ${className}`}>
      <a href={`#${facilityGalleryId}`} onClick={scrollToGallery}><Building2 className="size-4 shrink-0" aria-hidden="true" />Conhecer Estrutura Física</a>
    </Button>
  );
}

const units = {
  male: { id: maleGalleryId, photos: facilityPhotos, schema: facilityGallerySchema, title: "Unidade Masculina – Araraquara/SP", intro: "Fotos reais da unidade masculina em Araraquara SP, vinculada ao Centro de Reabilitação Terapêutico Morada do Sol, onde acontece o acolhimento voluntário para dependência química, alcoolismo e saúde mental. Casos de internação involuntária seguem avaliação médica e encaminhamento a unidades habilitadas (Lei 13.840/2019)." },
  female: { id: femaleGalleryId, photos: femalePhotos, schema: femaleGallerySchema, title: "Unidade Feminina – São Carlos/SP", intro: "Fotos reais da unidade feminina em São Carlos SP, vinculada ao Centro de Reabilitação Terapêutico Morada do Sol: um ambiente acolhedor, seguro e em meio à natureza para o acolhimento voluntário de mulheres." },
} as const;

export function FacilityGallerySection({ cityName }: { cityName?: string }) {
  const order: Array<keyof typeof units> = cityName === "São Carlos" ? ["female", "male"] : ["male", "female"];
  return (
    <div id={facilityGalleryId} className="scroll-mt-24 border-t border-border py-8 text-foreground sm:py-10">
      <h2 tabIndex={-1} className="font-display text-2xl font-semibold outline-none sm:text-3xl">Nossa Estrutura Física</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">Duas unidades separadas: feminina em São Carlos/SP e masculina em Araraquara/SP.</p>
      {order.map((key) => <UnitGallery key={key} unit={key} cityName={cityName} />)}
    </div>
  );
}

function UnitGallery({ unit, cityName }: { unit: keyof typeof units; cityName?: string | undefined }) {
  const meta = units[unit];
  const facilityPhotos: readonly FacilityPhoto[] = meta.photos;
  const [open, setOpen] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const total = facilityPhotos.length;
  const current = open === null ? null : facilityPhotos[open];
  const whatsapp = cityName ? cityWhatsappHref(cityName) : whatsappHref;

  const goTo = (index: number) => {
    const el = track.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const width = el.firstElementChild?.clientWidth ?? el.clientWidth;
    setActive(Math.min(total - 1, Math.round(el.scrollLeft / (width + 12))));
  };

  return (
    <section id={meta.id} aria-labelledby={`${meta.id}-titulo`} className="mt-8 scroll-mt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.schema()) }} />
      <h3 id={`${meta.id}-titulo`} className="font-display text-xl font-semibold sm:text-2xl">{meta.title}</h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{meta.intro}</p>

      <div className="relative mt-5">
        <div ref={track} onScroll={onScroll} className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {facilityPhotos.map((item, index) => (
            <figure key={item.id} className="w-[85%] shrink-0 snap-center overflow-hidden rounded-xl border border-border bg-card text-card-foreground sm:w-auto">
              <button type="button" onClick={() => setOpen(index)} className="group relative block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" aria-label={`Ampliar foto: ${item.title}`}>
                <img src={item.src} alt={item.alt} title={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-background/85 text-foreground" aria-hidden="true"><Expand className="size-4" /></span>
              </button>
              <figcaption className="p-3 sm:p-4">
                <h4 className="font-display text-sm font-semibold sm:text-base">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-foreground/85">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 sm:hidden">
          <Button type="button" variant="outline" size="icon" aria-label="Foto anterior" disabled={active === 0} onClick={() => goTo(Math.max(0, active - 1))}><ChevronLeft aria-hidden="true" /></Button>
          <div className="flex gap-1.5" aria-hidden="true">
            {facilityPhotos.map((item, index) => <span key={item.id} className={`h-2 rounded-full transition-all ${index === active ? "w-5 bg-primary" : "w-2 bg-muted-foreground/40"}`} />)}
          </div>
          <Button type="button" variant="outline" size="icon" aria-label="Próxima foto" disabled={active === total - 1} onClick={() => goTo(Math.min(total - 1, active + 1))}><ChevronRight aria-hidden="true" /></Button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium">Quer conhecer a unidade pessoalmente? As visitas são feitas com agendamento.</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild className="h-auto min-h-11 whitespace-normal bg-whatsapp px-4 py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />Agendar Visita / Falar no WhatsApp</a></Button>
          <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal px-4 py-3"><a href={phoneHref}><Phone className="size-4 shrink-0" aria-hidden="true" />Ligar Agora (Plantão 24h) · {phoneDisplay}</a></Button>
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(value) => { if (!value) setOpen(null); }}>
        <DialogContent className="max-w-4xl gap-3 p-3 sm:p-5">
          {current && open !== null ? (
            <>
              <img src={current.src} alt={current.alt} width={current.width} height={current.height} className="max-h-[70vh] w-full rounded-lg bg-muted object-contain" />
              <DialogTitle className="font-display text-base sm:text-lg">{current.title}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed">{current.caption}</DialogDescription>
              <div className="flex items-center justify-between gap-3">
                <Button type="button" variant="outline" onClick={() => setOpen((open - 1 + total) % total)}><ChevronLeft aria-hidden="true" />Anterior</Button>
                <span className="text-xs text-muted-foreground">{open + 1} / {total}</span>
                <Button type="button" variant="outline" onClick={() => setOpen((open + 1) % total)}>Próxima<ChevronRight aria-hidden="true" /></Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
