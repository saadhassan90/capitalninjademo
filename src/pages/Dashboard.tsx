import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ExportActivityChart } from "@/components/dashboard/ExportActivityChart";
import { InvestorTypeChart } from "@/components/dashboard/InvestorTypeChart";
import { AssetAllocationChart } from "@/components/dashboard/AssetAllocationChart";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[auto,1fr] h-screen w-full">
        <AppSidebar />
        <main className="overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Welcome back! Here's an overview of your investor database.
              </p>
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