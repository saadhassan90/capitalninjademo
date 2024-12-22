import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Building2, Mail, Phone, Globe, MapPin, Calendar, DollarSign, Users, Percent, FileText, Target, Briefcase, Building } from "lucide-react";

interface InvestorProfileDrawerProps {
  investor: {
    id: string;
    name: string;
    former_name?: string | null;
    alias?: string | null;
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
  const formatPercent = (value: number | null) => {
    if (value === null) return '-';
    return `${value}%`;
  };

  const formatMoney = (value: number | null) => {
    if (value === null) return '-';
    return `$${value.toLocaleString()}M`;
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">{title}</h3>
      {children}
    </div>
  );

  const InfoItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: React.ReactNode }) => (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value || '-'}</p>
      </div>
    </div>
  );

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
            <Section title="Basic Information">
              <div className="grid gap-4">
                <InfoItem icon={FileText} label="Investor ID" value={investor.id} />
                {investor.former_name && (
                  <InfoItem icon={FileText} label="Former Name" value={investor.former_name} />
                )}
                {investor.alias && (
                  <InfoItem icon={FileText} label="Also Known As" value={investor.alias} />
                )}
                {investor.description && (
                  <InfoItem icon={FileText} label="Description" value={investor.description} />
                )}
                <InfoItem icon={DollarSign} label="AUM" value={formatMoney(investor.aum_millions)} />
                <InfoItem icon={Calendar} label="Established" value={investor.year_founded} />
              </div>
            </Section>

            <Separator />

            <Section title="Contact Information">
              <div className="grid gap-4">
                {investor.website && (
                  <InfoItem 
                    icon={Globe} 
                    label="Website" 
                    value={
                      <a href={investor.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {investor.website}
                      </a>
                    } 
                  />
                )}
                <InfoItem icon={Phone} label="Phone" value={investor.phone_number} />
                <InfoItem icon={Mail} label="Email" value={investor.primary_contact_email} />
              </div>
            </Section>

            <Separator />

            <Section title="Location">
              <div className="grid gap-4">
                <InfoItem 
                  icon={MapPin} 
                  label="Headquarters" 
                  value={
                    <>
                      {investor.headquarters_address && <div>{investor.headquarters_address}</div>}
                      <div>
                        {[
                          investor.headquarters_city,
                          investor.headquarters_state,
                          investor.headquarters_country
                        ].filter(Boolean).join(', ')}
                      </div>
                    </>
                  } 
                />
                <InfoItem icon={Globe} label="Global Region" value={investor.global_region} />
                <InfoItem icon={Globe} label="Global Sub-Region" value={investor.global_subregion} />
              </div>
            </Section>

            <Separator />

            <Section title="Primary Contact">
              <div className="grid gap-4">
                <InfoItem icon={Users} label="Name" value={investor.primary_contact_name} />
                <InfoItem icon={Briefcase} label="Title" value={investor.primary_contact_title} />
                <InfoItem icon={Mail} label="Email" value={investor.primary_contact_email} />
                <InfoItem icon={Phone} label="Phone" value={investor.primary_contact_phone} />
              </div>
            </Section>

            <Separator />

            <Section title="Investment Allocation">
              <div className="grid grid-cols-2 gap-4">
                <InfoItem icon={Percent} label="Alternatives" value={formatPercent(investor.allocation_alternatives_pct)} />
                <InfoItem icon={Percent} label="Private Equity" value={formatPercent(investor.allocation_private_equity_pct)} />
                <InfoItem icon={Percent} label="Real Estate" value={formatPercent(investor.allocation_real_estate_pct)} />
                <InfoItem icon={Percent} label="Hedge Funds" value={formatPercent(investor.allocation_hedge_funds_pct)} />
                <InfoItem icon={Percent} label="Equities" value={formatPercent(investor.allocation_equities_pct)} />
                <InfoItem icon={Percent} label="Fixed Income" value={formatPercent(investor.allocation_fixed_income_pct)} />
                <InfoItem icon={Percent} label="Cash" value={formatPercent(investor.allocation_cash_pct)} />
              </div>
            </Section>

            <Separator />

            <Section title="Investment Preferences">
              <div className="grid gap-4">
                <InfoItem 
                  icon={Target} 
                  label="Commitment Size" 
                  value={
                    <>
                      <div>Min: {formatMoney(investor.min_commitment_size)}</div>
                      <div>Max: {formatMoney(investor.max_commitment_size)}</div>
                      <div>Preferred: {formatMoney(investor.preferred_commitment_size)}</div>
                    </>
                  }
                />
                <InfoItem 
                  icon={Target} 
                  label="Direct Investment Size" 
                  value={
                    <>
                      <div>Min: {formatMoney(investor.min_direct_investment_size)}</div>
                      <div>Max: {formatMoney(investor.max_direct_investment_size)}</div>
                      <div>Preferred: {formatMoney(investor.preferred_direct_investment_size)}</div>
                    </>
                  }
                />
                <InfoItem 
                  icon={Building} 
                  label="Fund Types" 
                  value={
                    <div className="space-y-1">
                      {investor.commitment_debt && <div>• Debt Funds</div>}
                      {investor.commitment_private_equity && <div>• Private Equity</div>}
                      {investor.commitment_real_estate && <div>• Real Estate</div>}
                      {investor.commitment_venture_capital && <div>• Venture Capital</div>}
                      {investor.commitment_infrastructure && <div>• Infrastructure</div>}
                      {investor.commitment_energy && <div>• Energy</div>}
                      {investor.commitment_other && <div>• Other Funds</div>}
                    </div>
                  }
                />
                <InfoItem 
                  icon={Building2} 
                  label="First-Time Funds" 
                  value={investor.open_to_first_time_funds ? "Yes" : "No"} 
                />
              </div>
            </Section>

            <Separator />

            <Section title="Performance & Affiliations">
              <div className="grid gap-4">
                <InfoItem icon={Building2} label="Affiliated Funds" value={investor.affiliated_funds_count} />
                <InfoItem icon={Users} label="Affiliated Investors" value={investor.affiliated_investors_count} />
                <InfoItem icon={Target} label="Direct Investments" value={investor.total_direct_investments} />
              </div>
            </Section>

            {investor.investment_policy_description && (
              <>
                <Separator />
                <Section title="Investment Policy">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">{investor.investment_policy_description}</p>
                  </div>
                </Section>
              </>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
