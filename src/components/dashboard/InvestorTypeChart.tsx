import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { mockInvestors } from "@/data/mockInvestors";

const COLORS = [
  'hsl(0, 0%, 20%)',  // Dark gray
  'hsl(0, 0%, 30%)',  // Medium-dark gray
  'hsl(0, 0%, 40%)',  // Gray
  'hsl(0, 0%, 50%)',  // Medium gray
  'hsl(0, 0%, 60%)',  // Medium-light gray
  'hsl(0, 0%, 70%)',  // Light gray
  'hsl(0, 0%, 80%)',  // Very light gray
];

export function InvestorTypeChart() {
  const investorTypeData = mockInvestors.reduce((acc: { name: string; value: number }[], investor) => {
    const existingType = acc.find(item => item.name === investor.investor_type);
    if (existingType) {
      existingType.value++;
    } else if (investor.investor_type) {
      acc.push({ name: investor.investor_type, value: 1 });
    }
    return acc;
  }, []);

  return (
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
  );
}