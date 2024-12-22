import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { SidebarHeader } from "./sidebar/SidebarHeader";
import { SidebarMenuItems } from "./sidebar/SidebarMenuItems";
import { SidebarUserMenu } from "./sidebar/SidebarUserMenu";

export function AppSidebar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <Sidebar className={cn(isCollapsed && "w-[4rem] transition-all duration-200")}>
      <SidebarHeader
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn(isCollapsed && "hidden")}>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuItems isCollapsed={isCollapsed} currentPath={location.pathname} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarUserMenu
          isCollapsed={isCollapsed}
          isUserMenuOpen={isUserMenuOpen}
          setIsUserMenuOpen={setIsUserMenuOpen}
          currentPath={location.pathname}
        />
      </SidebarFooter>
    </Sidebar>
  );
}