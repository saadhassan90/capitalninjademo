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
      <div className={cn("flex items-center gap-2 px-4 py-3", isCollapsed && "justify-center px-2")}>
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
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-2 top-3 transition-transform duration-200",
          isCollapsed && "rotate-180"
        )}
        onClick={onToggleCollapse}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
  );
}