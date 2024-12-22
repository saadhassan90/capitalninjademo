import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Treemap, ResponsiveContainer } from "recharts";
import { mockInvestors } from "@/data/mockInvestors";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

export function AssetAllocationChart() {
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

  const CustomizedContent = (props: any) => {
    const { x, y, width, height, index, name, value } = props;

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
            strokeWidth: 2,
            strokeOpacity: 1,
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
              {`${value.toFixed(1)}%`}
            </text>
          </>
        )}
      </g>
    );
  };

  return (
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
              content={<CustomizedContent />}
            />
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}