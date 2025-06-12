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
  Eye,
  Calendar,
  BarChart3,
  UserCircle2,
} from "lucide-react"

export default function IndividualRisksPage() {
  // Sample data for individual risks
  const individualRisks = [
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
      category: "Regulatory",
      dueDate: "2023-12-31",
    },
    {
      id: 2,
      title: "Inadequate Access Controls",
      description: "Risk of unauthorized data access due to insufficient access control mechanisms",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 40,
      owner: "IT Security Manager",
      lastReviewed: "2023-11-15",
      category: "Cyber",
      dueDate: "2023-12-15",
    },
    {
      id: 3,
      title: "Inadequate Disaster Recovery Plan",
      description: "Risk of extended downtime due to insufficient disaster recovery planning",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "IT Director",
      lastReviewed: "2023-11-10",
      category: "Business Continuity",
      dueDate: "2024-01-15",
    },
    {
      id: 4,
      title: "Single Source Dependency",
      description: "Risk of supply disruption due to dependency on a single vendor",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Procurement Director",
      lastReviewed: "2023-10-20",
      category: "Supply Chain",
      dueDate: "2024-01-31",
    },
    {
      id: 5,
      title: "Inadequate Segregation of Duties",
      description: "Risk of insufficient separation of responsibilities in critical processes",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "Internal Control Manager",
      lastReviewed: "2023-11-28",
      category: "Compliance",
      dueDate: "2023-12-20",
    },
    {
      id: 6,
      title: "Weak Encryption Standards",
      description: "Risk of data exposure due to outdated or inadequate encryption methods",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 35,
      owner: "Data Security Team",
      lastReviewed: "2023-10-20",
      category: "Data Breach",
      dueDate: "2023-12-10",
    },
    {
      id: 7,
      title: "Unpatched Vulnerabilities",
      description: "Risk of exploitation of known vulnerabilities in systems",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "IT Operations",
      lastReviewed: "2023-11-05",
      category: "Cyber",
      dueDate: "2023-12-05",
    },
    {
      id: 8,
      title: "Financial Reporting Non-Compliance",
      description: "Risk of inaccurate financial reporting not meeting regulatory standards",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 60,
      owner: "CFO",
      lastReviewed: "2023-11-20",
      category: "Regulatory",
      dueDate: "2024-01-20",
    },
    {
      id: 9,
      title: "Inadequate Third-Party Security Assessments",
      description: "Risk of data breach through third-party vendors with inadequate security controls",
      level: "High",
      impact: "High",
      likelihood: "Medium",
      mitigation: 30,
      owner: "Vendor Management",
      lastReviewed: "2023-10-10",
      category: "Data Breach",
      dueDate: "2023-12-25",
    },
    {
      id: 10,
      title: "Phishing Attacks",
      description: "Risk of employees falling victim to phishing attempts leading to data compromise",
      level: "High",
      impact: "High",
      likelihood: "High",
      mitigation: 45,
      owner: "CISO",
      lastReviewed: "2023-11-20",
      category: "Cyber",
      dueDate: "2023-12-15",
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
          <h1 className="text-3xl font-bold tracking-tight">Individual Risks View</h1>
          <p className="text-muted-foreground">
            Comprehensive view of all high-priority risks across categories
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search risks..." className="pl-8 w-[300px]" />
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
            <CardTitle className="text-sm font-medium">High Priority Risks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">Across all risk categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Mitigation</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38%</div>
            <div className="mt-2">
              <Progress value={38} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Due Dates</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Due within 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Owners</CardTitle>
            <UserCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Responsible for high risks</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Risks</TabsTrigger>
          <TabsTrigger value="cyber">Cyber</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
          <TabsTrigger value="data">Data Breach</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>High Priority Risk Register</CardTitle>
              <CardDescription>Comprehensive view of all high-priority risks across categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {individualRisks.map((risk) => (
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
                        <p className="text-sm font-medium">Due Date</p>
                        <p className="text-sm">{risk.dueDate}</p>
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
        <TabsContent value="cyber" className="mt-6">
          {/* Cyber risks filtered content */}
          <Card>
            <CardHeader>
              <CardTitle>Cyber Risk Register</CardTitle>
              <CardDescription>High-priority cyber risks requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {individualRisks
                  .filter((risk) => risk.category === "Cyber")
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
                          <p className="text-sm font-medium">Due Date</p>
                          <p className="text-sm">{risk.dueDate}</p>
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
        <TabsContent value="regulatory" className="mt-6">
          {/* Regulatory risks filtered content would go here */}
        </TabsContent>
        <TabsContent value="data" className="mt-6">
          {/* Data breach risks filtered content would go here */}
        </TabsContent>
        <TabsContent value="other" className="mt-6">
          {/* Other risks filtered content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 