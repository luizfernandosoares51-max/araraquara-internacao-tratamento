import { createFileRoute } from "@tanstack/react-router";
import { LocalCampaignPage } from "@/components/local-campaign-page";
import { localCampaignHead, localCampaignPolicy } from "@/lib/local-campaigns";
export const Route = createFileRoute("/lp-americo-brasiliense")({
  staticData: { sitemap: localCampaignPolicy.sitemap, campaignPage: true },
  head: () => localCampaignHead("americo-brasiliense"),
  component: LocalCampaign,
});
function LocalCampaign() { return <LocalCampaignPage campaignKey="americo-brasiliense" />; }
