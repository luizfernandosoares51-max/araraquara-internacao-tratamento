import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tratamento")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/clinica-de-recuperacao-em-araraquara", hash: "tratamento", statusCode: 301 });
  },
  component: () => null,
});