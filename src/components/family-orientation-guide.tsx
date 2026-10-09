import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronDown, ExternalLink, HeartHandshake, Hospital, Info, MessageCircle, Phone, RotateCcw, ShieldCheck, UserRound, UsersRound, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cityDirectory } from "@/lib/city-pages";
import { cityGuideHref, emergencyPhoneHref, getGuideResult, guideJourneys, needsEmergency, type GuidePath, type SafetyAnswer } from "@/lib/family-guide";
import { gamblingSource, mentalHealthSource, municipalGuideSources } from "@/lib/family-guide-sources";
import { whatsappHref } from "@/lib/site";

type GuideState = { stage: "start" | "safety" | "question" | "result" | "emergency"; path?: GuidePath; choice?: string };
const icons = { self: UserRound, family: UsersRound, welcome: HeartHandshake, substances: Info, gambling: WalletCards, public: Hospital };
const cities = [{ slug: "araraquara", name: "Araraquara" }, ...cityDirectory];

export function FamilyOrientationGuide() {
  const [history, setHistory] = useState<GuideState[]>([{ stage: "start" }]);
  const [city, setCity] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const state = history[history.length - 1] ?? { stage: "start" };
  const journey = guideJourneys.find((item) => item.id === state.path);
  const result = state.path && state.choice ? getGuideResult(state.path, state.choice) : undefined;
  useEffect(() => { if (history.length > 1) titleRef.current?.focus({ preventScroll: true }); }, [history]);
  function advance(next: GuideState) { setHistory((previous) => [...previous, next]); }
  function restart() { setCity(""); setHistory([{ stage: "start" }]); requestAnimationFrame(() => titleRef.current?.focus({ preventScroll: true })); }
  function safety(answer: SafetyAnswer) { advance({ ...state, stage: needsEmergency(answer) ? "emergency" : "question" }); }
  const title = state.stage === "start" ? "Como podemos orientar você hoje?" : state.stage === "safety" ? "Há uma situação de risco imediato agora?" : state.stage === "emergency" ? "Priorize atendimento de emergência" : state.stage === "result" ? result?.title ?? "Orientação indisponível" : journey?.question ?? "Escolha um caminho";
  const selectedCity = cities.find((item) => item.slug === city);
  return (
    <section id="guia-orientacao-familia" aria-labelledby="family-guide-title" className="border-t border-border py-16 lg:py-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-secondary"><HeartHandshake className="size-5" aria-hidden="true" /> Guia de Orientação à Família</p>
        {state.stage !== "start" && <div className="flex items-center gap-1">
          <Button variant="ghost" className="min-h-11" onClick={() => setHistory((previous) => previous.slice(0, -1))}><ArrowLeft aria-hidden="true" /> Voltar</Button>
          <Button variant="ghost" className="min-h-11" onClick={restart}><RotateCcw aria-hidden="true" /> Reiniciar</Button>
        </div>}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Etapa atual">
        <span className={state.stage === "start" ? "font-semibold text-secondary" : ""}>Seu caminho</span><ArrowRight className="size-3" aria-hidden="true" />
        <span className={state.stage === "safety" || state.stage === "question" ? "font-semibold text-secondary" : ""}>Sua dúvida</span><ArrowRight className="size-3" aria-hidden="true" />
        <span className={state.stage === "result" || state.stage === "emergency" ? "font-semibold text-secondary" : ""}>Próximos passos</span>
      </div>
      <h2 ref={titleRef} tabIndex={-1} id="family-guide-title" className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight focus:outline-none sm:text-4xl">{title}</h2>
      {state.stage === "start" && <>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Informação para começar com mais clareza, no seu tempo. Nenhuma resposta define um diagnóstico ou a necessidade de internação.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {guideJourneys.map((item) => { const Icon = icons[item.id]; return <Button key={item.id} variant="outline" className="h-auto min-h-20 justify-start gap-4 whitespace-normal rounded-lg px-5 py-4 text-left leading-relaxed hover:bg-brand-soft" onClick={() => advance({ stage: "safety", path: item.id })}>
            <Icon className="size-5 shrink-0 text-secondary" aria-hidden="true" /><span className="flex-1">{item.label}</span><ArrowRight aria-hidden="true" />
          </Button>; })}
        </div>
      </>}
      {state.stage === "safety" && <>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Por exemplo: perda de consciência, convulsão, dificuldade para respirar, violência em curso ou possibilidade imediata de alguém se ferir. Não é uma avaliação clínica.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button className="min-h-12" onClick={() => safety("no")}>Não, quero orientação geral</Button>
          <Button variant="outline" className="min-h-12" onClick={() => safety("yes")}>Sim, há risco imediato</Button>
          <Button variant="outline" className="min-h-12" onClick={() => safety("unsure")}>Não tenho certeza</Button>
        </div>
      </>}
      {state.stage === "emergency" && <div role="alert" className="mt-6 max-w-3xl border-l-4 border-destructive pl-5">
        <p className="text-base leading-relaxed">Se há risco imediato ou dúvida sobre uma emergência médica, ligue para o <strong>SAMU 192</strong> ou procure um serviço de emergência. Em violência em curso, procure um local seguro e acione a Polícia Militar pelo 190.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Não espere por uma resposta da Central ou continue o guia para decidir sobre urgência. Este recurso não presta atendimento de emergência.</p>
        <Button asChild className="mt-5 min-h-12"><a href={emergencyPhoneHref}><Phone aria-hidden="true" /> Ligar para o SAMU 192</a></Button>
      </div>}
      {state.stage === "question" && journey && <>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{journey.summary}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">{journey.choices.map((choice) => <Button key={choice.id} variant="outline" className="h-auto min-h-16 justify-between whitespace-normal rounded-lg px-5 py-4 text-left leading-relaxed" onClick={() => advance({ ...state, stage: "result", choice: choice.id })}>{choice.label}<ArrowRight aria-hidden="true" /></Button>)}</div>
      </>}
      {state.stage === "result" && result && <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-secondary"><Check className="size-4" aria-hidden="true" /> Caminhos possíveis, sem indicação automática</p>
          <ol className="mt-5 divide-y divide-border border-y border-border">{result.steps.map((step, index) => <li key={step} className="flex gap-4 py-5 text-sm leading-relaxed"><span className="font-semibold text-secondary" aria-hidden="true">0{index + 1}</span><span>{step}</span></li>)}</ol>
          <div className="mt-5 flex flex-col items-start gap-3">{result.links.map((item) => <Button asChild key={item.to} variant="link" className="h-auto whitespace-normal p-0 text-left"><Link to={item.to}>{item.title}<ArrowRight aria-hidden="true" /></Link></Button>)}</div>
          {state.path === "gambling" && <a href={gamblingSource} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-start gap-2 text-sm font-medium text-secondary underline underline-offset-4">Ministério da Saúde: cuidado relacionado a apostas<ExternalLink className="mt-1 size-4 shrink-0" aria-hidden="true" /></a>}
        </div>
        <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h3 className="font-display text-xl font-semibold">Referências na sua região</h3>
          <label htmlFor="family-guide-city" className="mt-5 block text-sm font-medium">Município para consulta</label>
          <select id="family-guide-city" value={city} onChange={(event) => setCity(event.target.value)} className="mt-2 min-h-12 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-ring">
            <option value="">Selecione um município</option>{cities.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}<option value="other">Outro município</option>
          </select>
          {selectedCity ? <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <a href={municipalGuideSources[city]} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 font-semibold text-secondary underline underline-offset-4">Referência oficial de saúde de {selectedCity.name}<ExternalLink className="mt-1 size-4 shrink-0" aria-hidden="true" /></a>
            <a href={cityGuideHref(city)} className="flex items-start gap-2 font-semibold text-secondary underline underline-offset-4">Conteúdo local da Central sobre {selectedCity.name}<ArrowRight className="mt-1 size-4 shrink-0" aria-hidden="true" /></a>
            <p className="text-muted-foreground">Consulte a fonte municipal para confirmar serviços e formas de acesso. Não confirmamos horários, vagas ou atendimento em tempo real.</p>
          </div> : <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{city === "other" ? "Procure o site oficial da prefeitura ou a Secretaria Municipal de Saúde do seu município. Não temos uma referência local verificada para todas as cidades." : "A UBS pode orientar sobre a rede local. Selecione uma cidade para consultar referências públicas já citadas no site."}</p>}
          <a href={mentalHealthSource} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-start gap-2 text-sm font-medium text-secondary underline underline-offset-4">Ministério da Saúde: rede de atenção psicossocial<ExternalLink className="mt-1 size-4 shrink-0" aria-hidden="true" /></a>
          {state.path !== "public" && state.path !== "gambling" && <Button asChild className="mt-6 h-auto min-h-12 w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Esclarecer dúvidas com a Central</a></Button>}
          {(state.path === "public" || state.path === "gambling") && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Para dúvidas institucionais, <a className="font-semibold text-secondary underline" href={whatsappHref} target="_blank" rel="noopener noreferrer">converse com a Central pelo WhatsApp</a>. Isso não substitui o atendimento do SUS nem confirma serviço para apostas.</p>}
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">A única unidade física da Central fica em Araraquara. Não há filiais nas demais cidades nem parceria com a rede pública confirmada neste guia.</p>
        </div>
      </div>}
      {state.stage === "result" && !result && <div role="alert" className="mt-5"><p>Não foi possível encontrar essa orientação.</p><Button onClick={restart} className="mt-3">Escolher outro caminho</Button></div>}
      <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> Suas escolhas ficam apenas nesta página: não são salvas nem enviadas a serviços externos. Este guia é educativo e não substitui avaliação profissional.</p>
      <details className="group mt-7 border-t border-border pt-5">
        <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-secondary">Informações educativas e referências<ChevronDown className="size-4 shrink-0 group-open:rotate-180" aria-hidden="true" /></summary>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">{guideJourneys.map((item) => <div key={item.id}><h3 className="font-display text-lg font-semibold">{item.label}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p></div>)}</div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Em risco imediato, procure emergência médica ou ligue 192. Informações sobre UBS, CAPS e CAPS AD devem ser confirmadas na rede municipal; este guia não informa disponibilidade.</p>
        <div className="mt-4 flex flex-wrap gap-5 text-sm"><Link className="text-secondary underline" to="/clinica-de-reabilitacao">Clínica de reabilitação</Link><Link className="text-secondary underline" to="/familia">Família</Link><Link className="text-secondary underline" to="/cidades">Todas as cidades</Link><Link className="text-secondary underline" to="/blog">Artigos do blog</Link></div>
        <a className="mt-4 block text-sm text-secondary underline" href={gamblingSource} target="_blank" rel="noopener noreferrer">Fonte: Ministério da Saúde — linha de cuidado para problemas relacionados a jogos de apostas</a>
        <a className="mt-3 block text-sm text-secondary underline" href={mentalHealthSource} target="_blank" rel="noopener noreferrer">Fonte: Ministério da Saúde — Rede de Atenção Psicossocial</a>
      </details>
    </section>
  );
}