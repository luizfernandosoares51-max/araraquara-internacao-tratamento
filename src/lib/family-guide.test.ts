import assert from "node:assert/strict";
import { test } from "node:test";
import { cityGuideHref, emergencyPhoneHref, getGuideResult, guideJourneys, needsEmergency } from "./family-guide";
import { cityDirectory } from "./city-pages";
import { municipalGuideSources } from "./family-guide-sources";

test("all six visitor paths produce a result for every offered answer", () => {
  assert.deepEqual(guideJourneys.map((item) => item.id), ["self", "family", "welcome", "substances", "gambling", "public"]);
  for (const journey of guideJourneys) for (const choice of journey.choices) {
    assert.equal(getGuideResult(journey.id, choice.id), choice);
  }
  assert.equal(getGuideResult("family", "unknown"), undefined);
});
test("immediate risk must redirect to emergency help", () => {
  assert.equal(needsEmergency("yes"), true);
  assert.equal(emergencyPhoneHref, "tel:192");
});
test("uncertainty about immediate risk must also prioritize emergency help", () => {
  assert.equal(needsEmergency("unsure"), true);
});
test("general orientation proceeds only when immediate risk is denied", () => {
  assert.equal(needsEmergency("no"), false);
});
test("municipality references cover existing local routes and preserve Araraquara without suffix", () => {
  assert.equal(cityGuideHref("araraquara"), "/clinica-de-recuperacao-em-araraquara");
  assert.ok(municipalGuideSources["araraquara"]);
  for (const city of cityDirectory) {
    assert.equal(cityGuideHref(city.slug), `/clinica-de-recuperacao-em-${city.slug}`);
    assert.ok(municipalGuideSources[city.slug]);
  }
});