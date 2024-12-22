import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ListPlus } from "lucide-react";
import { InvestorProfileDrawer } from "./InvestorProfileDrawer";

interface InvestorRowActionsProps {
  investor: {
    id: string;
    name: string;
    investor_type: string | null;
    headquarters_location: string | null;
    aum_millions: number | null;
    primary_contact_name: string | null;
    primary_contact_email: string | null;
    description: string | null;
    website: string | null;
    phone_number: string | null;
    year_founded: number | null;
    headquarters_address: string | null;
    headquarters_city: string | null;
    headquarters_state: string | null;
    headquarters_country: string | null;
    primary_contact_title: string | null;
    primary_contact_phone: string | null;
    allocation_alternatives_pct: number | null;
    allocation_private_equity_pct: number | null;
    allocation_real_estate_pct: number | null;
    allocation_hedge_funds_pct: number | null;
    allocation_equities_pct: number | null;
    allocation_fixed_income_pct: number | null;
    allocation_cash_pct: number | null;
  };
}

export const InvestorRowActions = ({ investor }: InvestorRowActionsProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        <Button 
          size="sm" 
          variant="outline"
          className="font-medium"
          onClick={() => setIsProfileOpen(true)}
        >
          <Eye className="h-4 w-4" />
          View
        </Button>
        <Button 
          size="sm" 
          variant="ghost"
          className="text-muted-foreground"
        >
          <ListPlus className="h-4 w-4" />
          Add to List
        </Button>
      </div>

      <InvestorProfileDrawer 
        investor={investor}
        open={isProfileOpen}
        onOpenChange={setIsProfileOpen}
      />
    </>
  );
};