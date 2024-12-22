import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", exports: 12 },
  { month: "Feb", exports: 19 },
  { month: "Mar", exports: 15 },
  { month: "Apr", exports: 25 },
  { month: "May", exports: 22 },
  { month: "Jun", exports: 30 },
];

export function ExportActivityChart() {
  return (
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
              <Bar dataKey="exports" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}