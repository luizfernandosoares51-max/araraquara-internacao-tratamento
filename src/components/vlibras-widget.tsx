import { useEffect } from "react";
declare global {
  interface Window {
    VLibras?: { Widget: new (path: string) => unknown };
    VLibrasWidget?: { position?: string };
  }
}
export function VLibrasWidget() {
  useEffect(() => {
    let disposed = false;
    const initialize = () => {
      if (disposed || !window.VLibras) return;
      new window.VLibras.Widget("https://vlibras.gov.br/app");
      // Current official widget uses an open shadow root; legacy versions use [vw].
      const shadow = document.getElementById("vlibras-access-wrapper")?.shadowRoot;
      if (shadow && !shadow.getElementById("central-vlibras-position")) {
        const style = document.createElement("style");
        style.id = "central-vlibras-position";
        style.textContent = "#vlibras-access{left:max(1rem,env(safe-area-inset-left,0px));top:auto;bottom:calc(5.5rem + env(safe-area-inset-bottom,0px));height:48px;width:48px;z-index:45}#vlibras-button{width:48px;height:48px}#vlibras-popup{height:48px}@media(max-width:639px){#vlibras-access{bottom:calc(10.5rem + env(safe-area-inset-bottom,0px))}}";
        shadow.appendChild(style);
      }
    };
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
    return () => { disposed = true; window.clearTimeout(timer); };
  }, []);
  return <div {...{ vw: "" }} className="enabled central-vlibras-legacy">
    <div {...{ "vw-access-button": "" }} className="active" />
    <div {...{ "vw-plugin-wrapper": "" }}><div className="vw-plugin-top-wrapper" /></div>
  </div>;
}