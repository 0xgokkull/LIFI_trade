"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Brain, 
  TrendingUp, 
  Minus,
  AlertCircle,
  Zap,
  Activity,
  Target
} from "lucide-react"

export function AIStrategyPanel() {
  const confidence = 85
  const dipProbability = 12
  
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Strategy Insights
        </CardTitle>
        <Badge variant="outline" className="text-xs">
          Live
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Market Bias */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Market Bias</p>
              <p className="text-lg font-semibold text-emerald-500">Bullish</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Confidence</p>
            <p className="text-lg font-semibold">{confidence}%</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Dip Probability */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="h-4 w-4" />
              Dip Probability
            </div>
            <div className="flex items-center gap-3">
              <Progress value={dipProbability} className="h-2" />
              <span className="text-sm font-medium">{dipProbability}%</span>
            </div>
          </div>

          {/* Risk Regime */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4" />
              Risk Regime
            </div>
            <div className="flex items-center gap-3">
              <Progress value={30} className="h-2" />
              <span className="text-sm font-medium capitalize text-emerald-500">
                Low
              </span>
            </div>
          </div>
        </div>

        {/* Next Move */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-primary">Suggested Action</p>
              <p className="text-sm text-muted-foreground mt-1">
                Monitoring market conditions for optimal entry points.
              </p>
            </div>
          </div>
        </div>

        {/* Active Signals */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Active Signals
          </h4>
          <div className="space-y-2">
             <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">Trend monitoring active</span>
              </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center pt-2 border-t border-border/50">
          AI insights are informational only. Not financial advice.
        </p>
      </CardContent>
    </Card>
  )
}
