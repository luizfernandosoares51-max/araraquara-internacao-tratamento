import assert from "node:assert/strict";
import { test } from "node:test";
import { contextualWhatsappHref, routeCityName, showConversionFaq } from "./contextual-whatsapp";
import { regionalCityAccess } from "./regional-city-access";

test("general page WhatsApp uses the exact requested message and unchanged number", () => {
  for (const pathname of ["/", "/contato", "/blog"]) {
    const url = new URL(contextualWhatsappHref(pathname));
    assert.equal(url.pathname, "/5516997654579");
    assert.equal(url.searchParams.get("text"), "Olá, vim pelo site da Central de Acolhimento e Reabilitação e preciso de orientação.");
  }
});
test("all fourteen cities and their treatments identify the page rather than visitor residence", () => {
  for (const [slug, city] of Object.entries(regionalCityAccess)) {
    for (const path of [`/clinica-de-recuperacao-em-${slug}`, `/tratamento-alcoolismo-${slug.replace(/-sp$/, "")}`]) {
      assert.equal(routeCityName(path), city.name);
      const url = new URL(contextualWhatsappHref(path));
      assert.equal(url.pathname, "/5516997654579");
      assert.equal(url.searchParams.get("text"), `Olá, vim pelo site (página de ${city.name}) e preciso de orientação sobre acolhimento.`);
    }
  }
});
test("retired Bauru is not restored or classified as an active city", () => {
  assert.equal(routeCityName("/clinica-de-recuperacao-em-bauru-sp"), undefined);
  assert.equal(showConversionFaq("/clinica-de-recuperacao-em-bauru-sp"), false);
});