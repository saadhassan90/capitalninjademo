import { MapPin, Globe } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface LocationInformationProps {
  investor: {
    headquarters_address?: string | null;
    headquarters_city?: string | null;
    headquarters_state?: string | null;
    headquarters_country?: string | null;
    global_region?: string | null;
    global_subregion?: string | null;
  };
}

export const LocationInformation = ({ investor }: LocationInformationProps) => {
  const fullAddress = [
    investor.headquarters_address,
    investor.headquarters_city,
    investor.headquarters_state,
    investor.headquarters_country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <ProfileSection title="Location Information">
      <div className="grid gap-4">
        <ProfileInfoItem icon={MapPin} label="Headquarters" value={fullAddress} />
        <ProfileInfoItem
          icon={Globe}
          label="Global Region"
          value={
            investor.global_region && investor.global_subregion
              ? `${investor.global_region} - ${investor.global_subregion}`
              : investor.global_region || investor.global_subregion
          }
        />
      </div>
    </ProfileSection>
  );
};