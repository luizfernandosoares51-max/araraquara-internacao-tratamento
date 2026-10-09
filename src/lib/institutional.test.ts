import assert from "node:assert/strict";
import { test } from "node:test";
import { institutionalIdentity } from "./institutional";

test("preserves the exact CNPJ supplied by the institution", () => {
  assert.equal(institutionalIdentity.cnpj, "40.241.645/0001-30");
});

test("does not fabricate unconfirmed professional credentials", () => {
  assert.equal(institutionalIdentity.medicalResponsible, null);
  assert.equal(institutionalIdentity.psychologyResponsible, null);
});

test("does not fabricate an address or sanitary license", () => {
  assert.equal(institutionalIdentity.fullAddress, null);
  assert.equal(institutionalIdentity.sanitaryLicense, null);
});