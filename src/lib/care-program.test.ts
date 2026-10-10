import assert from "node:assert/strict";
import { test } from "node:test";
import { careProgram, therapeuticSchedule } from "./care-program";

test("confirmed voluntary psychosocial program includes twelve steps, occupational activities and relapse prevention", () => {
  assert.equal(careProgram.voluntaryReception, true);
  assert.equal(careProgram.psychosocialSupport, true);
  assert.equal(careProgram.twelveSteps, true);
  assert.equal(careProgram.occupationalActivities, true);
  assert.equal(careProgram.relapsePrevention, true);
});
test("medical detox remains outside the own unit", () => assert.equal(careProgram.ownUnitMedicalDetox, false));
test("involuntary hospitalization remains outside the own unit", () => assert.equal(careProgram.ownUnitInvoluntaryHospitalization, false));
test("visits require appointment", () => assert.equal(careProgram.visitsByAppointment, true));
test("regional transport requires appointment rather than 24-hour availability", () => {
  assert.equal(careProgram.transport.byAppointment, true);
  assert.equal(careProgram.transport.roundTheClock, false);
  assert.equal(careProgram.transport.area, "Araraquara e municípios vizinhos");
});
test("private reception and reimbursement guidance never guarantee coverage", () => {
  assert.equal(careProgram.finance.privateReception, true);
  assert.equal(careProgram.finance.reimbursementGuidance, true);
  assert.equal(careProgram.finance.guaranteedCoverage, false);
});
test("gender-specific environments remain unconfirmed", () => assert.equal(careProgram.genderSpecificEnvironmentsConfirmed, false));
for (const [index, start, end] of [[0, "07:00", "08:30"], [1, "08:30", "11:30"], [2, "11:30", "14:00"], [3, "14:00", "17:00"], [4, "18:00", "20:00"], [5, "20:00", "22:00"]] as const) {
  test(`confirmed daily period ${index + 1} preserves ${start}–${end}`, () => {
    assert.equal(therapeuticSchedule[index].start, start);
    assert.equal(therapeuticSchedule[index].end, end);
  });
}