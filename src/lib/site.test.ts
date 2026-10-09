import { expect, test } from "bun:test";
import { whatsappNumber } from "./site";

test("institutional floating contact opens the official WhatsApp number", () => {
  expect(`https://wa.me/${whatsappNumber}`).toBe("https://wa.me/5516997654579");
});