import { describe, expect, it } from "vitest";
import { twelveStepsArticle } from "./twelve-steps-article";

describe("Contatos e acesso regional do artigo histórico", () => {
  it("direciona orientação ao WhatsApp oficial com a mensagem solicitada", () => {
    const url = new URL(twelveStepsArticle.whatsapp);
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/5516997654579");
    expect(url.searchParams.get("text")).toBe("Olá, li o artigo sobre os 12 passos e gostaria de orientações sobre acolhimento.");
  });
  it("preserva o endereço orgânico original de Araraquara", () => {
    expect(twelveStepsArticle.regionalLinks.find((city) => city.name === "Araraquara")?.to).toBe("/clinica-de-recuperacao-em-araraquara");
  });
});