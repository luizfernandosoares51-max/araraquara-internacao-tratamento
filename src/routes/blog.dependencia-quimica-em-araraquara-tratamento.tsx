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
            página oficial com informações sobre o{" "}
            <ExternalSource href={municipalCapsUrl}>CAPS AD de Araraquara</ExternalSource>. Como os dados
            de atendimento podem mudar, a orientação é consultar a fonte municipal antes de se deslocar.
          </p>
          <p>
            O objetivo deste artigo não é substituir a orientação dos serviços de saúde, mas ajudar a
            família a entender que existem diferentes portas de entrada para buscar ajuda.
          </p>

          <ArticleFigure
            src={atendimentoSaudeMentalAsset.url}
            alt="Atendimento e orientação para dependência química em Araraquara"
            caption="A orientação profissional pode ajudar a família a compreender quais possibilidades de cuidado existem."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            CAPS AD, acolhimento e internação: qual é a diferença?
          </h2>
          <p>
            Essas modalidades não são necessariamente a mesma coisa. O CAPS AD integra a rede de
            atenção psicossocial e oferece acompanhamento dentro de sua proposta de atendimento.
          </p>
          <p>
            Já o acolhimento residencial e os serviços de saúde com internação possuem características
            diferentes. Uma internação para dependência química não deve ser indicada automaticamente:
            a necessidade de cada pessoa precisa ser avaliada de forma individualizada, considerando
            suas condições de saúde, sua rede de apoio e os riscos presentes.
          </p>
          <p>
            Nenhuma modalidade é, por definição, melhor que outra. O tratamento para alcoolismo em
            Araraquara ou para outras formas de dependência deve ser pensado de acordo com a situação
            concreta e com orientação adequada.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Quando a família começa a procurar uma clínica ou instituição de acolhimento?
          </h2>
          <p>
            A busca por uma clínica de recuperação em Araraquara ou por acolhimento para dependência
            química costuma começar quando o consumo passa a trazer prejuízos persistentes. Entre as
            situações que podem levar a família a procurar informação estão:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
            <li>uso frequente e descontrolado de álcool ou outras drogas;</li>
            <li>tentativas repetidas de interromper o consumo sem sucesso;</li>
            <li>prejuízos familiares, conflitos recorrentes ou isolamento;</li>
            <li>problemas no trabalho ou nos estudos;</li>
            <li>problemas financeiros relacionados ao uso;</li>
            <li>recaídas e sofrimento da pessoa e da família;</li>
            <li>situações de risco.</li>
          </ul>
          <p className="font-semibold text-foreground">
            Esses sinais não significam automaticamente que uma determinada modalidade de tratamento
            seja necessária. A avaliação individual é fundamental.
          </p>

          <ArticleFigure
            src={familiaTratamentoAsset.url}
            alt="Família buscando tratamento para dependência química em Araraquara"
            caption="A família também precisa de informação para compreender as possibilidades de cuidado."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Como escolher uma clínica de recuperação ou instituição de acolhimento?
          </h2>
          <p>
            Na internet, diferentes instituições podem utilizar expressões como clínica de recuperação,
            comunidade terapêutica, acolhimento ou tratamento para dependência química. Porém, essas
            denominações não significam necessariamente que todos os serviços tenham a mesma natureza ou
            estejam submetidos às mesmas regras.
          </p>
          <p>
            A Anvisa diferencia as Comunidades Terapêuticas Acolhedoras das Clínicas Médicas
            Especializadas em Dependência Química, que possuem características e exigências sanitárias
            diferentes. Consulte as{" "}
            <ExternalSource href={anvisaLicensingUrl}>
              orientações da Anvisa sobre licenciamento sanitário
            </ExternalSource>.
          </p>

          <ArticleFigure
            src={escolhaInstituicaoAsset.url}
            alt="Família verificando informações de uma instituição de tratamento"
            caption="Antes de escolher uma instituição, a família deve buscar informações claras sobre o serviço oferecido."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            O que a família deve verificar antes de escolher uma instituição?
          </h2>
          <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-secondary">
            <li>Qual é o tipo de serviço oferecido?</li>
            <li>Qual é o enquadramento da instituição?</li>
            <li>Quais licenças e autorizações são aplicáveis?</li>
            <li>Quem é o responsável técnico?</li>
            <li>Como é feita a avaliação antes do acolhimento?</li>
            <li>Quais profissionais participam do atendimento?</li>
            <li>Como funcionam as regras de permanência?</li>
            <li>Como a família participa do processo?</li>
            <li>Como são tratadas situações de emergência?</li>
            <li>Existe encaminhamento para serviços de saúde quando necessário?</li>
          </ol>
          <p>
            Os requisitos podem variar conforme o tipo de serviço. A Anvisa informa que tanto
            Comunidades Terapêuticas Acolhedoras quanto Clínicas Especializadas em Dependência Química
            estão sujeitas à vigilância sanitária e ao licenciamento correspondente. A{" "}
            <ExternalSource href={anvisaLicensingUrl}>nota técnica oficial da Anvisa</ExternalSource>
            esclarece essas diferenças e ajuda a família a verificar se está diante de uma instituição
            regularizada para o serviço que declara oferecer.
          </p>

          <ArticleFigure
            src={verificacaoDocumentosAsset.url}
            alt="Família verificando documentação antes de escolher uma instituição de acolhimento"
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Como identificar sinais de possível irregularidade?
          </h2>
          <p>É importante buscar esclarecimentos quando uma instituição:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
            <li>não explica claramente qual serviço oferece;</li>
            <li>não informa quem é responsável pelo funcionamento;</li>
            <li>não esclarece as condições de licenciamento aplicáveis;</li>
            <li>evita responder perguntas importantes;</li>
            <li>promete resultados garantidos;</li>
            <li>não explica como funciona a avaliação inicial;</li>
            <li>não informa como são tratadas emergências;</li>
            <li>não apresenta regras claras;</li>
            <li>não explica como ocorre o contato com familiares;</li>
            <li>apresenta informações contraditórias sobre profissionais ou serviços.</li>
          </ul>
          <p className="border-l-2 border-secondary pl-5 text-foreground">
            A existência de um desses sinais, isoladamente, não permite concluir que uma instituição
            seja irregular. A família deve buscar confirmação junto aos órgãos competentes.
          </p>
          <p>
            Para compreender a natureza desse tipo de serviço, consulte a página oficial da Anvisa sobre{" "}
            <ExternalSource href={anvisaCommunitiesUrl}>
              Comunidades Terapêuticas Acolhedoras
            </ExternalSource>.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Por que a avaliação antes do acolhimento é importante?
          </h2>
          <p>
            A avaliação prévia é um ponto importante na escolha e no processo de acolhimento. Ela ajuda
            a compreender necessidades, condições de saúde, riscos e se a proposta do serviço é
            compatível com a situação apresentada.
          </p>
          <p>
            A Anvisa informa que a admissão em Comunidades Terapêuticas Acolhedoras deve ser precedida
            de avaliação diagnóstica, conforme as normas aplicáveis, e que devem existir registros
            individuais e plano de atendimento conforme a legislação correspondente. Veja as{" "}
            <ExternalSource href={anvisaEvaluationUrl}>
              orientações da Anvisa sobre avaliação prévia
            </ExternalSource>.
          </p>

          <ArticleFigure
            src={avaliacaoProfissionalAsset.url}
            alt="Orientação profissional para família que busca tratamento para dependência química"
            caption="Uma conversa de avaliação deve respeitar a história, as necessidades e a privacidade de cada pessoa."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            A família também precisa de orientação
          </h2>
          <p>
            A dependência química não afeta somente quem faz uso de álcool ou outras drogas. Pais,
            mães, filhos, companheiros e outros familiares também podem sofrer consequências emocionais,
            sociais e financeiras.
          </p>
          <p>
            Por isso, procurar informação e orientação para família pode ajudar a compreender melhor o
            problema, estabelecer limites e buscar caminhos de cuidado. A página de{" "}
            <Link to="/familia" className="font-semibold text-secondary hover:underline">
              orientações para a família
            </Link>{" "}
            reúne informações institucionais sobre esse apoio, sem substituir avaliação profissional.
          </p>

          <ArticleFigure
            src={apoioFamiliarAsset.url}
            alt="Família recebendo orientação sobre tratamento da dependência química"
            caption="O processo de recuperação também envolve informação, participação e apoio familiar."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Quando existe uma situação de emergência
          </h2>
          <p>
            Em situações de risco grave à integridade física, intoxicação importante, alteração intensa
            do estado mental ou outra situação que exija atendimento médico imediato, a prioridade deve
            ser procurar um serviço de urgência ou emergência.
          </p>
          <p>
            O acolhimento residencial não substitui atendimento médico emergencial. A segurança e o
            cuidado imediato devem vir em primeiro lugar.
          </p>

          <ArticleFigure
            src={emergenciaAsset.url}
            alt="Atendimento de saúde em situação de emergência"
            caption="Situações que exigem cuidado médico imediato devem ser direcionadas a serviços de urgência ou emergência."
          />

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Central de Acolhimento e Reabilitação em Araraquara
          </h2>
          <p>
            A Central de Acolhimento e Reabilitação oferece orientação para famílias que procuram
            informações sobre acolhimento e tratamento relacionados à dependência química.
          </p>
          <p>
            A proposta é ajudar a família a compreender as possibilidades existentes e buscar uma
            alternativa compatível com a situação apresentada.
          </p>
          <p>
            Para conhecer informações específicas sobre Araraquara, acesse a página{" "}
            <Link
              to="/clinica-de-recuperacao-em-araraquara"
              className="font-semibold text-secondary hover:underline"
            >
              Clínica de Recuperação em Araraquara
            </Link>.
          </p>

          <figure className="my-10">
            <img
              src={unidadeAraraquaraAsset.url}
              alt="Unidade de acolhimento em Araraquara da Central de Acolhimento e Reabilitação"
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
              Foto real de um espaço de convivência da unidade de Araraquara.
            </figcaption>
          </figure>

          <a
            href="/#galeria-titulo"
            className="glass-panel flex min-h-16 items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors hover:bg-glass-strong"
          >
            <span className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-secondary sm:text-base">
              <Camera className="size-5 shrink-0" aria-hidden="true" /> Conheça nossa galeria de fotos
            </span>
            <span aria-hidden="true">→</span>
          </a>

          <h2 className="pt-4 font-display text-2xl font-bold leading-tight text-foreground">
            Informação é um dos primeiros passos para buscar ajuda
          </h2>
          <p>
            Quando uma família procura tratamento para dependência química, normalmente está vivendo um
            momento de preocupação e muitas dúvidas.
          </p>
          <p>
            Por isso, antes de tomar uma decisão, é importante buscar informações, conhecer o serviço,
            fazer perguntas e verificar se a instituição apresenta condições compatíveis com o
            atendimento que oferece.
          </p>
          <p>
            Em Araraquara, a família pode buscar informações na rede pública de atenção à saúde mental e
            também conhecer outras possibilidades de acolhimento e tratamento, sempre considerando as
            necessidades específicas da pessoa.
          </p>
          <p>
            Se você está procurando informações sobre acolhimento ou tratamento para um familiar, a
            Central de Acolhimento e Reabilitação pode orientar sobre as possibilidades disponíveis.
          </p>
        </div>

        <div className="glass-panel mt-10 rounded-2xl p-5 sm:p-7">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold uppercase text-whatsapp-foreground"
          >
            <MessageCircle className="size-5 shrink-0" aria-hidden="true" /> Quero receber orientações
          </a>
        </div>
      </article>
    </main>
  );
}