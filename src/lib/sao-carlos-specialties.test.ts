import assert from 'node:assert/strict';
import { test } from 'node:test';
import { saoCarlosSpecialtyHead, saoCarlosSpecialtyList, specialtyScope } from './sao-carlos-specialties';

test('São Carlos has the ten requested stable specialty URLs', () => {
  assert.deepEqual(saoCarlosSpecialtyList.map(page => page.path), [
    '/tratamento-alcoolismo-sao-carlos', '/tratamento-cocaina-crack-sao-carlos',
    '/internacao-involuntaria-sao-carlos', '/internacao-voluntaria-sao-carlos', '/resgate-remocao-sao-carlos',
    '/clinica-recuperacao-feminina-sao-carlos', '/tratamento-jogos-compulsivos-apostas-sao-carlos', '/clinica-recuperacao-convenio-sao-carlos',
    '/tratamento-dependencia-jovens-sao-carlos', '/dependencia-medicamentos-tarja-preta-sao-carlos'
  ]);
});
test('medical detox remains outside the own unit', () => assert.equal(specialtyScope.ownUnitMedicalDetox, false));
test('involuntary clinical admission remains outside the own unit', () => assert.equal(specialtyScope.ownUnitInvoluntaryHospitalization, false));
test('regional transport still requires appointment', () => assert.equal(specialtyScope.transport.byAppointment, true));
test('regional transport does not imply 24-hour service', () => assert.equal(specialtyScope.transport.roundTheClock, false));
test('psychology registration remains attributed to Margareth C. V. Moraes', () => {
  assert.equal(specialtyScope.psychology.name, 'Margareth C. V. Moraes');
  assert.equal(specialtyScope.psychology.registration, 'CRP 06/130268');
});
test('transport coordination remains Luiz Fernando Soares', () => assert.equal(specialtyScope.coordination.name, 'Luiz Fernando Soares'));
test('regional schema identifies only the nonmedical physical seat in Araraquara', () => {
  for (const page of saoCarlosSpecialtyList) {
    const script = saoCarlosSpecialtyHead(page.key).scripts[0];
    assert.ok(script);
    const business = JSON.parse(script.children)['@graph'][0];
    assert.equal(business['@type'], 'LocalBusiness');
    assert.equal(business.address.addressLocality, 'Araraquara');
    assert.equal(business.address.streetAddress, 'R. Alfredo Micelli, 70 - Condomínio Satélite');
    assert.equal(business.telephone, '(16) 99765-4579');
  }
});