import assert from "node:assert/strict";
import { test } from "node:test";
import { regionalCtrMetadata, capsCareScope, priorityRegionalLinks } from "./regional-ctr";

test("the six requested regional search titles are at most 60 characters", () => {
  assert.equal(Object.keys(regionalCtrMetadata).length, 6);
  for (const metadata of Object.values(regionalCtrMetadata)) assert.ok(metadata.title.length <= 60);
});
test("regional search descriptions are at most 155 characters", () => {
  for (const metadata of Object.values(regionalCtrMetadata)) assert.ok(metadata.description.length <= 155);
});
test("regional priority links preserve existing destinations and add São Carlos", () => {
  assert.deepEqual(priorityRegionalLinks.map(link => link.to), ["/clinica-de-recuperacao-em-araraquara", "/clinica-de-recuperacao-em-sao-carlos-sp", "/clinica-de-recuperacao-em-itapolis-sp", "/clinica-de-recuperacao-em-ibate-sp", "/clinica-de-recuperacao-em-ibitinga-sp", "/clinica-de-recuperacao-em-americo-brasiliense-sp", "/clinica-de-recuperacao-em-matao-sp", "/resgate-remocao-araraquara", "/resgate-remocao-ribeirao-preto"]);
});
test("CAPS hours vary and continuous-care modalities are retained", () => {
  assert.equal(capsCareScope.uniformBusinessHours, false);
  assert.equal(capsCareScope.capsIIIContinuousCare, true);
});
test("acute risk keeps SAMU 192 as the emergency destination", () => assert.equal(capsCareScope.emergencyPhone, "192"));
test("private orientation does not become own medical detox or guaranteed immediate transport", () => {
  assert.equal(capsCareScope.ownUnitMedicalDetox, false);
  assert.equal(capsCareScope.immediateTransportGuaranteed, false);
});