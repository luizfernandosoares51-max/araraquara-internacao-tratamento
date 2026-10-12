import { CampaignLayout } from "./campaign-page";
import { localCampaignDefinition, localCampaignWhatsappHref, type LocalCampaignKey } from "@/lib/local-campaigns";
import { visualAssets } from "@/lib/visual-assets";
export function LocalCampaignPage({ campaignKey }: { campaignKey: LocalCampaignKey }) {
  return <CampaignLayout page={localCampaignDefinition(campaignKey)} image={visualAssets.localCampaigns[campaignKey]} whatsappHref={localCampaignWhatsappHref(campaignKey)} callLabel="Ligar Agora (16) 99765-4579" />;
}
