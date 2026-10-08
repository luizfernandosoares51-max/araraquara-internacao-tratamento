import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";

export const Route = createFileRoute("/clinica-de-recuperacao-bauru-teste")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Clínica de Recuperação em Bauru | Tratamento e Acolhimento" },
      { name: "description", content: "Clínica de recuperação em Bauru com acolhimento, acompanhamento terapêutico e orientação para famílias que buscam tratamento para dependência química e alcoolismo." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Clínica de Recuperação em Bauru | Tratamento e Acolhimento" },
      { property: "og:description", content: "Orientação para moradores de Bauru e suas famílias sobre acolhimento e recuperação. A unidade física da Central fica somente em Araraquara." },
      { property: "og:url", content: "https://centraldeacolhimentoereabilitacao.com/clinica-de-recuperacao-bauru-teste" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://centraldeacolhimentoereabilitacao.com/clinica-de-recuperacao-bauru-teste" }],
  }),
  component: BauruExperimentalPage,
});

function BauruExperimentalPage() {
  return (
    <div className="home-serene site-editorial min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-6">
        <p className="mx-auto max-w-4xl font-display text-xl text-primary">Central de Acolhimento e Reabilitação</p>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <p className="mb-4 text-sm font-medium text-primary">Orientação para moradores de Bauru e suas famílias</p>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Clínica de Recuperação em Bauru</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Buscar uma clínica de recuperação em Bauru pode começar com uma dúvida sobre o uso de álcool ou outras drogas, uma mudança na rotina ou a preocupação de alguém próximo. Antes de decidir sobre tratamento, é importante compreender a situação, ouvir a pessoa e procurar uma avaliação profissional.
        </p>
        <p className="mt-5 border-l-2 border-accent pl-5 leading-relaxed">
          Esta página orienta quem vive em Bauru. A Central de Acolhimento e Reabilitação possui uma única unidade física, em Araraquara; não possui unidade ou filial em Bauru. O contato permite esclarecer dúvidas, sem substituir uma avaliação clínica.
        </p>
        <figure className="my-10">
          <img src={visualAssets.clinic.src} alt={visualAssets.clinic.alt} width={1600} height={1067} className="aspect-[16/9] w-full object-cover" />
          <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{conceptualImageCaption}</figcaption>
        </figure>
        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 font-display text-2xl text-primary">Tratamento começa com escuta e avaliação</h2>
            <p>A escolha do cuidado não deve se basear apenas na quantidade consumida ou em um episódio isolado. A avaliação considera saúde física e mental, frequência do uso, dificuldades no cotidiano, condições de segurança e recursos de apoio. Esses elementos ajudam profissionais habilitados a discutir possibilidades de acompanhamento e a necessidade de cuidados mais intensivos, quando indicada.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl text-primary">Acolhimento sem julgamento</h2>
            <p>Acolher não é minimizar os riscos nem exigir que tudo seja resolvido imediatamente. É oferecer espaço para uma conversa respeitosa, reconhecer o sofrimento e organizar o próximo passo possível. Para uma família de Bauru, isso pode significar reunir dúvidas, procurar orientação e conversar sobre como buscar atendimento sem ameaças ou exposição desnecessária.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl text-primary">O papel do acompanhamento terapêutico</h2>
            <p>Durante um tratamento, o acompanhamento terapêutico pode ajudar a compreender situações associadas ao consumo, desenvolver formas de lidar com conflitos e reorganizar hábitos. A composição do cuidado, sua frequência e os objetivos devem ser definidos pelos profissionais responsáveis conforme a avaliação individual. Não há uma duração universal nem uma abordagem adequada para todas as pessoas.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl text-primary">Participação da família com limites saudáveis</h2>
            <p>Familiares também precisam de orientação. Apoiar pode envolver comunicação clara, respeito à privacidade e limites que protejam todos os envolvidos. A família não deve assumir sozinha a responsabilidade pela recuperação, administrar medicamentos por conta própria ou substituir os profissionais. Ao considerar atendimento fora de Bauru, vale esclarecer previamente as condições de contato e participação familiar.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl text-primary">Dependência química e alcoolismo</h2>
            <p>O uso problemático de álcool e outras substâncias pode afetar relações, trabalho, saúde e autocuidado. Esses impactos merecem atenção, mas um texto na internet não permite estabelecer diagnóstico. A dependência precisa ser avaliada por profissionais, e reduzir ou interromper o consumo pode exigir supervisão médica, especialmente quando há risco de abstinência. Evite tentar uma desintoxicação sem orientação.</p>
            <p className="mt-4">Em caso de perda de consciência, convulsões, dificuldade para respirar ou outra situação de risco imediato, acione o SAMU pelo 192. O contato institucional da Central não é um serviço de emergência.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl text-primary">Recuperação como processo contínuo</h2>
            <p>A recuperação envolve mais do que interromper o consumo. Construir uma rotina possível, fortalecer vínculos e acompanhar a saúde são temas que podem fazer parte do cuidado. Dificuldades ao longo do caminho pedem reavaliação e apoio, não julgamento. Nenhum serviço pode garantir cura ou resultados individuais; decisões e objetivos devem ser revistos conforme as necessidades da pessoa.</p>
          </section>
          <section className="border-t border-border pt-10">
            <h2 className="mb-4 font-display text-2xl text-primary">Converse com a Central</h2>
            <p>Se você está em Bauru e busca orientação para si ou para um familiar, entre em contato para esclarecer dúvidas sobre acolhimento e os próximos passos. Antes de qualquer deslocamento, confirme diretamente as informações sobre a unidade em Araraquara e as condições de atendimento.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg"><a href="https://wa.me/5516997654579" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp</a></Button>
              <Button asChild variant="outline" size="lg"><a href="tel:+5516997654579"><Phone aria-hidden="true" />(16) 99765-4579</a></Button>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">Central de Acolhimento e Reabilitação · Unidade física somente em Araraquara</footer>
    </div>
  );
}