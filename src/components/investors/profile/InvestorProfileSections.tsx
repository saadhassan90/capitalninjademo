import { BasicInformation } from "./sections/BasicInformation";
import { ContactInformation } from "./sections/ContactInformation";
import { LocationInformation } from "./sections/LocationInformation";
import { PrimaryContact } from "./sections/PrimaryContact";
import { CommitmentTypes } from "./sections/CommitmentTypes";
import { AssetAllocation } from "./sections/AssetAllocation";
import { InvestmentPreferences } from "./sections/InvestmentPreferences";
import { Affiliations } from "./sections/Affiliations";
import { TargetAllocations } from "./sections/TargetAllocations";
import { PolicyInformation } from "./sections/PolicyInformation";

interface InvestorProfileSectionsProps {
  investor: {
    id: string;
    name: string;
    former_name?: string | null;
    alias?: string | null;
    description?: string | null;
    investor_type?: string | null;
    aum_millions?: number | null;
    year_founded?: number | null;
    website?: string | null;
    phone_number?: string | null;
    primary_contact_email?: string | null;
    headquarters_address?: string | null;
    headquarters_city?: string | null;
    headquarters_state?: string | null;
    headquarters_country?: string | null;
    primary_contact_title?: string | null;
    primary_contact_phone?: string | null;
    allocation_alternatives_pct?: number | null;
    allocation_private_equity_pct?: number | null;
    allocation_real_estate_pct?: number | null;
    allocation_hedge_funds_pct?: number | null;
    allocation_equities_pct?: number | null;
    allocation_fixed_income_pct?: number | null;
    allocation_cash_pct?: number | null;
    min_commitment_size?: number | null;
    max_commitment_size?: number | null;
    preferred_commitment_size?: number | null;
    min_direct_investment_size?: number | null;
    max_direct_investment_size?: number | null;
    preferred_direct_investment_size?: number | null;
    commitment_debt?: boolean;
    commitment_private_equity?: boolean;
    commitment_real_estate?: boolean;
    commitment_venture_capital?: boolean;
    commitment_infrastructure?: boolean;
    commitment_energy?: boolean;
    commitment_other?: boolean;
    open_to_first_time_funds?: boolean;
    affiliated_funds_count?: number | null;
    affiliated_investors_count?: number | null;
    total_direct_investments?: number | null;
    investment_policy_description?: string | null;
    global_region?: string | null;
    global_subregion?: string | null;
    target_alternatives_min_pct?: number | null;
    target_alternatives_max_pct?: number | null;
    target_private_equity_min_pct?: number | null;
    target_private_equity_max_pct?: number | null;
    target_real_estate_min_pct?: number | null;
    target_real_estate_max_pct?: number | null;
    target_special_opps_min_pct?: number | null;
    target_special_opps_max_pct?: number | null;
  };
}

export const InvestorProfileSections = ({ investor }: InvestorProfileSectionsProps) => {
  return (
    <>
      <BasicInformation investor={investor} />
      <ContactInformation investor={investor} />
      <LocationInformation investor={investor} />
      <PrimaryContact investor={investor} />
      <CommitmentTypes investor={investor} />
      <AssetAllocation investor={investor} />
      <InvestmentPreferences investor={investor} />
      <Affiliations investor={investor} />
      <TargetAllocations investor={investor} />
      <PolicyInformation investor={investor} />
    </>
  );
};
