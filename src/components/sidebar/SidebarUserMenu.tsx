import { User, Settings, Users2, CreditCard, LogOut, ChevronDown, BadgeInfo } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const userMenuItems = [
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    title: "Team Management",
    icon: Users2,
    path: "/team",
  },
  {
    title: "Billing",
    icon: CreditCard,
    path: "/billing",
  },
  {
    title: "Log Out",
    icon: LogOut,
    path: "/logout",
  },
];

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
    <div className="flex flex-col">
      <Badge 
        variant="default"
        className={cn(
          "flex items-center gap-1 text-xs font-medium bg-[#8B5CF6] hover:bg-[#7C3AED] mb-2",
          isCollapsed ? "w-fit px-1 mx-auto" : "w-fit px-2 py-1 mx-4",
        )}
      >
        <BadgeInfo className="h-3 w-3" />
        <span className={cn(isCollapsed && "hidden")}>Demo Version</span>
      </Badge>

      <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex items-center w-full gap-2 p-4 hover:bg-sidebar-accent transition-colors",
              isCollapsed && "justify-center p-2"
            )}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/lovable-uploads/064bdc52-b9de-4898-867d-28c541ebe292.png" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-200",
                    isUserMenuOpen && "rotate-180"
                  )}
                />
              </>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[--sidebar-width] rounded-none mt-2 p-2"
          style={{ "--sidebar-width": isCollapsed ? "12rem" : "16rem" } as React.CSSProperties}
        >
          {userMenuItems.map((item) => (
            <DropdownMenuItem key={item.title}>
              <div
                className={cn(
                  "flex items-center gap-2 px-2 py-2 w-full",
                  currentPath === item.path && "bg-accent"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}