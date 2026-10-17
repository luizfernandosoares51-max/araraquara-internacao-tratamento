import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function PublicNetworkGuidance({ city = "Itápolis" }: { city?: string }) {
  return (
    <section aria-labelledby="caps-orientacao" className="my-10 rounded-lg border border-border bg-card p-6 text-card-foreground">
      <h2 id="caps-orientacao" className="font-display text-2xl font-semibold">Orientações sobre Encaminhamento e Apoio Complementar à Rede Pública (CAPS {city} e Região)</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O CAPS e a rede pública de saúde mental (SUS) seguem como porta de entrada gratuita e devem ser procurados diretamente. De forma complementar, a Central orienta famílias sobre como consultar vagas para acolhimento terapêutico particular ou via convênio e sobre o encaminhamento à internação em unidades médicas habilitadas, conforme avaliação e disponibilidade — sem garantia de vaga imediata.</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Em risco à vida, ligue para o SAMU 192. Em sofrimento emocional, o CVV atende pelo 188.</p>
      <a href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent(`Olá! Sou de ${city} e região e gostaria de orientação sobre como solicitar vaga para acolhimento ou internação.`)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"><MessageCircle className="size-4" aria-hidden="true" />Consultar disponibilidade pelo WhatsApp</a>
    </section>
  );
}
