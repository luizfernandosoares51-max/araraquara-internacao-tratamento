# Auditoria e plano cirúrgico da Home

## Escopo e evidências
Auditoria somente da Home `https://centraldeacolhimentoereabilitacao.com/`, sem alterações no site. Foram comparados código, HTML publicado entregue ao Googlebot, prévia em computador e celular, scanner técnico atual, sitemap/robots, dados da página e pesquisa de palavras-chave no Brasil.

Limites mantidos: unidade física somente em Araraquara; nenhuma promessa de cura, vaga ou resultado; nenhuma unidade, parceria, profissional, certificação, avaliação ou serviço inventado; sem mudar URLs, slugs, cidades ou outras páginas.

## A) Problemas críticos
**Nenhum problema crítico técnico encontrado.**

A Home publicada responde HTTP 200 em HTTPS, não tem `noindex` nem `X-Robots-Tag`, o robots permite Googlebot, o canonical é único e aponta para a própria Home, e o conteúdo principal já chega renderizado no HTML. O sitemap atual está válido e usa o domínio oficial.

A confirmação de indexação no Google permanece **indisponível**: não há propriedade verificada acessível no Search Console conectado. Isso não prova que a Home esteja fora do índice.

## B) Problemas importantes

### 1. Tema principal pouco explícito no title e no H1
- **Atual:** title “Central de Acolhimento e Reabilitação | Acolhimento e Tratamento”; H1 “Central de Acolhimento e Reabilitação”.
- **Problema:** marca e acolhimento estão claros, mas “clínica de reabilitação”, “clínica de recuperação” e “dependência química” não aparecem no title/H1. No texto visível, “clínica de reabilitação”, “clínica de recuperação” e “recuperação” aparecem zero vezes.
- **Impacto:** o Google precisa inferir o assunto central a partir de seções inferiores; a Home perde precisão para consultas genéricas.
- **Recomendação:** manter a marca visível no cabeçalho, mas tornar title e H1 temáticos e naturais.
- **Risco:** baixo, desde que a redação não sugira múltiplas unidades e não seja repetida artificialmente.

### 2. Arquitetura de hub incompleta
- **Problema:** a Home cobre tratamento, acolhimento e família em âncoras internas, mas não transfere autoridade para páginas institucionais próprias. `/tratamento`, `/acolhimento`, `/familia` e `/contato` hoje redirecionam para trechos da página local de Araraquara.
- **Impacto:** a arquitetura mistura intenção genérica da Home com intenção local de Araraquara e limita o aprofundamento dos principais temas.
- **Recomendação nesta etapa:** fortalecer links somente para destinos reais existentes (`/cidades`, `/blog`, `/videos`, artigos e página de Araraquara), sem criar páginas ou alterar rotas. Páginas institucionais próprias devem ser um projeto posterior e separado.
- **Risco:** baixo na Home; médio se as rotas institucionais forem reformuladas futuramente.

### 3. Bloco de cidades excessivo para a Home
- **Problema:** a Home exibe todas as 15 cidades em cartões, antes das explicações sobre tratamento e acolhimento. Há 53 links internos e muitos repetem a âncora genérica “Ver informações”.
- **Impacto:** enfraquece o foco nacional/genérico, aproxima a Home de um diretório local e empurra conteúdo central para baixo.
- **Recomendação:** manter uma seleção enxuta de cidades estratégicas, usar âncoras descritivas e destacar “Ver todas as cidades” para `/cidades`. Nenhuma página ou URL seria removida.
- **Risco:** baixo; reduz apenas links redundantes na Home, mantendo todo o diretório acessível.

### 4. Imagem principal e logo muito pesados
- **Evidência:** imagem principal PNG com cerca de 1,68 MB; logo PNG com cerca de 911 KB, embora exibido a 44×44 px. O carregamento medido transferiu cerca de 2,76 MB; essas duas imagens representam quase todo o peso inicial. CLS observado foi praticamente zero, o que é positivo.
- **Impacto:** risco elevado para LCP em conexões móveis, apesar de a página responder rapidamente no teste local.
- **Recomendação:** criar versões WebP/AVIF dimensionadas, manter proporções declaradas e priorizar somente a imagem principal.
- **Risco:** mínimo, condicionado à comparação visual após compressão.

### 5. Imagem e texto podem sugerir uma rede física estadual
- **Atual:** arte “Nossa Rede de Apoio em Todo o Estado de São Paulo” e alt equivalente.
- **Problema:** a expressão pode ser entendida como estrutura, unidades ou parcerias distribuídas pelo estado, o que não está comprovado.
- **Impacto:** risco de interpretação institucional incorreta e conflito com a transparência de que a unidade física existe somente em Araraquara.
- **Recomendação:** substituir o contexto textual/alt por linguagem de orientação a famílias de diferentes regiões, sem “rede”, parceria ou presença física estadual. Preservar a imagem somente se ela puder ser descrita com exatidão; caso contrário, propor outra imagem em etapa separada.
- **Risco:** baixo; melhora precisão e confiança.

### 6. Meta description longa
- **Atual:** 202 caracteres.
- **Impacto:** maior chance de truncamento; não é penalidade, mas reduz controle sobre a mensagem exibida.
- **Recomendação:** reduzir para aproximadamente 150–160 caracteres mantendo marca, dependência química, alcoolismo, orientação e famílias.
- **Risco:** baixo.

## C) Melhorias recomendadas
- Reorganizar a Home para apresentar primeiro entidade, problema atendido, tratamento/acolhimento, família e próximo passo; depois cidades, conteúdo e prova visual da unidade de Araraquara.
- Transformar os blocos “Como podemos orientar” e “Não sabe por onde começar?” em uma navegação única, reduzindo repetição.
- Diferenciar melhor a Home da página de Araraquara: Home como autoridade temática e porta de entrada; Araraquara como página da unidade física.
- Corrigir a hierarquia da seção Família, que hoje contém dois H2 no mesmo bloco; o segundo deve ser H3 ou um bloco independente.
- Tornar as âncoras das cidades descritivas, sem repetir “Ver informações” 15 vezes.
- Completar os metadados sociais controlados pela rota. A publicação atual recebe uma imagem automática de 1920×1080 e cerca de 543 KB, mas a Home não define uma imagem social própria no código.
- Ajustar o grafo estruturado com `WebSite` e `WebPage`, mantendo `Organization` e o FAQ fiel ao conteúdo visível. Breadcrumb não é necessário na Home.

## D) O que já está correto e deve ser preservado
- URL raiz, HTTPS, HTTP 200 e canonical próprio no domínio oficial.
- Indexabilidade, ausência de bloqueio e robots liberando Googlebot.
- Sitemap válido com a Home e as páginas públicas no domínio correto.
- SSR: H1, conteúdo, links e JSON-LD presentes no HTML inicial.
- Um único H1, idioma `pt-BR`, viewport móvel e ausência de rolagem horizontal em 390 px e 1280 px.
- Sem erros de console na Home publicada e na prévia testada.
- Favicon presente e válido.
- Telefone e WhatsApp oficiais corretos; CTA de ligação já existe no bloco final e no rodapé.
- Linguagem sem promessa de cura, prazo ou resultado.
- Fotos reais identificadas como pertencentes exclusivamente à unidade de Araraquara.
- FAQ útil e coerente com o conteúdo visível.
- Links para Blog, Vídeos, Cidades e páginas locais existentes.

## E) Proposta exata de nova estrutura da Home
1. Cabeçalho e navegação.
2. Abertura: H1 temático, explicação curta da Central, CTA “Conhecer o tratamento” e CTA “Buscar orientação”.
3. “Como a Central pode orientar”: acolhimento, tratamento e apoio à família.
4. “Tratamento para dependência química e alcoolismo”: visão geral, sem duplicar a página local.
5. “Como funciona o primeiro contato”: etapas claras e responsáveis.
6. “Orientação para famílias”: sinais, dúvidas e decisão informada.
7. “Atendimento por cidade”: seleção enxuta + link destacado para `/cidades`.
8. “Unidade física em Araraquara”: transparência e acesso à página/fotos da unidade.
9. Conteúdos do Blog e Vídeos.
10. FAQ.
11. Contato e rodapé.

## F) Title atual → proposto
- **Atual:** Central de Acolhimento e Reabilitação | Acolhimento e Tratamento
- **Proposto:** Clínica de Reabilitação para Dependência Química | Central

A proposta tem 58 caracteres e associa tema principal e marca sem empilhar termos.

## G) H1 atual → proposto
- **Atual:** Central de Acolhimento e Reabilitação
- **Proposto:** Clínica de Reabilitação e Acolhimento para Dependência Química

A marca continua imediatamente visível no cabeçalho e no texto introdutório; o H1 passa a explicar o assunto central sem competir com H1 locais.

## H) Meta description atual → proposta
- **Atual:** Informações e orientação para pessoas e famílias que buscam acolhimento e tratamento para dependência química, alcoolismo e uso problemático de álcool e outras drogas em diferentes regiões de São Paulo.
- **Proposta:** A Central de Acolhimento e Reabilitação oferece orientação sobre tratamento para dependência química e alcoolismo, com atendimento para famílias em São Paulo.

A proposta tem 158 caracteres e não promete cura, vaga ou resultado.

## I) Estrutura H2/H3 proposta
- H2: Como a Central pode orientar
  - H3: Acolhimento responsável
  - H3: Tratamento individualizado
  - H3: Orientação para a família
- H2: Tratamento para dependência química e alcoolismo
  - H3: Acompanhamento terapêutico
  - H3: Acompanhamento psicológico
  - H3: Avaliação psiquiátrica quando indicada
- H2: Como funciona o primeiro contato
- H2: Apoio para famílias que buscam ajuda
- H2: Atendimento e orientação por cidade
- H2: Unidade física em Araraquara
- H2: Conteúdos para entender a dependência química
- H2: Perguntas frequentes
- H2: Fale com a Central

## J) Links internos a fortalecer
- `/cidades`: link principal do bloco regional.
- `/clinica-de-recuperacao-em-araraquara`: “Conheça a unidade física em Araraquara”.
- `/blog`: “Conteúdos sobre dependência química e alcoolismo”.
- `/videos`: “Vídeos informativos”.
- Artigo sobre sinais e tratamento: âncora descritiva.
- Seleção enxuta de cidades com âncoras “Orientação para famílias de [cidade]”.

Não fortalecer, nesta fase, os redirects `/tratamento`, `/acolhimento`, `/familia` e `/contato` como se fossem páginas institucionais independentes.

## K) Ajustes de imagens e imagem social
- Reencodar e redimensionar logo e imagem principal.
- Manter width/height e lazy loading das fotos inferiores.
- Revisar o alt da arte estadual para não sugerir rede física ou parceria.
- Criar uma imagem social 1200×630 somente após aprovação visual; ela deverá corresponder a uma imagem realmente exibida na Home.
- Manter as fotos de Araraquara claramente rotuladas como unidade física de Araraquara.

## L) Ajustes de schema
- Preservar `Organization`, telefone e perfis oficiais.
- Adicionar `WebSite` com identificador estável e `WebPage` para a Home, ligados por `isPartOf`/`mainEntity` quando aplicável.
- Preservar `FAQPage` somente com perguntas e respostas realmente visíveis.
- Não adicionar `LocalBusiness`, endereço, avaliações, preços, profissionais ou parceiros.
- Não adicionar breadcrumb à Home; ela é a raiz.

## M) Ajustes de performance
- Converter os dois PNGs iniciais para formatos modernos e tamanhos adequados.
- Evitar carregar antecipadamente o logo de 911 KB em resolução muito superior ao uso.
- Manter dimensões fixas para preservar o CLS quase nulo.
- Avaliar hospedagem local das fontes ou redução de pesos somente depois das imagens, que são o gargalo dominante.
- Validar novamente celular e computador após cada mudança.

## Dados de busca usados como contexto
Na base brasileira consultada, “clínica de recuperação” apresentou maior volume estimado e dificuldade alta; “clínica de reabilitação” apresentou volume relevante e dificuldade menor. Esses números são estimativas, não garantia de posição. A própria URL da Home ainda não apresentou dados orgânicos no provedor consultado, o que deve ser tratado como desconhecido, não como tráfego zero.

## Execução após aprovação
1. Ajustar title, H1, description, abertura e hierarquia semântica.
2. Reorganizar links e reduzir o bloco de cidades sem tocar nas páginas locais.
3. Corrigir linguagem da imagem estadual e separar claramente a unidade de Araraquara.
4. Otimizar os dois ativos pesados.
5. Ajustar schema e metadados sociais.
6. Validar HTML para Googlebot, links, canonical, sitemap inalterado, celular/computador e ausência de regressões.

Nada será implementado antes da aprovação.
