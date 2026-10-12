import { createFileRoute } from "@tanstack/react-router";
import { LocalCampaignPage } from "@/components/local-campaign-page";
import { localCampaignHead, localCampaignPolicy } from "@/lib/local-campaigns";
export const Route = createFileRoute("/lp-descalvado")({
  staticData: { sitemap: localCampaignPolicy.sitemap, campaignPage: true },
  head: () => localCampaignHead("descalvado"),
  component: LocalCampaign,
});
function LocalCampaign() { return <LocalCampaignPage campaignKey="descalvado" />; }
