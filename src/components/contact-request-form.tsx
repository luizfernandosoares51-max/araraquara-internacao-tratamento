import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MessageCircle, Phone, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildContactWhatsAppLink, contactRequestSchema, relationships, helpTypes, brazilStates, type ContactRequestInput } from "@/lib/contact-request";

export function ContactRequestForm() {
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  const { register, control, handleSubmit, formState: { errors } } = useForm<ContactRequestInput>({
    resolver: zodResolver(contactRequestSchema),
    defaultValues: { fullName: "", phone: "", city: "", message: "" },
  });

  useEffect(() => {
    if (whatsappLink) {
      confirmationRef.current?.focus();
      confirmationRef.current?.scrollIntoView({ block: "center", behavior: "instant" });
    }
  }, [whatsappLink]);

  const error = (name: keyof ContactRequestInput) => errors[name] ? <span id={`contact-${name}-error`} role="alert" className="block text-sm text-destructive">{errors[name]?.message}</span> : null;
  const fieldProps = (name: keyof ContactRequestInput) => ({ id: `contact-${name}`, "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `contact-${name}-error` : undefined });
  const selector = (name: "relationship" | "state" | "helpType", label: string, options: readonly string[]) => <div className="min-w-0 space-y-2">
    <label htmlFor={`contact-${name}`} className="block font-medium">{label}</label>
    <Controller control={control} name={name} render={({ field }) => <Select value={field.value ?? ""} onValueChange={field.onChange}>
      <SelectTrigger {...fieldProps(name)} ref={field.ref} onBlur={field.onBlur} className="min-h-12 text-base"><SelectValue placeholder="Selecione" /></SelectTrigger>
      <SelectContent><SelectItem value="placeholder" disabled>Selecione</SelectItem>{options.map(option => <SelectItem key={option} value={option} className="min-h-12">{option}</SelectItem>)}</SelectContent>
    </Select>} />
    {error(name)}
  </div>;

  return <section aria-labelledby="contact-request-heading">
    <h2 id="contact-request-heading">Solicitar acolhimento</h2>
    {whatsappLink ? <div ref={confirmationRef} tabIndex={-1} role="status" className="rounded-lg border border-accent bg-accent/15 p-5 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-7">
      <CheckCircle2 aria-hidden="true" className="mb-4 size-9 text-primary" />
      <h3 className="mb-3 text-xl font-semibold">Sua solicitação está pronta</h3>
      <p>Entendemos a urgência da sua família. Para encaminhar seu contato à coordenação, abra o WhatsApp abaixo e envie a mensagem preparada. Seus dados ainda não foram enviados; o recebimento e o retorno dependem do atendimento da equipe.</p>
      <p>Compartilhe apenas o necessário. O atendimento pelo WhatsApp segue as práticas de privacidade desse serviço e da instituição, sem garantia de sigilo absoluto.</p>
      <div className="flex flex-col items-stretch gap-3 sm:items-start">
        <Button asChild className="min-h-12 h-auto whitespace-normal bg-whatsapp text-whatsapp-foreground! no-underline! hover:bg-whatsapp/90"><a href={whatsappLink} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"><MessageCircle aria-hidden="true" />Enviar pelo WhatsApp</a></Button>
        <Button variant="outline" className="min-h-12" onClick={() => setWhatsappLink(null)}><ArrowLeft aria-hidden="true" />Revisar dados</Button>
      </div>
      <p className="mt-5 font-medium">Em emergência imediata, não aguarde a Central: ligue 192 — SAMU.</p>
      <Button asChild variant="outline" className="min-h-12"><a href="tel:192"><Phone aria-hidden="true" />SAMU 192</a></Button>
    </div> : <form noValidate onSubmit={handleSubmit(data => setWhatsappLink(buildContactWhatsAppLink(data)))} className="space-y-5">
      <p>Estamos aqui para ouvir você e sua família. Informe seus dados de contato para buscar orientação.</p>
      <div className="space-y-2"><label htmlFor="contact-fullName" className="block font-medium">Nome completo de quem está buscando ajuda</label><Input {...register("fullName")} {...fieldProps("fullName")} autoComplete="name" maxLength={100} className="min-h-12" />{error("fullName")}</div>
      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        {selector("relationship", "Grau de parentesco com a pessoa", relationships)}
        <div className="space-y-2"><label htmlFor="contact-phone" className="block font-medium">Telefone / WhatsApp com DDD</label><Input {...register("phone")} {...fieldProps("phone")} type="tel" inputMode="tel" autoComplete="tel-national" maxLength={25} placeholder="(16) 99999-9999" className="min-h-12" />{error("phone")}</div>
        <div className="space-y-2"><label htmlFor="contact-city" className="block font-medium">Cidade</label><Input {...register("city")} {...fieldProps("city")} autoComplete="address-level2" maxLength={80} className="min-h-12" />{error("city")}</div>
        {selector("state", "Estado", brazilStates)}
      </div>
      {selector("helpType", "Tipo de ajuda necessária", helpTypes)}
      <p className="text-sm text-muted-foreground">Triagem/Resgate: orientação e avaliação pela equipe; remoção e translado dependem de agendamento. Não é um serviço público de emergência.</p>
      <div className="space-y-2"><label htmlFor="contact-message" className="block font-medium">Mensagem / Breve relato da situação <span className="font-normal text-muted-foreground">(opcional)</span></label><Textarea {...register("message")} {...fieldProps("message")} maxLength={1000} rows={4} className="resize-y" aria-describedby={errors.message ? "contact-message-error contact-message-hint" : "contact-message-hint"} />{error("message")}<span id="contact-message-hint" className="block text-sm text-muted-foreground">Até 1.000 caracteres. Evite documentos, diagnósticos e informações de saúde que identifiquem terceiros.</span></div>
      <p className="text-sm text-muted-foreground">Os dados ficam temporariamente nesta página, sem cadastro ou envio automático pelo site. Ao abrir o WhatsApp, eles serão incluídos no link enviado ao serviço; envie a mensagem apenas se concordar. <Link to="/politica-de-privacidade">Política de Privacidade e LGPD</Link>.</p>
      <Button type="submit" className="min-h-12 h-auto w-full whitespace-normal sm:w-auto"><Send aria-hidden="true" />Solicitar Acolhimento</Button>
    </form>}
  </section>;
}