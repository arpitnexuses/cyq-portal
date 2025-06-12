import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Filter, Download, Plus, ChevronRight, AlertTriangle, ArrowLeft } from "lucide-react"

export default function RegulatoryRisksPage() {
  // Sample data for regulatory risks
  const regulatoryRisks = [
    {
      id: 1,
      title: "GDPR Compliance Gaps",
      description: "Risk of non-compliance with GDPR requirements for data privacy and protection",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Data Protection Officer",
      lastReviewed: "2023-10-15",
    },
    {
      id: 2,
      title: "Financial Reporting Non-Compliance",
      description: "Risk of inaccurate financial reporting not meeting regulatory standards",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 60,
      owner: "CFO",
      lastReviewed: "2023-11-20",
    },
    {
      id: 3,
      title: "AML/KYC Process Deficiencies",
      description: "Risk of inadequate Anti-Money Laundering and Know Your Customer processes",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 40,
      owner: "Compliance Manager",
      lastReviewed: "2023-12-05",
    },
    {
      id: 4,
      title: "Securities Law Compliance",
      description: "Risk of non-compliance with securities laws and regulations",
      level: "Medium",
      impact: "High",
      likelihood: "Low",
      mitigation: 65,
      owner: "Legal Counsel",
      lastReviewed: "2023-09-28",
    },
    {
      id: 5,
      title: "Tax Reporting Deficiencies",
      description: "Risk of inaccurate tax reporting and potential penalties",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 55,
      owner: "Tax Director",
      lastReviewed: "2023-11-15",
    },
    {
      id: 6,
      title: "Labor Law Compliance Gaps",
      description: "Risk of non-compliance with employment and labor laws",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 70,
      owner: "HR Director",
      lastReviewed: "2023-10-30",
    },
    {
      id: 7,
      title: "Export Control Violations",
      description: "Risk of non-compliance with export control regulations",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "Trade Compliance Officer",
      lastReviewed: "2023-11-10",
    },
    {
      id: 8,
      title: "Environmental Compliance Issues",
      description: "Risk of non-compliance with environmental regulations",
      level: "Medium",
      impact: "Medium",
      likelihood: "Low",
      mitigation: 75,
      owner: "Environmental Manager",
      lastReviewed: "2023-10-05",
    },
  ]

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center mb-4">
        <Link href="/dashboard/internal-auditor/risk-exposure">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Regulatory Risks</h1>
          <p className="text-muted-foreground">
            Risks related to regulatory compliance and legal requirements
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search regulatory risks..." className="pl-8 w-[300px]" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
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

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Regulatory Risks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">5 high</span>, <span className="text-amber-500">7 medium</span>,{" "}
              <span className="text-green-500">8 low</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Mitigation</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53%</div>
            <div className="mt-2">
              <Progress value={53} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Regulatory Concern</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">GDPR Compliance</div>
            <p className="text-xs text-muted-foreground">35% mitigation progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Risks</TabsTrigger>
          <TabsTrigger value="high">High Risk</TabsTrigger>
          <TabsTrigger value="medium">Medium Risk</TabsTrigger>
          <TabsTrigger value="low">Low Risk</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Risk Register</CardTitle>
              <CardDescription>Comprehensive view of identified regulatory risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {regulatoryRisks.map((risk) => (
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Impact</p>
                        <p className="text-sm">{risk.impact}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Likelihood</p>
                        <p className="text-sm">{risk.likelihood}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Risk Owner</p>
                        <p className="text-sm">{risk.owner}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Mitigation Progress</p>
                        <span className="text-sm">{risk.mitigation}%</span>
                      </div>
                      <Progress
                        value={risk.mitigation}
                        className={`h-2 ${
                          risk.mitigation < 40
                            ? "bg-red-100"
                            : risk.mitigation < 70
                            ? "bg-amber-100"
                            : "bg-green-100"
                        }`}
                      />
                    </div>

                    <div className="flex justify-between mt-4">
                      <div className="text-sm text-muted-foreground">Last reviewed: {risk.lastReviewed}</div>
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
          {/* High risks filtered content would go here */}
          <Card>
            <CardHeader>
              <CardTitle>High Regulatory Risks</CardTitle>
              <CardDescription>Critical regulatory risks requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {regulatoryRisks
                  .filter((risk) => risk.level === "High")
                  .map((risk) => (
                    <div key={risk.id} className="border rounded-md p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">{risk.title}</h3>
                          <p className="text-sm text-muted-foreground">{risk.description}</p>
                        </div>
                        <Badge variant="destructive" className="mt-2 md:mt-0">
                          High Risk
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium">Impact</p>
                          <p className="text-sm">{risk.impact}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Likelihood</p>
                          <p className="text-sm">{risk.likelihood}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Risk Owner</p>
                          <p className="text-sm">{risk.owner}</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Mitigation Progress</p>
                          <span className="text-sm">{risk.mitigation}%</span>
                        </div>
                        <Progress value={risk.mitigation} className="h-2 bg-red-100" />
                      </div>

                      <div className="flex justify-between mt-4">
                        <div className="text-sm text-muted-foreground">Last reviewed: {risk.lastReviewed}</div>
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
        <TabsContent value="medium" className="mt-6">
          {/* Medium risks filtered content would go here */}
        </TabsContent>
        <TabsContent value="low" className="mt-6">
          {/* Low risks filtered content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 