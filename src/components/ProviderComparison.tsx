import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const providers = [
  {
    name: "AWS",
    currentCost: 5800,
    forecastCost: 6500,
    utilizationRate: 76,
    trend: "up",
    color: "hsl(var(--chart-aws))",
  },
  {
    name: "Azure",
    currentCost: 4500,
    forecastCost: 5000,
    utilizationRate: 82,
    trend: "up",
    color: "hsl(var(--chart-azure))",
  },
];

export const ProviderComparison = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Provider Performance Metrics</CardTitle>
        <CardDescription>Cost efficiency and utilization analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {providers.map((provider) => (
            <div key={provider.name} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div 
                  className="h-10 w-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: provider.color }}
                >
                  {provider.name.slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{provider.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Utilization: {provider.utilizationRate}%
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <span className="text-lg font-bold text-foreground">
                    ${provider.currentCost.toLocaleString()}
                  </span>
                  {provider.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-destructive" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-accent" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  Forecast: ${provider.forecastCost.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
