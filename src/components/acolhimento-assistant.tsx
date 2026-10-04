"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Bot, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import logoAsset from "@/assets/logo-central-optimized.webp.asset.json";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";

const welcomeMessage: UIMessage = {
  id: "acolhimento-welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Olá! Sou o Assistente de Acolhimento da Central de Acolhimento e Reabilitação. Posso orientar você sobre dependência química, alcoolismo, tratamento, internação e os próximos passos para buscar ajuda. Como posso ajudar?",
    },
  ],
};

const quickSuggestions = [
  "Como funciona a internação?",
  "Preciso de ajuda para um familiar",
  "Tratamento para dependência química",
  "Tratamento para alcoolismo",
  "Como entrar em contato?",
] as const;

function textFromPart(part: UIMessage["parts"][number]) {
  return part.type === "text" || part.type === "reasoning" ? part.text : "";
}

export function AcolhimentoAssistant() {
  const [open, setOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, error, clearError, stop } = useChat({
    id: "assistente-acolhimento",
    messages: [welcomeMessage],
    transport,
  });
  const busy = status === "submitted" || status === "streaming";
  const hasUserMessage = messages.some((message) => message.role === "user");

  useEffect(() => {
    if (!open || busy) return;
    const frame = requestAnimationFrame(() => textareaRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open, busy, messages.length]);

  const submitText = async (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    clearError();
    await sendMessage({ text: value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-20 right-4 z-40 h-11 max-w-[calc(100vw-5rem)] gap-2 rounded-full px-4 shadow-lg sm:bottom-24 sm:right-6"
          aria-label="Falar com nosso assistente"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="truncate">Falar com nosso assistente</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="home-serene inset-x-2 bottom-2 top-auto h-[min(44rem,calc(100dvh-1rem))] w-auto max-w-none translate-x-0 translate-y-0 gap-0 overflow-hidden rounded-lg border-border bg-background p-0 text-foreground shadow-2xl sm:left-auto sm:right-6 sm:bottom-6 sm:h-[min(44rem,calc(100dvh-3rem))] sm:w-[26rem] sm:max-w-[calc(100vw-3rem)]">
        <header className="flex min-h-20 items-center gap-3 border-b border-border bg-card px-4 pr-12">
          <img
            src={logoAsset.url}
            alt="Central de Acolhimento e Reabilitação"
            className="size-11 shrink-0 rounded-md bg-background object-contain p-1"
            width={44}
            height={44}
          />
          <div className="min-w-0">
            <DialogTitle className="font-display text-base">Assistente de Acolhimento</DialogTitle>
            <DialogDescription className="mt-1 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
              Orientação inicial, sem diagnóstico
            </DialogDescription>
          </div>
        </header>

        <Conversation className="min-h-0 bg-background">
          <ConversationContent className="gap-5 px-4 py-5">
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent
                  className={
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  }
                >
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <MessageResponse key={`${message.id}-text-${index}`}>
                          {textFromPart(part)}
                        </MessageResponse>
                      );
                    }
                    if (part.type === "reasoning") {
                      return (
                        <details
                          key={`${message.id}-reasoning-${index}`}
                          className="text-xs text-muted-foreground"
                        >
                          <summary className="cursor-pointer">Como esta orientação foi organizada</summary>
                          <MessageResponse className="mt-2">{textFromPart(part)}</MessageResponse>
                        </details>
                      );
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))}

            {status === "submitted" && (
              <Message from="assistant">
                <MessageContent className="flex-row items-center gap-2 text-muted-foreground">
                  <Bot className="size-4" aria-hidden="true" />
                  <Shimmer>Preparando uma orientação cuidadosa...</Shimmer>
                </MessageContent>
              </Message>
            )}

            {!hasUserMessage && (
              <div className="grid gap-2" aria-label="Sugestões de perguntas">
                {quickSuggestions.map((suggestion) => (
                  <Button
                    key={suggestion}
                    type="button"
                    variant="outline"
                    className="h-auto justify-start whitespace-normal px-3 py-2.5 text-left text-xs leading-snug"
                    onClick={() => void submitText(suggestion)}
                    disabled={busy}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            )}

            {error && (
              <div role="alert" className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
                {error.message}
              </div>
            )}
          </ConversationContent>
          <ConversationScrollButton aria-label="Ir para a mensagem mais recente" />
        </Conversation>

        <div className="border-t border-border bg-card p-3">
          <PromptInput
            onSubmit={async ({ text }) => submitText(text)}
            className="bg-background"
          >
            <PromptInputTextarea
              ref={textareaRef}
              name="message"
              aria-label="Mensagem para o Assistente de Acolhimento"
              placeholder="Escreva sua dúvida..."
              disabled={busy}
              maxLength={1200}
              className="min-h-20 text-sm"
            />
            <PromptInputFooter className="justify-end">
              <PromptInputSubmit
                status={status}
                onStop={() => void stop()}
                disabled={!busy && status !== "ready"}
                aria-label={busy ? "Interromper resposta" : "Enviar mensagem"}
              />
            </PromptInputFooter>
          </PromptInput>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button asChild size="sm" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={phoneHref} aria-label={`Ligar agora para ${phoneDisplay}`}>
                <Phone aria-hidden="true" /> Ligar agora
              </a>
            </Button>
          </div>
          <p className="mt-2 text-center text-[10px] leading-relaxed text-muted-foreground">
            Conversa temporária. Em uma emergência, ligue para o SAMU 192.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}