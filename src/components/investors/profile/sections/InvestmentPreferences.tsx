import { DollarSign, CheckCircle2 } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";
import { formatMoney } from "@/lib/format";

interface InvestmentPreferencesProps {
  investor: {
    min_commitment_size?: number | null;
    max_commitment_size?: number | null;
    preferred_commitment_size?: number | null;
    min_direct_investment_size?: number | null;
    max_direct_investment_size?: number | null;
    preferred_direct_investment_size?: number | null;
    open_to_first_time_funds?: boolean;
  };
}

export const InvestmentPreferences = ({ investor }: InvestmentPreferencesProps) => {
  return (
    <ProfileSection title="Investment Preferences">
      <div className="grid gap-4">
        {investor.preferred_commitment_size && (
          <ProfileInfoItem
            icon={DollarSign}
            label="Preferred Commitment Size"
            value={formatMoney(investor.preferred_commitment_size)}
          />
        )}
        {(investor.min_commitment_size || investor.max_commitment_size) && (
          <ProfileInfoItem
            icon={DollarSign}
            label="Commitment Range"
            value={`${formatMoney(investor.min_commitment_size)} - ${formatMoney(investor.max_commitment_size)}`}
          />
        )}
        {investor.preferred_direct_investment_size && (
          <ProfileInfoItem
            icon={DollarSign}
            label="Preferred Direct Investment Size"
            value={formatMoney(investor.preferred_direct_investment_size)}
          />
        )}
        {(investor.min_direct_investment_size || investor.max_direct_investment_size) && (
          <ProfileInfoItem
            icon={DollarSign}
            label="Direct Investment Range"
            value={`${formatMoney(investor.min_direct_investment_size)} - ${formatMoney(investor.max_direct_investment_size)}`}
          />
        )}
        {investor.open_to_first_time_funds !== null && (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>{investor.open_to_first_time_funds ? 'Open to' : 'Not open to'} first-time funds</span>
          </div>
        )}
      </div>
    </ProfileSection>
  );
};