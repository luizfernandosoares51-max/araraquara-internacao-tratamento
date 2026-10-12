import { createFileRoute } from "@tanstack/react-router";
import { CampaignPage } from "@/components/campaign-page";
import { campaignHead, campaignPolicy } from "@/lib/ads-pages";
export const Route = createFileRoute("/lp-plantao-urgencia-remocao")({
  staticData: { sitemap: campaignPolicy.sitemap, campaignPage: true },
  head: () => campaignHead("orientation"), component: OrientationCampaign,
});
function OrientationCampaign() { return <CampaignPage pageKey="orientation" />; }