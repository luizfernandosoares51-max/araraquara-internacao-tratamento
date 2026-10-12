import { createFileRoute } from "@tanstack/react-router";
import { CampaignPage } from "@/components/campaign-page";
import { campaignHead, campaignPolicy } from "@/lib/ads-pages";
export const Route = createFileRoute("/lp-ajuda-jogos-apostas")({
  staticData: { sitemap: campaignPolicy.sitemap, campaignPage: true },
  head: () => campaignHead("gambling"), component: GamblingCampaign,
});
function GamblingCampaign() { return <CampaignPage pageKey="gambling" />; }