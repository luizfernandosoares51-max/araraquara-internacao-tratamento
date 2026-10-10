import { z } from "zod";
import { whatsappNumber } from "./site";

export const relationships = ["Mãe", "Pai", "Cônjuge", "Filho", "Próprio acolhido", "Outro"] as const;
export const helpTypes = ["Acolhimento Voluntário", "Orientação Familiar", "Triagem/Resgate"] as const;
export const brazilStates = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"] as const;

const plainText = (max: number) => z.string().trim().max(max, `Use no máximo ${max} caracteres.`).refine(value => !/[<>\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u.test(value), "Não use marcação HTML ou caracteres de controle.");

export const contactRequestSchema = z.object({
  fullName: plainText(100).refine(value => value.split(/\s+/).length >= 2 && /^[\p{L}\p{M} .’'-]+$/u.test(value), "Informe seu nome completo."),
  relationship: z.enum(relationships, { errorMap: () => ({ message: "Selecione o grau de parentesco." }) }),
  phone: z.string().trim().max(25).regex(/^[\d\s()+-]+$/, "Informe um telefone com DDD.").transform(value => value.replace(/\D/g, "")).refine(value => /^[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(value), "Informe DDD e telefone válidos, com 10 ou 11 dígitos."),
  city: plainText(80).refine(value => value.length >= 2 && /^[\p{L}\p{M} .’'-]+$/u.test(value), "Informe sua cidade."),
  state: z.enum(brazilStates, { errorMap: () => ({ message: "Selecione o estado." }) }),
  helpType: z.enum(helpTypes, { errorMap: () => ({ message: "Selecione o tipo de ajuda." }) }),
  message: plainText(1000),
});

export type ContactRequestInput = z.input<typeof contactRequestSchema>;

// Validate again at the external-service boundary, even when the form already validated.
export function buildContactWhatsAppLink(input: unknown): string {
  const data = contactRequestSchema.parse(input);
  const text = [
    "Olá, gostaria de solicitar acolhimento ou orientação à Central.",
    `Nome: ${data.fullName}`,
    `Parentesco: ${data.relationship}`,
    `Telefone / WhatsApp: ${data.phone}`,
    `Cidade / Estado: ${data.city} / ${data.state}`,
    `Ajuda necessária: ${data.helpType}`,
    ...(data.message ? [`Breve relato: ${data.message}`] : []),
  ].join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}