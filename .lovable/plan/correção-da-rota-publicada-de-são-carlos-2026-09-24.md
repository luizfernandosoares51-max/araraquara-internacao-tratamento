# Correção da rota publicada de São Carlos

## Objetivo
Garantir que `/clinica-de-recuperacao-em-sao-carlos-sp` seja reconhecida como uma rota explícita e estável por navegadores e rastreadores, sem alterar seu conteúdo ou slug.

## Implementação
- Criar uma rota dedicada para o endereço atual de São Carlos, reutilizando exatamente os dados, o visual e o componente já existentes.
- Preservar metadados, canonical, dados estruturados, telefone, WhatsApp e conteúdo da página atual.
- Manter a rota dinâmica para todas as demais cidades e evitar qualquer mudança nelas.

## Validação
- Confirmar compilação sem erros.
- Publicar a correção.
- Testar a URL exata diretamente no domínio principal, como navegador comum e Googlebot, confirmando HTTP 200.
- Conferir título, canonical e presença da URL no sitemap publicado.
