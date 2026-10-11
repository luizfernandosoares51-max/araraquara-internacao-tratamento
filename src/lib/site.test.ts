import assert from "node:assert/strict";
import { test } from "node:test";
import { facebookHref, whatsappNumber } from "./site";

test("institutional floating contact opens the official WhatsApp number", () => {
  assert.equal(`https://wa.me/${whatsappNumber}`, "https://wa.me/5516997654579");
});

test("institutional Facebook points to the official Araraquara page", () => {
  assert.equal(facebookHref, "https://m.facebook.com/CentraldeAcolhimentoparareabilitacaoararaquara/");
});