import assert from "node:assert/strict";
import { test } from "node:test";
import { campaignPolicy, campaignWhatsappHref } from "./ads-pages";
test("campaigns are excluded from organic indexing", () => assert.equal(campaignPolicy.robots, "noindex, nofollow"));
test("campaigns are excluded from sitemap", () => assert.equal(campaignPolicy.sitemap, false));
test("plantao orientation is 24 hours", () => assert.equal(campaignPolicy.orientationHours, 24));
test("immediate admission is not guaranteed", () => assert.equal(campaignPolicy.immediateAdmissionGuaranteed, false));
test("transport remains scheduled", () => assert.equal(campaignPolicy.transportByAppointment, true));
test("Central is not an emergency service", () => assert.equal(campaignPolicy.emergencyService, false));
test("reimbursement is not guaranteed", () => assert.equal(campaignPolicy.reimbursementGuaranteed, false));
test("gambling specialized program is not confirmed", () => assert.equal(campaignPolicy.gamblingSpecializedProgramConfirmed, false));
for (const key of ["family", "orientation", "gambling"] as const) {
  test(`${key} uses the official WhatsApp number`, () => assert.equal(new URL(campaignWhatsappHref(key)).pathname, "/5516997654579"));
}