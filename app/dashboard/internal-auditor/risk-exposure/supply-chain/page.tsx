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
  Truck,
  ShieldCheck,
  Store,
  Users
} from "lucide-react"

export default function SupplyChainPage() {
  // Sample data for supply chain risks
  const supplyChainRisks = [
    {
      id: 1,
      title: "Inadequate Vendor Security Assessment",
      description: "Risk of security vulnerabilities introduced by third-party vendors",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 40,
      owner: "Vendor Management",
      lastReviewed: "2023-11-10",
      category: "Security",
    },
    {
      id: 2,
      title: "Single Source Dependency",
      description: "Risk of supply disruption due to dependency on a single vendor",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Procurement Director",
      lastReviewed: "2023-10-20",
      category: "Operational",
    },
    {
      id: 3,
      title: "Subcontractor Risk",
      description: "Risk introduced by vendors' use of subcontractors without proper oversight",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 55,
      owner: "Vendor Management",
      lastReviewed: "2023-11-05",
      category: "Security",
    },
    {
      id: 4,
      title: "Geopolitical Supply Chain Disruption",
      description: "Risk of supply chain disruption due to geopolitical events",
      level: "Medium",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "Risk Management",
      lastReviewed: "2023-10-15",
      category: "Operational",
    },
    {
      id: 5,
      title: "Inadequate Vendor Compliance Verification",
      description: "Risk of non-compliance due to inadequate verification of vendor compliance",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 60,
      owner: "Compliance Team",
      lastReviewed: "2023-11-25",
      category: "Compliance",
    },
    {
      id: 6,
      title: "Poor Vendor SLA Management",
      description: "Risk of service degradation due to inadequate SLA monitoring and enforcement",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 65,
      owner: "Vendor Management",
      lastReviewed: "2023-10-30",
      category: "Operational",
    },
    {
      id: 7,
      title: "Inadequate Third-Party Data Handling",
      description: "Risk of data breach due to inadequate data protection by vendors",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 45,
      owner: "Data Protection Officer",
      lastReviewed: "2023-11-15",
      category: "Security",
    },
    {
      id: 8,
      title: "Critical Software Dependency",
      description: "Risk of operational disruption due to dependency on critical third-party software",
      level: "Medium",
      impact: "High",
      likelihood: "Low",
      mitigation: 70,
      owner: "IT Operations",
      lastReviewed: "2023-10-25",
      category: "Operational",
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
          <h1 className="text-3xl font-bold tracking-tight">Supply Chain</h1>
          <p className="text-muted-foreground">
            Risks related to third-party vendors and supply chain
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search supply chain risks..." className="pl-8 w-[300px]" />
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
            <CardTitle className="text-sm font-medium">Total Supply Chain Risks</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">3 high</span>, <span className="text-amber-500">5 medium</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Vendors</CardTitle>
            <Store className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Out of 45 total vendors</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendor Assessment Completion</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <div className="mt-2">
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Supply Chain Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">Single Source</div>
            <p className="text-xs text-muted-foreground">35% mitigation progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Risks</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="operational">Operational</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Supply Chain Risk Register</CardTitle>
              <CardDescription>Comprehensive view of identified supply chain risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {supplyChainRisks.map((risk) => (
                  <div key={risk.id} className="border rounded-md p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{risk.title}</h3>
                          <Badge variant="outline">{risk.category}</Badge>
                        </div>
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
        <TabsContent value="security" className="mt-6">
          {/* Security risks filtered content */}
          <Card>
            <CardHeader>
              <CardTitle>Security Supply Chain Risks</CardTitle>
              <CardDescription>Risks related to vendor security and data protection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {supplyChainRisks
                  .filter((risk) => risk.category === "Security")
                  .map((risk) => (
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
                        <Progress value={risk.mitigation} className="h-2" />
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
        <TabsContent value="operational" className="mt-6">
          {/* Operational risks filtered content would go here */}
        </TabsContent>
        <TabsContent value="compliance" className="mt-6">
          {/* Compliance risks filtered content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 