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
  { id: "alcohol", icon: "🍺", label: "Álcool / Bebidas" },
  { id: "medication", icon: "💊", label: "Medicamentos Tarja Preta" },
  { id: "substances", icon: "⚡", label: "Cocaína, Crack ou Sintéticos" },
  { id: "gambling", icon: "🎰", label: "Apostas Online / Jogos (Bets)" },
  { id: "emotional", icon: "🧠", label: "Transtornos Emocionais / Outro" },
] as const;

export const triageReadiness = [
  { id: "voluntary", label: "Aceita ajuda voluntária", detail: "Reconhece a situação e aceita conversar." },
  { id: "resistant", label: "Resistência ao diálogo", detail: "Nega a situação, mas a família busca orientação." },
  { id: "risk", label: "Crise familiar intensa ou recusa total", detail: "Situação delicada que requer apoio imediato; risco à vida continua sendo emergência pública." },
] as const;

export const triageCityShortcuts = [
  "Araraquara",
  "Ribeirão Preto",
  "São Carlos",
  "São Paulo",
] as const;

export const triageTransportOptions = [
  { id: "family", icon: "🚗", label: "A família levará por conta própria", messageLabel: "a família levará por conta própria" },
  { id: "support", icon: "🚑", label: "Precisamos consultar apoio para locomoção", messageLabel: "precisamos de orientação e consulta de disponibilidade para locomoção" },
  { id: "guidance", icon: "❓", label: "Queremos orientação sobre o transporte", messageLabel: "queremos orientação sobre o transporte" },
] as const;

export type TriageRelationshipId = (typeof triageRelationships)[number]["id"];
export type TriageChallengeId = (typeof triageChallenges)[number]["id"];
export type TriageReadinessId = (typeof triageReadiness)[number]["id"];
export type TriageTransportId = (typeof triageTransportOptions)[number]["id"];

export type TriageAnswers = {
  relationship: TriageRelationshipId;
  challenges: TriageChallengeId[];
  readiness: TriageReadinessId;
  city: string;
  transport: TriageTransportId;
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
  resistant: "apresenta resistência ao diálogo",
  risk: "está em recusa total ou crise familiar intensa",
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
  const transport = triageTransportOptions.find((item) => item.id === answers.transport)?.messageLabel;
  if (!relationship || challenges.length === 0 || !readiness || !answers.city.trim() || !transport) {
    throw new Error("Triagem incompleta.");
  }
  const message = answers.readiness === "risk"
    ? [
        `Olá! Preciso de orientação urgente para o meu ${relationship}.`,
        `A situação envolve problemas com ${challenges.join(", ")} e está em recusa total ou crise familiar intensa.`,
        `Estamos na cidade de ${answers.city.trim()} e ${transport}.`,
        "Como a equipe pode nos orientar? Sei que o WhatsApp não substitui os serviços públicos de emergência.",
      ].join("\n")
    : [
        `Olá! Gostaria de orientações para o meu ${relationship}.`,
        `A situação envolve problemas com ${challenges.join(", ")} e, no momento, ${readiness}.`,
        `Estamos na cidade de ${answers.city.trim()} e ${transport}.`,
        "Como a equipe pode nos orientar?",
      ].join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}