import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { conversionFaqs, conversionFaqSchema } from "@/lib/conversion-faq";
import { siteUrl } from "@/lib/site";

export function ConversionFaq({ pathname }: { pathname: string }) {
  return <section aria-labelledby="conversion-faq-title" className="home-serene border-t border-border bg-background text-foreground">
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <h2 id="conversion-faq-title" className="font-display text-2xl font-semibold sm:text-3xl">Perguntas Frequentes</h2>
      <Accordion type="single" collapsible className="mt-5">
        {conversionFaqs.map(({ question, answer }, index) => <AccordionItem key={question} value={`conversion-${index}`} className="[&>div[data-state=closed]]:hidden">
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent forceMount className="leading-relaxed text-muted-foreground">{answer}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...conversionFaqSchema, "@id": `${siteUrl}${pathname}#perguntas-frequentes` }) }} />
  </section>;
}