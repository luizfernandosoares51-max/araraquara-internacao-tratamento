import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { collectPageSpeech, pageSpeechSettings, splitPageSpeech } from "@/lib/page-speech";

type SpeechState = "idle" | "reading" | "paused";
export function usePageSpeech() {
  const href = useLocation({ select: location => location.href });
  const [supported, setSupported] = useState(false);
  const [state, setState] = useState<SpeechState>("idle");
  const [message, setMessage] = useState("");
  const generation = useRef(0);
  const utterance = useRef<SpeechSynthesisUtterance | null>(null);
  const paused = useRef(false);
  const continuation = useRef<(() => void) | null>(null);
  const stop = useCallback(() => {
    generation.current += 1;
    paused.current = false;
    continuation.current = null;
    utterance.current = null;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setState("idle");
  }, []);
  useEffect(() => {
    setSupported("speechSynthesis" in window && "SpeechSynthesisUtterance" in window);
    const cancel = () => {
      generation.current += 1;
      continuation.current = null;
      utterance.current = null;
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
    window.addEventListener("pagehide", cancel);
    window.addEventListener("beforeunload", cancel);
    return () => {
      cancel();
      window.removeEventListener("pagehide", cancel);
      window.removeEventListener("beforeunload", cancel);
    };
  }, []);
  useEffect(() => { stop(); setMessage(""); }, [href, stop]);
  const start = () => {
    if (!supported) return;
    stop();
    setMessage("");
    const root = document.getElementById("conteudo-principal");
    const chunks = root ? splitPageSpeech(collectPageSpeech(root)) : [];
    if (!chunks.length) { setMessage("Não há texto disponível para leitura nesta página."); return; }
    const currentGeneration = generation.current;
    const synthesis = window.speechSynthesis;
    const read = (index: number) => {
      if (generation.current !== currentGeneration) return;
      const text = chunks[index];
      if (!text) { utterance.current = null; setState("idle"); setMessage("Leitura concluída."); return; }
      const next = new SpeechSynthesisUtterance(text);
      Object.assign(next, pageSpeechSettings);
      const voice = synthesis.getVoices().find(item => item.lang.replace("_", "-").toLowerCase() === "pt-br");
      if (voice) next.voice = voice;
      next.onend = () => {
        if (generation.current !== currentGeneration) return;
        if (paused.current) continuation.current = () => read(index + 1);
        else read(index + 1);
      };
      next.onerror = () => {
        if (generation.current !== currentGeneration) return;
        stop(); setMessage("Não foi possível reproduzir a voz. Tente iniciar novamente.");
      };
      utterance.current = next;
      try { synthesis.speak(next); } catch { stop(); setMessage("A leitura por voz não está disponível neste navegador."); }
    };
    setState("reading");
    synthesis.resume();
    read(0);
  };
  const togglePause = () => {
    if (!supported || state === "idle") return;
    paused.current = state !== "paused";
    if (paused.current) { window.speechSynthesis.pause(); setState("paused"); }
    else {
      window.speechSynthesis.resume(); setState("reading");
      const next = continuation.current;
      continuation.current = null;
      next?.();
    }
  };
  return { supported, state, message, start, stop, togglePause };
}