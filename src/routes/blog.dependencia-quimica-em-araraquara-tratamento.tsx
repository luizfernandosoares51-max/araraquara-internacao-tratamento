import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Camera, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import ajudaProfissionalAsset from "@/assets/blog-araraquara-ajuda-profissional.webp.asset.json";
import apoioFamiliarAsset from "@/assets/blog-araraquara-apoio-familiar.webp.asset.json";
import atendimentoSaudeMentalAsset from "@/assets/blog-araraquara-atendimento-saude-mental.webp.asset.json";
import avaliacaoProfissionalAsset from "@/assets/blog-araraquara-avaliacao-profissional.webp.asset.json";
import capaAsset from "@/assets/blog-araraquara-capa.webp.asset.json";
import emergenciaAsset from "@/assets/blog-araraquara-emergencia.webp.asset.json";
import escolhaInstituicaoAsset from "@/assets/blog-araraquara-escolha-instituicao.webp.asset.json";
import familiaTratamentoAsset from "@/assets/blog-araraquara-familia-tratamento.webp.asset.json";
import verificacaoDocumentosAsset from "@/assets/blog-araraquara-verificacao-documentos.webp.asset.json";
import unidadeAraraquaraAsset from "@/assets/unidade-araraquara-sala-de-convivencia.webp.asset.json";
import { siteUrl, whatsappHref } from "@/lib/site";

const articleHeading =
  "Dependência Química em Araraquara: Tratamento, CAPS AD, Acolhimento e Como Escolher uma Instituição Segura";
const articleTitle = "Dependência Química em Araraquara: Tratamento e Orientação";
const articleDescription =
  "Entenda a dependência química em Araraquara, conheça possibilidades de atendimento, orientação familiar e cuidados importantes antes de escolher uma instituição para tratamento.";
const articleUrl = `${siteUrl}/blog/dependencia-quimica-em-araraquara-tratamento`;
const articleImageUrl = `${siteUrl}${capaAsset.url}`;
const publishedDate = "2026-09-23";

const municipalCapsUrl =
  "https://araraquara.sp.gov.br/nova-sede-do-caps-ad-dr-calil-buainain-fortalece-rede-de-atencao-a-saude-mental-em-araraquara";
const anvisaLicensingUrl =
  "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/nota-tecnica-esclarece-duvidas-sobre-licenciamento-sanitario-de-servicos-para-apoio-e-tratamento-de-dependentes-quimicos";
const anvisaCommunitiesUrl =
  "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/saloes-tatuagens-creches/comunidades-terapeuticas-acolhedoras";
const anvisaEvaluationUrl =
  "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/saloes-tatuagens-creches/comunidades-terapeuticas-acolhedoras/comunidades-terapeuticas-acolhedoras/previa-avaliacao-e-registros";

export const Route = createFileRoute(
  "/blog/dependencia-quimica-em-araraquara-tratamento",
)({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: articleTitle },
      { name: "description", content: articleDescription },
      { property: "og:title", content: articleTitle },
      { property: "og:description", content: articleDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: articleUrl },
      { property: "og:image", content: articleImageUrl },
      { property: "article:published_time", content: publishedDate },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: articleTitle },
      { name: "twitter:description", content: articleDescription },
      { name: "twitter:image", content: articleImageUrl },
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
              headline: articleHeading,
              description: articleDescription,
              mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
              image: articleImageUrl,
              datePublished: publishedDate,
              dateModified: publishedDate,
              inLanguage: "pt-BR",
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Dependência Química em Araraquara",
                  item: articleUrl,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AraraquaraArticlePage,
});

type ArticleFigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

function ArticleFigure({ src, alt, caption }: ArticleFigureProps) {
  return (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        width={1200}
        height={630}
        loading="lazy"
        decoding="async"
        className="aspect-[40/21] w-full rounded-2xl object-cover"
      />
      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function ExternalSource({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
    >
      {children}
    </a>
  );
}

function AraraquaraArticlePage() {
  return (
    <main className="min-h-screen bg-deep font-body text-foreground">
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="Navegação do artigo">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao blog
          </Link>
        </nav>

        <header className="mt-8 border-b border-border pb-8">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            Araraquara · Dependência química
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
            {articleHeading}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            Publicado em <time dateTime={publishedDate}>23 de setembro de 2026</time> · Central de
            Acolhimento e Reabilitação
          </p>
          <figure className="mt-8">
            <img
              src={capaAsset.url}
              alt="Família buscando orientação sobre dependência química em Araraquara"
              width={1200}
              height={630}
              decoding="async"
              fetchPriority="high"
              className="aspect-[40/21] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
              Buscar informação e orientação é um dos primeiros passos para uma família que enfrenta a
              dependência química.
            </figcaption>
          </figure>
        </header>

        <div className="mt-9 space-y-6 text-[16px] leading-8 text-muted-foreground">
          <p>
            A dependência química pode afetar profundamente a pessoa que faz uso de álcool ou outras
            drogas e também provocar consequências para toda a família. Quando o problema se agrava, é
            comum que pais, mães, companheiros, filhos e outros familiares tenham dúvidas sobre onde
            procurar ajuda, qual modalidade de tratamento pode ser adequada e como escolher uma
            instituição de forma responsável.
          </p>
          <p>
            Em Araraquara, existem diferentes possibilidades de cuidado e orientação. Por isso, antes
            de tomar uma decisão, é importante conhecer os serviços disponíveis, entender as diferenças
            entre as modalidades de atendimento e verificar informações importantes sobre a instituição
            que está sendo considerada.
          </p>
          <p>
            Este guia reúne informações para ajudar famílias que procuram orientação sobre dependência
            química em Araraquara, tratamento, acolhimento, serviços públicos e cuidados que devem ser
            observados antes de escolher uma instituição.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            O que é dependência química?
          </h2>
          <p>
            A dependência relacionada ao uso de álcool e outras drogas pode envolver perda de controle
            sobre o consumo, dificuldade para reduzir ou interromper o uso e consequências importantes
            na vida pessoal, familiar, profissional e social.
          </p>
          <p>
            O problema não deve ser reduzido simplesmente à falta de força de vontade. Cada pessoa
            apresenta uma história e necessidades diferentes, e a avaliação adequada deve considerar
            aspectos físicos, psicológicos, sociais e familiares.
          </p>
          <p>
            Por isso, o tratamento para dependência química pode envolver diferentes formas de cuidado,
            dependendo da situação de cada pessoa.
          </p>

          <ArticleFigure
            src={ajudaProfissionalAsset.url}
            alt="Pessoa buscando ajuda profissional para dependência química"
            caption="A dependência relacionada ao uso de álcool e outras drogas pode exigir acompanhamento e cuidado individualizado."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Onde procurar ajuda para dependência química em Araraquara?
          </h2>
          <p>
            Uma família que enfrenta problemas relacionados ao uso de álcool ou outras drogas pode
            procurar inicialmente informações na rede pública de saúde e saúde mental do município.
          </p>
          <p>
            Entre os serviços relacionados a essa área está o CAPS AD (Centro de Atenção Psicossocial
            Álcool e Drogas), que integra a rede de atenção psicossocial. A Prefeitura mantém uma
            página oficial com informações sobre o{