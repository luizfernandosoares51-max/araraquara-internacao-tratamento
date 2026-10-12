import { describe, expect, it } from "bun:test";
import { existsSync } from "node:fs";
import { regionalNavigation } from "./regional-navigation";

describe("regional discovery destinations", () => {
  it("uses the existing Araraquara URL rather than creating an SP alias", () => {
    const araraquara = regionalNavigation.filter(item => item.to.startsWith("/clinica-de-recuperacao-em-araraquara"));
    expect(araraquara.map(item => item.to)).toEqual(["/clinica-de-recuperacao-em-araraquara"]);
  });

  it("does not restore discovery links to retired Bauru pages", () => {
    expect(regionalNavigation.some(item => item.to.includes("bauru"))).toBe(false);
  });

  it("only points to existing explicit routes", () => {
    expect(regionalNavigation.length).toBe(11);
    for (const item of regionalNavigation) {
      expect(existsSync(`src/routes${item.to}.tsx`)).toBe(true);
    }
  });
});