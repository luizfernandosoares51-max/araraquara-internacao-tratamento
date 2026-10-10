import assert from "node:assert/strict";
import { test } from "node:test";
import { buildContactWhatsAppLink, contactRequestSchema, relationships, helpTypes } from "./contact-request";

const valid = { fullName: "Maria Silva", relationship: "Mãe", phone: "(16) 99765-4579", city: "Araraquara", state: "SP", helpType: "Orientação Familiar", message: "" };

test("all six requested relationships are accepted", () => {
  assert.deepEqual(relationships, ["Mãe", "Pai", "Cônjuge", "Filho", "Próprio acolhido", "Outro"]);
  for (const relationship of relationships) assert.equal(contactRequestSchema.safeParse({ ...valid, relationship }).success, true);
  assert.equal(contactRequestSchema.safeParse({ ...valid, relationship: "Vizinho" }).success, false);
});
test("all three requested help types are accepted", () => {
  assert.deepEqual(helpTypes, ["Acolhimento Voluntário", "Orientação Familiar", "Triagem/Resgate"]);
  for (const helpType of helpTypes) assert.equal(contactRequestSchema.safeParse({ ...valid, helpType }).success, true);
});
test("name, relationship, phone, city, state and help type are required; message is optional", () => {
  assert.equal(contactRequestSchema.safeParse(valid).success, true);
  for (const field of ["fullName", "relationship", "phone", "city", "state", "helpType"]) assert.equal(contactRequestSchema.safeParse({ ...valid, [field]: "" }).success, false);
});
test("WhatsApp target is official and message is safely encoded", () => {
  const url = new URL(buildContactWhatsAppLink({ ...valid, message: "Orientação & apoio?\nFamília" }));
  assert.equal(url.origin + url.pathname, "https://wa.me/5516997654579");
  assert.equal(url.searchParams.size, 1);
  assert.ok(url.searchParams.get("text")?.includes("Breve relato: Orientação & apoio?\nFamília"));
  assert.ok(url.searchParams.get("text")?.includes("Telefone / WhatsApp: 16997654579"));
});
test("external link builder rejects invalid data, HTML, control characters and excessive text", () => {
  for (const patch of [{ phone: "997654579" }, { message: "<script>" }, { message: "a\u0000b" }, { message: "x".repeat(1001) }, { fullName: "Maria" }, { state: "XX" }]) assert.throws(() => buildContactWhatsAppLink({ ...valid, ...patch }));
});