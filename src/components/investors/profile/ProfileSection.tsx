import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ProfileSection = ({ title, children, className }: ProfileSectionProps) => {
  return (
    <>
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-lg font-semibold border-b pb-2">{title}</h3>
        {children}
      </div>
      <Separator className="my-6" />
    </>
  );
};