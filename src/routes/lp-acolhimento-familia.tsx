import { createFileRoute } from "@tanstack/react-router";
import { CampaignPage } from "@/components/campaign-page";
import { campaignHead, campaignPolicy } from "@/lib/ads-pages";
export const Route = createFileRoute("/lp-acolhimento-familia")({
  staticData: { sitemap: campaignPolicy.sitemap, campaignPage: true },
  head: () => campaignHead("family"), component: FamilyCampaign,
});
function FamilyCampaign() { return <CampaignPage pageKey="family" />; }