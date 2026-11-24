import { useEffect } from "react";
import { contextualWhatsappHref } from "@/lib/contextual-whatsapp";
import { whatsappNumber } from "@/lib/site";

/** Enhance legacy contact anchors without changing personalized form/triage messages. */
export function ContextualWhatsApp({ pathname }: { pathname: string }) {
  useEffect(() => {
    const selector = `a[href^="https://wa.me/${whatsappNumber}"]:not([data-whatsapp-personalized])`;
    const href = contextualWhatsappHref(pathname);
    const update = (root: ParentNode) => {
      const anchors = [...root.querySelectorAll<HTMLAnchorElement>(selector)];
      if (root instanceof HTMLAnchorElement && root.matches(selector)) anchors.push(root);
      for (const anchor of anchors) if (anchor.href !== href) anchor.href = href;
    };
    update(document);
    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === "attributes" && record.target instanceof HTMLAnchorElement) update(record.target);
        for (const node of record.addedNodes) if (node instanceof Element) update(node);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}