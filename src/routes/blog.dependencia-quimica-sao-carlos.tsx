import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Camera, MessageCircle, Phone } from "lucide-react";

import { phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";

const articleTitle = "Dependência Química em São Carlos | Acolhimento";
const articleDescription =
  "Informação, acolhimento e caminhos para o tratamento da dependência química em São Carlos e região, com orientação para pessoas e famílias.";
const articleUrl = `${siteUrl}/blog/dependencia-quimica-sao-carlos`;
const saoCarlosUrl =
  "https://araraquara-internacao-tratamento.lovable.app/clinica-de-recuperacao-em-sao-carlos-sp";

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
              "@type": "Article",
              headline: "Dependência Química em São Carlos: informação, acolhimento e caminhos para o tratamento",
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
            Dependência Química em São Carlos: informação, acolhimento e caminhos para o tratamento
          </h1>
        </header>

        <div className="mt-9 space-y-6 text-[16px] leading-8 text-muted-foreground">
          <p>
            A dependência química pode afetar a saúde, a rotina, os relacionamentos e os projetos de
            uma pessoa. Seus efeitos também podem alcançar toda a família, que muitas vezes enfrenta
            dúvidas, preocupação e dificuldade para saber como agir.
          </p>
          <p>
            Buscar informação confiável e orientação profissional pode ser um passo importante para
            compreender a situação e avaliar caminhos de cuidado com respeito, responsabilidade e
            acolhimento.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Dependência química em São Carlos: uma realidade que precisa de informação
          </h2>
          <p>
            A dependência química está relacionada a um padrão de uso de álcool ou outras drogas que
            pode se tornar difícil de controlar e trazer consequências para diferentes áreas da vida.
            Não existe uma única história ou uma solução igual para todas as pessoas.
          </p>
          <p>
            Em São Carlos e região, pessoas e famílias podem precisar de ajuda para entender o que
            está acontecendo, conversar sobre as possibilidades de tratamento e identificar os
            próximos passos. Informação responsável evita julgamentos e ajuda a procurar o suporte
            mais adequado para cada realidade.
          </p>
          <p>
            Este artigo não substitui avaliação médica, psicológica ou de outros profissionais. Também
            não apresenta estatísticas locais: cada situação deve ser analisada individualmente.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Quando a família percebe que é hora de buscar ajuda
          </h2>
          <p>
            Alguns sinais podem indicar que vale a pena buscar orientação profissional. Eles não
            permitem diagnosticar alguém, mas podem mostrar que a situação merece atenção:
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
            Mesmo quando a pessoa ainda não reconhece a necessidade de tratamento, a família pode
            procurar orientação para aprender a conversar, estabelecer limites e cuidar da própria
            saúde emocional.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Tratamento e acolhimento para dependência química
          </h2>
          <p>
            O tratamento pode envolver avaliação e acompanhamento de profissionais de saúde, apoio
            psicológico, atividades terapêuticas, acompanhamento médico e participação da família.
            A combinação e a intensidade dessas ações dependem das necessidades de cada pessoa.
          </p>
          <p>
            Em alguns casos, o acolhimento em uma instituição especializada ou a internação para
            dependência química pode ser considerada. Essa decisão precisa ser orientada por uma
            avaliação responsável, levando em conta as condições clínicas, a segurança e a realidade
            da pessoa e de sua família.
          </p>
          <p>
            Para entender melhor as possibilidades, consulte também as informações sobre
            <Link to="/tratamento" className="font-semibold text-secondary hover:underline"> tratamento para dependência química</Link>
            . O cuidado deve ser individualizado, sem promessas de prazo ou de resultado.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Tratamento para dependência química em São Carlos
          </h2>
          <p>
            Pessoas de São Carlos e região podem buscar orientação sobre opções de tratamento e
            acolhimento por meio da Central de Acolhimento e Reabilitação. Uma conversa inicial pode
            ajudar a esclarecer dúvidas sobre o processo, a rotina e os próximos passos, antes de
            qualquer decisão.
          </p>
          <p>
            Para conhecer a página local e encontrar informações sobre acolhimento, acesse
            <a href={saoCarlosUrl} className="font-semibold text-secondary hover:underline"> clínica de recuperação em São Carlos</a>
            .
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
            Por que buscar ajuda o quanto antes?
          </h2>
          <p>
            Adiar uma conversa pode prolongar conflitos, prejuízos e sofrimento. Buscar orientação
            não significa tomar uma decisão apressada: significa reunir informações, entender as
            alternativas e avaliar o que pode ser feito com mais segurança.
          </p>
          <p>
            Ninguém precisa enfrentar sozinho uma situação relacionada ao uso problemático de álcool
            e outras drogas. Um atendimento acolhedor pode ajudar a organizar as preocupações e
            orientar a família sobre os próximos passos possíveis.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            A família também precisa de orientação
          </h2>
          <p>
            A família pode oferecer apoio sem assumir sozinha a responsabilidade pelo tratamento.
            Comunicação respeitosa, escuta, limites claros e busca de orientação profissional podem
            contribuir para lidar com a situação de forma mais consciente.
          </p>
          <p>
            Também é importante que familiares encontrem espaço para cuidar de suas próprias emoções e
            dúvidas. Saiba mais sobre
            <Link to="/familia" className="font-semibold text-secondary hover:underline"> orientação para a família</Link>
            e procure ajuda profissional quando necessário, sem esperar garantias ou resultados
            imediatos.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Converse com a Central de Acolhimento e Reabilitação
          </h2>
          <p>
            Se você busca ajuda para dependência química em São Carlos, entre em contato para
            esclarecer dúvidas sobre acolhimento e tratamento. A conversa pode ser o primeiro passo
            para entender melhor a situação e encontrar um caminho possível.
          </p>
          <p className="font-semibold text-foreground">Telefone: {phoneDisplay}</p>
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
              href={phoneHref}
              className="glass-panel flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-semibold"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" /> Ligar para a Central
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
