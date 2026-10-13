import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mataoScope, mataoSpecialtyList, mataoWhatsappHref } from './matao-specialties';

test('preserves all twelve requested Matão URLs', () => assert.deepEqual(mataoSpecialtyList.map(page => page.path), [
  '/tratamento-cocaina-crack-matao', '/tratamento-alcoolismo-matao', '/internacao-voluntaria-matao',
  '/internacao-involuntaria-matao', '/resgate-remocao-matao', '/clinica-recuperacao-feminina-matao',
  '/dependencia-medicamentos-tarja-preta-matao', '/tratamento-dependencia-jovens-matao',
  '/tratamento-jogos-compulsivos-apostas-matao', '/tratamento-dependencia-alcool-trabalhadores-matao',
  '/internacao-psiquiatrica-crise-saude-mental-matao', '/clinica-recuperacao-idosos-matao',
]));
test('only physical unit is in Araraquara', () => assert.equal(mataoScope.physicalUnitCity, 'Araraquara'));
test('orientation is available 24 hours', () => assert.equal(mataoScope.orientationHours, 24));
test('transport requires an appointment', () => assert.equal(mataoScope.transportByAppointment, true));
test('transport is not confirmed 24 hours', () => assert.equal(mataoScope.transport24Hours, false));
test('own medical detox is not confirmed', () => assert.equal(mataoScope.ownMedicalDetox, false));
test('involuntary hospitalization is not performed at the seat', () => assert.equal(mataoScope.ownInvoluntaryHospitalization, false));
test('female unit is not confirmed', () => assert.equal(mataoScope.femaleUnit, false));
test('adolescent program is not confirmed', () => assert.equal(mataoScope.adolescentProgram, false));
test('geriatric program is not confirmed', () => assert.equal(mataoScope.geriatricProgram, false));
test('gambling program is not confirmed', () => assert.equal(mataoScope.gamblingProgram, false));
test('worker medical reports are not promised', () => assert.equal(mataoScope.workerMedicalReports, false));
test('clinical review is not falsely attributed', () => assert.equal(mataoScope.clinicalReviewVerified, false));
test('all contextual contacts go to the official WhatsApp', () => {
  for (const page of mataoSpecialtyList) {
    const url = new URL(mataoWhatsappHref(page.key));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/5516997654579');
    assert.ok(url.searchParams.get('text')?.includes('Matão'));
  }
});