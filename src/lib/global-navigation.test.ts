import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { it } from "node:test";
import { navigationGroups, navigationDirectLinks } from "./global-navigation";

it("treatment discovery uses the requested rehabilitation pillar", () => {
  assert.equal(navigationGroups[0].items[0].to, "/clinica-de-reabilitacao");
});
it("family guidance points to the existing Home guide", () => {
  assert.deepEqual(navigationGroups[2].items[0], { label: "Guia de Apoio à Família", to: "/", hash: "guia-orientacao-familia" });
});
it("financial guidance has a dedicated Home destination", () => {
  assert.equal(navigationGroups[2].items[1].to, "/");
  assert.equal(navigationGroups[2].items[1].hash, "cobertura-reembolso");
});
it("video navigation opens the institutional video section in Araraquara", () => {
  assert.deepEqual(navigationDirectLinks[1], {
    label: "Vídeos",
    to: "/clinica-de-recuperacao-em-araraquara",
    hash: "videos",
  });
});
it("regional navigation preserves the requested six cities and catalog", () => {
  assert.deepEqual(navigationGroups[3].items.map(item => item.to), [
    "/clinica-de-recuperacao-em-araraquara", "/clinica-de-recuperacao-em-sao-carlos-sp",
    "/clinica-de-recuperacao-em-ribeirao-preto-sp", "/clinica-de-recuperacao-em-rio-claro-sp",
    "/clinica-de-recuperacao-em-franca-sp", "/clinica-de-recuperacao-em-matao-sp", "/cidades",
  ]);
});
it("every navigation destination is an existing explicit page", () => {
  const items = [...navigationGroups.flatMap(group => [...group.items]), ...navigationDirectLinks];
  for (const item of items) {
    const route = item.to === "/" ? "index" : item.to === "/blog" ? "blog.index" : item.to.slice(1);
    assert.equal(existsSync(`src/routes/${route}.tsx`), true, item.to);
  }
});