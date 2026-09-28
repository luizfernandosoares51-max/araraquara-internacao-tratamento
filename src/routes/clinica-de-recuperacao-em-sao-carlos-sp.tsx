import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import saoCarlosImage from "@/assets/blog-dependencia-quimica-sao-carlos.jpg";
import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import {
  instagramHref,
  phoneDisplay,
  phoneHref,
  siteUrl,
  whatsappHref,
} from "@/lib/site";

const pagePath = "/clinica-de-recuperacao-em-sao-carlos-sp";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Clínica de Recuperação em São Carlos | Tratamento e Acolhimento";
const description =
  "Orientação para famílias de São Carlos sobre dependência química, alcoolismo, tratamento, acolhimento, internação e serviços públicos de saúde mental.";
const saoCarlosFacebookHref = "https://www.facebook.com/share/19LjvZp41r/";

const faqs = [
  {
    question: "Onde procurar ajuda para dependência química em São Carlos?",
    answer:
      "A rede pública municipal inclui o CAPS Álcool e Drogas, e a família também pode procurar os serviços de saúde do município para receber orientação. A Central oferece uma conversa inicial sobre possibilidades de tratamento e acolhimento, sem substituir a avaliação dos serviços de saúde.",
  },
  {
    question: "Como funciona a internação para dependência química?",
    answer:
      "A internação é uma modalidade de cuidado que depende de avaliação adequada e dos critérios aplicáveis. Ela não é necessária em todos os casos, não deve ser tratada como resposta automática e não pode ser prometida antes da análise da situação.",
  },
  {
    question: "Como a família pode buscar orientação?",
    answer:
      "A família pode reunir informações sobre o que vem acontecendo e procurar a rede de saúde ou conversar com a Central por telefone ou WhatsApp. O primeiro contato ajuda a organizar dúvidas e compreender possíveis próximos passos.",
  },
  {
    question: "Existe atendimento público para álcool e drogas em São Carlos?",
    answer:
      "Sim. A Prefeitura de São Carlos informa que o município possui CAPS Álcool e Drogas e outros serviços de saúde mental. Endereços, horários e formas de acesso devem ser confirmados diretamente nos canais oficiais municipais.",
  },
  {
    question: "Como entrar em contato com a Central?",
    answer: `O contato pode ser feito pelo WhatsApp ou pelo telefone ${phoneDisplay}. A equipe oferece informações iniciais e explica as possibilidades que podem ser avaliadas, sem garantia antecipada de indicação, vaga ou resultado.`,
  },
];

const supportSignals = [
  "Uso de álcool ou outras drogas causando problemas familiares",
  "Prejuízos frequentes no trabalho ou nos estudos",
  "Dificuldade de controlar ou interromper o consumo",
  "Recaídas e repetição de situações prejudiciais",
  "Conflitos familiares relacionados ao uso",
  "Dúvidas sobre qual modalidade de cuidado procurar",
];

export const Route = createFileRoute("/clinica-de-recuperacao-em-sao-carlos-sp")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Central de Acolhimento e Reabilitação",
              url: siteUrl,
              telephone: "+5516997654579",
              sameAs: [saoCarlosFacebookHref, instagramHref],
              areaServed: { "@type": "City", name: "São Carlos" },
            },
            {
              "@type": "Service",
              name: "Orientação sobre tratamento e acolhimento para famílias de São Carlos",
              provider: {
                "@type": "Organization",
                name: "Central de Acolhimento e Reabilitação",
              },
              areaServed: { "@type": "City", name: "São Carlos" },
              description,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
                { "@type": "ListItem", position: 3, name: "São Carlos", item: pageUrl },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: SaoCarlosPage,
});

function SaoCarlosPage() {
  return (
    <div className="min-h-screen bg-ice font-body text-deep">
      <header className="border-b border-deep/10 bg-ice/95">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação">
              <img src={logoAsset.url} alt="Logo da Central de Acolhimento e Reabilitação" width={48} height={48} className="size-12 rounded-xl object-contain" />
              <span className="leading-tight">
                <span className="block font-display text-sm font-semibold">Central de Acolhimento</span>
                <span className="block text-xs text-deep/60">e Reabilitação</span>
              </span>
            </Link>
            <span className="hidden items-center gap-2 border-l-2 border-brand pl-4 text-xs font-semibold uppercase text-deep/70 sm:flex">
              <MapPin className="size-4 text-brand" aria-hidden="true" /> São Carlos e região
            </span>
          </div>
          <nav aria-label="Menu principal" className="-mx-5 mt-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <ul className="flex min-w-max items-center gap-5 text-[11px] font-semibold uppercase text-deep/65">
              <li><Link to="/" className="hover:text-brand">Início</Link></li>
              <li><Link to="/tratamento" className="hover:text-brand">Tratamento</Link></li>
              <li><Link to="/acolhimento" className="hover:text-brand">Acolhimento</Link></li>
              <li><Link to="/familia" className="hover:text-brand">Família</Link></li>
              <li><Link to="/cidades" className="hover:text-brand">Cidades</Link></li>
              <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
              <li><Link to="/videos" className="hover:text-brand">Vídeos</Link></li>
              <li><Link to="/contato" className="hover:text-brand">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 lg:px-12">
          <nav aria-label="Navegação estrutural" className="text-xs text-deep/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-brand">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/cidades" className="hover:text-brand">Cidades</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-deep">São Carlos</li>
            </ol>
          </nav>
          <Link to="/" className="mt-5 inline-flex min-h-11 items-center gap-2 border border-deep/15 bg-foreground px-4 py-3 text-sm font-semibold shadow-sm transition-colors hover:border-brand hover:text-brand">
            <ArrowLeft className="size-4" aria-hidden="true" /> Voltar para a página inicial
          </Link>
        </div>

        <section className="mx-auto grid max-w-6xl gap-9 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <p className="inline-flex items-center gap-2 border-l-4 border-brand pl-3 text-xs font-semibold uppercase text-brand">
              Orientação local para São Carlos
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.35rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.6rem]">
              Clínica de Recuperação em São Carlos – Tratamento e Acolhimento
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep/70 sm:text-lg">
              A Central de Acolhimento e Reabilitação oferece orientação para pessoas e famílias que procuram ajuda para dependência química, alcoolismo e uso problemático de álcool e outras drogas na região de São Carlos. A equipe explica possibilidades de tratamento e acolhimento e ajuda a organizar os próximos passos.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-lg">
                <MessageCircle className="size-5" aria-hidden="true" /> Falar com a equipe
              </a>
              <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 border border-deep/20 bg-foreground px-6 py-4 text-sm font-semibold">
                <Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}
              </a>
            </div>
            <div className="mt-6 flex items-start gap-3 border-l-2 border-secondary pl-4 text-sm leading-relaxed text-deep/65">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
              <p>Esta página oferece orientação a famílias de São Carlos. Não afirmamos que exista uma unidade física da Central na cidade.</p>
            </div>
          </div>
          <figure className="overflow-hidden border border-deep/10 bg-foreground shadow-xl">
            <img src={saoCarlosImage} width={1200} height={630} alt="Família em conversa de orientação sobre tratamento para álcool e outras drogas em São Carlos" className="aspect-[16/10] w-full object-cover" decoding="async" />
            <figcaption className="border-t border-deep/10 px-5 py-4 text-xs leading-relaxed text-deep/60">Imagem ilustrativa de uma conversa de orientação; não representa uma unidade física em São Carlos.</figcaption>
          </figure>
        </section>

        <section id="tratamento" className="bg-deep py-16 text-foreground lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <p className="text-xs font-semibold uppercase text-secondary">Informação antes da decisão</p>
            <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Tratamento para Dependência Química em São Carlos</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <article className="border border-border bg-glass p-6">
                <HeartHandshake className="size-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">Busca por ajuda e orientação familiar</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O primeiro passo pode ser uma conversa clara sobre os prejuízos observados. A família recebe informações para organizar dúvidas, compreender limites e evitar decisões tomadas apenas pela urgência emocional.</p>
              </article>
              <article className="border border-border bg-glass p-6">
                <Stethoscope className="size-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">Avaliação da situação</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Cada pessoa tem necessidades diferentes. Histórico de uso, saúde, riscos atuais, vínculos e condições familiares precisam ser considerados para identificar possibilidades de cuidado responsáveis.</p>
              </article>
              <article className="border border-border bg-glass p-6">
                <CheckCircle2 className="size-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">Possibilidades e acompanhamento</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O cuidado pode envolver acompanhamento na rede de saúde, apoio à família, acolhimento ou outras estratégias indicadas. A participação familiar pode contribuir para a comunicação e a continuidade do processo.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="internacao" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-9 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase text-brand">Cuidado responsável</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">Internação para Dependência Química em São Carlos</h2>
            </div>
            <div className="space-y-5 text-[15px] leading-relaxed text-deep/70">
              <p>Famílias que procuram internação para dependência química ou alcoolismo precisam receber orientação e avaliação adequada para compreender qual modalidade de cuidado pode ser mais apropriada.</p>
              <p>A internação não é indicada automaticamente para todas as pessoas. A decisão exige análise individual, participação dos profissionais responsáveis e respeito aos critérios legais aplicáveis. Por isso, a Central não promete internação imediata, vaga ou resultado antes de conhecer a situação.</p>
              <p>Quando houver risco imediato à vida, intoxicação grave, alteração intensa de consciência ou outra emergência, a prioridade é procurar um serviço de urgência.</p>
            </div>
          </div>
        </section>

        <section id="rede-publica" className="border-y border-deep/10 bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <p className="text-xs font-semibold uppercase text-brand">Serviços públicos oficiais</p>
            <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Rede de Atendimento em Saúde Mental e Álcool e Drogas em São Carlos</h2>
            <p className="mt-5 max-w-4xl text-[15px] leading-relaxed text-deep/70">São Carlos possui serviços públicos de atenção psicossocial, incluindo o CAPS Álcool e Drogas e outros serviços de saúde mental. A Central não pertence ao SUS e não mantém parceria declarada com esses órgãos; os links abaixo servem somente para facilitar o acesso às informações oficiais.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              <a href="https://www.saocarlos.sp.gov.br/index.php/noticias-2023/176324-horario-de-atendimento-do-caps-ad-e-ampliado.html" target="_blank" rel="noopener noreferrer" className="group border border-deep/10 bg-ice p-6 transition-colors hover:border-brand">
                <Building2 className="size-7 text-brand" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">CAPS Álcool e Drogas</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/65">Informações da Prefeitura sobre o serviço municipal voltado a pessoas adultas com prejuízos relacionados ao uso de álcool e outras drogas.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Consultar fonte oficial <ArrowRight className="size-4" aria-hidden="true" /></span>
              </a>
              <a href="https://www.saocarlos.sp.gov.br/index.php/saude/115415-centro-de-atencao-psicossocial-caps.html" target="_blank" rel="noopener noreferrer" className="group border border-deep/10 bg-ice p-6 transition-colors hover:border-brand">
                <HeartHandshake className="size-7 text-brand" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">CAPS e Saúde Mental</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/65">Página municipal com informações sobre o Centro de Atenção Psicossocial e a atenção em saúde mental na comunidade.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Consultar fonte oficial <ArrowRight className="size-4" aria-hidden="true" /></span>
              </a>
              <a href="https://www.saocarlos.sp.gov.br/index.php/secretarias-municipais/115263-secretaria-municipal-de-saude.html" target="_blank" rel="noopener noreferrer" className="group border border-deep/10 bg-ice p-6 transition-colors hover:border-brand">
                <Stethoscope className="size-7 text-brand" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">Secretaria Municipal de Saúde</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/65">Canal institucional para consultar a organização e os contatos atuais da rede municipal de saúde de São Carlos.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Consultar fonte oficial <ArrowRight className="size-4" aria-hidden="true" /></span>
              </a>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-deep/55">Confirme endereços, horários, telefones e critérios de acesso diretamente nas páginas oficiais antes de se deslocar.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-xs font-semibold uppercase text-brand">Atenção aos impactos</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">Quando procurar ajuda?</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-deep/70">Não é necessário esperar que a situação se agrave para buscar informação. Os sinais abaixo não definem um diagnóstico, mas podem indicar que é importante conversar com um serviço de saúde ou pedir orientação.</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {supportSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3 border border-deep/10 bg-foreground p-4 text-sm leading-relaxed text-deep/75">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" /> {signal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-deep py-16 text-foreground lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-9 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase text-secondary">Informação e próximos passos</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">Como a Central pode orientar sua família?</h2>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">No contato inicial, a família pode relatar o que vem acontecendo e apresentar suas dúvidas. A equipe explica possibilidades de tratamento e acolhimento, o que precisa ser avaliado e quais informações são importantes para os próximos passos. Essa conversa não substitui diagnóstico ou atendimento de saúde.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground">
                <MessageCircle className="size-5" aria-hidden="true" /> Falar com a equipe
              </a>
              <a href="#tratamento" className="inline-flex min-h-14 items-center justify-center gap-2 border border-primary-foreground/30 px-6 py-4 text-center text-sm font-semibold text-primary-foreground">
                Conhecer as opções de tratamento <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="perguntas" className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase text-brand">Dúvidas frequentes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">Perguntas frequentes sobre tratamento em São Carlos</h2>
            <div className="mt-8 divide-y divide-deep/10 border-y border-deep/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-base font-semibold marker:content-none sm:text-lg">
                    {faq.question}
                    <span className="grid size-8 shrink-0 place-items-center bg-deep/5 text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-relaxed text-deep/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-deep/10 bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <div className="border-l-4 border-brand pl-6 sm:pl-9">
              <p className="text-xs font-semibold uppercase text-brand">Converse antes de decidir</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Sua família pode começar pedindo orientação.</h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-deep/70">Explique a situação e tire dúvidas sobre as possibilidades de cuidado. Não há promessa de internação, vaga ou resultado: cada caso precisa ser compreendido com responsabilidade.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Falar com a equipe</a>
                <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 border border-deep/20 px-6 py-4 text-sm font-semibold"><Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-deep pb-24 pt-10 text-foreground sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
          <div>
            <p className="font-display font-semibold">Central de Acolhimento e Reabilitação</p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground">Orientação para pessoas e famílias de São Carlos. Esta página não apresenta a Central como unidade pública ou como instituição física localizada no município.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-secondary">Página inicial</Link>
            <Link to="/cidades" className="hover:text-secondary">Cidades</Link>
            <Link to="/blog/dependencia-quimica-sao-carlos" className="hover:text-secondary">Artigo sobre São Carlos</Link>
            <a href={saoCarlosFacebookHref} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">Facebook</a>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">Instagram</a>
          </div>
        </div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-xl sm:left-auto sm:right-6">
        <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp
      </a>
    </div>
  );
}