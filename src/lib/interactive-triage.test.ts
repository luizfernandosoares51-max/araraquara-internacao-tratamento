import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildTriageWhatsAppHref,
  getTriageOrientation,
  isEmergencyTriage,
  triageChallenges,
  triageCityShortcuts,
  triageReadiness,
  triageRelationships,
  triageTransportOptions,
} from "./interactive-triage";

test("triage exposes the six individual relationship choices and five educational topics", () => {
  assert.equal(triageRelationships.length, 6);
  assert.deepEqual(triageRelationships.map((item) => item.label), ["Filho", "Filha", "Esposo", "Esposa", "Para mim", "Outro familiar"]);
  assert.equal(triageChallenges.length, 5);
  assert.equal(triageReadiness.length, 3);
  assert.deepEqual([...triageCityShortcuts], ["Araraquara", "Ribeirão Preto", "São Carlos", "São Paulo"]);
  assert.equal(triageTransportOptions.length, 3);
});

test("immediate risk never produces an ordinary care recommendation", () => {
  assert.equal(isEmergencyTriage("risk"), true);
  assert.equal(isEmergencyTriage("voluntary"), false);
  assert.equal(getTriageOrientation("risk").title, "Priorize atendimento de emergência");
  assert.ok(getTriageOrientation("risk").summary.includes("SAMU 192"));
});

test("WhatsApp summary uses the official number and all selected answers", () => {
  const url = new URL(buildTriageWhatsAppHref({
    relationship: "son",
    challenges: ["alcohol", "gambling"],
    readiness: "resistant",
    city: "São Carlos",
    transport: "guidance",
  }));
  assert.equal(url.origin + url.pathname, "https://wa.me/5516997654579");
  const message = url.searchParams.get("text") ?? "";
  assert.ok(message.includes("para o meu filho"));
  assert.ok(message.includes("álcool, apostas eletrônicas ou jogos online"));
  assert.ok(message.includes("está relutante em aceitar ajuda"));
  assert.ok(message.includes("São Carlos"));
  assert.ok(message.includes("queremos orientação sobre o transporte"));
});

test("an incomplete triage cannot create an external message", () => {
  assert.throws(() => buildTriageWhatsAppHref({ relationship: "self", challenges: [], readiness: "voluntary", city: "", transport: "family" }));
});