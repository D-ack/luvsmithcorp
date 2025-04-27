"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EarningsPage() {
  const [connections, setConnections] = useState(500)
  const [activeTab, setActiveTab] = useState("calculator")

  // Calculate potential earnings based on number of connections
  const calculateEarnings = (numConnections: number) => {
    if (numConnections < 100) return 0
    else if (numConnections < 200) return 10
    else if (numConnections < 300) return 16
    else if (numConnections < 400) return 22
    else if (numConnections < 500) return 28
    else if (numConnections < 600) return 34
    else if (numConnections < 800) return 40
    else if (numConnections < 1000) return 46
    else if (numConnections < 1500) return 52
    else if (numConnections < 2000) return 58
    else if (numConnections < 3000) return 64
    else if (numConnections < 5000) return 70
    else if (numConnections < 10000) return 76
    else return Math.min(100, 82 + Math.floor((numConnections - 10000) / 5000) * 3)
  }

  const monthlyEarnings = calculateEarnings(connections)
  const annualEarnings = monthlyEarnings * 12

  // Badge levels
  const badgeLevels = [
    { name: "Bronze", connections: 25, color: "bg-amber-600", bonus: "Base Rate" },
    { name: "Silver", connections: 100, color: "bg-gray-400", bonus: "10% Bonus" },
    { name: "Gold", connections: 250, color: "bg-yellow-500", bonus: "25% Bonus" },
    { name: "Platinum", connections: 500, color: "bg-gray-300", bonus: "45% Bonus" },
    { name: "Diamond", connections: 1000, color: "bg-blue-400", bonus: "75% Bonus" },
  ]

  // Determine current badge level
  const getCurrentBadge = () => {
    for (let i = badgeLevels.length - 1; i >= 0; i--) {
      if (connections >= badgeLevels[i].connections) {
        return badgeLevels[i]
      }
    }
    return badgeLevels[0]
  }

  const currentBadge = getCurrentBadge()

  // Connection tiers for display
  const connectionTiers = [
    { range: "100-199", earnings: "$10" },
    { range: "200-299", earnings: "$16" },
    { range: "300-399", earnings: "$22" },
    { range: "400-499", earnings: "$28" },
    { range: "499-599", earnings: "$34" },
    { range: "600-799", earnings: "$40" },
    { range: "800-1000", earnings: "$46" },
    { range: "1000-1500", earnings: "$52" },
    { range: "1500-2000", earnings: "$58" },
    { range: "2000-2999", earnings: "$64" },
    { range: "3000-5000", earnings: "$70" },
    { range: "5000-10000", earnings: "$76" },
    { range: "10000-30000", earnings: "$82-$100" },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Earnings & Growth</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover your potential earnings and growth opportunities as a partner with Luvsmith Corp.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="calculator"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6 sm:mb-8">
              <TabsList className="grid w-full max-w-xs sm:max-w-md grid-cols-2">
                <TabsTrigger value="calculator" className="py-2 sm:py-3 text-xs sm:text-sm">
                  Earnings Calculator
                </TabsTrigger>
                <TabsTrigger value="badges" className="py-2 sm:py-3 text-xs sm:text-sm">
                  Badge Levels
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="calculator" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Earnings Calculator</CardTitle>
                  <CardDescription>
                    Estimate your potential earnings based on the number of connections you manage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">
                          Number of Connections: <span className="font-bold text-blue-600">{connections}</span>
                        </label>
                        <span className="text-sm text-gray-500">
                          Current Badge: <Badge className={cn("ml-1", currentBadge.color)}>{currentBadge.name}</Badge>
                        </span>
                      </div>
                      <Slider
                        value={[connections]}
                        min={0}
                        max={10000}
                        step={100}
                        onValueChange={(value) => setConnections(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0</span>
                        <span>2500</span>
                        <span>5000</span>
                        <span>7500</span>
                        <span>10000</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                          <h3 className="text-base sm:text-lg font-semibold">Monthly Earnings</h3>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-green-600">
                          ${monthlyEarnings.toLocaleString()}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                          Based on current connection level
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2" />
                          <h3 className="text-base sm:text-lg font-semibold">Annual Earnings</h3>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                          ${annualEarnings.toLocaleString()}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Projected yearly income</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Connection Tiers</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {connectionTiers.map((tier, index) => (
                          <div
                            key={index}
                            className={cn(
                              "p-2 rounded border",
                              connections >= Number.parseInt(tier.range.split("-")[0]) &&
                                connections <= Number.parseInt(tier.range.split("-")[1].replace(/\D/g, ""))
                                ? "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/30"
                                : "border-gray-200 dark:border-gray-700",
                            )}
                          >
                            <p className="text-sm font-medium">{tier.range} connections</p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">{tier.earnings} per month</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="badges" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Badge Levels & Benefits</CardTitle>
                  <CardDescription>
                    As you grow your connection portfolio, you'll unlock higher badge levels with increased benefits.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {badgeLevels.map((badge, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-4 sm:p-6 rounded-lg border transition-all",
                          connections >= badge.connections
                            ? "border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-200 dark:border-gray-800",
                        )}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center mb-3 sm:mb-0">
                            <div
                              className={cn(
                                "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4",
                                badge.color,
                              )}
                            >
                              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg font-semibold">{badge.name} Badge</h3>
                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                {badge.connections}+ connections
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={connections >= badge.connections ? "default" : "outline"}
                            className="self-start sm:self-center mt-2 sm:mt-0"
                          >
                            {connections >= badge.connections ? "Achieved" : "Locked"}
                          </Badge>
                        </div>
                        <div className="mt-3 sm:mt-4 sm:pl-14">
                          <p className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            {badge.bonus}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {index === 0
                              ? "Standard earnings rate for all partners"
                              : `All ${badgeLevels[index - 1].name} benefits plus increased earning potential`}
                          </p>
                          {index >= 2 && (
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {index === 2
                                ? "Priority support and monthly strategy calls"
                                : index === 3
                                  ? "Dedicated account manager and quarterly bonuses"
                                  : "Executive partnership status and profit sharing opportunities"}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
