import assert from "node:assert/strict";
import { test } from "node:test";
import { gamblingCareScope } from "./gambling-orientation";

test("gambling guidance does not confirm a specialized treatment program", () => {
  assert.equal(gamblingCareScope.educationalOnly, true);
  assert.equal(gamblingCareScope.specializedProgramConfirmed, false);
});
test("integrated medical accompaniment is confirmed in the sole Araraquara unit", () => {
  assert.equal(gamblingCareScope.ownMedicalCareConfirmed, true);
  assert.equal(gamblingCareScope.ownUnitCity, "Araraquara");
});
test("immediate medical risk points to SAMU 192", () => {
  assert.equal(gamblingCareScope.emergencyPhone, "192");
});