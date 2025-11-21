import { MetricCard } from "@/components/MetricCard";
import { CostForecastChart } from "@/components/CostForecastChart";
import { WorkloadDistribution } from "@/components/WorkloadDistribution";
import { OptimizationRecommendations } from "@/components/OptimizationRecommendations";
import { ProviderComparison } from "@/components/ProviderComparison";
import { DollarSign, TrendingDown, TrendingUp, Cpu, Cloud, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CloudOptima AI</h1>
              <p className="text-xs text-muted-foreground">Multi-Cloud Cost Intelligence Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
              Apply Optimizations
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Current Monthly Cost"
            value="$10,300"
            change="-2.1% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Forecasted Next Month"
            value="$11,500"
            change="+11.8% predicted increase"
            changeType="negative"
            icon={TrendingUp}
          />
          <MetricCard
            title="Potential Savings"
            value="$5,020"
            change="43.6% cost reduction"
            changeType="positive"
            icon={TrendingDown}
          />
          <MetricCard
            title="Active Resources"
            value="1,523"
            change="Across 2 cloud providers"
            changeType="neutral"
            icon={Cpu}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <CostForecastChart />
          <OptimizationRecommendations />
        </div>

        {/* Distribution and Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WorkloadDistribution />
          <ProviderComparison />
        </div>

        {/* Footer */}
        <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">AI-Powered Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                This dashboard uses Transformer-based forecasting models to predict future costs and 
                Reinforcement Learning agents to optimize workload distribution across AWS and Azure. 
                Predictions are updated hourly based on real-time usage patterns and pricing changes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
