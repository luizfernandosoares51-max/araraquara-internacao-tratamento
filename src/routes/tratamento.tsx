import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tratamento")({
  beforeLoad: () => {
    throw redirect({ to: "/clinica-de-recuperacao-em-araraquara", hash: "tratamento" });
  },
  component: () => null,
});