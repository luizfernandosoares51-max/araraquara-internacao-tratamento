import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";

import articleImage from "@/assets/blog-dependencia-quimica-sinais.jpg";
import { siteUrl, whatsappHref } from "@/lib/site";

const articleTitle = "Dependência Química: Entenda os Sinais e a Importância do Tratamento";
const articleDescription =
  "Entenda os principais sinais da dependência química e saiba quando buscar orientação, acolhimento e tratamento especializado.";
const articleUrl = `${siteUrl}/blog/dependencia-quimica-sinais-tratamento`;
const articleImageUrl = new URL(articleImage, siteUrl).href;

export const Route = createFileRoute("/blog/dependencia-quimica-sinais-tratamento")({
  staticData: { sitemap: true },
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
              headline: articleTitle,
              description: articleDescription,
              mainEntityOfPage: articleUrl,
              image: articleImageUrl,
              datePublished: "2026-09-15",
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
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Início",
                  item: siteUrl,
                },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
                { "@type": "ListItem", position: 3, name: articleTitle, item: articleUrl },
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
            Dependência química
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
            {articleTitle}
          </h1>
          <img
            src={articleImage}
            alt="Conversa acolhedora sobre dependência química e possibilidades de tratamento"
            width={1200}
            height={630}
            className="mt-8 aspect-[40/21] w-full rounded-2xl object-cover"
          />
        </header>

        <div className="mt-9 space-y-6 text-[16px] leading-8 text-muted-foreground">
          <p>
            A dependência química pode afetar profundamente a vida de uma pessoa e também de sua
            família. O uso problemático de álcool e outras drogas pode provocar mudanças no
            comportamento, nos relacionamentos, na saúde e na rotina.
          </p>
          <p>
            Reconhecer os sinais e buscar informação é um passo importante para encontrar ajuda
            adequada.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            O que é dependência química?
          </h2>
          <p>
            A dependência química está relacionada à dificuldade de controlar o uso de determinadas
            substâncias, mesmo quando esse uso começa a causar consequências negativas na vida da
            pessoa.
          </p>
          <p>
            Álcool e outras drogas podem estar associados ao desenvolvimento de padrões de uso
            problemático e dependência.
          </p>
          <p>
            Cada pessoa possui uma história diferente. Por isso, uma avaliação profissional é
            importante para compreender cada situação.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Quais são os principais sinais?
          </h2>
          <p>Alguns sinais podem indicar que o uso de álcool ou outras drogas está causando prejuízos:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
            <li>dificuldade para controlar o consumo;</li>
            <li>aumento da frequência ou quantidade utilizada;</li>
            <li>problemas familiares;</li>
            <li>dificuldades no trabalho ou nos estudos;</li>
            <li>mudanças de comportamento;</li>
            <li>isolamento social;</li>
            <li>tentativas frustradas de parar ou diminuir o consumo;</li>
            <li>continuidade do uso mesmo diante de consequências negativas.</li>
          </ul>
          <p>
            Esses sinais não substituem uma avaliação profissional, mas podem indicar que é importante
            procurar orientação.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Quando procurar ajuda?
          </h2>
          <p>
            Muitas famílias demoram para buscar ajuda porque esperam que a situação melhore sozinha.
          </p>
          <p>
            Quando o consumo começa a provocar prejuízos na saúde, na família, no trabalho ou na vida
            social, procurar orientação pode ser um passo importante.
          </p>
          <p>O tratamento deve considerar as necessidades e a realidade de cada pessoa.</p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Como funciona o tratamento?
          </h2>
          <p>
            O tratamento pode envolver diferentes profissionais e estratégias, dependendo das
            necessidades de cada caso.
          </p>
          <p>
            Entre as possibilidades estão acompanhamento psicológico, acompanhamento médico,
            atividades terapêuticas, orientação familiar e outras formas de suporte.
          </p>
          <p>
            O tratamento para dependência química deve ser definido a partir de uma avaliação
            cuidadosa. Nos casos relacionados ao alcoolismo, a frequência do consumo, as condições
            de saúde e os impactos na rotina também precisam ser considerados.
          </p>
          <p>
            Em determinadas situações, o acolhimento em uma instituição especializada pode fazer
            parte do processo de tratamento.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            A importância da família
          </h2>
          <p>
            A dependência química não afeta somente a pessoa que utiliza a substância. A família
            também pode enfrentar dúvidas, sofrimento e dificuldades para lidar com a situação.
          </p>
          <p>
            Buscar informação e orientação profissional pode ajudar familiares a compreender melhor o
            problema e tomar decisões mais conscientes.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Acolhimento e orientação
          </h2>
          <p>
            O acolhimento começa com uma conversa responsável para entender o momento vivido pela
            pessoa e por seus familiares. Essa orientação para famílias pode esclarecer dúvidas e
            ajudar na avaliação dos próximos passos, sempre respeitando as necessidades de cada caso.
          </p>
          <p>
            A recuperação é um processo que pode exigir tempo, acompanhamento e participação da
            família. Cada pessoa possui necessidades diferentes, por isso o tratamento deve ser
            individualizado e acompanhado por profissionais capacitados.
          </p>
          <p>Buscar ajuda é um passo importante para começar uma mudança.</p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">Conclusão</h2>
          <p>
            A dependência química merece atenção e cuidado. Quando o uso de álcool ou outras drogas
            começa a causar prejuízos, buscar orientação pode ajudar a encontrar caminhos de tratamento
            e recuperação.
          </p>
          <p>
            Se você ou alguém da sua família precisa de informações sobre acolhimento e tratamento,
            entre em contato com a Central de Acolhimento e Reabilitação para receber orientação.
          </p>
        </div>

        <div className="glass-panel mt-10 rounded-2xl p-5 sm:p-7">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground"
          >
            <MessageCircle className="size-5 shrink-0" aria-hidden="true" /> Falar com a Central pelo
            WhatsApp
          </a>
        </div>
      </article>
    </main>
  );
}