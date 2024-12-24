import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

interface SidebarUserMenuProps {
  isCollapsed: boolean;
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: (open: boolean) => void;
  currentPath: string;
}

export function SidebarUserMenu({
  isCollapsed,
  isUserMenuOpen,
  setIsUserMenuOpen,
  currentPath,
}: SidebarUserMenuProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {!isCollapsed && (
        <Badge variant="outline" className="w-fit">
          Beta
        </Badge>
      )}
      <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2",
              isCollapsed && "justify-center"
            )}
          >
            <User className="h-4 w-4" />
            {!isCollapsed && <span>John Doe</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}