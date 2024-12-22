import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Download, Users } from "lucide-react";
import { mockLists, mockExports } from "@/data/mockInvestors";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Mock data for the chart showing exports over time
  const chartData = [
    { month: "Jan", exports: 12 },
    { month: "Feb", exports: 19 },
    { month: "Mar", exports: 15 },
    { month: "Apr", exports: 25 },
    { month: "May", exports: 22 },
    { month: "Jun", exports: 30 },
  ];

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

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Investors
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">167,003</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Active investors in database
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Lists
                  </CardTitle>
                  <ChartBar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockLists.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Created investor lists
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Exports
                  </CardTitle>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockExports.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Completed exports
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Export Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="exports"
                        fill="#0ea5e9"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;