import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { provider: "AWS", current: 56, optimized: 48, color: "hsl(var(--chart-aws))" },
  { provider: "Azure", current: 44, optimized: 52, color: "hsl(var(--chart-azure))" },
];

export const WorkloadDistribution = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RL-Optimized Workload Distribution</CardTitle>
        <CardDescription>Current vs. AI-recommended allocation (%)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="provider" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              formatter={(value: number) => `${value}%`}
            />
            <Legend />
            <Bar dataKey="current" fill="hsl(var(--muted))" name="Current" radius={[8, 8, 0, 0]} />
            <Bar dataKey="optimized" fill="hsl(var(--accent))" name="Optimized" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
