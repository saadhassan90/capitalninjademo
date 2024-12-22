import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ExportActivityChart } from "@/components/dashboard/ExportActivityChart";
import { InvestorTypeChart } from "@/components/dashboard/InvestorTypeChart";
import { AssetAllocationChart } from "@/components/dashboard/AssetAllocationChart";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[auto,1fr] h-screen w-full">
        <AppSidebar />
        <main className="overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <LayoutDashboard className="h-8 w-8" />
                Dashboard
              </h1>
            </div>

            <StatsCards />
            <ExportActivityChart />

            <div className="grid gap-4 md:grid-cols-2">
              <InvestorTypeChart />
              <AssetAllocationChart />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;