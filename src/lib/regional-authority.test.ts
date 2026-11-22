import assert from "node:assert/strict";
import { test } from "node:test";
import { contactLabels, quickAnswerText, regionalLogistics, wordCount } from "./regional-authority";

const cities = ["Araraquara", "São Carlos", "Matão", "Itápolis", "Ibitinga", "Ibaté", "Américo Brasiliense", "Ribeirão Preto", "Rio Claro", "Franca"];

test("resumo rápido tem entre 45 e 55 palavras em todas as cidades", () => {
  for (const city of cities) {
    const count = wordCount(quickAnswerText(city));
    assert.ok(count >= 45 && count <= 55, `${city}: ${count}`);
  }
});

test("resumo rápido cita a Lei 13.840/2019 e só a sede própria de Araraquara", () => {
  const text = quickAnswerText("São Carlos");
  assert.ok(text.includes("Lei 13.840/2019"));
  assert.ok(text.includes("sede própria em Araraquara"));
  assert.ok(!/unidades próprias/.test(text));
});

test("logística lista os bairros pedidos de Araraquara e São Carlos", () => {
  assert.deepEqual(regionalLogistics["Araraquara"]?.districts, ["Vila Xavier", "Jardim América", "Fonte Luminosa", "Melhado", "Selmi Dei"]);
  assert.deepEqual(regionalLogistics["São Carlos"]?.districts, ["Centro", "Vila Prado", "Santa Felícia", "Cidade Aracy", "Jockey Club"]);
});

test("logística usa 20 a 25 minutos para Matão e 10 a 15 para Américo Brasiliense", () => {
  assert.deepEqual(regionalLogistics["Matão"]?.referenceMinutes, [20, 25]);
  assert.deepEqual(regionalLogistics["Américo Brasiliense"]?.referenceMinutes, [10, 15]);
});

test("botões de contato usam os textos pedidos", () => {
  assert.equal(contactLabels.whatsapp, "Falar no WhatsApp Agora (Plantão 24h)");
  assert.equal(contactLabels.call, "Ligar com Sigilo");
});
