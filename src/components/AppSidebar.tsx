import { LayoutDashboard, Users, List, FileText, ChevronDown, User, Settings, Users2, CreditCard, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Investors",
    icon: Users,
    path: "/",
  },
  {
    title: "My Lists",
    icon: List,
    path: "/lists",
  },
  {
    title: "Exports",
    icon: FileText,
    path: "/exports",
  },
];

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

export function AppSidebar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">CN</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">CapitalNinja</span>
            <span className="text-xs text-muted-foreground">Investment Platform</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center w-full gap-2 p-4 hover:bg-sidebar-accent transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                JD
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
              <ChevronDown className={cn(
                "h-4 w-4 text-muted-foreground transition-transform duration-200",
                isUserMenuOpen && "rotate-180"
              )} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[--sidebar-width] rounded-none mt-2 p-2"
            style={{ "--sidebar-width": "16rem" } as React.CSSProperties}
          >
            {userMenuItems.map((item) => (
              <DropdownMenuItem key={item.title} asChild>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 px-2 py-2 cursor-pointer"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}