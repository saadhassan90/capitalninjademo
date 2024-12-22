import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BasicInformation } from "./profile/sections/BasicInformation";
import { ContactInformation } from "./profile/sections/ContactInformation";

interface InvestorProfileDrawerProps {
  investor: {
    id: string;
    name: string;
    former_name?: string | null;
    alias?: string | null;
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
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InvestorProfileDrawer = ({ investor, open, onOpenChange }: InvestorProfileDrawerProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[25vw] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl">{investor.name}</SheetTitle>
          {investor.investor_type && (
            <span className="text-muted-foreground">{investor.investor_type}</span>
          )}
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-100px)] pr-4">
          <div className="space-y-8">
            <BasicInformation investor={investor} />
            <ContactInformation investor={investor} />
            {/* Add other sections here as they are implemented */}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
