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
  Database,
  Lock,
  Shield,
  FileText
} from "lucide-react"

export default function DataBreachPage() {
  // Sample data for data breach risks
  const dataBreachRisks = [
    {
      id: 1,
      title: "Inadequate Access Controls",
      description: "Risk of unauthorized data access due to insufficient access control mechanisms",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 40,
      owner: "IT Security Manager",
      lastReviewed: "2023-11-15",
      type: "Technical",
    },
    {
      id: 2,
      title: "Weak Encryption Standards",
      description: "Risk of data exposure due to outdated or inadequate encryption methods",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Data Security Team",
      lastReviewed: "2023-10-20",
      type: "Technical",
    },
    {
      id: 3,
      title: "Insufficient Data Classification",
      description: "Risk of improper data handling due to lack of proper data classification",
      level: "Medium",
      impact: "Medium",
      likelihood: "High",
      mitigation: 55,
      owner: "Data Governance Team",
      lastReviewed: "2023-11-05",
      type: "Process",
    },
    {
      id: 4,
      title: "Inadequate Third-Party Security Assessments",
      description: "Risk of data breach through third-party vendors with inadequate security controls",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "Vendor Management",
      lastReviewed: "2023-10-10",
      type: "Third Party",
    },
    {
      id: 5,
      title: "Poor Data Retention Practices",
      description: "Risk of unnecessary data exposure due to improper data retention policies",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 60,
      owner: "Data Governance Team",
      lastReviewed: "2023-11-25",
      type: "Process",
    },
    {
      id: 6,
      title: "Incomplete Data Breach Response Plan",
      description: "Risk of inadequate response to data breach incidents",
      level: "High",
      impact: "High",
      likelihood: "Low",
      mitigation: 50,
      owner: "Incident Response Team",
      lastReviewed: "2023-10-30",
      type: "Process",
    },
    {
      id: 7,
      title: "Insecure API Implementation",
      description: "Risk of data exposure through insecurely implemented APIs",
      level: "Medium",
      impact: "High",
      likelihood: "Medium",
      mitigation: 45,
      owner: "Development Team",
      lastReviewed: "2023-11-10",
      type: "Technical",
    },
    {
      id: 8,
      title: "Insufficient Data Loss Prevention",
      description: "Risk of data leakage due to inadequate data loss prevention controls",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 65,
      owner: "IT Security Team",
      lastReviewed: "2023-10-25",
      type: "Technical",
    },
    {
      id: 9,
      title: "Incomplete Data Privacy Training",
      description: "Risk of data breach due to lack of employee awareness of data privacy practices",
      level: "Medium",
      impact: "Medium",
      likelihood: "High",
      mitigation: 70,
      owner: "Training Director",
      lastReviewed: "2023-11-20",
      type: "People",
    },
    {
      id: 10,
      title: "Inadequate Cloud Security Controls",
      description: "Risk of data breach in cloud environments due to insufficient security controls",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 40,
      owner: "Cloud Security Team",
      lastReviewed: "2023-10-15",
      type: "Technical",
    },
    {
      id: 11,
      title: "Insufficient Logging and Monitoring",
      description: "Risk of undetected data breaches due to inadequate logging and monitoring",
      level: "Medium",
      impact: "High",
      likelihood: "Medium",
      mitigation: 55,
      owner: "Security Operations",
      lastReviewed: "2023-11-15",
      type: "Technical",
    },
    {
      id: 12,
      title: "Incomplete Data Mapping",
      description: "Risk of unknown data exposure due to incomplete data inventory and mapping",
      level: "Low",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 75,
      owner: "Data Governance Team",
      lastReviewed: "2023-10-05",
      type: "Process",
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
          <h1 className="text-3xl font-bold tracking-tight">Data Breach</h1>
          <p className="text-muted-foreground">
            Risks related to data privacy and unauthorized data access
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search data breach risks..." className="pl-8 w-[300px]" />
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
            <CardTitle className="text-sm font-medium">Total Data Breach Risks</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">4 high</span>, <span className="text-amber-500">7 medium</span>,{" "}
              <span className="text-green-500">1 low</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Protection Compliance</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <div className="mt-2">
              <Progress value={68} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sensitive Data Identified</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Of total data inventory</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Data Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">Weak Encryption</div>
            <p className="text-xs text-muted-foreground">35% mitigation progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Risks</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="thirdparty">Third Party</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Breach Risk Register</CardTitle>
              <CardDescription>Comprehensive view of identified data breach risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dataBreachRisks.map((risk) => (
                  <div key={risk.id} className="border rounded-md p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{risk.title}</h3>
                          <Badge variant="outline">{risk.type}</Badge>
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
        <TabsContent value="technical" className="mt-6">
          {/* Technical risks filtered content */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Data Breach Risks</CardTitle>
              <CardDescription>Risks related to technical controls and implementations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dataBreachRisks
                  .filter((risk) => risk.type === "Technical")
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
        <TabsContent value="process" className="mt-6">
          {/* Process risks filtered content would go here */}
        </TabsContent>
        <TabsContent value="thirdparty" className="mt-6">
          {/* Third Party risks filtered content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 