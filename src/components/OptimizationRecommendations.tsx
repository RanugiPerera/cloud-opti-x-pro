import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Zap, Server } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Migrate compute workloads to Azure",
    description: "Shift 15% of EC2 instances from AWS to Azure VMs during off-peak hours",
    impact: "Save $2,340/month",
    savings: 12,
    priority: "high",
    provider: "Azure",
  },
  {
    id: 2,
    title: "Optimize AWS storage tiers",
    description: "Move 85GB of infrequently accessed S3 data to Glacier Deep Archive",
    impact: "Save $1,120/month",
    savings: 6,
    priority: "medium",
    provider: "AWS",
  },
  {
    id: 3,
    title: "Implement auto-scaling on AWS",
    description: "Enable predictive scaling for ECS clusters based on forecast patterns",
    impact: "Save $1,560/month",
    savings: 8,
    priority: "high",
    provider: "AWS",
  },
];

const priorityColors = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-primary/10 text-primary border-primary/20",
  low: "bg-muted text-muted-foreground border-border",
};

export const OptimizationRecommendations = () => {
  return (
    <Card className="col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          AI Optimization Recommendations
        </CardTitle>
        <CardDescription>RL agent suggestions for cost reduction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm text-foreground">{rec.title}</h4>
                </div>
                <Badge variant="outline" className={priorityColors[rec.priority as keyof typeof priorityColors]}>
                  {rec.priority}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">{rec.impact}</span>
                  <Badge variant="secondary" className="text-xs">
                    {rec.provider}
                  </Badge>
                </div>
                <Button size="sm" variant="ghost" className="gap-1">
                  Apply
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
