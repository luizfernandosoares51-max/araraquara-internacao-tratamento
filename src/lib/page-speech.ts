export const pageSpeechSettings = { lang: "pt-BR", rate: 1, pitch: 1 } as const;

export function splitPageSpeech(text: string, limit = 240): string[] {
  const words = text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const chunks: string[] = [];
  let current = "";
  for (const word of words) {
    if (current && current.length + word.length + 1 > limit) { chunks.push(current); current = ""; }
    current = current ? `${current} ${word}` : word;
  }
  if (current) chunks.push(current);
  return chunks;
}

export function collectPageSpeech(root: ParentNode): string {
  return Array.from(root.querySelectorAll<HTMLElement>("h1, h2, p"))
    .filter(element => {
      if (element.closest("[hidden], nav, footer, [role=dialog], [data-speech-ignore]")) return false;
      const style = getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden" && element.getClientRects().length > 0;
    })
    .map(element => element.textContent?.replace(/\s+/g, " ").trim() ?? "")
    .filter(Boolean).join("\n\n");
}