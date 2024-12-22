import { LucideIcon } from "lucide-react";

interface ProfileInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
}

export const ProfileInfoItem = ({ icon: Icon, label, value }: ProfileInfoItemProps) => {
  return (
    <div className="flex items-start gap-3 group">
      <Icon className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0 group-hover:text-primary transition-colors" />
      <div className="space-y-1.5 flex-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="font-medium text-foreground break-words">{value || '-'}</p>
      </div>
    </div>
  );
};