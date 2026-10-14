import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}