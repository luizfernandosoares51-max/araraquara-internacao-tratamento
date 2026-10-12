import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { localCampaigns, localCampaignHead, localCampaignPolicy, localCampaignWhatsappHref, type LocalCampaignKey } from "./local-campaigns";

const expectedPaths = [
  "/lp-sao-carlos", "/lp-sao-carlos-feminina", "/lp-araraquara", "/lp-araraquara-feminina",
  "/lp-ribeirao-preto", "/lp-ribeirao-preto-feminina", "/lp-rio-claro", "/lp-americo-brasiliense",
  "/lp-ibate", "/lp-matao", "/lp-taquaritinga", "/lp-ibitinga", "/lp-itapolis", "/lp-jaboticabal",
  "/lp-descalvado", "/lp-porto-ferreira", "/lp-franca", "/lp-leme", "/lp-araras", "/lp-pirassununga",
];
test("all twenty requested campaign paths exist exactly once", () => {
  assert.deepEqual(Object.values(localCampaigns).map(page => page.path).sort(), expectedPaths.toSorted());
});
test("only Araraquara is a confirmed physical unit", () => assert.equal(localCampaignPolicy.physicalUnitCity, "Araraquara"));
test("female unit is not confirmed", () => assert.equal(localCampaignPolicy.femaleUnitConfirmed, false));
test("accredited network is not confirmed", () => assert.equal(localCampaignPolicy.accreditedNetworkConfirmed, false));
test("orientation is available 24 hours", () => assert.equal(localCampaignPolicy.orientationHours, 24));
test("transport requires scheduling", () => assert.equal(localCampaignPolicy.transportByAppointment, true));
test("transport around the clock is not confirmed", () => assert.equal(localCampaignPolicy.transport24HoursConfirmed, false));
test("local campaigns are excluded from sitemap", () => assert.equal(localCampaignPolicy.sitemap, false));
for (const key of Object.keys(localCampaigns) as LocalCampaignKey[]) {
  test(`${key} is noindex nofollow`, () => assert.equal(localCampaignHead(key).meta.find(meta => "name" in meta && meta.name === "robots")?.content, "noindex, nofollow"));
  test(`${key} uses official WhatsApp and its city`, () => {
    const url = new URL(localCampaignWhatsappHref(key));
    assert.equal(url.origin, "https://wa.me");
    assert.equal(url.pathname, "/5516997654579");
    assert.ok(url.searchParams.get("text")?.includes(localCampaigns[key].city));
  });
  test(`${key} has an explicit excluded campaign route`, () => {
    const source = readFileSync(new URL(`../routes/${localCampaigns[key].path.slice(1)}.tsx`, import.meta.url), "utf8");
    assert.ok(source.includes(`createFileRoute("${localCampaigns[key].path}")`));
    assert.ok(source.includes("sitemap: localCampaignPolicy.sitemap, campaignPage: true"));
  });
}