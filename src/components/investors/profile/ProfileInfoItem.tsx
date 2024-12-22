import { LucideIcon } from "lucide-react";

interface ProfileInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
}

export const ProfileInfoItem = ({ icon: Icon, label, value }: ProfileInfoItemProps) => {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value || '-'}</p>
      </div>
    </div>
  );
};