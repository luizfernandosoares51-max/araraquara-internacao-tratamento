import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Camera, MessageCircle, Phone } from "lucide-react";

import { phoneDisplay, siteUrl, whatsappHref } from "@/lib/site";

const articleTitle = "Dependência Química em São Carlos | Acolhimento e Tratamento";
const articleDescription =
  "Informações sobre dependência química em São Carlos, acolhimento, tratamento, alcoolismo, serviços públicos e caminhos para buscar ajuda.";
const articleUrl = `${siteUrl}/blog/dependencia-quimica-sao-carlos`;

export const Route = createFileRoute("/blog/dependencia-quimica-sao-carlos")({
  head: () => ({
    meta: [
      { title: articleTitle },
      { name: "description", content: articleDescription },
      { property: "og:title", content: articleTitle },
      { property: "og:description", content: articleDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: articleUrl },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: articleTitle },
      { name: "twitter:description", content: articleDescription },
    ],
    links: [{ rel: "canonical", href: articleUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Article", "BlogPosting"],
              headline: "Dependência Química em São Carlos: acolhimento, tratamento e onde buscar ajuda",
              description: articleDescription,
              mainEntityOfPage: articleUrl,
              author: {
                "@type": "Organization",
                name: "Central de Acolhimento e Reabilitação",
              },
              publisher: {
                "@type": "Organization",
                name: "Central de Acolhimento e Reabilitação",
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
                { "@type": "ListItem", position: 3, name: "Dependência Química em São Carlos", item: articleUrl },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <main className="min-h-screen bg-deep font-body text-foreground">
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao blog
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            São Carlos · Dependência química
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
            Dependência Química em São Carlos: acolhimento, tratamento e onde buscar ajuda
          </h1>
        </header>

        <div className="mt-9 space-y-6 text-[16px] leading-8 text-muted-foreground">
          <p>
            A dependência química pode afetar a saúde, as relações sociais, o trabalho, os estudos e a
            rotina de uma pessoa. Seus efeitos também alcançam a família, que muitas vezes enfrenta
            dúvidas, conflitos e dificuldade para saber como agir.
          </p>
          <p>
            Para quem enfrenta a dependência química em São Carlos, reconhecer o problema e procurar
            orientação pode ser um primeiro passo importante. O tratamento para dependência química
            em São Carlos deve considerar cada história, incluindo situações de alcoolismo e de uso
            problemático de álcool e outras drogas, sempre com acolhimento e avaliação responsável.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Dependência química em São Carlos: quando procurar ajuda?
          </h2>
          <p>
            O uso de álcool ou outras drogas merece atenção quando começa a provocar prejuízos ou se
            torna difícil de controlar. Não existe um sinal isolado que confirme um diagnóstico, mas
            mudanças persistentes podem indicar que é hora de buscar orientação profissional.
          </p>
          <p>
            Alguns sinais que podem justificar essa procura são:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
            <li>dificuldade para reduzir ou interromper o consumo;</li>
            <li>prejuízos na saúde, no trabalho, nos estudos ou nos relacionamentos;</li>
            <li>mudanças persistentes de comportamento, rotina ou círculo social;</li>
            <li>conflitos frequentes e afastamento de pessoas próximas;</li>
            <li>tentativas anteriores de mudança que não foram sustentadas;</li>
            <li>preocupação da própria pessoa ou de familiares com o uso.</li>
          </ul>
          <p>
            A família não precisa esperar uma crise grave para pedir ajuda. Uma avaliação médica,
            psicológica ou de outros profissionais pode esclarecer necessidades e possibilidades sem
            pressupor que exista uma única solução.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Onde buscar atendimento público em São Carlos?
          </h2>
          <p>
            São Carlos conta com uma rede pública de saúde e atenção psicossocial. Entre os serviços
            municipais está o Centro de Atenção Psicossocial Álcool e Drogas (CAPS AD), destinado ao
            atendimento relacionado aos prejuízos decorrentes do uso problemático de álcool e outras
            drogas.
          </p>
          <p>
            Conforme a página oficial da Prefeitura de São Carlos, o CAPS AD fica na Rua Herbert de
            Souza, 111, bairro Romeu Santini, e informa os telefones (16) 3374-3388, (16) 3307-8368 e
            (16) 3374-2264. Como endereço, telefones e horários podem mudar, confirme os dados antes de
            se deslocar na
            {" "}<a href="https://saocarlos.sp.gov.br/index.php/saude/153937-centro-de-atencao-psicossocial-caps-alcool-e-drogas.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary hover:underline">fonte oficial da Prefeitura de São Carlos</a>.
          </p>
          <p>
            A porta de entrada mais adequada depende da situação de cada pessoa. Também é possível
            buscar orientação pela rede pública de saúde do município.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            CAPS, tratamento e acolhimento: qual a diferença?
          </h2>
          <p>
            O CAPS AD integra a rede pública de atenção psicossocial e oferece cuidado em saúde. Ele
            não deve ser apresentado como sinônimo de clínica de recuperação ou de internação. Cada
            modalidade tem objetivos, rotinas e critérios próprios.
          </p>
          <p>
            Dependendo da avaliação, o cuidado pode incluir acompanhamento ambulatorial, atenção
            psicossocial, apoio médico, acolhimento, tratamento residencial ou outras estratégias.
            Consulte também as informações gerais sobre
            {" "}<Link to="/" className="font-semibold text-secondary hover:underline">tratamento para dependência química</Link>.
          </p>

          <a
            href="/#galeria-titulo"
            className="glass-panel flex min-h-16 items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors hover:bg-glass-strong"
          >
            <span className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-secondary sm:text-base">
              <Camera className="size-5 shrink-0" aria-hidden="true" />
              Conheça nossa galeria de fotos
            </span>
            <ArrowRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          </a>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Quando a família procura uma clínica de recuperação em São Carlos?
          </h2>
          <p>
            Algumas famílias procuram serviços de acolhimento ou tratamento residencial quando
            entendem que a pessoa pode precisar de acompanhamento mais estruturado. Essa busca deve
            ser acompanhada de avaliação responsável; internação para dependência química em São
            Carlos não é necessária para todos e não deve ser tratada como única alternativa.
          </p>
          <p>
            Para conhecer opções de acolhimento e tratamento disponíveis para quem procura uma
            {" "}<Link to="/$citySlug" params={{ citySlug: "clinica-de-recuperacao-em-sao-carlos-sp" }} className="font-semibold text-secondary hover:underline">clínica de recuperação em São Carlos</Link>, consulte a página específica. A disponibilidade e a adequação de qualquer serviço precisam ser verificadas para cada caso.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Como escolher um tratamento para dependência química?
          </h2>
          <p>
            Antes de decidir, familiares podem solicitar informações claras e comparar aspectos
            essenciais do serviço:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
            <li>proposta terapêutica e plano de acompanhamento;</li>
            <li>profissionais responsáveis pelo cuidado;</li>
            <li>condições de acolhimento, segurança e contato com a família;</li>
            <li>transparência nas informações fornecidas;</li>
            <li>regularidade e documentação do serviço.</li>
          </ul>
          <p>Esses critérios ajudam a fazer perguntas e compreender limites e responsabilidades, sem garantias de cura ou resultado.</p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">A importância da família no tratamento</h2>
          <p>A participação familiar pode contribuir para a continuidade do cuidado. Escuta, comunicação respeitosa, limites claros e orientação profissional ajudam a família a apoiar sem assumir sozinha toda a responsabilidade pelo tratamento.</p>
          <p>Familiares também podem precisar de apoio para lidar com medo, desgaste e dúvidas, protegendo a própria saúde emocional.</p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Onde encontrar ajuda em São Carlos?
          </h2>
          <p>
            Os caminhos podem incluir unidades da rede de saúde, serviços públicos, o CAPS AD e
            serviços de acolhimento e tratamento, conforme a necessidade identificada. Em situações
            de urgência, risco imediato ou emergência clínica, procure um serviço de emergência.
          </p>
          <p>Quem busca ajuda para dependência química em São Carlos pode começar reunindo informações e solicitando uma avaliação adequada. A Central também pode orientar famílias sobre possibilidades de acolhimento, sem substituir a rede pública ou a avaliação de profissionais de saúde.</p>
          <p className="font-semibold text-foreground">
            Telefone:{" "}
            <a href="tel:+5516997654579" className="text-secondary hover:underline">
              {phoneDisplay}
            </a>
          </p>
        </div>

        <div className="glass-panel mt-10 rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden="true" /> Falar pelo WhatsApp
            </a>
            <a
              href="tel:+5516997654579"
              className="glass-panel flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-semibold"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" /> Ligar: {phoneDisplay}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
