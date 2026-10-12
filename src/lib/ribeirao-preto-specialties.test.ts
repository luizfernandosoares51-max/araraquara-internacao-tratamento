import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ribeiraoSpecialtyList, ribeiraoSpecialtyHead, ribeiraoSpecialtyScope, specialtyScope } from './ribeirao-preto-specialties';

test('Ribeirão Preto preserves all nine requested public paths', () => assert.deepEqual(ribeiraoSpecialtyList.map(page => page.path), [
  '/tratamento-alcoolismo-ribeirao-preto', '/tratamento-cocaina-crack-ribeirao-preto', '/internacao-involuntaria-ribeirao-preto', '/internacao-voluntaria-ribeirao-preto', '/resgate-remocao-ribeirao-preto', '/clinica-recuperacao-feminina-ribeirao-preto', '/diagnostico-duplo-saude-mental-ribeirao-preto', '/dependencia-medicamentos-tarja-preta-ribeirao-preto', '/tratamento-dependencia-jovens-ribeirao-preto',
]));
test('own seat does not provide medical detox', () => assert.equal(specialtyScope.ownUnitMedicalDetox, false));
test('own seat does not provide involuntary hospitalization', () => assert.equal(specialtyScope.ownUnitInvoluntaryHospitalization, false));
test('transport requires appointment', () => assert.equal(specialtyScope.transport.byAppointment, true));
test('transport is not around the clock', () => assert.equal(specialtyScope.transport.roundTheClock, false));
test('female unit is not confirmed', () => assert.equal(ribeiraoSpecialtyScope.femaleUnitConfirmed, false));
test('adolescent program is not confirmed', () => assert.equal(ribeiraoSpecialtyScope.adolescentProgramConfirmed, false));
test('own psychiatric accompaniment is confirmed', () => assert.equal(ribeiraoSpecialtyScope.ownPsychiatryConfirmed, true));
test('own medication detox is unavailable', () => assert.equal(ribeiraoSpecialtyScope.ownMedicationDetox, false));
test('confirmed psychology remains Margarete Vasques CRP 06/130268', () => {
  assert.equal(specialtyScope.psychology.name, 'Margarete Vasques');
  assert.equal(specialtyScope.psychology.registration, 'CRP 06/130268');
});
test('operational coordination remains Luiz Fernando Soares', () => assert.equal(specialtyScope.coordination.name, 'Luiz Fernando Soares'));
test('structured identity stays in Araraquara rather than implying a medical branch', () => {
  for (const page of ribeiraoSpecialtyList) {
    const script = ribeiraoSpecialtyHead(page.key).scripts[0];
    assert.ok(script);
    const business = JSON.parse(script.children)['@graph'][0];
    assert.equal(business['@type'], 'LocalBusiness');
    assert.equal(business.address.addressLocality, 'Araraquara');
    assert.equal(business.address.streetAddress, 'R. Alfredo Micelli, 70 - Condomínio Satélite');
    assert.equal(business.telephone, '(16) 99765-4579');
  }
});