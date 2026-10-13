import assert from 'node:assert/strict';
import { test } from 'node:test';
import { americoScope, americoSpecialtyList, americoWhatsappHref } from './americo-specialties';

test('preserves ten requested Américo Brasiliense paths', () => assert.deepEqual(americoSpecialtyList.map(p => p.path), [
  '/tratamento-cocaina-crack-americo-brasiliense', '/tratamento-alcoolismo-americo-brasiliense',
  '/internacao-involuntaria-americo-brasiliense', '/internacao-voluntaria-americo-brasiliense',
  '/resgate-remocao-americo-brasiliense', '/clinica-recuperacao-feminina-americo-brasiliense',
  '/dependencia-medicamentos-tarja-preta-americo-brasiliense', '/clinica-recuperacao-idosos-americo-brasiliense',
  '/tratamento-dependencia-jovens-americo-brasiliense', '/tratamento-jogos-compulsivos-apostas-americo-brasiliense',
]));
test('only physical unit is Araraquara', () => assert.equal(americoScope.physicalUnitCity, 'Araraquara'));
test('orientation operates 24h', () => assert.equal(americoScope.orientationHours, 24));
test('transport requires appointment', () => assert.equal(americoScope.transportByAppointment, true));
test('24h transport is not confirmed', () => assert.equal(americoScope.transport24Hours, false));
test('own medical detox is not confirmed', () => assert.equal(americoScope.ownMedicalDetox, false));
test('own involuntary hospitalization is not performed', () => assert.equal(americoScope.ownInvoluntaryHospitalization, false));
test('female unit is not confirmed', () => assert.equal(americoScope.femaleUnit, false));
test('adolescent program is not confirmed', () => assert.equal(americoScope.adolescentProgram, false));
test('geriatric program is not confirmed', () => assert.equal(americoScope.geriatricProgram, false));
test('gambling program is not confirmed', () => assert.equal(americoScope.gamblingProgram, false));
test('every specialty uses the contextual official WhatsApp', () => {
  for (const page of americoSpecialtyList) {
    const url = new URL(americoWhatsappHref(page.key));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/5516997654579');
    assert.ok(url.searchParams.get('text')?.includes('Américo Brasiliense'));
    assert.ok(url.searchParams.get('text')?.includes(page.label.toLocaleLowerCase('pt-BR')));
  }
});