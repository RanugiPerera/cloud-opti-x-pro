import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
  { date: "Jan 1", actual: 9300, forecast: null, aws: 5200, azure: 4100 },
  { date: "Jan 8", actual: 9800, forecast: null, aws: 5500, azure: 4300 },
  { date: "Jan 15", actual: 9500, forecast: null, aws: 5300, azure: 4200 },
  { date: "Jan 22", actual: 10600, forecast: null, aws: 6000, azure: 4600 },
  { date: "Jan 29", actual: 10300, forecast: null, aws: 5800, azure: 4500 },
  { date: "Feb 5", actual: null, forecast: 10800, aws: 6100, azure: 4700 },
  { date: "Feb 12", actual: null, forecast: 11300, aws: 6400, azure: 4900 },
  { date: "Feb 19", actual: null, forecast: 11000, aws: 6200, azure: 4800 },
  { date: "Feb 26", actual: null, forecast: 11500, aws: 6500, azure: 5000 },
];

export const CostForecastChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Multi-Cloud Cost Forecast
        </CardTitle>
        <CardDescription>Historical data and Transformer-based predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Legend />
            <ReferenceLine x="Feb 5" stroke="hsl(var(--primary))" strokeDasharray="3 3" label="Forecast Start" />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2.5}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              name="Actual Cost"
            />
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="hsl(var(--chart-forecast))" 
              strokeWidth={2.5}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--chart-forecast))', r: 4 }}
              name="AI Forecast"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
