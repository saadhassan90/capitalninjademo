import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Download, Users } from "lucide-react";
import { mockLists, mockExports, mockInvestors } from "@/data/mockInvestors";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Treemap,
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

  // Calculate investor type distribution
  const investorTypeData = mockInvestors.reduce((acc: { name: string; value: number }[], investor) => {
    const existingType = acc.find(item => item.name === investor.investor_type);
    if (existingType) {
      existingType.value++;
    } else if (investor.investor_type) {
      acc.push({ name: investor.investor_type, value: 1 });
    }
    return acc;
  }, []);

  // Calculate average asset allocations across all investors
  const assetAllocationData = [
    { name: 'Alternatives', value: 0 },
    { name: 'Private Equity', value: 0 },
    { name: 'Real Estate', value: 0 },
    { name: 'Hedge Funds', value: 0 },
    { name: 'Equities', value: 0 },
    { name: 'Fixed Income', value: 0 },
    { name: 'Cash', value: 0 },
  ].map(allocation => {
    const total = mockInvestors.reduce((sum, investor) => {
      const key = `allocation_${allocation.name.toLowerCase().replace(' ', '_')}_pct` as keyof typeof investor;
      return sum + (investor[key] as number || 0);
    }, 0);
    return {
      ...allocation,
      value: total / mockInvestors.length,
    };
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

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

            {/* Export Activity Chart */}
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

            {/* New Analytics Row */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Investor Types Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Investor Type Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={investorTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {investorTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Asset Allocation Heatmap */}
              <Card>
                <CardHeader>
                  <CardTitle>Average Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <Treemap
                        data={assetAllocationData}
                        dataKey="value"
                        ratio={4 / 3}
                        stroke="#fff"
                        content={({ root, depth, x, y, width, height, index, payload, colors, rank, name }) => {
                          return (
                            <g>
                              <rect
                                x={x}
                                y={y}
                                width={width}
                                height={height}
                                style={{
                                  fill: COLORS[index % COLORS.length],
                                  stroke: '#fff',
                                  strokeWidth: 2 / (depth + 1e-10),
                                  strokeOpacity: 1 / (depth + 1e-10),
                                }}
                              />
                              {width > 30 && height > 30 && (
                                <>
                                  <text
                                    x={x + width / 2}
                                    y={y + height / 2 - 7}
                                    textAnchor="middle"
                                    fill="#fff"
                                    fontSize={14}
                                  >
                                    {name}
                                  </text>
                                  <text
                                    x={x + width / 2}
                                    y={y + height / 2 + 7}
                                    textAnchor="middle"
                                    fill="#fff"
                                    fontSize={14}
                                  >
                                    {`${payload.value.toFixed(1)}%`}
                                  </text>
                                </>
                              )}
                            </g>
                          );
                        }}
                      />
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;