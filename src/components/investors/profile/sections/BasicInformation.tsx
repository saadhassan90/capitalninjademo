import { FileText, DollarSign, Calendar } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";
import { formatMoney } from "@/lib/format";

interface BasicInformationProps {
  investor: {
    id: string;
    name: string;
    former_name?: string | null;
    alias?: string | null;
    description?: string | null;
    investor_type?: string | null;
    aum_millions?: number | null;
    year_founded?: number | null;
  };
}

export const BasicInformation = ({ investor }: BasicInformationProps) => {
  return (
    <ProfileSection title="Basic Information">
      <div className="grid gap-4">
        <ProfileInfoItem icon={FileText} label="Investor ID" value={investor.id} />
        {investor.former_name && (
          <ProfileInfoItem icon={FileText} label="Former Name" value={investor.former_name} />
        )}
        {investor.alias && (
          <ProfileInfoItem icon={FileText} label="Also Known As" value={investor.alias} />
        )}
        {investor.description && (
          <ProfileInfoItem icon={FileText} label="Description" value={investor.description} />
        )}
        <ProfileInfoItem icon={DollarSign} label="AUM" value={formatMoney(investor.aum_millions)} />
        <ProfileInfoItem icon={Calendar} label="Established" value={investor.year_founded} />
      </div>
    </ProfileSection>
  );
};