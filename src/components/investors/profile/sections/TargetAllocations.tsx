import { Target } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface TargetAllocationsProps {
  investor: {
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

export const TargetAllocations = ({ investor }: TargetAllocationsProps) => {
  const targets = [
    {
      label: 'Alternatives',
      min: investor.target_alternatives_min_pct,
      max: investor.target_alternatives_max_pct,
    },
    {
      label: 'Private Equity',
      min: investor.target_private_equity_min_pct,
      max: investor.target_private_equity_max_pct,
    },
    {
      label: 'Real Estate',
      min: investor.target_real_estate_min_pct,
      max: investor.target_real_estate_max_pct,
    },
    {
      label: 'Special Opportunities',
      min: investor.target_special_opps_min_pct,
      max: investor.target_special_opps_max_pct,
    },
  ];

  const hasTargets = targets.some(({ min, max }) => min != null || max != null);

  if (!hasTargets) return null;

  return (
    <ProfileSection title="Target Allocations">
      <div className="grid gap-4">
        {targets.map(({ label, min, max }) => {
          if (min == null && max == null) return null;
          return (
            <ProfileInfoItem
              key={label}
              icon={Target}
              label={label}
              value={`${min || 0}% - ${max || 0}%`}
            />
          );
        })}
      </div>
    </ProfileSection>
  );
};