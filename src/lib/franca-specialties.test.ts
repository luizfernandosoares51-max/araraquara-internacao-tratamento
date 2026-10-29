import assert from 'node:assert/strict';
import { test } from 'node:test';
import { francaSpecialtyList, francaSpecialtyHead, specialtyScope } from './franca-specialties';

test('Franca specialty URLs preserve the five requested paths', () => assert.deepEqual(francaSpecialtyList.map(page => page.path), [
  '/tratamento-alcoolismo-franca', '/tratamento-cocaina-crack-franca', '/internacao-involuntaria-franca', '/internacao-voluntaria-franca', '/resgate-remocao-franca',
  '/clinica-recuperacao-feminina-franca', '/tratamento-jogos-compulsivos-apostas-franca', '/clinica-recuperacao-convenio-franca', '/dependencia-medicamentos-tarja-preta-franca', '/tratamento-dependencia-jovens-franca'
]));
test('own seat does not provide medical detox', () => assert.equal(specialtyScope.ownUnitMedicalDetox, false));
test('own seat does not provide involuntary clinical hospitalization', () => assert.equal(specialtyScope.ownUnitInvoluntaryHospitalization, false));
test('regional removal requires appointment', () => assert.equal(specialtyScope.transport.byAppointment, true));
test('regional removal is not advertised as 24 hours', () => assert.equal(specialtyScope.transport.roundTheClock, false));
test('psychology remains attributed to Margarete and her confirmed CRP', () => {
  assert.equal(specialtyScope.psychology.name, 'Margareth C. V. Moraes');
  assert.equal(specialtyScope.psychology.registration, 'CRP 06/130268');
});
test('operational coordination remains Luiz Fernando Soares', () => assert.equal(specialtyScope.coordination.name, 'Luiz Fernando Soares'));
test('structured identity cannot become an implied branch in Franca', () => {
  for (const page of francaSpecialtyList) {
    const script = francaSpecialtyHead(page.key).scripts[0];
    assert.ok(script);
    const business = JSON.parse(script.children)['@graph'][0];
    assert.equal(business['@type'], 'LocalBusiness');
    assert.equal(business.address.addressLocality, 'Araraquara');
    assert.equal(business.address.streetAddress, 'R. Alfredo Micelli, 70 - Condomínio Satélite');
    assert.equal(business.telephone, '(16) 99765-4579');
  }
});