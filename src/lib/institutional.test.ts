import assert from "node:assert/strict";
import { test } from "node:test";
import { institutionalIdentity } from "./institutional";

test("preserves the exact CNPJ supplied by the institution", () => {
  assert.equal(institutionalIdentity.cnpj, "40.241.645/0001-30");
});

test("preserves the psychologist and exact CRP confirmed by the institution", () => {
  assert.equal(institutionalIdentity.psychologyResponsible.name, "Adelmo João Antunes");
  assert.equal(institutionalIdentity.psychologyResponsible.registration, "CRP 06/130268");
  assert.equal(institutionalIdentity.psychologyResponsible.role, "Responsável Técnico Psicólogo / Coordenação Técnica");
});

test("preserves Margarete's stated responsibility without inventing a professional registration", () => {
  assert.equal(institutionalIdentity.technicalResponsible.name, "Margarete Vasques");
  assert.equal(institutionalIdentity.technicalResponsible.role, "Responsável Técnica");
  assert.equal("registration" in institutionalIdentity.technicalResponsible, false);
});

test("does not fabricate unconfirmed medical credentials", () => {
  assert.equal(institutionalIdentity.medicalResponsible, null);
});

test("does not fabricate an address or sanitary license", () => {
  assert.equal(institutionalIdentity.fullAddress, null);
  assert.equal(institutionalIdentity.sanitaryLicense, null);
});