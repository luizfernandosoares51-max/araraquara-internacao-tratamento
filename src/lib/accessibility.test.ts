import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { defaultAccessibility, normalizeAccessibility } from "./accessibility";
describe("accessibility preferences", () => {
  it("limits text enlargement to 20%", () => {
    assert.equal(normalizeAccessibility({ textScale: 150 }).textScale, 120);
  });
  it("decreases enlarged text back to the original size", () => {
    assert.equal(normalizeAccessibility({ textScale: 95 }).textScale, 100);
    assert.equal(normalizeAccessibility({ textScale: 115 }).textScale, 115);
  });
  it("restores all options to their original state", () => {
    assert.deepEqual(normalizeAccessibility(null), { textScale: 100, highContrast: false, easyReading: false, highlightLinks: false, grayscale: false });
    assert.deepEqual(normalizeAccessibility(defaultAccessibility), defaultAccessibility);
  });
  it("retains saved options without accepting invalid types", () => {
    assert.deepEqual(normalizeAccessibility(JSON.parse('{"textScale":120,"highContrast":true,"easyReading":true,"highlightLinks":true,"grayscale":true}')), { textScale: 120, highContrast: true, easyReading: true, highlightLinks: true, grayscale: true });
    assert.deepEqual(normalizeAccessibility({ textScale: NaN, highContrast: "true" }), defaultAccessibility);
  });
});