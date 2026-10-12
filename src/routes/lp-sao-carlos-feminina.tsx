import { createFileRoute } from "@tanstack/react-router";
import { LocalCampaignPage } from "@/components/local-campaign-page";
import { localCampaignHead, localCampaignPolicy } from "@/lib/local-campaigns";
export const Route = createFileRoute("/lp-sao-carlos-feminina")({
  staticData: { sitemap: localCampaignPolicy.sitemap, campaignPage: true },
  head: () => localCampaignHead("sao-carlos-feminina"),
  component: LocalCampaign,
});
function LocalCampaign() { return <LocalCampaignPage campaignKey="sao-carlos-feminina" />; }
