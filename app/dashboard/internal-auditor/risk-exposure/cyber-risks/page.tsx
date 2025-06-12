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
  ShieldAlert,
  Users,
  Workflow,
  Server
} from "lucide-react"

export default function CyberRisksPage() {
  // Sample data for cyber risks
  const cyberRisks = [
    {
      id: 1,
      title: "Phishing Attacks",
      description: "Risk of employees falling victim to phishing attempts leading to data compromise",
      level: "High",
      impact: "High",
      likelihood: "High",
      mitigation: 45,
      owner: "CISO",
      lastReviewed: "2023-11-20",
      category: "People",
    },
    {
      id: 2,
      title: "Weak Password Practices",
      description: "Risk of unauthorized access due to poor password management",
      level: "Medium",
      impact: "Medium",
      likelihood: "High",
      mitigation: 60,
      owner: "IT Security Team",
      lastReviewed: "2023-10-15",
      category: "People",
    },
    {
      id: 3,
      title: "Unpatched Vulnerabilities",
      description: "Risk of exploitation of known vulnerabilities in systems",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "IT Operations",
      lastReviewed: "2023-11-05",
      category: "Technology",
    },
    {
      id: 4,
      title: "Insufficient Access Controls",
      description: "Risk of unauthorized data access due to poor access management",
      level: "Medium",
      impact: "High",
      likelihood: "Medium",
      mitigation: 55,
      owner: "Identity Management Team",
      lastReviewed: "2023-10-25",
      category: "Process",
    },
    {
      id: 5,
      title: "Insider Threats",
      description: "Risk of data exfiltration or sabotage by authorized users",
      level: "High",
      impact: "High",
      likelihood: "Low",
      mitigation: 40,
      owner: "Security Operations",
      lastReviewed: "2023-11-15",
      category: "People",
    },
    {
      id: 6,
      title: "Lack of Security Awareness",
      description: "Risk due to insufficient security awareness training",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 65,
      owner: "Training Director",
      lastReviewed: "2023-10-10",
      category: "People",
    },
    {
      id: 7,
      title: "Outdated Security Policies",
      description: "Risk of security incidents due to outdated security policies",
      level: "Medium",
      impact: "Medium",
      likelihood: "Medium",
      mitigation: 50,
      owner: "Compliance Manager",
      lastReviewed: "2023-11-10",
      category: "Process",
    },
    {
      id: 8,
      title: "Inadequate Encryption",
      description: "Risk of data exposure due to inadequate encryption",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Data Security Team",
      lastReviewed: "2023-10-30",
      category: "Technology",
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
          <h1 className="text-3xl font-bold tracking-tight">Cyber Risks</h1>
          <p className="text-muted-foreground">
            Risks related to cybersecurity threats and vulnerabilities
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search cyber risks..." className="pl-8 w-[300px]" />
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
            <CardTitle className="text-sm font-medium">Total Cyber Risks</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">3 high</span>, <span className="text-amber-500">8 medium</span>,{" "}
              <span className="text-green-500">5 low</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">People Risks</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="mt-2">
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">45% mitigated</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Process Risks</CardTitle>
            <Workflow className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="mt-2">
              <Progress value={53} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">53% mitigated</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Technology Risks</CardTitle>
            <Server className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <div className="mt-2">
              <Progress value={32} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">32% mitigated</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Risks</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Cyber Risk Register</CardTitle>
              <CardDescription>Comprehensive view of identified cyber risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {cyberRisks.map((risk) => (
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
        <TabsContent value="people" className="mt-6">
          {/* People risks filtered content */}
          <Card>
            <CardHeader>
              <CardTitle>People-Related Cyber Risks</CardTitle>
              <CardDescription>Risks associated with human factors in cybersecurity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {cyberRisks
                  .filter((risk) => risk.category === "People")
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
        <TabsContent value="technology" className="mt-6">
          {/* Technology risks filtered content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 