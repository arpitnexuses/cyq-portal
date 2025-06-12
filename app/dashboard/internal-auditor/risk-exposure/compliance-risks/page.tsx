import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  ChevronRight, 
  AlertTriangle, 
  ArrowLeft,
  ClipboardCheck,
  FileCog
} from "lucide-react"

export default function ComplianceRisksPage() {
  // Sample data for compliance risks
  const complianceRisks = [
    {
      id: 1,
      title: "Internal Policy Violations",
      description: "Risk of employees not adhering to internal policies and procedures",
      level: "Medium",
      impact: "Medium",
      likelihood: "High",
      mitigation: 45,
      owner: "Compliance Manager",
      lastReviewed: "2023-11-05",
      framework: "Internal Controls",
    },
    {
      id: 2,
      title: "Documentation Deficiencies",
      description: "Risk of inadequate documentation of compliance processes",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 60,
      owner: "Documentation Manager",
      lastReviewed: "2023-10-15",
      framework: "ISO 27001",
    },
    {
      id: 3,
      title: "Inadequate Segregation of Duties",
      description: "Risk of insufficient separation of responsibilities in critical processes",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "Internal Control Manager",
      lastReviewed: "2023-11-28",
      framework: "SOX",
    },
    {
      id: 4,
      title: "Compliance Training Gaps",
      description: "Risk of employees lacking proper compliance awareness training",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 55,
      owner: "Training Director",
      lastReviewed: "2023-10-20",
      framework: "Internal Controls",
    },
    {
      id: 5,
      title: "Third-Party Compliance Verification",
      description: "Risk of inadequate verification of third-party compliance",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Vendor Management",
      lastReviewed: "2023-11-10",
      framework: "NIST",
    },
    {
      id: 6,
      title: "Unauthorized System Access",
      description: "Risk of unauthorized access to critical systems due to policy non-compliance",
      level: "Medium",
      impact: "High",
      likelihood: "Low",
      mitigation: 70,
      owner: "IT Security Manager",
      lastReviewed: "2023-10-25",
      framework: "ISO 27001",
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
          <h1 className="text-3xl font-bold tracking-tight">Compliance Risks</h1>
          <p className="text-muted-foreground">
            Risks related to internal policy compliance and standards
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search compliance risks..." className="pl-8 w-[300px]" />
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Compliance Risks</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">2 high</span>, <span className="text-amber-500">4 medium</span>,{" "}
              <span className="text-green-500">6 low</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Mitigation</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">49%</div>
            <div className="mt-2">
              <Progress value={49} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Framework Coverage</CardTitle>
            <FileCog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Frameworks with identified risks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Compliance Concern</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">Segregation of Duties</div>
            <p className="text-xs text-muted-foreground">30% mitigation progress</p>
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
              <CardTitle>Compliance Risk Register</CardTitle>
              <CardDescription>Comprehensive view of identified compliance risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {complianceRisks.map((risk) => (
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

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
                      <div>
                        <p className="text-sm font-medium">Framework</p>
                        <p className="text-sm">{risk.framework}</p>
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
              <CardTitle>High Compliance Risks</CardTitle>
              <CardDescription>Critical compliance risks requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {complianceRisks
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

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
                        <div>
                          <p className="text-sm font-medium">Framework</p>
                          <p className="text-sm">{risk.framework}</p>
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