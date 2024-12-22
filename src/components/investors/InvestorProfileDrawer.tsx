import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Building2, Mail, Phone, Globe, MapPin, Calendar, DollarSign, Users, Percent } from "lucide-react";

interface InvestorProfileDrawerProps {
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
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InvestorProfileDrawer = ({ investor, open, onOpenChange }: InvestorProfileDrawerProps) => {
  const formatPercent = (value: number | null) => {
    if (value === null) return '-';
    return `${value}%`;
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[600px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl">{investor.name}</SheetTitle>
          {investor.investor_type && (
            <span className="text-muted-foreground">{investor.investor_type}</span>
          )}
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-100px)] pr-4">
          {investor.description && (
            <div className="mb-6">
              <p className="text-muted-foreground">{investor.description}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* Key Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Information</h3>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>AUM: {investor.aum_millions ? `$${investor.aum_millions}M` : 'Not specified'}</span>
                </div>
                {investor.year_founded && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Founded in {investor.year_founded}</span>
                  </div>
                )}
                {investor.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href={investor.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="grid gap-4">
                {investor.primary_contact_name && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{investor.primary_contact_name}</p>
                      {investor.primary_contact_title && (
                        <p className="text-sm text-muted-foreground">{investor.primary_contact_title}</p>
                      )}
                    </div>
                  </div>
                )}
                {investor.primary_contact_email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${investor.primary_contact_email}`} className="text-primary hover:underline">
                      {investor.primary_contact_email}
                    </a>
                  </div>
                )}
                {investor.primary_contact_phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{investor.primary_contact_phone}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  {investor.headquarters_address && <p>{investor.headquarters_address}</p>}
                  <p>
                    {[
                      investor.headquarters_city,
                      investor.headquarters_state,
                      investor.headquarters_country
                    ].filter(Boolean).join(', ')}
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Portfolio Allocation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Portfolio Allocation</h3>
              <div className="grid grid-cols-2 gap-4">
                {investor.allocation_alternatives_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Alternatives</p>
                    <p className="font-medium">{formatPercent(investor.allocation_alternatives_pct)}</p>
                  </div>
                )}
                {investor.allocation_private_equity_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Private Equity</p>
                    <p className="font-medium">{formatPercent(investor.allocation_private_equity_pct)}</p>
                  </div>
                )}
                {investor.allocation_real_estate_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Real Estate</p>
                    <p className="font-medium">{formatPercent(investor.allocation_real_estate_pct)}</p>
                  </div>
                )}
                {investor.allocation_hedge_funds_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Hedge Funds</p>
                    <p className="font-medium">{formatPercent(investor.allocation_hedge_funds_pct)}</p>
                  </div>
                )}
                {investor.allocation_equities_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Equities</p>
                    <p className="font-medium">{formatPercent(investor.allocation_equities_pct)}</p>
                  </div>
                )}
                {investor.allocation_fixed_income_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Fixed Income</p>
                    <p className="font-medium">{formatPercent(investor.allocation_fixed_income_pct)}</p>
                  </div>
                )}
                {investor.allocation_cash_pct !== null && (
                  <div>
                    <p className="text-sm text-muted-foreground">Cash</p>
                    <p className="font-medium">{formatPercent(investor.allocation_cash_pct)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};