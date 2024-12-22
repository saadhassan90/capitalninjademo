import { Globe, Phone, Mail } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface ContactInformationProps {
  investor: {
    website?: string | null;
    phone_number?: string | null;
    primary_contact_email?: string | null;
  };
}

export const ContactInformation = ({ investor }: ContactInformationProps) => {
  return (
    <ProfileSection title="Contact Information">
      <div className="grid gap-4">
        {investor.website && (
          <ProfileInfoItem 
            icon={Globe} 
            label="Website" 
            value={
              <a href={investor.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {investor.website}
              </a>
            } 
          />
        )}
        <ProfileInfoItem icon={Phone} label="Phone" value={investor.phone_number} />
        <ProfileInfoItem icon={Mail} label="Email" value={investor.primary_contact_email} />
      </div>
    </ProfileSection>
  );
};