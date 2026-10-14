# Corrigir navegação e compactar o rodapé

## Resultado
- Toda troca entre páginas públicas começa no topo, sem herdar a posição anterior.
- O rodapé deixa de exibir a lista longa de links regionais.
- As cidades principais aparecem em uma grade compacta, com acesso direto às páginas oficiais existentes.
- Um botão leva ao diretório completo de cidades.

## Implementação
- Adicionar um observador global de mudança de rota no layout principal, usando o roteador TanStack já adotado pelo projeto.
- Reduzir o catálogo do rodapé às nove cidades solicitadas, preservando a URL consolidada de Araraquara e excluindo páginas aposentadas.
- Reformular o bloco regional com links compactos e um botão “Ver todas as 19 cidades atendidas”.
- Atualizar os testes do catálogo para garantir destinos reais, ausência de Bauru e quantidade esperada.
- Validar navegação real entre páginas em computador e celular, confirmando posição inicial no topo.
- Publicar somente após testes e prévia aprovados.
