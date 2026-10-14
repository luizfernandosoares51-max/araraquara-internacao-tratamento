# Triagem contextual nas páginas públicas

## Resultado

Disponibilizar a triagem familiar logo após a introdução das páginas públicas solicitadas, preenchendo previamente o município nas páginas locais e mantendo a busca aberta nas páginas gerais.

## Implementação

1. Adicionar ao componente a cidade inicial opcional, preservando a possibilidade de alteração e o descarte das respostas ao recarregar.
2. Inserir a triagem nos modelos compartilhados de cidades e especialidades, evitando duplicações e usando o nome correto de cada município.
3. Inserir a triagem nas páginas institucionais, Blog e tratamentos que não usam os modelos compartilhados.
4. Manter o espaço inferior seguro para a barra móvel e os limites de emergência, privacidade, locomoção e sede única em Araraquara.
5. Testar o preenchimento contextual, a alteração da cidade, o fluxo completo, celular/computador e a compilação; depois publicar.

## Limites

- Somente rotas públicas ativas e indexadas serão alteradas; campanhas, redirecionamentos e páginas aposentadas ficam de fora.
- Rotas solicitadas que não existirem não serão inventadas: serão registradas como ausentes na validação.
- A cidade inicial indica apenas a origem da família e não representa filial, vaga ou transporte confirmado.