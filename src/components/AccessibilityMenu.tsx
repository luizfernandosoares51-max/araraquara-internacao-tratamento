import { Accessibility, Contrast, Type, Link2, Palette, RotateCcw, Volume2, Play, Pause, Square } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { accessibilityStorageKey, defaultAccessibility, normalizeAccessibility, type AccessibilityPreferences } from "@/lib/accessibility";
import { usePageSpeech } from "@/hooks/use-page-speech";
const options = [
  { key: "highContrast", label: "Alto contraste", icon: Contrast },
  { key: "easyReading", label: "Leitura facilitada", icon: Type },
  { key: "highlightLinks", label: "Destacar links e botões", icon: Link2 },
  { key: "grayscale", label: "Escala de cinza", icon: Palette },
] as const;
export function AccessibilityMenu() {
  const speech = usePageSpeech();
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(defaultAccessibility);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(accessibilityStorageKey);
      if (saved) setPreferences(normalizeAccessibility(JSON.parse(saved)));
    } catch { /* Storage may be blocked; controls still work. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.style.fontSize = `${preferences.textScale}%`;
    root.classList.toggle("high-contrast", preferences.highContrast);
    root.classList.toggle("easy-reading", preferences.easyReading);
    root.classList.toggle("highlight-links", preferences.highlightLinks);
    root.classList.toggle("monochrome", preferences.grayscale);
    try { localStorage.setItem(accessibilityStorageKey, JSON.stringify(preferences)); } catch { /* Optional persistence. */ }
  }, [preferences, ready]);
  return <Sheet>
    <SheetTrigger asChild>
      <Button size="icon" variant="outline" className="accessibility-trigger rounded-full bg-background text-foreground shadow-lg" aria-label="Abrir menu de acessibilidade" title="Acessibilidade">
        <Accessibility className="size-6" aria-hidden="true" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="accessibility-panel w-full max-w-sm overflow-y-auto bg-background text-foreground sm:max-w-sm">
      <SheetHeader className="pr-12 text-left">
        <Accessibility className="mb-3 size-7 text-secondary" aria-hidden="true" />
        <SheetTitle className="font-body text-xl">Acessibilidade</SheetTitle>
        <SheetDescription className="sr-only">Preferências de leitura e apresentação da página.</SheetDescription>
      </SheetHeader>
      <section aria-labelledby="page-speech-title" className="mt-6 border-y border-border bg-accent/30 py-5">
        <h3 id="page-speech-title" className="mb-4 flex items-center gap-3 text-sm font-medium"><Volume2 className="size-5 shrink-0 text-secondary" aria-hidden="true" /> Ouvir conteúdo da página</h3>
        <Button className="min-h-12 w-full whitespace-normal" disabled={!speech.supported || speech.state !== "idle"} onClick={speech.start}><Play aria-hidden="true" /> Iniciar Leitura</Button>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Button variant="outline" className="min-h-12 whitespace-normal" disabled={speech.state === "idle"} onClick={speech.togglePause}>
            {speech.state === "paused" ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}{speech.state === "paused" ? "Retomar" : "Pausar"}
          </Button>
          <Button variant="outline" className="min-h-12" disabled={speech.state === "idle"} onClick={speech.stop}><Square aria-hidden="true" /> Parar</Button>
        </div>
        <p role="status" className="mt-3 text-sm text-muted-foreground">{!speech.supported ? "Leitura por voz indisponível neste navegador." : speech.message || (speech.state === "reading" ? "Leitura em andamento." : speech.state === "paused" ? "Leitura pausada." : "")}</p>
      </section>
      <div className="mt-8 border-y border-border py-5">
        <h3 className="mb-4 flex items-center gap-3 text-sm font-medium"><Type className="size-5 text-secondary" aria-hidden="true" /> Tamanho do texto</h3>
        <div className="grid grid-cols-[3rem_1fr_3rem] items-center gap-3">
          <Button variant="outline" className="size-12 text-base" aria-label="Diminuir tamanho do texto" disabled={preferences.textScale === 100} onClick={() => setPreferences(p => ({ ...p, textScale: Math.max(100, p.textScale - 5) }))}>A−</Button>
          <output aria-live="polite" className="text-center text-lg font-medium">{preferences.textScale}%</output>
          <Button variant="outline" className="size-12 text-base" aria-label="Aumentar tamanho do texto" disabled={preferences.textScale === 120} onClick={() => setPreferences(p => ({ ...p, textScale: Math.min(120, p.textScale + 5) }))}>A+</Button>
        </div>
      </div>
      <div className="divide-y divide-border">
        {options.map(({ key, label, icon: Icon }) => <div key={key} className="flex min-h-20 items-center justify-between gap-3 py-4">
          <label htmlFor={`accessibility-${key}`} className="flex cursor-pointer items-center gap-3 text-sm"><Icon className="size-5 shrink-0 text-secondary" aria-hidden="true" />{label}</label>
          <Switch id={`accessibility-${key}`} checked={preferences[key]} className="accessibility-switch shrink-0" onCheckedChange={checked => setPreferences(p => ({ ...p, [key]: checked }))} />
        </div>)}
      </div>
      <Button variant="outline" className="mt-6 min-h-12 w-full whitespace-normal" onClick={() => setPreferences({ ...defaultAccessibility })}><RotateCcw aria-hidden="true" /> Restaurar padrão</Button>
    </SheetContent>
  </Sheet>;
}