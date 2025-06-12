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
  RefreshCw,
  Timer,
  Building,
  Cloud
} from "lucide-react"

export default function BusinessContinuityPage() {
  // Sample data for business continuity risks
  const businessContinuityRisks = [
    {
      id: 1,
      title: "Inadequate Disaster Recovery Plan",
      description: "Risk of extended downtime due to insufficient disaster recovery planning",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "IT Director",
      lastReviewed: "2023-11-10",
      category: "IT Systems",
    },
    {
      id: 2,
      title: "Single Points of Failure",
      description: "Risk due to critical systems without redundancy",
      level: "Medium",
      impact: "High",
      likelihood: "Medium",
      mitigation: 60,
      owner: "Infrastructure Manager",
      lastReviewed: "2023-10-15",
      category: "IT Systems",
    },
    {
      id: 3,
      title: "Inadequate Business Impact Analysis",
      description: "Risk of improper recovery prioritization due to incomplete impact analysis",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 55,
      owner: "Business Continuity Manager",
      lastReviewed: "2023-11-05",
      category: "Planning",
    },
    {
      id: 4,
      title: "Insufficient Recovery Testing",
      description: "Risk of recovery plan failure due to lack of proper testing",
      level: "Medium",
      impact: "High",
      likelihood: "Medium",
      mitigation: 40,
      owner: "IT Operations",
      lastReviewed: "2023-10-25",
      category: "IT Systems",
    },
    {
      id: 5,
      title: "Facility Dependency Risks",
      description: "Risk of business disruption due to facility unavailability",
      level: "Medium",
      impact: "High",
      likelihood: "Low",
      mitigation: 65,
      owner: "Facilities Manager",
      lastReviewed: "2023-11-20",
      category: "Facilities",
    },
    {
      id: 6,
      title: "Third-party Service Provider Dependency",
      description: "Risk due to critical service provider disruptions",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 50,
      owner: "Vendor Management",
      lastReviewed: "2023-10-30",
      category: "Supply Chain",
    },
    {
      id: 7,
      title: "Incomplete Emergency Response Procedures",
      description: "Risk of uncoordinated emergency response",
      level: "Low",
      impact: "Medium",
      likelihood: "Low",
      mitigation: 75,
      owner: "Emergency Response Team",
      lastReviewed: "2023-11-15",
      category: "Planning",
    },
    {
      id: 8,
      title: "Inadequate Staff Training",
      description: "Risk due to staff unfamiliarity with continuity procedures",
      level: "Low",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 70,
      owner: "Training Director",
      lastReviewed: "2023-10-20",
      category: "Planning",
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
          <h1 className="text-3xl font-bold tracking-tight">Business Continuity</h1>
          <p className="text-muted-foreground">
            Risks related to business continuity and disaster recovery
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search continuity risks..." className="pl-8 w-[300px]" />
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
            <CardTitle className="text-sm font-medium">Recovery Time Objective</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 hours</div>
            <p className="text-xs text-muted-foreground">For critical systems</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Point Objective</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 min</div>
            <p className="text-xs text-muted-foreground">Maximum data loss tolerance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BC Test Compliance</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
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
            <CardTitle className="text-sm font-medium">Top BC Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">Disaster Recovery</div>
            <p className="text-xs text-muted-foreground">35% mitigation progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Risks</TabsTrigger>
          <TabsTrigger value="it">IT Systems</TabsTrigger>
          <TabsTrigger value="planning">Planning</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Continuity Risk Register</CardTitle>
              <CardDescription>Comprehensive view of identified business continuity risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {businessContinuityRisks.map((risk) => (
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
        <TabsContent value="it" className="mt-6">
          {/* IT Systems filtered content */}
          <Card>
            <CardHeader>
              <CardTitle>IT System Continuity Risks</CardTitle>
              <CardDescription>Risks related to IT systems and disaster recovery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {businessContinuityRisks
                  .filter((risk) => risk.category === "IT Systems")
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
        <TabsContent value="planning" className="mt-6">
          {/* Planning risks filtered content would go here */}
        </TabsContent>
        <TabsContent value="facilities" className="mt-6">
          {/* Facilities risks filtered content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 