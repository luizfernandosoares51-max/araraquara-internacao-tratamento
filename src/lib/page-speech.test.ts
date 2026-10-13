import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { pageSpeechSettings, splitPageSpeech } from "./page-speech";
describe("page speech", () => {
  it("uses Brazilian Portuguese at natural speed and balanced pitch", () => {
    assert.deepEqual(pageSpeechSettings, { lang: "pt-BR", rate: 1, pitch: 1 });
  });
  it("keeps all content in order across short utterances", () => {
    const text = "Acolhimento familiar em Araraquara. Orientação com respeito e cuidado. ".repeat(30).trim();
    const chunks = splitPageSpeech(text);
    assert.ok(chunks.length > 1);
    assert.ok(chunks.every(chunk => chunk.length <= 240));
    assert.equal(chunks.join(" "), text);
  });
  it("does not queue speech for empty content", () => { assert.deepEqual(splitPageSpeech("  \n\t "), []); });
});