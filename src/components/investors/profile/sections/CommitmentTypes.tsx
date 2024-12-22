import { CheckCircle2 } from "lucide-react";
import { ProfileSection } from "../ProfileSection";

interface CommitmentTypesProps {
  investor: {
    commitment_debt?: boolean;
    commitment_private_equity?: boolean;
    commitment_real_estate?: boolean;
    commitment_venture_capital?: boolean;
    commitment_infrastructure?: boolean;
    commitment_energy?: boolean;
    commitment_other?: boolean;
  };
}

export const CommitmentTypes = ({ investor }: CommitmentTypesProps) => {
  const commitmentTypes = [
    { key: 'commitment_debt', label: 'Debt Funds' },
    { key: 'commitment_private_equity', label: 'Private Equity' },
    { key: 'commitment_real_estate', label: 'Real Estate' },
    { key: 'commitment_venture_capital', label: 'Venture Capital' },
    { key: 'commitment_infrastructure', label: 'Infrastructure' },
    { key: 'commitment_energy', label: 'Energy' },
    { key: 'commitment_other', label: 'Other Funds' },
  ];

  const activeCommitments = commitmentTypes.filter(
    ({ key }) => investor[key as keyof typeof investor]
  );

  if (activeCommitments.length === 0) return null;

  return (
    <ProfileSection title="Fund Type Commitments">
      <div className="grid gap-2">
        {activeCommitments.map(({ label }) => (
          <div key={label} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
};