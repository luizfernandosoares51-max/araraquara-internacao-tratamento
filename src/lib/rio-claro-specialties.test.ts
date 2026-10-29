import assert from 'node:assert/strict';
import { test } from 'node:test';
import { rioClaroSpecialtyList, rioClaroSpecialtyHead, specialtyScope } from './rio-claro-specialties';

test('Rio Claro specialty URLs preserve the five requested paths', () => assert.deepEqual(rioClaroSpecialtyList.map(page => page.path), [
  '/tratamento-alcoolismo-rio-claro', '/tratamento-cocaina-crack-rio-claro', '/internacao-involuntaria-rio-claro', '/internacao-voluntaria-rio-claro', '/resgate-remocao-rio-claro',
  '/clinica-recuperacao-feminina-rio-claro', '/tratamento-jogos-compulsivos-apostas-rio-claro', '/clinica-recuperacao-convenio-rio-claro', '/dependencia-medicamentos-tarja-preta-rio-claro', '/tratamento-dependencia-jovens-rio-claro'
]));
test('own seat does not provide medical detox', () => assert.equal(specialtyScope.ownUnitMedicalDetox, false));
test('own seat does not provide involuntary clinical hospitalization', () => assert.equal(specialtyScope.ownUnitInvoluntaryHospitalization, false));
test('regional removal requires appointment', () => assert.equal(specialtyScope.transport.byAppointment, true));
test('regional removal is not advertised as 24 hours', () => assert.equal(specialtyScope.transport.roundTheClock, false));
test('psychology remains attributed to Margareth and her confirmed CRP', () => {
  assert.equal(specialtyScope.psychology.name, 'Margareth C. V. Moraes');
  assert.equal(specialtyScope.psychology.registration, 'CRP 06/130268');
});
test('operational coordination remains Luiz Fernando Soares', () => assert.equal(specialtyScope.coordination.name, 'Luiz Fernando Soares'));
test('structured identity cannot become an implied branch in Rio Claro', () => {
  for (const page of rioClaroSpecialtyList) {
    const script = rioClaroSpecialtyHead(page.key).scripts[0];
    assert.ok(script);
    const business = JSON.parse(script.children)['@graph'][0];
    assert.equal(business['@type'], 'LocalBusiness');
    assert.equal(business.address.addressLocality, 'Araraquara');
    assert.equal(business.address.streetAddress, 'R. Alfredo Micelli, 70 - Condomínio Satélite');
    assert.equal(business.telephone, '(16) 99765-4579');
  }
});