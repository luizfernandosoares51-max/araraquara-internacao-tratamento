import { createFileRoute } from "@tanstack/react-router";

import { handleAcolhimentoChat } from "@/lib/acolhimento-chat.server";

export const Route = createFileRoute("/api/chat")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      POST: ({ request }) => handleAcolhimentoChat(request),
    },
  },
});