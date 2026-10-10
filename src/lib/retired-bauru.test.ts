import assert from "node:assert/strict";
import { test } from "node:test";
import { cityDirectory, cityPages, templatedCityPageBySlug } from "./city-pages";

const origin = "http://localhost:8080";

test("retired Bauru URL redirects permanently and directly to Araraquara for GET and HEAD", async () => {
  for (const method of ["GET", "HEAD"]) {
    const response = await fetch(`${origin}/clinica-de-recuperacao-em-bauru-sp`, { method, redirect: "manual" });
    assert.equal(response.status, 301);
    assert.equal(response.headers.get("location"), "/clinica-de-recuperacao-em-araraquara");
  }
  const destination = await fetch(`${origin}/clinica-de-recuperacao-em-araraquara`, { redirect: "manual" });
  assert.equal(destination.status, 200);
});

test("removed experimental Bauru URL no longer resolves to a page", async () => {
  const response = await fetch(`${origin}/clinica-de-recuperacao-bauru-teste`, { redirect: "manual" });
  assert.equal(response.status, 404);
});

test("neither retired Bauru URL is included in the generated sitemap", async () => {
  const response = await fetch(`${origin}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.equal(xml.includes("/clinica-de-recuperacao-em-bauru-sp"), false);
  assert.equal(xml.includes("/clinica-de-recuperacao-bauru-teste"), false);
  assert.ok(xml.includes("/clinica-de-recuperacao-em-araraquara</loc>"));
});

test("Bauru is absent from city discovery, related links and the generic city resolver", () => {
  assert.equal(cityDirectory.some((city) => city.slug === "bauru-sp"), false);
  assert.equal(cityPages.some((city) => city.slug === "bauru-sp"), false);
  assert.equal(cityDirectory.some((city) => city.relatedSlugs.includes("bauru-sp")), false);
  assert.equal(templatedCityPageBySlug["bauru-sp"], undefined);
});