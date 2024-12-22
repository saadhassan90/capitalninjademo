import { Globe, Phone, Mail, Linkedin } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface ContactInformationProps {
  investor: {
    website?: string | null;
    phone_number?: string | null;
    primary_contact_email?: string | null;
    linkedin_url?: string | null;
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
        {investor.linkedin_url && (
          <ProfileInfoItem 
            icon={Linkedin} 
            label="LinkedIn" 
            value={
              <a href={investor.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {investor.linkedin_url}
              </a>
            } 
          />
        )}
        <ProfileInfoItem icon={Phone} label="Phone" value={investor.phone_number} />
        <ProfileInfoItem 
          icon={Mail} 
          label="Email" 
          value={
            investor.primary_contact_email && (
              <a href={`mailto:${investor.primary_contact_email}`} className="text-primary hover:underline">
                {investor.primary_contact_email}
              </a>
            )
          } 
        />
      </div>
    </ProfileSection>
  );
};