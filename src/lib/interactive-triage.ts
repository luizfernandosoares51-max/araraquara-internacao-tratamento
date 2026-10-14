import { whatsappNumber } from "./site";

export const triageRelationships = [
  { id: "son", label: "Filho", messageLabel: "filho" },
  { id: "daughter", label: "Filha", messageLabel: "filha" },
  { id: "husband", label: "Esposo", messageLabel: "esposo" },
  { id: "wife", label: "Esposa", messageLabel: "esposa" },
  { id: "self", label: "Para mim", messageLabel: "próprio cuidado" },
  { id: "other", label: "Outro familiar", messageLabel: "familiar" },
] as const;

export const triageChallenges = [
  { id: "alcohol", label: "Dependência de álcool", detail: "Bebidas frequentes ou crises" },
  { id: "substances", label: "Uso de substâncias químicas", detail: "Cocaína, crack ou sintéticos" },
  { id: "medication", label: "Medicamentos controlados", detail: "Calmantes, opioides ou tarja preta" },
  { id: "gambling", label: "Apostas eletrônicas e jogos online", detail: "Bets ou compulsão financeira" },
  { id: "emotional", label: "Saúde emocional ou comorbidades", detail: "Questões emocionais que precisam de avaliação profissional" },
] as const;

export const triageReadiness = [
  { id: "voluntary", label: "Aceita conversar", detail: "A pessoa reconhece a necessidade e está aberta a conhecer possibilidades de cuidado." },
  { id: "resistant", label: "Apresenta resistência inicial", detail: "A pessoa ainda nega a situação, mas pode existir espaço para diálogo familiar." },
  { id: "risk", label: "Há risco imediato ou crise aguda", detail: "Agressividade, risco à própria vida ou a terceiros, perda de consciência, convulsão ou dificuldade para respirar." },
] as const;

export const triageCities = [
  "Araraquara",
  "Américo Brasiliense",
  "São Carlos",
  "Matão",
  "Rio Claro",
  "Ribeirão Preto",
  "Ibaté",
  "Ribeirão Bonito",
  "Boa Esperança do Sul",
  "Franca",
  "Jaboticabal",
  "Porto Ferreira",
  "Taquaritinga",
  "Outra cidade do interior paulista",
] as const;

export type TriageRelationshipId = (typeof triageRelationships)[number]["id"];
export type TriageChallengeId = (typeof triageChallenges)[number]["id"];
export type TriageReadinessId = (typeof triageReadiness)[number]["id"];

export type TriageAnswers = {
  relationship: TriageRelationshipId;
  challenges: TriageChallengeId[];
  readiness: TriageReadinessId;
  city: string;
};

function getRelationshipMessageLabel(id: TriageRelationshipId) {
  return triageRelationships.find((item) => item.id === id)?.messageLabel;
}

const challengeMessageLabels: Record<TriageChallengeId, string> = {
  alcohol: "álcool",
  substances: "drogas ou outras substâncias",
  medication: "medicamentos controlados",
  gambling: "apostas eletrônicas ou jogos online",
  emotional: "questões de saúde emocional",
};

const readinessMessageLabels: Record<TriageReadinessId, string> = {
  voluntary: "aceita receber ajuda",
  resistant: "está relutante em aceitar ajuda",
  risk: "está em uma situação de risco imediato",
};

export function isEmergencyTriage(readiness: TriageReadinessId) {
  return readiness === "risk";
}

export function getTriageOrientation(readiness: TriageReadinessId) {
  if (readiness === "voluntary") {
    return {
      title: "Orientação para acolhimento voluntário",
      summary: "Uma conversa inicial pode esclarecer o acolhimento voluntário realizado na unidade de Araraquara, sempre sujeito à avaliação individual e à disponibilidade.",
    };
  }
  if (readiness === "resistant") {
    return {
      title: "Orientação familiar e conscientização",
      summary: "A família pode receber orientação para organizar um diálogo seguro e conhecer os limites legais. Nenhuma resposta online determina internação involuntária.",
    };
  }
  return {
    title: "Priorize atendimento de emergência",
    summary: "Em risco imediato, ligue para o SAMU 192 ou procure um serviço de emergência. Em violência em curso, vá para um local seguro e acione a Polícia Militar pelo 190.",
  };
}

export function buildTriageWhatsAppHref(answers: TriageAnswers) {
  const relationship = getRelationshipMessageLabel(answers.relationship);
  const challenges = answers.challenges.map((id) => challengeMessageLabels[id]).filter(Boolean);
  const readiness = readinessMessageLabels[answers.readiness];
  if (!relationship || challenges.length === 0 || !readiness || !answers.city.trim()) {
    throw new Error("Triagem incompleta.");
  }
  const message = [
    `Olá! Estive no site da Central de Acolhimento e gostaria de orientações sobre o acolhimento para o meu ${relationship}.`,
    `A situação envolve problemas com ${challenges.join(", ")} e, no momento, ${readiness}.`,
    `Estou buscando apoio para a região de ${answers.city.trim()}. Como vocês podem nos orientar?`,
  ].join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}