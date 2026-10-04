import { createFileRoute } from "@tanstack/react-router";

import { handleAcolhimentoChat } from "@/lib/acolhimento-chat.server";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: ({ request }) => handleAcolhimentoChat(request),
    },
  },
});