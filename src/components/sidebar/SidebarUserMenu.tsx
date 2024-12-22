import { User, Settings, Users2, CreditCard, LogOut, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center w-full gap-2 p-4 hover:bg-sidebar-accent transition-colors",
            isCollapsed && "justify-center p-2"
          )}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/lovable-uploads/db4adf48-8ae3-40a8-ada4-593eadc5e6ba.png" alt="John Doe" />
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
          <DropdownMenuItem key={item.title} asChild>
            <Link
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-2 py-2 cursor-pointer",
                currentPath === item.path && "bg-accent"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}