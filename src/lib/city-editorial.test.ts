import assert from "node:assert/strict";
import { test } from "node:test";
import { cityEditorial } from "./city-editorial";
import { careProgram } from "./care-program";

test("the regional editorial covers the thirteen retained cities and the own-unit city, without Bauru", () => {
  assert.deepEqual(Object.keys(cityEditorial).sort(), ["americo-brasiliense-sp", "araraquara", "descalvado-sp", "franca-sp", "ibate-sp", "ibitinga-sp", "itapolis-sp", "jaboticabal-sp", "matao-sp", "porto-ferreira-sp", "ribeirao-preto-sp", "rio-claro-sp", "sao-carlos-sp", "taquaritinga-sp"].sort());
});
test("editorial voluntary reception remains separate from medical detoxification", () => {
  assert.equal(careProgram.voluntaryReception, true);
  assert.equal(careProgram.ownUnitMedicalDetox, false);
});
test("editorial involuntary clinical care is not offered at the own unit", () => assert.equal(careProgram.ownUnitInvoluntaryHospitalization, false));
test("regional visits remain scheduled, without automatic weekly permission", () => assert.equal(careProgram.visitsByAppointment, true));
test("regional transport stays scheduled rather than immediate emergency care", () => {
  assert.equal(careProgram.transport.byAppointment, true);
  assert.equal(careProgram.transport.roundTheClock, false);
  assert.equal(careProgram.transport.area, "Araraquara e municípios vizinhos");
});
test("private reception and reimbursement orientation do not promise coverage", () => {
  assert.equal(careProgram.finance.privateReception, true);
  assert.equal(careProgram.finance.guaranteedCoverage, false);
});