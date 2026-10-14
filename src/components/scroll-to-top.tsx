import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

export function ScrollToTop() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.querySelectorAll<HTMLElement>(".public-page-content, .campaign-scroll-content").forEach((container) => {
        container.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}