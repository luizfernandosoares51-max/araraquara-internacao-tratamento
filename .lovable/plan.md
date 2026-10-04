# Assistente de Acolhimento

## Resultado

Adicionar um assistente de IA discreto e acessível em todo o site, sem criar páginas de conteúdo, alterar URLs públicas existentes ou modificar qualquer texto, metadado, canonical, schema, sitemap, link interno ou estrutura SEO.

O visitante terá **uma conversa temporária, sem armazenamento**. Ao fechar ou recarregar a página, o histórico será descartado.

## O que será alterado

1. **Botão flutuante global**
   - Texto “Falar com nosso assistente” e ícone próprio de conversa.
   - Posição responsiva que não conflite com o botão atual do WhatsApp.
   - Abre uma janela de chat adaptada para celular e computador.

2. **Janela do Assistente de Acolhimento**
   - Apresentação acolhedora e cinco sugestões rápidas.
   - Respostas em linguagem clara, humana e objetiva, com suporte a listas e destaques.
   - Indicadores de envio, resposta em andamento, interrupção e erro.
   - Campo de mensagem sempre acessível e retorno automático do foco após a resposta.
   - Botões “Fale com a equipe no WhatsApp” e “Ligar agora”, usando o contato oficial já existente.

3. **Orientação e segurança**
   - Instruções do agente baseadas nos fatos reais já publicados no site e na única unidade física, em Araraquara.
   - Proibição explícita de inventar preços, tratamentos, profissionais, medicamentos, endereços, unidades, cidades, convênios, resultados, diagnósticos ou promessas.
   - Dúvidas sem resposta confirmada serão encaminhadas à equipe.
   - Nenhum diagnóstico, prescrição ou alteração de medicamentos.
   - Emergências serão direcionadas imediatamente ao SAMU 192, emergência médica ou serviço local.
   - Não solicitar documentos, senhas, dados financeiros ou informações pessoais desnecessárias.

4. **Integração de IA**
   - Criar um endpoint técnico não indexável em `/api/chat`, separado das páginas do site.
   - Manter chave, instruções e chamadas de IA somente no servidor.
   - Usar streaming para mostrar a resposta conforme ela é gerada e permitir interrupção.
   - Enviar todo o histórico temporário da conversa em cada mensagem, sem gravá-lo.
   - Exibir mensagens seguras e específicas para falta de créditos, indisponibilidade e erros de conexão.

## Serviços e chave necessários

- **Lovable Cloud:** necessário para executar com segurança a comunicação do assistente no servidor. Não será usado banco de dados, login ou armazenamento de conversas.
- **Lovable AI Gateway:** fará as respostas do agente com o modelo padrão `openai/gpt-6-astra`.
- **`LOVABLE_API_KEY`:** chave secreta gerenciada pelo projeto. Se ainda não existir, será criada pela ferramenta oficial; você não precisa fornecer nem copiar credenciais.
- O uso de IA consome os créditos do workspace. Nenhum outro serviço externo, conta ou chave será necessário.

## Arquivos e limites

- Criar componentes isolados para o chat e os elementos visuais oficiais de conversa.
- Criar módulos exclusivos do servidor para a integração e as regras do agente.
- Adicionar somente a montagem do assistente ao contêiner global existente, para que apareça nas páginas atuais.
- Instalar apenas as bibliotecas oficiais necessárias à conversa e ao modelo.
- Registrar a decisão técnica do assistente sem alterar decisões editoriais existentes.

Não serão criadas páginas, rotas editoriais ou registros em sitemap. O endpoint técnico `/api/chat` não terá conteúdo indexável.

## Validação antes da entrega

- Fazer uma chamada real e uma continuação da conversa para validar contexto e segurança.
- Testar sugestões rápidas, envio, interrupção, fechamento e descarte do histórico.
- Testar WhatsApp e telefone oficiais.
- Verificar emergências, limites clínicos, informações desconhecidas e prevenção de invenções.
- Validar em celular e computador, inclusive sobreposição com o WhatsApp atual.
- Confirmar que as páginas e URLs existentes continuam respondendo normalmente.
- Comparar Title, H1, canonical, robots, metadados, schemas, sitemap e links internos antes e depois.
- Manter tudo somente na prévia até nova aprovação para publicação.