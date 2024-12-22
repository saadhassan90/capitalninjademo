import { LayoutDashboard, Users, List, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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

interface SidebarMenuItemsProps {
  isCollapsed: boolean;
  currentPath: string;
}

export function SidebarMenuItems({ isCollapsed, currentPath }: SidebarMenuItemsProps) {
  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={currentPath === item.path}
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
  );
}