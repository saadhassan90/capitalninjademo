import { ChevronLeft, BadgeInfo } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">CN</span>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-lg font-semibold">CapitalNinja</span>
                <span className="text-xs text-muted-foreground">Investment Platform</span>
              </div>
            )}
          </div>
          <Badge 
            variant="default"
            className={cn(
              "flex items-center gap-1 text-xs font-medium bg-[#8B5CF6] hover:bg-[#7C3AED]",
              isCollapsed ? "w-fit px-1" : "w-fit px-2 py-1",
              "self-center"
            )}
          >
            <BadgeInfo className="h-3 w-3" />
            <span className={cn(isCollapsed && "hidden")}>Demo Version</span>
          </Badge>
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