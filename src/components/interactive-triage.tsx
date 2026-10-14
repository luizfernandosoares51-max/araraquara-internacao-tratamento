import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode, type RefObject } from "react";
import { ArrowLeft, Check, HeartHandshake, LoaderCircle, MessageCircle, RotateCcw, Search, ShieldCheck, Siren, UserRound, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildTriageWhatsAppHref, getTriageOrientation, isEmergencyTriage, triageChallenges, triageCityShortcuts, triageReadiness, triageRelationships, triageTransportOptions, type TriageChallengeId, type TriageReadinessId, type TriageRelationshipId, type TriageTransportId } from "@/lib/interactive-triage";
import { spMunicipalities } from "@/lib/sp-municipalities";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;
const relationshipIcons = [UserRound, UserRound, UsersRound, UsersRound, HeartHandshake, UsersRound];

export function InteractiveTriage() {
  const [step, setStep] = useState<Step>(1);
  const [relationship, setRelationship] = useState<TriageRelationshipId>();
  const [challenges, setChallenges] = useState<TriageChallengeId[]>([]);
  const [readiness, setReadiness] = useState<TriageReadinessId>();
  const [city, setCity] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [transport, setTransport] = useState<TriageTransportId>();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimerRef = useRef<number | undefined>(undefined);
  const filteredCities = useMemo(() => {
    const query = cityQuery.trim().toLocaleLowerCase("pt-BR");
    if (query.length < 2) return [];
    return spMunicipalities.filter((item) => item.toLocaleLowerCase("pt-BR").includes(query)).slice(0, 6);
  }, [cityQuery]);

  useEffect(() => {
    if (step === 6) {
      const timer = window.setTimeout(() => setStep(7), 850);
      return () => window.clearTimeout(timer);
    }
    headingRef.current?.focus({ preventScroll: true });
    return undefined;
  }, [step]);

  useEffect(() => () => {
    if (advanceTimerRef.current !== undefined) window.clearTimeout(advanceTimerRef.current);
  }, []);

  const progress = step >= 6 ? 100 : step * 20;
  const orientation = readiness ? getTriageOrientation(readiness) : undefined;
  const emergency = readiness ? isEmergencyTriage(readiness) : false;
  const complete = relationship && challenges.length > 0 && readiness && city && transport;
  const whatsappHref = complete && !emergency ? buildTriageWhatsAppHref({ relationship, challenges, readiness, city, transport }) : undefined;

  function advanceAfterSelection(nextStep: Step) {
    if (advanceTimerRef.current !== undefined) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = window.setTimeout(() => {
      setStep(nextStep);
      advanceTimerRef.current = undefined;
    }, 250);
  }
  function goBack(previousStep: Step) {
    if (advanceTimerRef.current !== undefined) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = undefined;
    setStep(previousStep);
  }
  function restart() {
    if (advanceTimerRef.current !== undefined) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = undefined;
    setRelationship(undefined); setChallenges([]); setReadiness(undefined); setCity(""); setCityQuery(""); setTransport(undefined); setStep(1);
  }
  function selectCity(value: string) {
    const normalized = value.trim();
    if (normalized.length < 2) return;
    setCity(normalized);
    setCityQuery(normalized);
    advanceAfterSelection(5);
  }
  function submitCity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    selectCity(cityQuery);
  }

  return (
    <section id="triagem-familiar" aria-labelledby="triage-title" className="scroll-mt-24 border-y border-border bg-muted/45 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-secondary"><ShieldCheck className="size-4" aria-hidden="true" /> Triagem preliminar ética · não substitui consulta médica</p>
          {step > 1 && step !== 6 && <Button type="button" variant="ghost" className="min-h-11" onClick={restart}><RotateCcw aria-hidden="true" /> Reiniciar</Button>}
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-glass shadow-xl backdrop-blur-xl">
          <div className="border-b border-border bg-background/70 px-5 py-5 sm:px-8">
            {step >= 2 && step <= 5 && <Button type="button" variant="ghost" size="sm" className="mb-3 -ml-2 h-9 text-muted-foreground" onClick={() => goBack((step - 1) as Step)}><ArrowLeft className="size-4" aria-hidden="true" /> Voltar</Button>}
            <div className="flex items-center justify-between gap-4 text-xs font-semibold text-muted-foreground"><span>{step >= 6 ? "Orientação preparada" : `Etapa ${step} de 5`}</span><span aria-hidden="true">{progress}%</span></div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="Progresso da orientação" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><div className="h-full rounded-full bg-primary transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${progress}%` }} /></div>
          </div>
          <div className="min-h-[32rem] px-5 pb-28 pt-7 sm:px-8 sm:py-10">
            {step === 1 && <StepPanel title="Para quem você está buscando orientação hoje?" subtitle="Não solicitamos nomes de pacientes nem dados de identificação nesta etapa." headingRef={headingRef}>
              <div className="grid grid-cols-2 gap-2.5">{triageRelationships.map((item, index) => { const Icon = relationshipIcons[index] ?? UserRound; const selected = relationship === item.id; return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => { setRelationship(item.id); advanceAfterSelection(2); }} className={cn("h-auto min-h-14 justify-start whitespace-normal px-3 py-3 text-left text-sm sm:px-5", selected && "border-primary bg-brand-soft text-primary")}><Icon className="size-5 shrink-0" aria-hidden="true" /><span className="flex-1">{item.label}</span>{selected && <Check className="size-4 shrink-0" aria-hidden="true" />}</Button>; })}</div>
            </StepPanel>}
            {step === 2 && <StepPanel title="Qual o principal desafio enfrentado no momento?" subtitle="Escolha o tema principal. A resposta organiza a conversa, mas não forma um diagnóstico." headingRef={headingRef}>
              <div className="grid grid-cols-2 gap-2.5">{triageChallenges.map((item) => { const selected = challenges.includes(item.id); return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => { setChallenges([item.id]); advanceAfterSelection(3); }} className={cn("h-auto min-h-16 justify-start whitespace-normal px-3 py-3 text-left text-sm sm:px-5", selected && "border-primary bg-brand-soft text-primary")}><span className="text-xl" aria-hidden="true">{item.icon}</span><span className="flex-1">{item.label}</span>{selected && <Check className="size-4 shrink-0" aria-hidden="true" />}</Button>; })}</div>
            </StepPanel>}
            {step === 3 && <StepPanel title="Como está a disposição para receber cuidado?" subtitle="Escolha a descrição mais próxima do momento atual. Em risco imediato, o guia prioriza serviços de emergência." headingRef={headingRef}>
              <div className="grid gap-3">{triageReadiness.map((item) => { const selected = readiness === item.id; return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => { setReadiness(item.id); advanceAfterSelection(item.id === "risk" ? 6 : 4); }} className={cn("h-auto min-h-20 justify-start whitespace-normal px-5 py-4 text-left", selected && (item.id === "risk" ? "border-destructive bg-destructive/10" : "border-primary bg-brand-soft text-primary"))}>{item.id === "risk" ? <Siren className="size-5 text-destructive" aria-hidden="true" /> : <HeartHandshake className="size-5" aria-hidden="true" />}<span><strong className="block">{item.label}</strong><span className="mt-1 block text-xs font-normal text-muted-foreground">{item.detail}</span></span></Button>; })}</div>
            </StepPanel>}
            {step === 4 && <StepPanel title="Em qual cidade você está?" subtitle="Orientamos famílias de todo o Estado de São Paulo, com suporte para contato e agendamento 24 horas. A unidade física fica em Araraquara." headingRef={headingRef}>
              <form onSubmit={submitCity}><label htmlFor="triage-city-search" className="text-sm font-semibold">Digite qualquer município paulista</label><div className="relative mt-2"><Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><input id="triage-city-search" type="search" autoComplete="address-level2" value={cityQuery} onChange={(event) => setCityQuery(event.target.value)} placeholder="Ex.: Campinas" className="min-h-12 w-full rounded-md border border-input bg-background pl-12 pr-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring" /></div></form>
              {filteredCities.length > 0 && <div className="mt-2 grid gap-1 rounded-md border border-border bg-background p-1" role="listbox" aria-label="Sugestões de municípios">{filteredCities.map((item) => <Button key={item} type="button" variant="ghost" role="option" aria-selected={city === item} onClick={() => selectCity(item)} className="min-h-11 justify-start">{item}</Button>)}</div>}
              <p className="mb-2 mt-5 text-xs font-semibold uppercase text-muted-foreground">Atalhos frequentes</p><div className="grid grid-cols-2 gap-2">{triageCityShortcuts.map((item) => <Button key={item} type="button" variant="outline" onClick={() => selectCity(item)} className="h-auto min-h-12 whitespace-normal px-3 py-2">{item}</Button>)}</div>
            </StepPanel>}
            {step === 5 && <StepPanel title="Vocês precisam de transporte ou apoio para locomoção?" subtitle="A orientação e o agendamento são confirmados com a equipe. Em emergência, não aguarde transporte particular: ligue 192." headingRef={headingRef}>
              <div className="grid gap-3">{triageTransportOptions.map((item) => { const selected = transport === item.id; return <Button key={item.id} type="button" variant="outline" aria-pressed={selected} onClick={() => { setTransport(item.id); advanceAfterSelection(6); }} className={cn("h-auto min-h-16 justify-start whitespace-normal px-4 py-3 text-left", selected && "border-primary bg-brand-soft text-primary")}><span className="text-xl" aria-hidden="true">{item.icon}</span><span className="flex-1">{item.label}</span>{selected && <Check className="size-4 shrink-0" aria-hidden="true" />}</Button>; })}</div>
            </StepPanel>}
            {step === 6 && <div className="flex min-h-[25rem] flex-col items-center justify-center text-center" role="status" aria-live="polite"><LoaderCircle className="size-10 animate-spin text-primary motion-reduce:animate-none" aria-hidden="true" /><h2 ref={headingRef} tabIndex={-1} id="triage-title" className="mt-5 font-display text-2xl font-semibold outline-none sm:text-3xl">Organizando sua orientação preliminar…</h2><p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">As respostas permanecem somente nesta página e não são enviadas durante este processamento.</p></div>}
            {step === 7 && orientation && <StepPanel title={emergency ? orientation.title : "Estamos prontos para acolher você e sua família."} subtitle={emergency ? orientation.summary : "Abra o WhatsApp para compartilhar suas respostas e conversar com a equipe de Araraquara."} headingRef={headingRef}>
               {emergency ? <div role="alert" className="border-l-4 border-destructive bg-destructive/10 p-5"><p className="font-semibold">Não espere uma resposta da Central para decidir sobre urgência.</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Este guia e o WhatsApp institucional não prestam atendimento de emergência.</p><Button asChild className="mt-5 min-h-12"><a href="tel:192"><Siren aria-hidden="true" /> Ligar para o SAMU 192</a></Button></div> : <>{whatsappHref && <Button asChild className="h-auto min-h-14 w-full whitespace-normal bg-whatsapp px-5 py-4 text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Conversar com o Plantão no WhatsApp</a></Button>}<p className="mt-4 text-xs leading-relaxed text-muted-foreground">Suas respostas só serão compartilhadas se você abrir o WhatsApp e confirmar o envio.</p></>}
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