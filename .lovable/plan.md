# Auditoria SEO das 15 páginas locais e plano de correção

## Resumo executivo

A base técnica está saudável: as 15 URLs publicadas respondem HTTP 200, funcionam em acesso direto e com identificação de Googlebot, usam canonical próprio, não têm `noindex`, aparecem no sitemap do domínio oficial e não são bloqueadas pelo `robots.txt`.

Não foi encontrado problema crítico que impeça rastreamento ou indexação. O principal risco é editorial: 10 páginas ainda compartilham estrutura, imagem, perguntas e raciocínio muito semelhantes, com pouca informação local verificável. Isso pode reduzir a utilidade percebida e aumentar o risco de o Google tratá-las como páginas locais pouco diferenciadas.

A auditoria não comprova que uma URL está indexada ou ranqueando; ela confirma apenas que está tecnicamente acessível e elegível para indexação.

## Matriz das 15 cidades

| Cidade | HTTP / Googlebot | Canonical / sitemap | Conteúdo | SEO local | FAQ / schema | Prioridade |
|---|---|---|---|---|---|---|
| Araraquara | 200 / 200 | Correto / presente | Próprio e completo | Forte; única unidade física declarada | FAQ + Breadcrumb + Organization | Preservar; ajuste pontual de fonte oficial |
| São Carlos | 200 / 200 | Correto / presente | Próprio e completo | Forte, com rede municipal contextualizada | FAQ + Breadcrumb + Organization | Preservar |
| Rio Claro | 200 / 200 | Correto / presente | Próprio e completo | Forte, com fontes municipais | FAQ + Breadcrumb | Preservar |
| Bauru | 200 / 200 | Correto / presente | Próprio e completo | Forte, com fonte municipal | FAQ + Breadcrumb | Preservar |
| Ribeirão Preto | 200 / 200 | Correto / presente | Próprio e completo | Forte, com CAPS AD e urgência local | WebPage + FAQ + Breadcrumb | Preservar |
| Matão | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Américo Brasiliense | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Taquaritinga | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Ibitinga | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Itápolis | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Ibaté | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Descalvado | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Porto Ferreira | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Jaboticabal | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |
| Franca | 200 / 200 | Correto / presente | Muito semelhante ao modelo comum | Insuficiente | FAQ e estrutura repetidas | Alta |

## Problemas encontrados

### Alta prioridade

1. **Dez páginas locais são excessivamente semelhantes.**
   - Matão, Américo Brasiliense, Taquaritinga, Ibitinga, Itápolis, Ibaté, Descalvado, Porto Ferreira, Jaboticabal e Franca usam o mesmo modelo visual e editorial.
   - Repetem a mesma ordem de seções, os mesmos seis passos, quatro FAQs equivalentes, CTAs semelhantes e frases institucionais com troca de cidade.
   - A transparência sobre não existir unidade local está correta, mas a utilidade local é baixa.

2. **A galeria da Home sugere unidades inexistentes.**
   - São Carlos, Rio Claro, Bauru, Ribeirão Preto e Matão aparecem com rótulos “Unidade 1”, “Unidade 2” ou “Unidade 3”.
   - Isso contradiz a regra verdadeira de que a unidade física existe somente em Araraquara.

3. **A Home menciona “nossa rede de parceiros” sem comprovação.**
   - Não há lista, prova ou definição dessa rede.
   - A frase conflita com páginas locais que deixam claro não haver parceria com CAPS, Prefeitura ou SUS.

### Média prioridade

1. **A mesma imagem de Araraquara aparece nas 10 páginas genéricas.**
   - Embora o texto alternativo diga que é ilustrativa, a repetição enfraquece a identidade local e pode gerar interpretação equivocada.
   - Recomendação: retirar a imagem das páginas sem unidade real ou usar conteúdo visual neutro que não represente instalação física.

2. **Parte dos dados editoriais de quatro cidades não é usada na página publicada.**
   - São Carlos, Rio Claro, Bauru e Ribeirão Preto possuem páginas exclusivas, mas também continuam no cadastro compartilhado usado pela Home, Cidades e sitemap.
   - Não se deve simplesmente remover essas entradas, pois elas mantêm os links e o sitemap. O correto é separar os dados de navegação dos textos do modelo genérico.

3. **Links institucionais `/tratamento`, `/acolhimento`, `/familia` e `/contato` redirecionam para trechos de Araraquara.**
   - Isso reduz a neutralidade da arquitetura institucional e faz algumas âncoras locais terminarem em uma página de cidade específica.
   - A correção deve ser tratada em etapa própria, pois afeta o site além das páginas locais.

4. **Uma fonte municipal de Araraquara pode ter mudado de endereço.**
   - O link antigo da atenção especializada precisa ser confirmado e, se necessário, substituído pela página municipal atual.

### Baixa prioridade

- Algumas descriptions podem ser truncadas nos resultados por serem longas.
- A nomenclatura dos titles varia entre “reabilitação” e “recuperação”; isso não é erro por si só e pode preservar a intenção específica de cada página.
- Há três links distintos de Facebook no projeto; foram adicionados por solicitação anterior e não serão consolidados sem confirmação do proprietário.
- A verificação automática apontou o domínio temporário apenas no ambiente de prévia; no site publicado, o sitemap usa corretamente `https://centraldeacolhimentoereabilitacao.com` e contém as 15 URLs.

## Oportunidades

- Transformar as 10 páginas genéricas em conteúdos locais genuínos, uma por vez, sem copiar as páginas mais completas.
- Usar apenas informações municipais verificáveis e atuais quando realmente úteis.
- Criar FAQs próprias conforme dúvidas plausíveis de cada região.
- Manter CTAs, telefone, WhatsApp e avisos éticos compartilhados, pois essa repetição institucional é legítima.
- Separar cadastro de navegação/sitemap do conteúdo editorial para evitar dados obsoletos.

## Páginas que não precisam de reforma

- Araraquara
- São Carlos
- Rio Claro
- Bauru
- Ribeirão Preto

Essas páginas devem ser preservadas. No máximo, recebem correções pontuais comprovadas, sem troca de estrutura ou reescrita ampla.

## Páginas que precisam de correção editorial

- Matão
- Américo Brasiliense
- Taquaritinga
- Ibitinga
- Itápolis
- Ibaté
- Descalvado
- Porto Ferreira
- Jaboticabal
- Franca

Cada uma precisa de texto, organização e FAQ próprios, mantendo transparência absoluta: não há unidade física da Central nessas cidades.

## Plano de correção

### Fase A — Correções de veracidade

- Na Home, remover a indicação “Unidade 1/2/3” das cidades sem unidade física.
- Na Home, substituir “nossa rede de parceiros” por linguagem verdadeira sobre orientação a famílias de diferentes regiões.
- Preservar integralmente a galeria real da unidade de Araraquara.

### Fase B — Correções técnicas importantes

- Separar os dados usados em Home/Cidades/sitemap dos textos editoriais usados pelo modelo local.
- Manter todos os slugs, canonicals e URLs atuais.
- Preservar a rota dinâmica para as cidades que ainda não possuem página exclusiva.
- Confirmar e corrigir somente o link municipal potencialmente desatualizado de Araraquara.

### Fase C — SEO local verdadeiro

- Trabalhar as 10 cidades pendentes individualmente, em lotes controlados.
- Pesquisar fontes oficiais antes de qualquer menção a CAPS, saúde mental, urgência ou serviço municipal.
- Criar contexto e FAQ próprios para cada cidade, sem endereços, parcerias, unidades ou serviços inventados.

### Fase D — Arquitetura institucional

- Em etapa separada, avaliar páginas institucionais reais para Tratamento, Acolhimento, Família e Contato, evitando redirecionamento automático para Araraquara.
- Manter links internos moderados e úteis, sem rede artificial.

### Fase E — Melhorias opcionais

- Enxugar descriptions longas quando houver truncamento evidente.
- Avaliar imagens neutras e leves apenas quando trouxerem utilidade real.
- Monitorar no Search Console cobertura, canônica escolhida e desempenho das 10 páginas após as melhorias.

## Validação após cada fase

- HTTP 200 direto e com Googlebot.
- Um H1 por página, sem `noindex`.
- Canonical absoluto e próprio.
- URL única e presente uma vez no sitemap do domínio oficial.
- Breadcrumb visual coerente com `BreadcrumbList`.
- Schema verdadeiro, sem `LocalBusiness` ou endereço falso.
- Links e contatos funcionando.
- Celular sem cortes, sobreposições ou conteúdo oculto.
- Comparação editorial para confirmar redução de similaridade.

Nenhuma correção será aplicada antes da aprovação deste plano.
