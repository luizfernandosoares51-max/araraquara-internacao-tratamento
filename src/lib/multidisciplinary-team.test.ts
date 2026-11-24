import assert from "node:assert/strict";
import { test } from "node:test";
import { multidisciplinaryTeam } from "./multidisciplinary-team";

test("preserves the nursing professional and exact registration supplied by the institution", () => {
  const nurse = multidisciplinaryTeam.find(member => member.id === "nursing");
  assert.ok(nurse);
  assert.equal(nurse.name, "Isabelly Letícia Rosa");
  assert.equal(nurse.registration, "COREN-SP 788016");
});

test("does not invent a professional registration for the administrative manager", () => {
  const administrator = multidisciplinaryTeam.find(member => member.id === "administration");
  assert.ok(administrator);
  assert.equal(administrator.name, "Vinicius Rafael Moreira da Silva");
  assert.equal(administrator.registration, undefined);
});
test("attaches portraits only to professionals the institution mapped to a photo", () => {
  const withPortrait = multidisciplinaryTeam.filter(member => member.portrait).map(member => member.id).sort();
  assert.deepEqual(withPortrait, ["nursing", "psychiatry", "psychology"]);
});
