import assert from "node:assert/strict";
import { test } from "node:test";
import { conversionCareScope } from "./conversion-faq";

test("orientation is 24 hours, separate from transport execution", () => assert.equal(conversionCareScope.orientationHours, 24));
test("removal still requires an appointment", () => assert.equal(conversionCareScope.transportByAppointment, true));
test("immediate transport departure is not guaranteed", () => assert.equal(conversionCareScope.immediateDispatchGuaranteed, false));
test("underage residential admissions have not been confirmed", () => assert.equal(conversionCareScope.underageAdmissionConfirmed, false));
test("involuntary admission requires an enabled medical unit", () => assert.equal(conversionCareScope.involuntaryCareRequiresMedicalUnit, true));
test("INSS benefits are not guaranteed", () => assert.equal(conversionCareScope.inssApprovalGuaranteed, false));
test("male unit remains in Araraquara", () => assert.equal(conversionCareScope.maleUnitCity, "Araraquara"));
test("female unit remains in Sao Carlos", () => assert.equal(conversionCareScope.femaleUnitCity, "São Carlos"));