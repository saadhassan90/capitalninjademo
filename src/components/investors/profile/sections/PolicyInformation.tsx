import { FileText } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface PolicyInformationProps {
  investor: {
    investment_policy_description?: string | null;
  };
}

export const PolicyInformation = ({ investor }: PolicyInformationProps) => {
  if (!investor.investment_policy_description) return null;

  return (
    <ProfileSection title="Investment Policy">
      <ProfileInfoItem
        icon={FileText}
        label="Policy Description"
        value={investor.investment_policy_description}
      />
    </ProfileSection>
  );
};