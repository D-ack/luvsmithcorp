"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EarningsPage() {
  const [accounts, setAccounts] = useState(50)
  const [activeTab, setActiveTab] = useState("calculator")

  // Calculate potential earnings based on number of accounts
  const calculateEarnings = (numAccounts: number) => {
    const baseRate = 25 // Base rate per account
    let totalEarnings = numAccounts * baseRate

    // Apply tier bonuses
    if (numAccounts >= 100) totalEarnings *= 1.1 // 10% bonus for 100+ accounts
    if (numAccounts >= 250) totalEarnings *= 1.15 // Additional 15% for 250+ accounts
    if (numAccounts >= 500) totalEarnings *= 1.2 // Additional 20% for 500+ accounts

    return Math.round(totalEarnings)
  }

  const monthlyEarnings = calculateEarnings(accounts)
  const annualEarnings = monthlyEarnings * 12

  // Badge levels
  const badgeLevels = [
    { name: "Bronze", accounts: 25, color: "bg-amber-600", bonus: "Base Rate" },
    { name: "Silver", accounts: 100, color: "bg-gray-400", bonus: "10% Bonus" },
    { name: "Gold", accounts: 250, color: "bg-yellow-500", bonus: "25% Bonus" },
    { name: "Platinum", accounts: 500, color: "bg-gray-300", bonus: "45% Bonus" },
    { name: "Diamond", accounts: 1000, color: "bg-blue-400", bonus: "75% Bonus" },
  ]

  // Determine current badge level
  const getCurrentBadge = () => {
    for (let i = badgeLevels.length - 1; i >= 0; i--) {
      if (accounts >= badgeLevels[i].accounts) {
        return badgeLevels[i]
      }
    }
    return badgeLevels[0]
  }

  const currentBadge = getCurrentBadge()

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
                    Estimate your potential earnings based on the number of accounts you manage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">
                          Number of Accounts: <span className="font-bold text-blue-600">{accounts}</span>
                        </label>
                        <span className="text-sm text-gray-500">
                          Current Badge: <Badge className={cn("ml-1", currentBadge.color)}>{currentBadge.name}</Badge>
                        </span>
                      </div>
                      <Slider
                        value={[accounts]}
                        min={10}
                        max={1000}
                        step={10}
                        onValueChange={(value) => setAccounts(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>10</span>
                        <span>250</span>
                        <span>500</span>
                        <span>750</span>
                        <span>1000</span>
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
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Based on current account level</p>
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
                      <h3 className="text-lg font-semibold mb-3">Growth Opportunity</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Increasing your accounts by just 50 would raise your monthly earnings to
                        <span className="font-bold text-green-600 mx-1">
                          ${calculateEarnings(accounts + 50).toLocaleString()}
                        </span>
                        per month!
                      </p>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          style={{ width: `${Math.min((accounts / 1000) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Current: {accounts} accounts</span>
                        <span>Goal: 1000 accounts</span>
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
                    As you grow your account portfolio, you'll unlock higher badge levels with increased benefits.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {badgeLevels.map((badge, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-4 sm:p-6 rounded-lg border transition-all",
                          accounts >= badge.accounts
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
                                {badge.accounts}+ accounts
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={accounts >= badge.accounts ? "default" : "outline"}
                            className="self-start sm:self-center mt-2 sm:mt-0"
                          >
                            {accounts >= badge.accounts ? "Achieved" : "Locked"}
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
