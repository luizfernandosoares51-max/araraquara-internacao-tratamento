import assert from "node:assert/strict";
import { test } from "node:test";
import { regionalAccessPolicy, regionalCityAccess, cityWhatsappHref } from "./regional-city-access";
import { cityEditorial } from "./city-editorial";

test("regional access covers all fourteen retained cities", () => {
  assert.deepEqual(Object.keys(regionalCityAccess).sort(), Object.keys(cityEditorial).sort());
  assert.equal(Object.keys(regionalCityAccess).length, 14);
  assert.equal(regionalCityAccess["bauru-sp"], undefined);
});
test("single physical unit stays in Araraquara", () => assert.equal(regionalAccessPolicy.physicalUnitCity, "Araraquara"));
test("orientation plantao is 24 hours", () => assert.equal(regionalAccessPolicy.orientationHours, 24));
test("visits remain by appointment", () => assert.equal(regionalAccessPolicy.visitsByAppointment, true));
test("transport remains scheduled", () => assert.equal(regionalAccessPolicy.transportByAppointment, true));
test("immediate admission is not guaranteed", () => assert.equal(regionalAccessPolicy.immediateAdmissionGuaranteed, false));
test("journey estimates are not guarantees", () => assert.equal(regionalAccessPolicy.travelTimesGuaranteed, false));
test("medical hospitalization remains by referral", () => assert.equal(regionalAccessPolicy.hospitalCareByReferral, true));
test("Americo indicative reference remains 10 to 15 minutes", () => assert.deepEqual(regionalCityAccess["americo-brasiliense-sp"].referenceMinutes, [10, 15]));
test("Ibate indicative reference remains 25 minutes", () => assert.deepEqual(regionalCityAccess["ibate-sp"].referenceMinutes, [25, 25]));
test("Sao Carlos indicative reference remains 35 minutes", () => assert.deepEqual(regionalCityAccess["sao-carlos-sp"].referenceMinutes, [35, 35]));
test("Matao indicative reference remains 30 minutes", () => assert.deepEqual(regionalCityAccess["matao-sp"].referenceMinutes, [30, 30]));
test("city WhatsApp contacts use the official number and preserve the chosen city", () => {
  for (const city of Object.values(regionalCityAccess)) {
    const url = new URL(cityWhatsappHref(city.name));
    assert.equal(url.origin, "https://wa.me");
    assert.equal(url.pathname, "/5516997654579");
    assert.equal(url.searchParams.get("text"), `Olá, sou de ${city.name} e gostaria de orientação sobre acolhimento e apoio à minha família.`);
  }
});