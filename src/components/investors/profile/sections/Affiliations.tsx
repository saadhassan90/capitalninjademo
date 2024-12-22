import { Users, Building } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface AffiliationsProps {
  investor: {
    affiliated_funds_count?: number | null;
    affiliated_investors_count?: number | null;
    total_direct_investments?: number | null;
  };
}

export const Affiliations = ({ investor }: AffiliationsProps) => {
  if (!investor.affiliated_funds_count && !investor.affiliated_investors_count && !investor.total_direct_investments) {
    return null;
  }

  return (
    <ProfileSection title="Affiliations & Performance">
      <div className="grid gap-4">
        <ProfileInfoItem
          icon={Building}
          label="Affiliated Funds"
          value={investor.affiliated_funds_count}
        />
        <ProfileInfoItem
          icon={Users}
          label="Affiliated Investors"
          value={investor.affiliated_investors_count}
        />
        <ProfileInfoItem
          icon={Building}
          label="Direct Investments"
          value={investor.total_direct_investments}
        />
      </div>
    </ProfileSection>
  );
};