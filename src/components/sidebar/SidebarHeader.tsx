import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function SidebarHeader({ isCollapsed, onToggleCollapse }: SidebarHeaderProps) {
  return (
    <div className="border-b border-sidebar-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className={cn("flex flex-col items-start gap-2", isCollapsed && "items-center")}>
          <div className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black">
              <img 
                src="/lovable-uploads/db4adf48-8ae3-40a8-ada4-593eadc5e6ba.png" 
                alt="CapitalNinja Logo" 
                className="w-6 h-6"
              />
            </div>
            {!isCollapsed && (
              <span className="text-lg font-semibold">CapitalNinja</span>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "transition-transform duration-200",
            isCollapsed && "rotate-180"
          )}
          onClick={onToggleCollapse}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}