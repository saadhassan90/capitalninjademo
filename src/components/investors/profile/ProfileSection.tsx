import { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ProfileSection = ({ title, children, className }: ProfileSectionProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground border-b pb-2">{title}</h3>
      <div className="space-y-4 rounded-lg bg-card/50 p-4 border shadow-sm">
        {children}
      </div>
    </div>
  );
};