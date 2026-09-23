import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/familia")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/clinica-de-recuperacao-em-araraquara", hash: "familia" });
  },
  component: () => null,
});