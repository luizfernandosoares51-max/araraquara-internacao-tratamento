import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/clinica-de-recuperacao-em-bauru-sp")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({
      to: "/clinica-de-recuperacao-em-araraquara",
      statusCode: 301,
      replace: true,
    });
  },
});
