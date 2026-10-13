export const accessibilityStorageKey = "central-accessibility-v1";
export type AccessibilityPreferences = {
  textScale: number;
  highContrast: boolean;
  easyReading: boolean;
  highlightLinks: boolean;
  grayscale: boolean;
};
export const defaultAccessibility: AccessibilityPreferences = {
  textScale: 100, highContrast: false, easyReading: false, highlightLinks: false, grayscale: false,
};
export function normalizeAccessibility(value: unknown): AccessibilityPreferences {
  if (!value || typeof value !== "object") return { ...defaultAccessibility };
  const data = value as Record<string, unknown>;
  return {
    textScale: typeof data['textScale'] === "number" && Number.isFinite(data['textScale'])
      ? Math.min(120, Math.max(100, Math.round(data['textScale'] / 5) * 5)) : 100,
    highContrast: data['highContrast'] === true,
    easyReading: data['easyReading'] === true,
    highlightLinks: data['highlightLinks'] === true,
    grayscale: data['grayscale'] === true,
  };
}