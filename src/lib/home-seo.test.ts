import assert from "node:assert/strict";
import { test } from "node:test";
import { homeTitle, homeDescription, vacancyConsultationHref } from "./home-seo";

test("Home title respects the requested maximum of 60 characters", () => {
  assert.ok(homeTitle.length > 0 && homeTitle.length <= 60);
});
test("Home description respects the requested maximum of 155 characters", () => {
  assert.ok(homeDescription.length > 0 && homeDescription.length <= 155);
});
test("vacancy consultations go directly to the official WhatsApp with a prepared message", () => {
  const url = new URL(vacancyConsultationHref);
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/5516997654579");
  assert.ok((url.searchParams.get("text") ?? "").length > 0);
});