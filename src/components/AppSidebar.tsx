import { LayoutDashboard, Users, List, FileText, ChevronDown, User, Settings, Users2, CreditCard, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
import { Button } from "./ui/button";

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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <Sidebar className={cn(isCollapsed && "w-[4rem] transition-all duration-200")}>
      <SidebarHeader className="border-b border-sidebar-border">
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
          className="absolute right-2 top-3"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn(isCollapsed && "hidden")}>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
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
            <button className={cn(
              "flex items-center w-full gap-2 p-4 hover:bg-sidebar-accent transition-colors",
              isCollapsed && "justify-center p-2"
            )}>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                JD
              </div>
              {!isCollapsed && (
                <>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                  <ChevronDown className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-200",
                    isUserMenuOpen && "rotate-180"
                  )} />
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
                    location.pathname === item.path && "bg-accent"
                  )}
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