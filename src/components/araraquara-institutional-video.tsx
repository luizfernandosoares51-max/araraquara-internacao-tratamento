import { HeartHandshake, MapPinCheck, MessageCircle, ShieldCheck } from "lucide-react";

import institutionalVideo from "@/assets/central-video-institucional-16x9.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

const purposePillars = [
  {
    title: "Acolhimento Familiar sem Julgamentos",
    text: "A dependência química e o alcoolismo afetam toda a dinâmica familiar. Nosso compromisso inicial é oferecer um espaço seguro de escuta ativa, onde a família e a pessoa acolhida encontram respeito, amparo emocional e direcionamento ético desde o primeiro contato.",
    icon: HeartHandshake,
  },
  {
    title: "Cuidado Integrado e Humanizado",
    text: "Apresentamos uma abordagem multidisciplinar estruturada, reunindo apoio psicológico, supervisão diária de enfermagem, laborterapia, convivência terapêutica, prevenção à recaída e o programa de 12 Passos. Quando há necessidade de desintoxicação médica ou internação hospitalar, a família recebe orientação para encaminhamento a um estabelecimento habilitado.",
    icon: ShieldCheck,
  },
  {
    title: "Presença Regional e Transparência Legal",
    text: "Atuamos com transparência e observância da legislação aplicável, incluindo a Lei Federal nº 13.840/2019. A sede própria fica em Araraquara e recebe famílias da região; o plantão de orientação e suporte para agendamento funciona 24 horas, enquanto visitas e transporte dependem de agendamento.",
    icon: MapPinCheck,
  },
] as const;

export function AraraquaraInstitutionalVideo() {
  return (
    <section aria-labelledby="video-institucional-title" className="border-y border-deep/10 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Mensagem institucional</p>
        <h2 id="video-institucional-title" className="mt-3 max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">
          Nosso Propósito: Acolher com Dignidade, Cuidado e Esperança
        </h2>
        <p id="video-institucional-description" className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Entenda os pilares que guiam cada etapa do nosso atendimento terapêutico e familiar.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <video
            className="aspect-video w-full bg-deep object-contain"
            controls
            playsInline
            preload="metadata"
            aria-label="Vídeo institucional sobre acolhimento humanizado, cuidado integrado e orientação familiar"
            aria-describedby="video-institucional-description video-institucional-caption"
          >
            <source src={institutionalVideo.url} type="video/mp4" />
            Seu navegador não oferece suporte à reprodução deste vídeo.
          </video>
        </div>
        <p id="video-institucional-caption" className="mt-3 max-w-4xl text-xs leading-relaxed text-muted-foreground">
          Vídeo conceitual institucional. As cenas representam acolhimento, escuta e presença regional; não registram pacientes, atendimentos ou instalações reais.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {purposePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-whatsapp px-6 py-4 text-center text-whatsapp-foreground shadow-lg sm:w-auto">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" aria-hidden="true" />
              Falar com Nossa Equipe de Plantão 24h
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}