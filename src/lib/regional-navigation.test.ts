import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { existsSync } from "node:fs";
import { regionalNavigation } from "./regional-navigation";

describe("regional discovery destinations", () => {
  it("uses the existing Araraquara URL rather than creating an SP alias", () => {
    const araraquara = regionalNavigation.filter(item => item.to.startsWith("/clinica-de-recuperacao-em-araraquara"));
    assert.deepEqual(araraquara.map(item => item.to), ["/clinica-de-recuperacao-em-araraquara"]);
  });

  it("does not restore discovery links to retired Bauru pages", () => {
    assert.equal(regionalNavigation.some(item => item.to.includes("bauru")), false);
  });

  it("shows the nine compact city destinations and only points to existing explicit routes", () => {
    assert.equal(regionalNavigation.length, 9);
    assert.deepEqual(regionalNavigation.map(item => item.label), [
      "Araraquara", "São Carlos", "Ribeirão Preto", "Rio Claro", "Matão", "Franca",
      "Taquaritinga", "Ibitinga", "Américo Brasiliense",
    ]);
    for (const item of regionalNavigation) {
      assert.equal(existsSync(`src/routes${item.to}.tsx`), true);
      assert.equal(item.to.includes("#"), false);
    }
  });
});