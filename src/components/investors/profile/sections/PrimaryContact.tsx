import { User, Mail, Phone, Building2 } from "lucide-react";
import { ProfileSection } from "../ProfileSection";
import { ProfileInfoItem } from "../ProfileInfoItem";

interface PrimaryContactProps {
  investor: {
    primary_contact_name?: string | null;
    primary_contact_title?: string | null;
    primary_contact_email?: string | null;
    primary_contact_phone?: string | null;
  };
}

export const PrimaryContact = ({ investor }: PrimaryContactProps) => {
  return (
    <ProfileSection title="Primary Contact">
      <div className="grid gap-4">
        <ProfileInfoItem icon={User} label="Name" value={investor.primary_contact_name} />
        <ProfileInfoItem icon={Building2} label="Title" value={investor.primary_contact_title} />
        <ProfileInfoItem icon={Mail} label="Email" value={investor.primary_contact_email} />
        <ProfileInfoItem icon={Phone} label="Phone" value={investor.primary_contact_phone} />
      </div>
    </ProfileSection>
  );
};