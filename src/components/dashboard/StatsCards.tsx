import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Download, Users } from "lucide-react";
import { mockLists, mockExports } from "@/data/mockInvestors";

export function StatsCards() {
  return (
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
  );
}