import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"
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

export default function SEBIAuditorView() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">SEBI Compliance</h1>
              <p className="text-muted-foreground">HoD View / Auditor View</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>View Assessment History</Button>
            </div>
          </div>

          {/* Overall Maturity Score */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Overall Maturity Score</CardTitle>
              <CardDescription>Radar / Spider Chart View</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <ComplianceMaturityRadarChart data={radarData} height={280} />
              </div>
            </CardContent>
          </Card>

          {/* Band showing Count */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Count of Compliant | Observation | Non-Conformance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xl font-bold">64</span>
                  <span className="text-sm text-muted-foreground">Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">8</span>
                  <span className="text-sm text-muted-foreground">Observation</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xl font-bold">3</span>
                  <span className="text-sm text-muted-foreground">Non-Conformance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overall Findings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Overall Findings</CardTitle>
              <CardDescription>Summary of audit findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Audit Plan</h3>
                  <Badge variant="outline">Q3 2023</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-3">
                    <h4 className="text-sm font-medium">Count of Findings</h4>
                    <p className="text-2xl font-bold mt-1">19</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="text-sm font-medium">Critical Findings</h4>
                    <p className="text-2xl font-bold mt-1 text-red-600">2</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="text-sm font-medium">Status</h4>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "52%" }}></div>
                      </div>
                      <span className="ml-2 text-sm">52%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="findings">
            <TabsList>
              <TabsTrigger value="findings">Findings View</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="status">Status</TabsTrigger>
            </TabsList>
            
            <TabsContent value="findings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Findings Detail</CardTitle>
                  <CardDescription>Detailed view of audit findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Audit Plan</h3>
                      <div className="text-sm text-muted-foreground mb-2">Q3 2023 SEBI Compliance Audit</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm font-medium">Count of Findings:</span>
                          <div className="mt-1">
                            <div className="text-sm">Critical: 2</div>
                            <div className="text-sm">High: 5</div>
                            <div className="text-sm">Medium: 9</div>
                            <div className="text-sm">Low: 3</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Finding Severity:</span>
                          <div className="mt-1">
                            <div className="text-sm">Critical (2): Immediate action required</div>
                            <div className="text-sm">High (5): Action required within 30 days</div>
                            <div className="text-sm">Medium (9): Action required within 60 days</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Control/Domain of Findings:</span>
                          <div className="mt-1">
                            <div className="text-sm">Cyber Security: 5</div>
                            <div className="text-sm">Risk Management: 3</div>
                            <div className="text-sm">Data Protection: 4</div>
                            <div className="text-sm">Operational: 7</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Timeline for Closure/Countdown</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="border rounded-lg p-3 bg-red-50">
                          <h4 className="text-sm font-medium">30 Days</h4>
                          <p className="text-xl font-bold mt-1">4</p>
                        </div>
                        <div className="border rounded-lg p-3 bg-amber-50">
                          <h4 className="text-sm font-medium">60 Days</h4>
                          <p className="text-xl font-bold mt-1">8</p>
                        </div>
                        <div className="border rounded-lg p-3 bg-blue-50">
                          <h4 className="text-sm font-medium">90 Days</h4>
                          <p className="text-xl font-bold mt-1">7</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Status</h3>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <p className="text-xl font-bold">1</p>
                          <p className="text-sm text-muted-foreground">Open</p>
                        </div>
                        <div className="text-center p-3 bg-amber-50 rounded-lg">
                          <p className="text-xl font-bold">5</p>
                          <p className="text-sm text-muted-foreground">In Progress</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-xl font-bold">10</p>
                          <p className="text-sm text-muted-foreground">Resolved</p>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-xl font-bold">3</p>
                          <p className="text-sm text-muted-foreground">Verified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="categories" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEBI Categories</CardTitle>
                  <CardDescription>Compliance status by category</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Categories Content */}
                  <div className="h-80 flex items-end justify-between gap-4 px-4 mb-6">
                    {[
                      {
                        id: 1,
                        name: "Cyber Security & Cyber Resilience",
                        description: "Framework for Market Infrastructure Institutions",
                        compliance: 90,
                      },
                      {
                        id: 2,
                        name: "Risk Management",
                        description: "Risk management systems and procedures",
                        compliance: 95,
                      },
                      {
                        id: 3,
                        name: "Data Protection",
                        description: "Protection of investor data and privacy",
                        compliance: 85,
                      },
                      {
                        id: 4,
                        name: "Business Continuity",
                        description: "Business continuity planning and disaster recovery",
                        compliance: 92,
                      },
                      {
                        id: 5,
                        name: "Operational Compliance",
                        description: "Day-to-day operational compliance requirements",
                        compliance: 94,
                      },
                    ].map((category) => (
                      <div key={category.id} className="flex flex-col items-center flex-1">
                        <div className="text-sm font-medium mb-1">{category.compliance}%</div>
                        <div className="w-full flex justify-center">
                          <div
                            className={`w-12 rounded-t-md ${
                              category.compliance < 70
                                ? "bg-red-500"
                                : category.compliance < 85
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                            style={{ height: `${category.compliance * 2}px` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-2 text-center font-medium">{category.id}</div>
                      </div>
                    ))}
                  </div>

                  {/* Category descriptions */}
                  <div className="space-y-4 mt-8 border-t pt-4">
                    <h3 className="text-sm font-medium">Category Details</h3>
                    {[
                      {
                        id: 1,
                        name: "Cyber Security & Cyber Resilience",
                        description: "Framework for Market Infrastructure Institutions",
                        compliance: 90,
                      },
                      {
                        id: 2,
                        name: "Risk Management",
                        description: "Risk management systems and procedures",
                        compliance: 95,
                      },
                      {
                        id: 3,
                        name: "Data Protection",
                        description: "Protection of investor data and privacy",
                        compliance: 85,
                      },
                      {
                        id: 4,
                        name: "Business Continuity",
                        description: "Business continuity planning and disaster recovery",
                        compliance: 92,
                      },
                      {
                        id: 5,
                        name: "Operational Compliance",
                        description: "Day-to-day operational compliance requirements",
                        compliance: 94,
                      },
                    ].map((category) => (
                      <div key={category.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{category.name}</div>
                          <Badge
                            variant={
                              category.compliance >= 90
                                ? "outline"
                                : category.compliance >= 80
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {category.compliance}%
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="status" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Findings Status</CardTitle>
                  <CardDescription>Current status of audit findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Status Overview</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Open Findings</span>
                            <span className="text-sm font-medium">1 (5.2%)</span>
                          </div>
                          <Progress value={5.2} className="h-2" />
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm">In Progress</span>
                            <span className="text-sm font-medium">5 (26.3%)</span>
                          </div>
                          <Progress value={26.3} className="h-2" />
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm">Resolved</span>
                            <span className="text-sm font-medium">10 (52.6%)</span>
                          </div>
                          <Progress value={52.6} className="h-2" />
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm">Verified</span>
                            <span className="text-sm font-medium">3 (15.8%)</span>
                          </div>
                          <Progress value={15.8} className="h-2" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Department-wise Status</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">IT Department</span>
                              <span className="text-sm font-medium">6 findings (50% resolved)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Finance Department</span>
                              <span className="text-sm font-medium">4 findings (75% resolved)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Operations</span>
                              <span className="text-sm font-medium">5 findings (40% resolved)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Compliance</span>
                              <span className="text-sm font-medium">1 finding (100% resolved)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Legal</span>
                              <span className="text-sm font-medium">3 findings (67% resolved)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
