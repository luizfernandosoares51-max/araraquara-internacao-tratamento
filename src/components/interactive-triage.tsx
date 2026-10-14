import { useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import { ArrowLeft, ArrowRight, Check, HeartHandshake, LoaderCircle, MessageCircle, RotateCcw, Search, ShieldCheck, Siren, UserRound, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildTriageWhatsAppHref, getTriageOrientation, isEmergencyTriage, triageChallenges, triageCities, triageReadiness, triageRelationships, type TriageChallengeId, type TriageReadinessId, type TriageRelationshipId } from "@/lib/interactive-triage";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5 | 6;
const relationshipIcons = [UsersRound, HeartHandshake, UserRound, UsersRound];

export function InteractiveTriage() {
  const [step, setStep] = useState<Step>(1);
  const [relationship, setRelationship] = useState<TriageRelationshipId>();
  const [challenges, setChallenges] = useState<TriageChallengeId[]>([]);
  const [readiness, setReadiness] = useState<TriageReadinessId>();
  const [city, setCity] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const filteredCities = useMemo(() => {
    const query = cityQuery.trim().toLocaleLowerCase("pt-BR");
    return triageCities.filter((item) => item.toLocaleLowerCase("pt-BR").includes(query));
  }, [cityQuery]);

  useEffect(() => {
    if (step === 5) {
      const timer = window.setTimeout(() => setStep(6), 850);
      return () => window.clearTimeout(timer);
    }
    headingRef.current?.focus({ preventScroll: true });
    return undefined;
  }, [step]);

  const progress = step >= 5 ? 100 : step * 25;
  const orientation = readiness ? getTriageOrientation(readiness) : undefined;
  const emergency = readiness ? isEmergencyTriage(readiness) : false;
  const complete = relationship && challenges.length > 0 && readiness && city;
  const whatsappHref = complete && !emergency ? buildTriageWhatsAppHref({ relationship, challenges, readiness, city }) : undefined;

  function toggleChallenge(id: TriageChallengeId) {
    setChallenges((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }
  function restart() {
    setRelationship(undefined); setChallenges([]); setReadiness(undefined); setCity(""); setCityQuery(""); setStep(1);
  }

  return (
    <section id="triagem-familiar" aria-labelledby="triage-title" className="scroll-mt-24 border-y border-border bg-muted/45 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-secondary"><ShieldCheck className="size-4" aria-hidden="true" /> Triagem preliminar ética · não substitui consulta médica</p>
          {step > 1 && step !== 5 && <Button type="button" variant="ghost" className="min-h-11" onClick={restart}><RotateCcw aria-hidden="true" /> Reiniciar</Button>}
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-glass shadow-xl backdrop-blur-xl">
          <div className="border-b border-border bg-background/70 px-5 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-4 text-xs font-semibold text-muted-foreground"><span>{step >= 5 ? "Orientação preparada" : `Etapa ${step} de 4`}</span><span aria-hidden="true">{progress}%</span></div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="Progresso da orientação" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><div className="h-full rounded-full bg-primary transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${progress}%` }} /></div>
          </div>
          <div className="min-h-[32rem] px-5 py-7 sm:px-8 sm:py-10">
            {step === 1 && <StepPanel title="Para quem você está buscando orientação hoje?" subtitle="Não solicitamos nomes de pacientes nem dados de identificação nesta etapa." headingRef={headingRef}>
              <div className="grid gap-3 sm:grid-cols-2">{triageRelationships.map((item, index) => { const Icon = relationshipIcons[index] ?? UserRound; const selected = relationship === item.id; return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => setRelationship(item.id)} className={cn("h-auto min-h-20 justify-start whitespace-normal px-5 py-4 text-left", selected && "border-primary bg-brand-soft text-primary")}><Icon className="size-5" aria-hidden="true" /><span className="flex-1">{item.label}</span>{selected && <Check aria-hidden="true" />}</Button>; })}</div>
              <NextButton disabled={!relationship} onClick={() => setStep(2)} />
            </StepPanel>}
            {step === 2 && <StepPanel title="Qual o principal desafio enfrentado no momento?" subtitle="Você pode selecionar mais de um tema. As escolhas organizam a conversa, mas não formam um diagnóstico." headingRef={headingRef}>
              <div className="grid gap-3">{triageChallenges.map((item) => { const selected = challenges.includes(item.id); return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => toggleChallenge(item.id)} className={cn("h-auto min-h-16 justify-start whitespace-normal px-5 py-4 text-left", selected && "border-primary bg-brand-soft text-primary")}><span className={cn("flex size-5 shrink-0 items-center justify-center rounded border border-input", selected && "border-primary bg-primary text-primary-foreground")}>{selected && <Check className="size-3" aria-hidden="true" />}</span><span><strong className="block">{item.label}</strong><span className="mt-1 block text-xs font-normal text-muted-foreground">{item.detail}</span></span></Button>; })}</div>
              <StepActions onBack={() => setStep(1)} disabled={challenges.length === 0} onNext={() => setStep(3)} />
            </StepPanel>}
            {step === 3 && <StepPanel title="Como está a disposição para receber cuidado?" subtitle="Escolha a descrição mais próxima do momento atual. Em risco imediato, o guia prioriza serviços de emergência." headingRef={headingRef}>
              <div className="grid gap-3">{triageReadiness.map((item) => { const selected = readiness === item.id; return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => setReadiness(item.id)} className={cn("h-auto min-h-20 justify-start whitespace-normal px-5 py-4 text-left", selected && (item.id === "risk" ? "border-destructive bg-destructive/10" : "border-primary bg-brand-soft text-primary"))}>{item.id === "risk" ? <Siren className="size-5 text-destructive" aria-hidden="true" /> : <HeartHandshake className="size-5" aria-hidden="true" />}<span><strong className="block">{item.label}</strong><span className="mt-1 block text-xs font-normal text-muted-foreground">{item.detail}</span></span></Button>; })}</div>
              <StepActions onBack={() => setStep(2)} disabled={!readiness} onNext={() => setStep(4)} />
            </StepPanel>}
            {step === 4 && <StepPanel title="Qual município está mais próximo de você?" subtitle="A unidade física da Central fica somente em Araraquara. As demais cidades indicam apenas a região de origem da família." headingRef={headingRef}>
              <label htmlFor="triage-city-search" className="text-sm font-semibold">Buscar município</label><div className="relative mt-2"><Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><input id="triage-city-search" type="search" value={cityQuery} onChange={(event) => setCityQuery(event.target.value)} placeholder="Digite o nome da cidade" className="min-h-12 w-full rounded-md border border-input bg-background pl-12 pr-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring" /></div>
              <div className="mt-4 grid max-h-64 gap-2 overflow-y-auto pr-1 sm:grid-cols-2" role="list" aria-label="Municípios disponíveis">{filteredCities.map((item) => <Button key={item} type="button" variant="outline" aria-pressed={city === item} onClick={() => setCity(item)} className={cn("h-auto min-h-12 justify-between whitespace-normal px-4 py-3 text-left", city === item && "border-primary bg-brand-soft text-primary")}>{item}{city === item && <Check aria-hidden="true" />}</Button>)}{filteredCities.length === 0 && <p className="py-6 text-sm text-muted-foreground">Use “Outra cidade do interior paulista” para uma região não listada.</p>}</div>
              <StepActions onBack={() => setStep(3)} disabled={!city} onNext={() => setStep(5)} nextLabel="Preparar orientação" />
            </StepPanel>}
            {step === 5 && <div className="flex min-h-[25rem] flex-col items-center justify-center text-center" role="status" aria-live="polite"><LoaderCircle className="size-10 animate-spin text-primary motion-reduce:animate-none" aria-hidden="true" /><h2 ref={headingRef} tabIndex={-1} id="triage-title" className="mt-5 font-display text-2xl font-semibold outline-none sm:text-3xl">Organizando sua orientação preliminar…</h2><p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">As respostas permanecem somente nesta página e não são enviadas durante este processamento.</p></div>}
            {step === 6 && orientation && <StepPanel title={orientation.title} subtitle={orientation.summary} headingRef={headingRef}>
              {emergency ? <div role="alert" className="border-l-4 border-destructive bg-destructive/10 p-5"><p className="font-semibold">Não espere uma resposta da Central para decidir sobre urgência.</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Este guia e o WhatsApp institucional não prestam atendimento de emergência.</p><Button asChild className="mt-5 min-h-12"><a href="tel:192"><Siren aria-hidden="true" /> Ligar para o SAMU 192</a></Button></div> : <><div className="grid gap-4 md:grid-cols-3">{[["Escuta e avaliação", "A equipe pode conhecer o contexto e explicar possibilidades, sem diagnóstico ou indicação automática pelo site."], ["Cuidado compatível", "Acolhimento voluntário, apoio psicológico, 12 Passos e prevenção à recaída são considerados conforme avaliação individual."], ["Segurança e limites", "Necessidades médicas ou hospitalares exigem avaliação e encaminhamento para serviço habilitado."]].map(([title, text], index) => <div key={title} className="rounded-md border border-border bg-background/70 p-5"><span className="text-xs font-semibold text-secondary">0{index + 1}</span><h3 className="mt-2 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>{whatsappHref && <Button asChild className="mt-7 h-auto min-h-14 w-full whitespace-normal bg-whatsapp px-5 py-4 text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Enviar resumo e conversar com a equipe</a></Button>}<p className="mt-4 text-xs leading-relaxed text-muted-foreground">O resumo só será compartilhado se você abrir o WhatsApp e confirmar o envio. Disponibilidade, modalidade e próximos passos dependem da conversa com a equipe.</p></>}
              <Button type="button" variant="outline" className="mt-7 min-h-11" onClick={restart}><RotateCcw aria-hidden="true" /> Fazer nova orientação</Button>
            </StepPanel>}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepPanel({ title, subtitle, headingRef, children }: { title: string; subtitle: string; headingRef: RefObject<HTMLHeadingElement | null>; children: ReactNode }) {
  return <div className="animate-in fade-in slide-in-from-right-2 duration-300 motion-reduce:animate-none"><h2 ref={headingRef} tabIndex={-1} id="triage-title" className="max-w-3xl font-display text-2xl font-semibold leading-tight outline-none sm:text-4xl">{title}</h2><p className="mb-7 mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>{children}</div>;
}
function NextButton({ disabled, onClick, label = "Continuar" }: { disabled: boolean; onClick: () => void; label?: string }) { return <Button type="button" className="mt-7 min-h-12 w-full sm:w-auto" disabled={disabled} onClick={onClick}>{label}<ArrowRight aria-hidden="true" /></Button>; }
function StepActions({ onBack, disabled, onNext, nextLabel }: { onBack: () => void; disabled: boolean; onNext: () => void; nextLabel?: string }) { return <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row"><Button type="button" variant="outline" className="min-h-12" onClick={onBack}><ArrowLeft aria-hidden="true" /> Voltar</Button><NextButton disabled={disabled} onClick={onNext} {...(nextLabel ? { label: nextLabel } : {})} /></div>; }