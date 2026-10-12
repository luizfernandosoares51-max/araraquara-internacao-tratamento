import { specialtyScope, specialtySources } from './araraquara-specialties';
import { institutionalLocalBusiness } from './institutional';
import { siteUrl } from './site';
export { specialtyScope, specialtySources };
export type RibeiraoSpecialtyKey = 'alcohol' | 'cocaine' | 'involuntary' | 'voluntary' | 'transport' | 'women' | 'dual' | 'medication' | 'youth';
export const ribeiraoSpecialtyScope = { femaleUnitConfirmed: false, adolescentProgramConfirmed: false, ownPsychiatryConfirmed: true, ownMedicationDetox: false } as const;
export const ribeiraoParentPath = '/clinica-de-recuperacao-em-ribeirao-preto-sp';
export const ribeiraoSpecialtyList = [
  {
    "key": "alcohol",
    "path": "/tratamento-alcoolismo-ribeirao-preto",
    "label": "Tratamento do Alcoolismo",
    "summary": "Abstinência, vínculos e apoio à família.",
    "title": "Tratamento do Alcoolismo para Ribeirão Preto - SP | Acolhimento",
    "description": "Orientação sobre alcoolismo para Ribeirão Preto. Acolhimento voluntário em Araraquara; equipe multidisciplinar, avaliação médica e orientação à família 24h.",
    "heading": "Tratamento do alcoolismo para famílias de Ribeirão Preto",
    "intro": "O álcool pode ocupar cada vez mais espaço na rotina sem que a família perceba uma ruptura imediata. Para quem procura ajuda em Ribeirão Preto, a Central oferece escuta e orientação sobre acolhimento voluntário psicossocial em Araraquara, na única sede em Araraquara, com suporte psicológico, acompanhamento médico e psiquiátrico integrado e enfermagem com supervisão diária e cuidados contínuos.",
    "notice": "Tremores após reduzir o álcool merecem avaliação médica. Convulsões, confusão intensa ou alteração de consciência exigem urgência ou SAMU 192.",
    "condition": "Dependência de álcool",
    "sections": [
      {
        "title": "Observar prejuízos sem esperar o limite",
        "paragraphs": [
          "Ausências no trabalho, discussões recorrentes e tentativas frustradas de diminuir o consumo são informações úteis para uma conversa profissional. A dependência não se resume ao número de doses nem se confirma por uma lista na internet. Registre o que mudou, sem vigiar ou humilhar a pessoa.",
          "Em Ribeirão Preto, a rede de saúde do município pode ser procurada para avaliar necessidades de cuidado. A orientação particular da Central é uma possibilidade distinta, sem vínculo declarado com o SUS. A conversa inicial não determina internação nem reserva vaga."
        ]
      },
      {
        "title": "Desintoxicação é uma decisão clínica",
        "paragraphs": [
          "Após consumo intenso ou prolongado, interromper o álcool abruptamente pode provocar abstinência e complicações. Não improvise desintoxicação em casa ou medicamentos emprestados. Cabe ao serviço médico definir se há necessidade de observação, monitoramento ou atendimento hospitalar.",
          "A sede da Central em Araraquara reúne acompanhamento médico e psiquiátrico integrado e enfermagem. A desintoxicação médica e as necessidades hospitalares seguem encaminhamento a estabelecimentos habilitados. Organizar uma viagem a partir de Ribeirão Preto não deve adiar uma avaliação urgente na cidade de origem."
        ]
      },
      {
        "title": "Reconstrução de vínculos e continuidade",
        "paragraphs": [
          "O cuidado psicossocial pode discutir confiança, limites e formas de pedir apoio. A proposta institucional inclui suporte psicológico de Margarete Vasques, CRP 06/130268, 12 Passos, laborterapia, convivência e prevenção à recaída. Isso não representa promessa de cura ou de restauração imediata das relações.",
          "Planeje a participação da família de Ribeirão Preto e as visitas agendadas à sede. Antes do retorno, discuta acompanhamento indicado e apoios acessíveis perto de casa. Permanência, custos e condições precisam ser esclarecidos individualmente; não existe duração universal nem garantia de cobertura por plano."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "Toda abstinência alcoólica pode ser tratada em casa?",
        "answer": "Não. Após uso intenso ou prolongado, a redução pode exigir avaliação e monitoramento médico. Convulsões, confusão intensa ou alteração de consciência requerem urgência ou SAMU 192."
      },
      {
        "question": "A Central faz desintoxicação de álcool em sua sede?",
        "answer": "Não realiza desintoxicação médica na sede em Araraquara. Necessidades clínicas são encaminhadas a estabelecimentos habilitados externos, conforme avaliação."
      },
      {
        "question": "Como a família de Ribeirão Preto participa do cuidado?",
        "answer": "Pode organizar informações, discutir limites e combinar visitas por agendamento. O apoio familiar integra o planejamento, sem substituir avaliação ou garantir resultados."
      }
    ]
  },
  {
    "key": "cocaine",
    "path": "/tratamento-cocaina-crack-ribeirao-preto",
    "label": "Crack e Cocaína",
    "summary": "Fissura, hábitos e continuidade do cuidado.",
    "title": "Crack e Cocaína para Ribeirão Preto - SP | Orientação",
    "description": "Orientação sobre crack, cocaína e fissura para famílias de Ribeirão Preto. Suporte psicossocial em Araraquara e encaminhamento médico quando necessário.",
    "heading": "Crack e cocaína: orientação para Ribeirão Preto",
    "intro": "Uma família pode perceber mudanças no sono, no dinheiro ou na convivência antes de conseguir conversar sobre cocaína ou crack. A Central ajuda a organizar essa busca em Ribeirão Preto, distinguindo avaliação médica de acolhimento voluntário psicossocial na única sede em Araraquara.",
    "notice": "Dor no peito, convulsões, alteração de consciência ou risco imediato exigem urgência. Acione o SAMU 192; não aguarde transporte agendado.",
    "condition": "Dependência de cocaína",
    "sections": [
      {
        "title": "Reconhecer mudanças sem concluir um diagnóstico",
        "paragraphs": [
          "Os estimulantes podem afetar sono, apetite, humor e decisões, mas relatos familiares não bastam para estabelecer diagnóstico ou indicar medicação. Intensidade e riscos dependem do padrão de uso, de outras substâncias e das condições de saúde. Evite reduzir a pessoa ao consumo.",
          "Para organizar a avaliação em Ribeirão Preto, descreva acontecimentos concretos e tentativas anteriores de ajuda. A rede de saúde local permanece uma porta de entrada. A Central oferece acompanhamento médico e psiquiátrico integrado para avaliação clínica, estabilização e manejo de comorbidades, conforme as necessidades individuais. Sintomas graves ou risco imediato exigem atendimento de urgência."
        ]
      },
      {
        "title": "Fissura e contextos associados ao consumo",
        "paragraphs": [
          "O desejo intenso de usar pode variar e reaparecer. Relações, emoções e situações do cotidiano podem estar associadas a ele; reconhecê-las com apoio profissional ajuda a discutir respostas. Não há prazo fixo para eliminar a fissura nem garantia de controle pela mudança de cidade.",
          "Suporte psicológico, 12 Passos, convivência e prevenção à recaída fazem parte da proposta confirmada. Não são anunciadas terapia cognitiva específica ou reabilitação neuropsicológica não confirmadas. O acompanhamento médico e psiquiátrico integrado e a enfermagem complementam o cuidado; prescrições e condutas cabem aos profissionais responsáveis."
        ]
      },
      {
        "title": "Preparar o retorno a Ribeirão Preto",
        "paragraphs": [
          "Acolhimento não deve significar rompimento definitivo com os vínculos. Quando compatível com avaliação e consentimento, um período em Araraquara pode apoiar a reorganização de hábitos. Antes do ingresso, esclareça condições, custos e visitas agendadas.",
          "No retorno, discuta apoios familiares e acompanhamento acessível em Ribeirão Preto. Recaídas ou dificuldades pedem reavaliação do plano, não punição. A família não deve improvisar sedação ou contenção; sintomas graves e risco imediato pertencem à rede de urgência."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "Quanto tempo leva para controlar a fissura?",
        "answer": "Não existe prazo único. Frequência e intensidade variam; acompanhamento e revisão do plano orientam as estratégias, sem garantia de eliminar o desejo de usar."
      },
      {
        "question": "Qual suporte psicológico a Central informa?",
        "answer": "Suporte psicológico com Margarete Vasques, CRP 06/130268, no acolhimento voluntário em Araraquara, integrado à convivência, 12 Passos e prevenção à recaída."
      },
      {
        "question": "Mudar de Ribeirão Preto para acolhimento elimina os gatilhos?",
        "answer": "Não. O afastamento geográfico não garante recuperação. É importante discutir contextos associados ao uso e planejar apoios para a continuidade perto de casa."
      }
    ]
  },
  {
    "key": "involuntary",
    "path": "/internacao-involuntaria-ribeirao-preto",
    "label": "Internação Involuntária",
    "summary": "Avaliação médica, direitos e encaminhamento.",
    "title": "Internação Involuntária em Ribeirão Preto - SP | Leis e Direitos",
    "description": "Orientação para Ribeirão Preto sobre Leis 10.216/2001 e 13.840/2019, avaliação médica e encaminhamento externo. A sede própria recebe acolhimento voluntário.",
    "heading": "Internação involuntária em Ribeirão Preto: critérios e direitos",
    "intro": "Diante da recusa de ajuda, a família precisa separar conflito, urgência e indicação médica. A Central orienta famílias de Ribeirão Preto sobre trâmites e encaminhamento externo, mas não realiza internação involuntária clínica na sede de acolhimento voluntário em Araraquara.",
    "notice": "Recusa isolada não autoriza internação ou remoção forçada informal. Risco imediato exige avaliação de urgência ou SAMU 192.",
    "sections": [
      {
        "title": "O pedido familiar não substitui avaliação",
        "paragraphs": [
          "Mudanças de comportamento e perda percebida de autocrítica podem ser preocupantes, mas não estabelecem sozinhas a necessidade de internação. A avaliação deve considerar riscos, direitos e alternativas de cuidado. Não se pode autorizar uma medida clínica por telefone com base apenas na vontade da família.",
          "Em Ribeirão Preto, situações de risco imediato devem ser dirigidas à rede de urgência. A orientação institucional ajuda a organizar dúvidas e informações para os profissionais responsáveis; não constitui laudo, parecer jurídico ou promessa de admissão."
        ]
      },
      {
        "title": "Leis aplicáveis e responsabilidade médica",
        "paragraphs": [
          "A Lei 10.216/2001 protege direitos e prevê internação quando os recursos extra-hospitalares se mostram insuficientes, com laudo médico circunstanciado. Internação involuntária é diferente de compulsória, que decorre de determinação judicial. Nenhuma dessas modalidades se confunde com acolhimento psicossocial voluntário.",
          "A Lei 13.840/2019 alterou a Lei 11.343/2006: para dependência de drogas, prioriza cuidado ambulatorial e prevê internação excepcional em unidades de saúde ou hospitais gerais, autorizada por médico registrado no CRM. Não autoriza internação involuntária em comunidade terapêutica acolhedora."
        ]
      },
      {
        "title": "Fiscalização e dignidade no encaminhamento",
        "paragraphs": [
          "A Lei 10.216/2001 determina comunicação ao Ministério Público Estadual em até 72 horas pelo responsável técnico do estabelecimento, com o mesmo procedimento na alta. No regime da Lei 13.840/2019, internações e altas são comunicadas em até 72 horas ao Ministério Público, à Defensoria Pública e aos demais órgãos de fiscalização previstos.",
          "A Central encaminha necessidades médicas a estabelecimentos habilitados externos, quando a avaliação indica necessidade hospitalar, com responsabilidade do estabelecimento receptor pela internação. Familiares de Ribeirão Preto não devem improvisar força, sedação ou embarque coercitivo. Documentação, indicação e destino precisam ser discutidos com o serviço responsável."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "Quem pode pedir avaliação para internação involuntária por drogas?",
        "answer": "Familiar ou responsável legal; na absoluta falta deles, servidor público da saúde, assistência social ou órgãos públicos do Sisnad, exceto segurança pública, conforme o regime legal. A autorização continua sendo médica."
      },
      {
        "question": "Quem realiza a comunicação obrigatória em até 72 horas?",
        "answer": "O estabelecimento responsável cumpre as obrigações conforme o regime aplicável. A Lei 10.216/2001 prevê Ministério Público Estadual; a Lei 13.840/2019 prevê também Defensoria Pública e outros órgãos de fiscalização."
      },
      {
        "question": "A sede da Central interna moradores de Ribeirão Preto contra a vontade?",
        "answer": "Não. A sede em Araraquara recebe acolhimento voluntário psicossocial. Internação involuntária clínica exige avaliação e estabelecimento médico habilitado externo."
      }
    ]
  },
  {
    "key": "voluntary",
    "path": "/internacao-voluntaria-ribeirao-preto",
    "label": "Tratamento Voluntário",
    "summary": "Consentimento, rotina e vínculos familiares.",
    "title": "Tratamento Voluntário para Ribeirão Preto - SP | Acolhimento",
    "description": "Conheça o acolhimento voluntário em Araraquara para famílias de Ribeirão Preto: suporte psicológico, 12 Passos, convivência e visitas agendadas.",
    "heading": "Acolhimento voluntário para famílias de Ribeirão Preto",
    "intro": "Aceitar ajuda não exige que todas as dúvidas estejam resolvidas. Pessoas de Ribeirão Preto podem conhecer a proposta de acolhimento psicossocial da Central antes de decidir, com consentimento, avaliação e esclarecimento das condições da única sede em Araraquara.",
    "notice": "Acolhimento voluntário não é internação médica. Necessidades clínicas e desintoxicação recebem encaminhamento externo; ingresso depende de avaliação e disponibilidade.",
    "sections": [
      {
        "title": "Escolher com informação e participação",
        "paragraphs": [
          "A pessoa pode ter receio de se afastar de casa, do trabalho ou de compromissos familiares. Conversar sobre direitos, limites do atendimento e organização da permanência ajuda a construir uma decisão informada. Acolhimento não deve ser apresentado como castigo ou promessa de solução definitiva.",
          "Antes de viajar de Ribeirão Preto, confirme compatibilidade com o suporte, disponibilidade e custos. A família apoia a decisão, mas não substitui a participação da pessoa. Um contato por WhatsApp não significa indicação automática, contrato concluído ou reserva de vaga."
        ]
      },
      {
        "title": "Rotina com objetivos possíveis",
        "paragraphs": [
          "O cronograma informado vai das 07h às 22h e combina organização, alimentação, apoio psicológico, 12 Passos, laborterapia, atividades ao ar livre, convivência e repouso. A participação considera as necessidades individuais, sem exigir que todos alcancem metas idênticas no mesmo tempo.",
          "O suporte psicológico confirmado é de Margarete Vasques, CRP 06/130268. Metas podem envolver hábitos, relações e estratégias de prevenção à recaída. A sede reúne acompanhamento médico e psiquiátrico integrado e enfermagem para supervisão diária e cuidados contínuos. A desintoxicação médica e as necessidades hospitalares recebem encaminhamento conforme avaliação."
        ]
      },
      {
        "title": "Participação familiar e volta à cidade",
        "paragraphs": [
          "Visitas à sede devem ser agendadas conforme o cronograma terapêutico. Famílias de Ribeirão Preto podem discutir previamente como organizar contato e deslocamento, sem presumir visitas livres ou frequência fixa de mensagens. A distância exige planejamento, não rompimento dos vínculos.",
          "A continuidade pode incluir acompanhamento indicado e apoios em Ribeirão Preto. Permanência não tem duração universal. O acolhimento é particular e a orientação administrativa sobre reembolso não garante cobertura por operadora. Esclarecer essas condições evita decisões baseadas em expectativas irreais."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "O que compõe a rotina do acolhimento voluntário?",
        "answer": "O cronograma informado das 07h às 22h inclui alimentação, organização, apoio psicológico, 12 Passos, laborterapia, convivência e repouso, conforme necessidades individuais."
      },
      {
        "question": "Familiares de Ribeirão Preto podem visitar a sede?",
        "answer": "As visitas seguem agendamento conforme o cronograma terapêutico. Confirme dias, horários e condições com a coordenação antes de viajar."
      },
      {
        "question": "A internação voluntária médica ocorre na Central?",
        "answer": "Não. A proposta própria é acolhimento voluntário psicossocial em Araraquara. Internação médica e desintoxicação exigem avaliação e encaminhamento externo."
      }
    ]
  },
  {
    "key": "transport",
    "path": "/resgate-remocao-ribeirao-preto",
    "label": "Resgate e Remoção Agendada",
    "summary": "Consulta de disponibilidade e destino adequado.",
    "title": "Remoção Agendada para Ribeirão Preto - SP | Orientação Regional",
    "description": "Orientação sobre translado agendado para Ribeirão Preto, mediante consulta de disponibilidade e destino. Orientação e suporte para agendamento 24h; execução conforme disponibilidade.",
    "heading": "Remoção e translado agendado para Ribeirão Preto",
    "intro": "A busca por resgate pode surgir em uma crise, mas transporte planejado e emergência são situações diferentes. A Central informa remoção regional por agendamento com Luiz Fernando Soares, coordenação operacional, a partir da única sede em Araraquara, com plantão de orientação e suporte para agendamento 24 horas. A execução do transporte depende de agenda, condições e disponibilidade.",
    "notice": "Urgência não deve aguardar agendamento particular. Convulsões, alteração de consciência, dor no peito ou risco imediato exigem rede de urgência ou SAMU 192.",
    "sections": [
      {
        "title": "Primeiro distinguir urgência de viagem planejada",
        "paragraphs": [
          "Uma família pode procurar transporte porque não sabe a quem recorrer. O telefone institucional oferece orientação e suporte para agendamento 24 horas. A execução da remoção é combinada conforme agenda e condições; emergências devem ser dirigidas ao SAMU 192. Se a pessoa apresenta sintomas graves, priorize avaliação no local em vez de tentar levá-la a outra cidade.",
          "O SAMU 192 é um serviço público distinto da Central. Não se anuncia ambulância, equipamento médico, protocolo próprio de contenção ou veículo descaracterizado. Essas características não foram confirmadas e não devem orientar a decisão da família de Ribeirão Preto."
        ]
      },
      {
        "title": "Origem, disponibilidade e destino",
        "paragraphs": [
          "A possibilidade de deslocamento a partir de Ribeirão Preto deve ser consultada diretamente. Não há raio fixo de cobertura confirmado; a existência desta página não garante transporte disponível. Confirme agenda, custos, documentação e acompanhamento antes de qualquer saída.",
          "A única sede própria fica na R. Alfredo Micelli, 70, em Araraquara, para acolhimento voluntário psicossocial. Se a avaliação indicar cuidados hospitalares ou internação involuntária clínica, o destino será estabelecimento médico habilitado externo, não a sede da Central. Não há tempo de chegada garantido."
        ]
      },
      {
        "title": "Respeito à pessoa em cada decisão",
        "paragraphs": [
          "Contratar transporte não autoriza força, sedação ou embarque coercitivo informal. Recusa de ajuda e necessidade de internação são avaliadas de formas distintas. Os requisitos clínicos e legais não podem ser substituídos por negociação de uma viagem.",
          "Compartilhe somente informações necessárias no contato oficial e evite relatos em espaços públicos. Privacidade não equivale a sigilo absoluto. Planejamento e consulta não comprovam serviço realizado nem reserva de acolhimento; todas as condições precisam ser alinhadas com os responsáveis."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "Existe remoção 24h da Central em Ribeirão Preto?",
        "answer": "O plantão de orientação e o suporte para agendamento funcionam 24 horas. A execução da remoção e do translado depende de agenda, condições e disponibilidade confirmadas. Emergências devem ser dirigidas à rede de urgência ou SAMU 192."
      },
      {
        "question": "Qual é o prazo de chegada de um transporte?",
        "answer": "Não há prazo garantido. Origem, destino, agenda e condições da viagem devem ser consultados à coordenação antes do deslocamento."
      },
      {
        "question": "Como preservar privacidade durante a organização?",
        "answer": "Use o contato oficial, compartilhe apenas dados necessários e consulte condições de acompanhamento. Não são prometidos sigilo absoluto ou características específicas de veículo."
      }
    ]
  },
  {
    "key": "women",
    "path": "/clinica-recuperacao-feminina-ribeirao-preto",
    "label": "Acolhimento Feminino",
    "summary": "Orientação sobre privacidade e necessidades.",
    "title": "Acolhimento Feminino para Ribeirão Preto - SP | Orientação",
    "description": "Orientação a mulheres e famílias de Ribeirão Preto sobre dependência, privacidade e busca de cuidado. Consulte compatibilidade; não há ala feminina confirmada.",
    "heading": "Mulheres e dependência: orientação para Ribeirão Preto",
    "intro": "Mulheres podem enfrentar receio de julgamento, responsabilidades de cuidado e dificuldades para pedir ajuda. Esta página orienta famílias de Ribeirão Preto sem anunciar clínica feminina, ala exclusiva ou vagas para mulheres não confirmadas. A única sede da Central fica em Araraquara.",
    "notice": "Atendimento feminino e ambientes separados não foram confirmados. Consulte compatibilidade e disponibilidade; gestação, abstinência e necessidades clínicas exigem avaliação médica.",
    "sections": [
      {
        "title": "Escuta sem julgamento e sem estereótipos",
        "paragraphs": [
          "Não existe uma experiência feminina única da dependência. Trabalho, relações, maternidade, violência e condições de saúde podem influenciar necessidades, mas não devem ser presumidos para toda mulher. A avaliação individual precisa acolher o relato sem atribuir culpa ou reduzir a pessoa ao uso de substâncias.",
          "Em Ribeirão Preto, a rede de saúde pode orientar a avaliação e os recursos apropriados. A Central oferece informação sobre caminhos de cuidado, sem vínculo declarado com os serviços públicos. Não se anunciam programas próprios de trauma, maternidade ou atendimento especializado feminino."
        ]
      },
      {
        "title": "Perguntas sobre privacidade antes de escolher",
        "paragraphs": [
          "Pergunte ao serviço considerado como são organizados alojamento, convivência, participação familiar e proteção de informações pessoais. Não presuma que uma página sobre acolhimento feminino confirma ambiente exclusivo. Essas condições precisam ser verificadas antes de uma decisão ou viagem.",
          "Na Central, não foi confirmado atendimento feminino nem separação de ambientes por gênero. A família deve consultar a compatibilidade do caso sem garantia de admissão. A sede em Araraquara reúne suporte psicológico, acompanhamento médico e psiquiátrico integrado e enfermagem; necessidades hospitalares recebem encaminhamento ao serviço adequado."
        ]
      },
      {
        "title": "Responsabilidades e continuidade do apoio",
        "paragraphs": [
          "Se houver filhos ou outras pessoas dependentes de cuidados, discuta uma rede de apoio sem prometer permanência conjunta, creche ou programa de maternidade. Organizar responsabilidades pode reduzir obstáculos à avaliação, mas cada arranjo precisa respeitar consentimento e condições reais da família.",
          "Planeje continuidade em Ribeirão Preto com recursos de saúde e pessoas de confiança. Gestação, sintomas de abstinência ou sofrimento intenso devem ser avaliados por profissionais apropriados. O conteúdo é educativo, não um diagnóstico nem garantia de tratamento específico para mulheres."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "A Central possui ala feminina exclusiva?",
        "answer": "Não há confirmação de ala feminina, ambientes separados ou atendimento feminino disponível. Consulte diretamente compatibilidade e disponibilidade antes de qualquer decisão."
      },
      {
        "question": "Como esclarecer privacidade e rotina para uma mulher?",
        "answer": "Pergunte ao serviço sobre alojamento, convivência, contato familiar e proteção de dados. Não presuma condições a partir do título de uma página; confirme antes do ingresso."
      },
      {
        "question": "Há programa próprio para trauma ou maternidade?",
        "answer": "Esses programas não foram confirmados. Necessidades emocionais e clínicas devem receber avaliação individual e encaminhamento adequado, sem promessa de modalidade especializada."
      }
    ]
  },
  {
    "key": "dual",
    "path": "/diagnostico-duplo-saude-mental-ribeirao-preto",
    "label": "Diagnóstico Duplo (Saúde Mental)",
    "summary": "Avaliação integrada e limites do acolhimento.",
    "title": "Diagnóstico Duplo e Saúde Mental em Ribeirão Preto - SP",
    "description": "Informação sobre dependência e condições de saúde mental para Ribeirão Preto. Acompanhamento médico e psiquiátrico integrado, psicologia e enfermagem na sede em Araraquara.",
    "heading": "Diagnóstico duplo e saúde mental: orientação em Ribeirão Preto",
    "intro": "Quando o uso de substâncias convive com ansiedade, alterações de humor ou outros sintomas, a família pode ter dúvidas sobre por onde começar. Em Ribeirão Preto, a busca exige avaliação integrada; a Central reúne suporte psicológico, acompanhamento médico e psiquiátrico integrado e enfermagem na sede em Araraquara, com avaliação individual pelos profissionais responsáveis.",
    "notice": "Risco de suicídio, surto com risco imediato ou alteração de consciência exige urgência ou SAMU 192. Em crises agudas, priorize avaliação no serviço de urgência.",
    "condition": "Transtornos coexistentes relacionados à saúde mental e ao uso de substâncias",
    "sections": [
      {
        "title": "Sintomas coexistentes não confirmam um diagnóstico",
        "paragraphs": [
          "A expressão diagnóstico duplo costuma ser usada quando um transtorno por uso de substâncias coexiste com outra condição de saúde mental. Sintomas parecidos podem ter causas diferentes, inclusive efeitos do uso ou da abstinência. Uma lista na internet não permite concluir depressão, bipolaridade ou outra condição.",
          "Para a avaliação em Ribeirão Preto, organize histórico, mudanças no sono e humor e acompanhamentos anteriores. Evite rotular a pessoa ou atribuir todo sofrimento à substância. Profissionais habilitados precisam avaliar contexto, evolução e riscos antes de definir condutas."
        ]
      },
      {
        "title": "Equipe multidisciplinar e coordenação do cuidado",
        "paragraphs": [
          "Quando existem necessidades clínicas, os profissionais responsáveis podem discutir acompanhamento integrado e continuidade. O manejo de medicamentos pertence ao médico prescritor; familiares não devem aumentar, suspender ou combinar remédios por iniciativa própria.",
          "A Central informa suporte psicológico com Margarete Vasques, CRP 06/130268, em acolhimento voluntário psicossocial. A equipe inclui acompanhamento médico e psiquiátrico integrado para avaliação clínica, estabilização e manejo de comorbidades, além de enfermagem com supervisão diária e cuidados contínuos. Necessidades hospitalares recebem encaminhamento adequado, conforme avaliação."
        ]
      },
      {
        "title": "Compatibilidade e continuidade em Ribeirão Preto",
        "paragraphs": [
          "Antes de considerar acolhimento em Araraquara, esclareça quais necessidades podem ser atendidas com segurança e quais exigem cuidado médico. A presença de uma condição de saúde mental não indica nem contraindica automaticamente a modalidade; a avaliação individual orienta a decisão.",
          "A continuidade pode envolver rede de saúde de Ribeirão Preto e profissionais que já acompanham a pessoa. Combine informações essenciais com consentimento e respeito à privacidade. Uma crise não deve aguardar agenda particular, e esta página não representa prescrição, diagnóstico ou parecer clínico."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "O que significa diagnóstico duplo?",
        "answer": "É uma expressão usada para coexistência de transtorno por uso de substâncias e outra condição de saúde mental. A confirmação exige avaliação profissional; sintomas isolados não definem diagnóstico."
      },
      {
        "question": "A Central oferece acompanhamento psiquiátrico próprio?",
        "answer": "Sim. A instituição confirma acompanhamento médico e psiquiátrico integrado na unidade de Araraquara para avaliação clínica, estabilização e manejo de comorbidades, em conjunto com psicologia e enfermagem. Necessidades hospitalares seguem encaminhamento conforme avaliação."
      },
      {
        "question": "Quem pode ajustar os medicamentos de uma comorbidade?",
        "answer": "O profissional médico responsável pela prescrição. Não suspenda ou altere doses por conta própria; dúvidas e sintomas novos precisam de avaliação."
      }
    ]
  },
  {
    "key": "medication",
    "path": "/dependencia-medicamentos-tarja-preta-ribeirao-preto",
    "label": "Medicamentos Tarja Preta",
    "summary": "Riscos da interrupção e avaliação médica.",
    "title": "Dependência de Medicamentos em Ribeirão Preto - SP | Orientação",
    "description": "Orientação sobre medicamentos controlados para Ribeirão Preto. Interrupção e redução exigem avaliação médica; a Central não realiza desmame na sede.",
    "heading": "Medicamentos controlados: dependência e cuidado em Ribeirão Preto",
    "intro": "Usar um medicamento prescrito não significa automaticamente dependência problemática. Se a pessoa precisa de doses maiores, usa fora da orientação ou teme parar, procure avaliação. A Central orienta famílias de Ribeirão Preto, sem realizar desmame ou desintoxicação médica na sede em Araraquara.",
    "notice": "Não interrompa medicamentos abruptamente nem altere doses com base nesta página. Convulsões, confusão intensa ou alteração de consciência exigem urgência ou SAMU 192.",
    "condition": "Dependência de medicamentos",
    "sections": [
      {
        "title": "Diferenciar uso indicado e dificuldades relacionadas",
        "paragraphs": [
          "Medicamentos controlados têm indicações e riscos diferentes. Benzodiazepínicos, opioides e estimulantes não são intercambiáveis, e a presença de tarja preta não define sozinha uma dependência. Tolerância, dependência física e uso problemático precisam ser diferenciados na avaliação clínica.",
          "Na consulta em Ribeirão Preto, informe ao profissional os medicamentos utilizados, tempo de uso e mudanças percebidas. Não use remédios de terceiros nem associe substâncias por orientação informal. Evite interpretações moralizantes sobre uma pessoa que usa tratamento prescrito."
        ]
      },
      {
        "title": "Redução e interrupção pertencem ao médico",
        "paragraphs": [
          "Alguns medicamentos podem provocar abstinência ou agravamento de sintomas quando interrompidos abruptamente. A necessidade de redução gradual e seu planejamento dependem da substância, do histórico e das condições de saúde. Esta página não estabelece doses, prazos ou substituições.",
          "O acompanhamento médico e psiquiátrico integrado da Central pode avaliar as necessidades clínicas, com apoio da enfermagem. Um programa próprio de desmame não está confirmado, e a desintoxicação médica segue encaminhamento externo. A avaliação considera também as razões do uso, como ansiedade, insônia ou dor, sem presumir uma origem única."
        ]
      },
      {
        "title": "Apoio psicossocial além da medicação",
        "paragraphs": [
          "Quando compatível com avaliação, o suporte psicológico pode ajudar a discutir dificuldades e hábitos associados ao cuidado. A proposta confirmada da Central inclui apoio psicossocial, 12 Passos, convivência e prevenção à recaída, sem substituir a prescrição ou o acompanhamento do médico.",
          "Famílias de Ribeirão Preto podem apoiar a organização das consultas e a comunicação de sintomas, preservando a participação da pessoa. Não há promessa de retirada definitiva de medicamentos ou prazo de recuperação. Procure orientação antes de viajar ou tomar decisões sobre acolhimento."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "É perigoso parar um medicamento controlado sozinho?",
        "answer": "Pode ser, dependendo da substância e do histórico. Interrupção abrupta pode causar abstinência ou agravamento de sintomas; procure o médico responsável, sem seguir esquemas da internet."
      },
      {
        "question": "Quais sintomas após uma redução merecem atenção?",
        "answer": "Sintomas novos ou intensos devem ser avaliados. Convulsões, confusão intensa ou alteração de consciência exigem urgência ou SAMU 192, sem aguardar acolhimento."
      },
      {
        "question": "A Central faz desmame gradual de medicamentos?",
        "answer": "Não na sede própria. Planos de redução ou substituição devem ser definidos pelo médico responsável. O acompanhamento médico e psiquiátrico integrado orienta a avaliação; um programa próprio de desmame não está confirmado. O acolhimento psicossocial não substitui essa responsabilidade."
      }
    ]
  },
  {
    "key": "youth",
    "path": "/tratamento-dependencia-jovens-ribeirao-preto",
    "label": "Jovens e Conscientização",
    "summary": "Diálogo familiar e busca precoce de ajuda.",
    "title": "Jovens e Dependência em Ribeirão Preto - SP | Orientação Familiar",
    "description": "Informação para famílias de jovens de Ribeirão Preto sobre uso de substâncias e apoio precoce. Não há programa de adolescentes confirmado na Central.",
    "heading": "Jovens e uso de substâncias: orientação em Ribeirão Preto",
    "intro": "A preocupação com o uso de álcool ou outras drogas por um jovem pede diálogo e avaliação, não punição. Esta página ajuda famílias de Ribeirão Preto a organizar a busca de cuidado sem anunciar programa para adolescentes ou psicologia especializada juvenil não confirmados na Central.",
    "notice": "Não há atendimento a menores ou programa de adolescentes confirmado. Procure a rede de saúde apropriada à idade; risco imediato exige urgência ou SAMU 192.",
    "sections": [
      {
        "title": "Conversar a partir de fatos, não de acusações",
        "paragraphs": [
          "Mudanças nos estudos, no sono ou nas relações podem preocupar, mas não comprovam dependência por si só. Pergunte sobre dificuldades e descreva observações concretas. Ameaças e exposição pública podem dificultar o pedido de ajuda; a escuta não dispensa limites e atenção à segurança.",
          "Em Ribeirão Preto, busque avaliação na rede de saúde adequada à faixa etária. O uso de substâncias não deve ser tratado apenas como problema disciplinar. Questões familiares, sofrimento mental e riscos precisam ser considerados por profissionais, sem diagnóstico remoto."
        ]
      },
      {
        "title": "Faixa etária e serviço apropriado",
        "paragraphs": [
          "Jovens adultos e adolescentes não têm necessariamente as mesmas necessidades ou condições legais de atendimento. Para menores, a família deve procurar serviços habilitados e adequados à idade, respeitando direitos e participação do adolescente. Não foi confirmado programa de acolhimento de menores na Central.",
          "A única sede própria da instituição fica em Araraquara e oferece acolhimento voluntário psicossocial conforme compatibilidade e disponibilidade. Uma página sobre jovens é informação educativa, não confirmação de admissão para qualquer idade. O acompanhamento médico e psiquiátrico integrado e a enfermagem complementam o cuidado; necessidades hospitalares recebem encaminhamento adequado."
        ]
      },
      {
        "title": "Estudos, convivência e apoio dos responsáveis",
        "paragraphs": [
          "Quando indicado, o plano de cuidado pode discutir continuidade dos estudos e atividades significativas. Não são prometidos escola interna, reforço pedagógico ou programa juvenil próprio. Responsabilidades e metas devem ser construídas conforme o caso, sem impor retorno imediato a uma rotina idealizada.",
          "A família de Ribeirão Preto pode apoiar consultas, combinar limites e manter canais de conversa. Proteja a privacidade do jovem e evite divulgar relatos. Em intoxicação grave, alteração de consciência ou risco imediato, priorize a rede de urgência; a conversa institucional não substitui resposta de emergência."
        ]
      }
    ],
    "steps": [
      {
        "title": "Identificar a necessidade",
        "text": "Organize dúvidas e riscos antes de decidir o próximo passo."
      },
      {
        "title": "Consultar o cuidado adequado",
        "text": "Avaliação individual define compatibilidade e encaminhamento."
      },
      {
        "title": "Confirmar as condições",
        "text": "Consulte disponibilidade, destino e continuidade em Ribeirão Preto."
      }
    ],
    "faqs": [
      {
        "question": "Quando procurar ajuda para um jovem?",
        "answer": "Quando o uso ou mudanças na rotina provocam preocupação com saúde, segurança, estudos ou relações. A avaliação precoce pode esclarecer necessidades; sinais isolados não confirmam dependência."
      },
      {
        "question": "A Central tem programa de reabilitação de adolescentes?",
        "answer": "Não há programa de adolescentes ou admissão de menores confirmados. Procure serviços adequados à idade e consulte os limites do atendimento antes de qualquer decisão."
      },
      {
        "question": "Como os pais podem participar sem aumentar o conflito?",
        "answer": "Converse a partir de fatos, combine limites respeitosos e procure avaliação apropriada à idade. Evite ameaças, exposição pública e contenção improvisada; risco imediato exige urgência."
      }
    ]
  }
] as const;
export function ribeiraoSpecialty(key: RibeiraoSpecialtyKey) {
  const page = ribeiraoSpecialtyList.find(page => page.key === key);
  if (!page) throw new Error('Especialidade não cadastrada');
  return page;
}
export function ribeiraoSpecialtyHead(key: RibeiraoSpecialtyKey) {
  const page = ribeiraoSpecialty(key);
  const url = `${siteUrl}${page.path}`;
  return {
    meta: [{ title: page.title }, { name: 'description', content: page.description }, { name: 'robots', content: 'index,follow' }, { property: 'og:title', content: page.title }, { property: 'og:description', content: page.description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: url }, { name: 'twitter:card', content: 'summary_large_image' }],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      institutionalLocalBusiness,
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'pt-BR', ...('condition' in page ? { about: { '@type': 'MedicalCondition', name: page.condition } } : {}) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Cidades', item: `${siteUrl}/cidades` },
        { '@type': 'ListItem', position: 3, name: 'Ribeirão Preto', item: `${siteUrl}${ribeiraoParentPath}` },
        { '@type': 'ListItem', position: 4, name: page.label, item: url }
      ] },
      { '@type': 'FAQPage', mainEntity: page.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }
    ] }) }]
  };
}
