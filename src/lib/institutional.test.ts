import assert from "node:assert/strict";
import { test } from "node:test";
import { institutionalIdentity, institutionalLocalBusiness } from "./institutional";

test("preserves the exact CNPJ supplied by the institution", () => {
  assert.equal(institutionalIdentity.cnpj, "40.241.645/0001-30");
});

test("preserves the psychologist and exact CRP confirmed by the institution", () => {
  assert.equal(institutionalIdentity.psychologyResponsible.name, "Margarete Vasques");
  assert.equal(institutionalIdentity.psychologyResponsible.registration, "CRP 06/130268");
  assert.equal(institutionalIdentity.psychologyResponsible.role, "Responsável Técnica Psicóloga");
});

test("preserves Adelmo's ownership without attributing Margarete's CRP to him", () => {
  assert.equal(institutionalIdentity.ownership.name, "Adelmo João Antunes");
  assert.equal(institutionalIdentity.ownership.role, "Proprietário / Direção");
  assert.equal("registration" in institutionalIdentity.ownership, false);
});

test("preserves the confirmed business holder in institutional identity and schema", () => {
  assert.equal(institutionalIdentity.legalName, "Adelmo João Antunes");
  assert.equal(institutionalLocalBusiness.legalName, "Adelmo João Antunes");
});

test("does not fabricate unconfirmed medical credentials", () => {
  assert.equal(institutionalIdentity.medicalResponsible, null);
});

test("preserves the exact official address", () => {
  assert.equal(institutionalIdentity.fullAddress, "R. Alfredo Micelli, 70 - Condomínio Satélite, Araraquara - SP, CEP 14808-579");
  assert.equal(institutionalLocalBusiness.address.streetAddress, "R. Alfredo Micelli, 70 - Condomínio Satélite");
  assert.equal(institutionalLocalBusiness.address.postalCode, "14808-579");
});

test("preserves the official Maps destination", () => {
  assert.equal(institutionalLocalBusiness.hasMap, "https://maps.app.goo.gl/LuhVM9HZwsrFWbXk9");
});

test("preserves the confirmed operational coordinator", () => {
  assert.equal(institutionalIdentity.generalCoordination.name, "Luiz Fernando Soares");
  assert.equal(institutionalIdentity.generalCoordination.role, "Coordenação Geral / Operacional");
});

test("does not fabricate a sanitary license or geographic coordinates", () => {
  assert.equal(institutionalIdentity.sanitaryLicense, null);
  assert.equal("geo" in institutionalLocalBusiness, false);
});