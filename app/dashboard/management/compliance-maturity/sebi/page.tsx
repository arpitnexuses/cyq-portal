import { ManagementSidebar } from "@/components/management-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, BarChart3, Calendar, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { ComplianceMaturityRadarChart } from "@/components/radar-chart"

// Demo data for the radar chart
const radarData = [
  { subject: 'Cyber Security', score: 3.9, fullMark: 5 },
  { subject: 'Risk Management', score: 4.1, fullMark: 5 },
  { subject: 'Data Protection', score: 3.5, fullMark: 5 },
  { subject: 'Business Continuity', score: 3.7, fullMark: 5 },
  { subject: 'Access Controls', score: 4.0, fullMark: 5 },
  { subject: 'Threat Management', score: 3.3, fullMark: 5 },
  { subject: 'Governance', score: 3.8, fullMark: 5 },
  { subject: 'Third Party Risk', score: 3.2, fullMark: 5 },
]

export default function SEBIManagementView() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <ManagementSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">SEBI Compliance Maturity</h1>
              <p className="text-muted-foreground mt-2 text-lg">Management View</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="h-11 px-6">
                <Download className="h-5 w-5 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Overall Maturity Score Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overall Maturity Score</CardTitle>
              <CardDescription>Radar / Spider Chart View</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <ComplianceMaturityRadarChart data={radarData} height={350} />
              </div>
            </CardContent>
          </Card>

          {/* Band showing Count */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Count of Compliant | Observation | Non-Conformance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
                  <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
                  <span className="text-2xl font-bold">64</span>
                  <span className="text-sm text-muted-foreground">Compliant</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-10 w-10 text-amber-500 mb-3" />
                  <span className="text-2xl font-bold">8</span>
                  <span className="text-sm text-muted-foreground">Observation</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg">
                  <XCircle className="h-10 w-10 text-red-500 mb-3" />
                  <span className="text-2xl font-bold">3</span>
                  <span className="text-sm text-muted-foreground">Non-Conformance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overall Findings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overall Findings</CardTitle>
              <CardDescription>Summary of all findings across domains</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="audit-plan">
                <TabsList className="mb-4">
                  <TabsTrigger value="audit-plan">Audit Plan</TabsTrigger>
                  <TabsTrigger value="count-findings">Count of Findings</TabsTrigger>
                  <TabsTrigger value="dept-findings">Dept-wise Findings</TabsTrigger>
                  <TabsTrigger value="status">Status</TabsTrigger>
                </TabsList>

                <TabsContent value="audit-plan">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Q1 2023 SEBI Compliance Audit</h3>
                      <p className="text-sm text-muted-foreground">Scheduled audit of SEBI regulatory controls</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Feb 10 - Mar 25, 2023</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Q3 2023 SEBI Follow-up Audit</h3>
                      <p className="text-sm text-muted-foreground">Follow-up audit on critical control areas</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Aug 15 - Sep 30, 2023</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="count-findings">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 bg-red-50">
                      <h3 className="font-medium">Critical</h3>
                      <p className="text-2xl font-bold mt-2">2</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-amber-50">
                      <h3 className="font-medium">High</h3>
                      <p className="text-2xl font-bold mt-2">5</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <h3 className="font-medium">Medium</h3>
                      <p className="text-2xl font-bold mt-2">9</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dept-findings">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">IT Department</h3>
                        <Badge>6 Findings</Badge>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Finance Department</h3>
                        <Badge>4 Findings</Badge>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Operations</h3>
                        <Badge>5 Findings</Badge>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Compliance</h3>
                        <Badge>1 Finding</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="status">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 bg-green-50">
                      <h3 className="font-medium">Resolved</h3>
                      <p className="text-2xl font-bold mt-2">10</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-amber-50">
                      <h3 className="font-medium">In Progress</h3>
                      <p className="text-2xl font-bold mt-2">5</p>
                    </div>
                    <div className="border rounded-lg p-4 bg-red-50">
                      <h3 className="font-medium">Open</h3>
                      <p className="text-2xl font-bold mt-2">1</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Findings View */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Findings View</CardTitle>
              <CardDescription>Detailed analysis of all findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Audit Plan</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Q1 2023 SEBI Audit</span>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Q3 2023 SEBI Follow-up</span>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Findings Detail</h3>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Finding Severity:</span> Critical (2), High (5), Medium (9), Low (3)
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Control/Domain of Findings:</span> Cyber Security (5), Risk Management (3), Data Protection (4), Operational (7)
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Responsible Dept:</span> IT (6), Finance (4), Operations (5), Compliance (1), Legal (3)
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Timeline for Closure/Countdown:</span> 30 days (4), 60 days (8), 90 days (7)
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Status:</span> Open (1), In Progress (5), Resolved (10), Verified (3)
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
} 