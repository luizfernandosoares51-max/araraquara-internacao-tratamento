import assert from "node:assert/strict";
import { test } from "node:test";
import { specialtyScope, specialtyHead, specialtyList } from "./araraquara-specialties";

test("medical detox remains external on specialty pages", () => assert.equal(specialtyScope.ownUnitMedicalDetox, false));
test("own unit cannot provide involuntary hospitalization", () => assert.equal(specialtyScope.ownUnitInvoluntaryHospitalization, false));
test("transport requires appointment", () => assert.equal(specialtyScope.transport.byAppointment, true));
test("transport does not acquire 24-hour availability", () => assert.equal(specialtyScope.transport.roundTheClock, false));
test("transport scope remains Araraquara and neighboring cities", () => assert.equal(specialtyScope.transport.area, "Araraquara e municípios vizinhos"));
test("psychology registration remains linked to Margarete", () => {
  assert.equal(specialtyScope.psychology.name, "Margarete Vasques");
  assert.equal(specialtyScope.psychology.registration, "CRP 06/130268");
});
test("regional transport retains Luiz Fernando Soares as coordinator", () => assert.equal(specialtyScope.coordination.name, "Luiz Fernando Soares"));
test("eight specialty routes use the requested stable paths", () => assert.deepEqual(specialtyList.map(page => page.path), [
  "/tratamento-alcoolismo-araraquara", "/tratamento-cocaina-crack-araraquara", "/internacao-involuntaria-araraquara", "/internacao-voluntaria-araraquara", "/resgate-remocao-araraquara",
  "/clinica-recuperacao-feminina-araraquara", "/tratamento-jogos-compulsivos-apostas-araraquara", "/clinica-recuperacao-convenio-araraquara",
]));
test("structured business identity does not imply an own-unit medical business", () => {
  for (const page of specialtyList) {
    const script = specialtyHead(page.key).scripts[0];
    assert.ok(script);
    const graph = JSON.parse(script.children)["@graph"];
    assert.equal(graph[0]["@type"], "LocalBusiness");
    assert.equal(graph[0].address.streetAddress, "R. Alfredo Micelli, 70 - Condomínio Satélite");
    assert.equal(graph[0].telephone, "(16) 99765-4579");
  }
});