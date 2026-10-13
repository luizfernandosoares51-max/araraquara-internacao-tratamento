import { useEffect, useRef, useState } from "react";
import { Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
declare global {
  interface Window {
    VLibras?: { Widget: new (path: string) => unknown };
    VLibrasWidget?: { position?: string };
  }
}
export function VLibrasWidget() {
  const slotRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let disposed = false;
    const mobile = window.matchMedia("(max-width: 639px)");
    const placeTrigger = () => {
      const host = document.getElementById("vlibras-access-wrapper");
      const slot = slotRef.current;
      if (disposed || !host || !slot) return;
      const target = mobile.matches ? slot : document.body;
      if (host.parentElement !== target) target.appendChild(host);
      const shadow = host.shadowRoot;
      if (shadow && !shadow.getElementById("central-vlibras-position")) {
        const style = document.createElement("style");
        style.id = "central-vlibras-position";
        style.textContent = "#vlibras-access{left:max(1rem,env(safe-area-inset-left,0px));top:auto;bottom:var(--central-vlibras-bottom,calc(5.5rem + env(safe-area-inset-bottom,0px)));height:48px;width:48px;z-index:45}#vlibras-button{width:48px;height:48px}#vlibras-popup{height:48px}@media(max-width:639px){#vlibras-access,#vlibras-access:hover,#vlibras-access:has(#vlibras-button:focus-visible){position:relative;inset:auto;width:48px;height:48px;transition:none}#vlibras-popup{display:none}#vlibras-button{position:static;flex:0 0 48px}#vlibras-button:focus-visible{outline:3px solid var(--ring);outline-offset:3px}}";
        shadow.appendChild(style);
      }
      setReady(Boolean(shadow?.getElementById("vlibras-button")));
    };
    const initialize = () => {
      if (disposed || !window.VLibras) return;
      new window.VLibras.Widget("https://vlibras.gov.br/app");
      placeTrigger();
    };
    const observer = new MutationObserver(placeTrigger);
    observer.observe(document.body, { childList: true });
    mobile.addEventListener("change", placeTrigger);
    const timer = window.setTimeout(() => {
      if (document.getElementById("central-vlibras-script")) { initialize(); return; }
      window.VLibrasWidget = { ...window.VLibrasWidget, position: "l" };
      const script = document.createElement("script");
      script.id = "central-vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.referrerPolicy = "no-referrer";
      script.onload = initialize;
      document.body.appendChild(script);
    }, 1200);
    return () => { disposed = true; window.clearTimeout(timer); observer.disconnect(); mobile.removeEventListener("change", placeTrigger); };
  }, []);
  return <div ref={slotRef} className="vlibras-dock-slot" data-ready={ready}>
    <Button size="icon" variant="outline" className="vlibras-loading-button rounded-full text-primary" disabled aria-label="Carregando VLibras" title="Carregando VLibras"><Hand aria-hidden="true" /></Button>
    <div {...{ vw: "" }} className="enabled central-vlibras-legacy">
    <div {...{ "vw-access-button": "" }} className="active" />
    <div {...{ "vw-plugin-wrapper": "" }}><div className="vw-plugin-top-wrapper" /></div>
    </div>
  </div>;
}