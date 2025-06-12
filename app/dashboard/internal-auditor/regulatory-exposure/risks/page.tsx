import { Progress } from "@/components/ui/progress"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus, ChevronRight } from "lucide-react"

export default function RisksPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Risk Exposure</h1>
              <p className="text-muted-foreground">Identify and manage regulatory risks</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Risk
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search risks..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Risks</TabsTrigger>
              <TabsTrigger value="high">High</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="low">Low</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Register</CardTitle>
                  <CardDescription>Comprehensive view of identified risks</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Risk Mitigation Progress Chart */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium mb-4">Risk Mitigation Progress</h3>
                    <div className="h-64 flex items-end justify-between gap-4 px-4">
                      {[
                        {
                          id: 1,
                          title: "Data Breach",
                          category: "Information Security",
                          level: "High",
                          mitigation: 35,
                        },
                        {
                          id: 2,
                          title: "Regulatory",
                          category: "Compliance",
                          level: "High",
                          mitigation: 60,
                        },
                        {
                          id: 3,
                          title: "Business Continuity",
                          category: "Operational",
                          level: "Medium",
                          mitigation: 45,
                        },
                        {
                          id: 4,
                          title: "Supply Chain",
                          category: "Third Party",
                          level: "Medium",
                          mitigation: 30,
                        },
                        {
                          id: 5,
                          title: "Cyber (People)",
                          category: "People",
                          level: "Medium",
                          mitigation: 50,
                        },
                        {
                          id: 6,
                          title: "Cyber (Process)",
                          category: "Process",
                          level: "Medium",
                          mitigation: 40,
                        },
                        {
                          id: 7,
                          title: "Cyber (Technology)",
                          category: "Technology",
                          level: "High",
                          mitigation: 25,
                        },
                      ].map((risk) => (
                        <div key={risk.id} className="flex flex-col items-center flex-1">
                          <div className="text-sm font-medium mb-1">{risk.mitigation}%</div>
                          <div className="w-full flex justify-center">
                            <div
                              className={`w-16 rounded-t-md ${
                                risk.mitigation < 40
                                  ? "bg-red-500"
                                  : risk.mitigation < 70
                                    ? "bg-amber-500"
                                    : "bg-green-500"
                              }`}
                              style={{ height: `${risk.mitigation * 2}px` }}
                            ></div>
                          </div>
                          <div className="text-xs mt-2 text-center font-medium truncate w-full px-1" title={risk.title}>
                            {risk.title}
                          </div>
                          <Badge
                            variant={
                              risk.level === "High" ? "destructive" : risk.level === "Medium" ? "default" : "secondary"
                            }
                            className="mt-1 text-xs"
                          >
                            {risk.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Risk Categories */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium mb-4">Risk Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          id: 1,
                          title: "Regulatory Risks",
                          count: 12,
                          description: "Risks related to regulatory compliance and legal requirements"
                        },
                        {
                          id: 2,
                          title: "Compliance Risks",
                          count: 8,
                          description: "Risks related to internal policy compliance"
                        },
                        {
                          id: 3,
                          title: "Cyber Risks (People)",
                          count: 7,
                          description: "Human-factor cybersecurity risks"
                        },
                        {
                          id: 4,
                          title: "Cyber Risks (Process)",
                          count: 9,
                          description: "Process-related cybersecurity risks"
                        },
                        {
                          id: 5,
                          title: "Cyber Risks (Technology)",
                          count: 15,
                          description: "Technology-related cybersecurity risks"
                        },
                        {
                          id: 6,
                          title: "Business Continuity",
                          count: 6,
                          description: "Risks related to business continuity and disaster recovery"
                        },
                        {
                          id: 7,
                          title: "Data Breach",
                          count: 11,
                          description: "Risks related to unauthorized data access or exposure"
                        },
                        {
                          id: 8,
                          title: "Supply Chain",
                          count: 5,
                          description: "Risks related to third-party vendors and supply chain"
                        },
                      ].map((category) => (
                        <Card key={category.id} className="hover:bg-slate-100 cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">{category.title}</h4>
                                <p className="text-sm text-muted-foreground">{category.description}</p>
                              </div>
                              <div className="flex items-center">
                                <Badge>{category.count}</Badge>
                                <ChevronRight className="h-4 w-4 ml-2" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Individual Risks Drill Down */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-medium mb-4">Individual Risks Drill Down</h3>
                    {[
                      {
                        id: 1,
                        title: "Data breach due to inadequate access controls",
                        description: "Risk of unauthorized access to sensitive data due to weak access controls",
                        category: "Data Breach",
                        level: "High",
                        likelihood: "Medium",
                        mitigation: 35,
                      },
                      {
                        id: 2,
                        title: "Non-compliance with data protection regulations",
                        description: "Risk of regulatory penalties due to non-compliance with data protection laws",
                        category: "Regulatory Risks",
                        level: "High",
                        likelihood: "Medium",
                        mitigation: 60,
                      },
                      {
                        id: 3,
                        title: "Inadequate business continuity planning",
                        description: "Risk of operational disruption due to insufficient disaster recovery procedures",
                        category: "Business Continuity",
                        level: "Medium",
                        likelihood: "Medium",
                        mitigation: 45,
                      },
                      {
                        id: 4,
                        title: "Vendor security vulnerabilities",
                        description: "Risk of security breaches through third-party vendor systems",
                        category: "Supply Chain",
                        level: "Medium",
                        likelihood: "Medium",
                        mitigation: 30,
                      },
                      {
                        id: 5,
                        title: "Inadequate security awareness among employees",
                        description: "Risk of security incidents due to lack of employee security awareness",
                        category: "Cyber Risks (People)",
                        level: "Medium",
                        likelihood: "High",
                        mitigation: 50,
                      },
                    ].map((risk) => (
                      <div key={risk.id} className="border rounded-md p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{risk.title}</h3>
                            <p className="text-sm text-muted-foreground">{risk.description}</p>
                          </div>
                          <Badge
                            variant={
                              risk.level === "High" ? "destructive" : risk.level === "Medium" ? "default" : "secondary"
                            }
                            className="mt-2 md:mt-0"
                          >
                            {risk.level} Risk
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium">Category</p>
                            <p className="text-sm">{risk.category}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Likelihood</p>
                            <p className="text-sm">{risk.likelihood}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">Mitigation Progress</p>
                            <span className="text-sm">{risk.mitigation}%</span>
                          </div>
                          <Progress value={risk.mitigation} className="h-2" />
                        </div>

                        <div className="flex justify-end mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="high" className="mt-6">
              {/* High risks content */}
            </TabsContent>
            <TabsContent value="medium" className="mt-6">
              {/* Medium risks content */}
            </TabsContent>
            <TabsContent value="low" className="mt-6">
              {/* Low risks content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
