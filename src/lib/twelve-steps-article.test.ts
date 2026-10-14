import assert from "node:assert/strict";
import { test } from "node:test";
import { twelveStepsArticle } from "./twelve-steps-article";

test("direciona orientação ao WhatsApp oficial com a mensagem solicitada", () => {
    const url = new URL(twelveStepsArticle.whatsapp);
    assert.equal(url.hostname, "wa.me");
    assert.equal(url.pathname, "/5516997654579");
    assert.equal(url.searchParams.get("text"), "Olá, li o artigo sobre os 12 passos e gostaria de orientações sobre acolhimento.");
  });
test("preserva o endereço orgânico original de Araraquara", () => {
    assert.equal(twelveStepsArticle.regionalLinks.find((city) => city.name === "Araraquara")?.to, "/clinica-de-recuperacao-em-araraquara");
  });