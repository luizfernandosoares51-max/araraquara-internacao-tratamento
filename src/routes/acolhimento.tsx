import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/acolhimento")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/clinica-de-recuperacao-em-araraquara", hash: "acolhimento" });
  },
  component: () => null,
});