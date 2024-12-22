import { PieChart } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface AssetAllocationProps {
  investor: {
    allocation_alternatives_pct?: number | null;
    allocation_private_equity_pct?: number | null;
    allocation_real_estate_pct?: number | null;
    allocation_hedge_funds_pct?: number | null;
    allocation_equities_pct?: number | null;
    allocation_fixed_income_pct?: number | null;
    allocation_cash_pct?: number | null;
  };
}

export const AssetAllocation = ({ investor }: AssetAllocationProps) => {
  const allocations = [
    { key: 'allocation_alternatives_pct', label: 'Alternative Investments' },
    { key: 'allocation_private_equity_pct', label: 'Private Equity' },
    { key: 'allocation_real_estate_pct', label: 'Real Estate' },
    { key: 'allocation_hedge_funds_pct', label: 'Hedge Funds' },
    { key: 'allocation_equities_pct', label: 'Equities' },
    { key: 'allocation_fixed_income_pct', label: 'Fixed Income' },
    { key: 'allocation_cash_pct', label: 'Cash' },
  ];

  const hasAllocations = allocations.some(
    ({ key }) => investor[key as keyof typeof investor] != null
  );

  if (!hasAllocations) return null;

  return (
    <ProfileSection title="Asset Allocation">
      <div className="grid gap-4">
        {allocations.map(({ key, label }) => {
          const value = investor[key as keyof typeof investor];
          if (value == null) return null;
          return (
            <ProfileInfoItem
              key={key}
              icon={PieChart}
              label={label}
              value={`${value}%`}
            />
          );
        })}
      </div>
    </ProfileSection>
  );
};