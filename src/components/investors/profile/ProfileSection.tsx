import { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ProfileSection = ({ title, children, className }: ProfileSectionProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="space-y-4 rounded-xl bg-muted/30 p-6">
        {children}
      </div>
    </div>
  );
};