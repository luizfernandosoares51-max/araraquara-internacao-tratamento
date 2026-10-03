# Otimização SEO cirúrgica da Home

## Diagnóstico atual
- A Home já possui um único H1, conteúdo renderizado no HTML inicial, canonical próprio, metadados sociais, imagens reais identificadas corretamente e dados estruturados coerentes.
- O H1 atual é “Clínica de Reabilitação e Acolhimento para Dependência Química”; ele cobre o tema principal, mas não explicita alcoolismo nem a identidade da Central.
- A hierarquia atual tem 11 H2 e 11 H3. É válida, porém há repetição entre o rótulo e o H2 de tratamento, além de dois blocos de orientação próximos em intenção.
- Os temas dependência química, alcoolismo, acolhimento, tratamento, família, cidades e Araraquara estão presentes de forma natural.
- A unidade física exclusiva em Araraquara já está corretamente indicada na abertura e na galeria.
- A Home aponta para cidades, Blog, vídeos, artigos e Araraquara, mas não possui links diretos para `/clinica-de-reabilitacao`, `/tratamento`, `/acolhimento` e `/familia`; hoje esses assuntos dependem principalmente de âncoras internas.
- O FAQ é útil, mas pode ficar mais objetivo e incluir localização sem ampliar a quantidade de perguntas.

## Alterações somente na Home
1. Ajustar o H1 para “Clínica de Reabilitação para Dependência Química e Alcoolismo”, mantendo “Central de Acolhimento e Reabilitação” imediatamente visível no cabeçalho e no primeiro parágrafo.
2. Reescrever a introdução em dois parágrafos curtos, explicando informação, orientação, acolhimento e tratamento sem promessas ou afirmações não verificadas.
3. Transformar os três caminhos iniciais em links reais e contextuais para `/acolhimento`, `/tratamento` e `/familia`.
4. Incluir uma chamada contextual discreta para `/clinica-de-reabilitacao` como guia central, sem duplicar o conteúdo da página pilar.
5. Reforçar a seção da unidade com o título “Clínica de Reabilitação em Araraquara”, deixando explícito que a única unidade física fica em Araraquara e que outras cidades recebem orientação e páginas informativas.
6. Ajustar textos de tratamento, família, cidades e Blog para formar a sequência semântica Central → clínica de reabilitação/recuperação → dependência química e alcoolismo → tratamento e acolhimento → família → cidades → conteúdo educativo.
7. Revisar o FAQ existente para perguntas objetivas sobre escolha, tratamento, acolhimento, família e localização; manter as respostas fiéis ao que já está comprovado.
8. Atualizar Title, meta description e textos equivalentes nos dados estruturados da Home, preservando canonical, indexação, imagem social, `WebSite`, `WebPage`, `Organization` e `FAQPage`.
9. Manter o visual claro atual, fazendo apenas pequenos ajustes de espaçamento necessários ao novo texto.

## Preservação e validação
- Alterar exclusivamente `src/routes/index.tsx`.
- Não mudar URLs, slugs, páginas locais, Blog, artigos, página pilar, sitemap, robots, navegação global, imagens ou configurações técnicas.
- Validar HTTP 200, um único H1, ordem H2/H3, canonical, index/follow, links estratégicos, imagens e ALT, dados estruturados e ausência de cortes em celular e computador.
- Apresentar a prévia e o relatório completo antes de qualquer publicação.
