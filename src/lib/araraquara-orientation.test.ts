import assert from "node:assert/strict";
import { test } from "node:test";
import { regionalFamilyOrientation } from "./araraquara-orientation";

test("regional family orientation is based on the only physical unit in Araraquara", () => {
  assert.equal(regionalFamilyOrientation.physicalUnitCity, "Araraquara");
});
test("confirmed regional access includes the six named neighboring municipalities", () => {
  assert.deepEqual(regionalFamilyOrientation.neighboringCities, ["São Carlos", "Matão", "Américo Brasiliense", "Ibaté", "Ribeirão Bonito", "Boa Esperança do Sul"]);
});
test("family visits require appointment", () => {
  assert.equal(regionalFamilyOrientation.visitsByAppointment, true);
});
test("reception is private", () => {
  assert.equal(regionalFamilyOrientation.privateReception, true);
});
test("administrative documentation is available", () => {
  assert.equal(regionalFamilyOrientation.administrativeDocumentation, true);
});
test("documentation never guarantees reimbursement", () => {
  assert.equal(regionalFamilyOrientation.guaranteedReimbursement, false);
});