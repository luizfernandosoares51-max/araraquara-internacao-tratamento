import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, HeartHandshake, MapPinCheck, MessageCircle, Play, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import institutionalVideo from "@/assets/central-video-institucional-16x9.mp4.asset.json";
import progressaoVideo from "@/assets/progressao-do-colapso.mp4.asset.json";
import { siteUrl, whatsappHref } from "@/lib/site";

const pageTitle = "Nossos Vídeos Institucionais e Terapêuticos | Central";
const pageDescription =
  "Assista aos vídeos da Central sobre dependência química, acolhimento familiar, cuidado humanizado, prevenção e recuperação.";

const videoSource = progressaoVideo.url;

const stages = [
  {
    number: "1",
    title: "Pré-adolescência — O começo",
    items: [
      "Mudanças de comportamento",
      "Busca por aceitação",
      "Influência do ambiente e dos grupos",
      "Primeiros sinais de afastamento familiar",
    ],
  },
  {
    number: "2",
    title: "Adolescência — Experimentação",
    items: [
      "Curiosidade e experimentação",
      "Maior influência dos amigos",
      "Alterações de rotina e comportamento",
      "Normalização de determinados hábitos",
    ],
  },
  {
    number: "3",
    title: "Início do uso — O hábito",
    items: [
      "O comportamento começa a se repetir",
      "O uso passa a fazer parte da rotina",
      "Negação ou minimização do problema",
      "Família começa a perceber mudanças",
    ],
  },
  {
    number: "4",
    title: "Progressão — Perda de controle",
    items: [
      "Aumento da frequência",
      "Prejuízos nos relacionamentos",
      "Problemas familiares, sociais ou profissionais",
      "Tentativas de controlar ou interromper sem sucesso",
    ],
  },
  {
    number: "5",
    title: "Compulsão — O colapso",
    items: [
      "O comportamento passa a dominar a rotina",
      "Dificuldade crescente de interromper o uso",
      "Consequências cada vez maiores",
      "Necessidade de buscar ajuda e tratamento",
    ],
  },
];

const institutionalPillars = [
  {
    title: "Acolhimento Familiar sem Julgamentos",
    text: "Suporte emocional e escuta ativa para a família desde o primeiro contato.",
    icon: HeartHandshake,
  },
  {
    title: "Cuidado Integrado e Humanizado",
    text: "Acompanhamento médico, psicológico, enfermagem e 12 Passos com foco na autonomia.",
    icon: ShieldCheck,
  },
  {
    title: "Presença Regional e Segurança Legal",
    text: "Atendimento sério e transparente em Araraquara e região, em conformidade com a Lei Federal nº 13.840/2019.",
    icon: MapPinCheck,
  },
] as const;

export const Route = createFileRoute("/videos")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/videos` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/videos` }],
  }),
  component: VideosPage,
});

function VideosPage() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <main className="site-editorial min-h-screen bg-deep font-body text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12">
        <Button asChild variant="outline" className="mb-8 h-auto min-h-11 px-4 py-3">
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            Voltar para a página inicial
          </Link>
        </Button>
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
          Vídeos
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
          Nossos Vídeos Institucionais e Terapêuticos
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          Assista ao conteúdo da Central de Acolhimento e Reabilitação sobre dependência química,
          alcoolismo, prevenção, acolhimento familiar e cuidado humanizado.
        </p>

        <section aria-labelledby="progressao-title" className="mt-12 border-t border-border pt-10">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            Dependência química e prevenção
          </p>
          <h2 id="progressao-title" className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Progressão do Colapso
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Uma sequência cronológica de comportamentos que pode começar ainda na pré-adolescência
            e evoluir gradualmente até a compulsão.
          </p>

          <div className="glass-panel mt-7 overflow-hidden rounded-2xl">
            {showPlayer ? (
              videoSource ? (
                <video
                  className="aspect-video w-full bg-background object-contain"
                  controls
                  preload="metadata"
                  aria-label="Vídeo Progressão do Colapso sobre mudanças de comportamento, dependência química, compulsão e busca por tratamento"
                >
                  <source src={videoSource} type="video/mp4" />
                  Seu navegador não oferece suporte à reprodução deste vídeo.
                </video>
              ) : (
                <div className="grid aspect-video place-items-center bg-background/50 px-6 text-center">
                  <div>
                    <Play className="mx-auto size-10 text-secondary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">Vídeo em preparação</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      O arquivo ou link será disponibilizado neste espaço.
                    </p>
                  </div>
                </div>
              )
            ) : (
              <div className="grid aspect-video place-items-center bg-background/50 px-5">
                <Button
                  type="button"
                  size="lg"
                  className="h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center"
                  onClick={() => setShowPlayer(true)}
                  aria-controls="video-progressao"
                  aria-expanded={showPlayer}
                >
                  <Play aria-hidden="true" />
                  Assistir: Progressão do Colapso
                </Button>
              </div>
            )}
            <p id="video-progressao" className="border-t border-border px-5 py-4 text-xs leading-relaxed text-muted-foreground">
              Conteúdo educativo sobre sinais progressivos relacionados à dependência química e ao
              alcoolismo, além da importância da prevenção, do acolhimento e da busca por tratamento.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              O vídeo apresenta uma narrativa cronológica dividida em etapas, mostrando como
              determinados comportamentos podem se intensificar ao longo do tempo:
            </p>
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {stages.map((stage) => (
                <li key={stage.number} className="grid gap-4 py-6 sm:grid-cols-[2.5rem_1fr]">
                  <span className="grid size-9 place-items-center rounded-full bg-brand font-display text-sm font-bold text-primary-foreground">
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold uppercase">{stage.title}</h3>
                    <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="institucional-title" className="mt-16 border-t border-border pt-10">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            Mensagem institucional
          </p>
          <h2 id="institucional-title" className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Acolhimento, Conscientização e Esperança
          </h2>
          <p id="institucional-description" className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            Uma apresentação conceitual dos princípios que orientam o acolhimento, o cuidado e o apoio oferecido às famílias.
          </p>

          <div className="mt-7 overflow-hidden rounded-lg border border-border bg-card shadow-xl">
            <video
              className="aspect-video w-full bg-deep object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label="Vídeo institucional sobre acolhimento familiar, cuidado humanizado e presença regional"
              aria-describedby="institucional-description institucional-caption"
            >
              <source src={institutionalVideo.url} type="video/mp4" />
              Seu navegador não oferece suporte à reprodução deste vídeo.
            </video>
          </div>
          <p id="institucional-caption" className="mt-3 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Vídeo conceitual institucional. As cenas representam acolhimento, escuta e presença regional; não registram pacientes, atendimentos ou instalações reais.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {institutionalPillars.map((pillar) => {
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
                Plantão de orientação 24h: (16) 99765-4579
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}