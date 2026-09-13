import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  beforeLoad: () => {
    throw redirect({ to: "/clinica-de-recuperacao-em-araraquara", hash: "contato" });
  },
  component: () => null,
});