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
  { subject: 'Governance', score: 3.7, fullMark: 5 },
  { subject: 'Risk Management', score: 3.2, fullMark: 5 },
  { subject: 'Asset Management', score: 2.8, fullMark: 5 },
  { subject: 'Access Control', score: 3.9, fullMark: 5 },
  { subject: 'Cryptography', score: 2.5, fullMark: 5 },
  { subject: 'Physical Security', score: 3.8, fullMark: 5 },
  { subject: 'Operations', score: 3.3, fullMark: 5 },
  { subject: 'Communications', score: 2.9, fullMark: 5 },
]

export default function ISO27001AuditorView() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">ISO 27001 Compliance</h1>
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
                  <span className="text-xl font-bold">76</span>
                  <span className="text-sm text-muted-foreground">Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">12</span>
                  <span className="text-sm text-muted-foreground">Observation</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xl font-bold">5</span>
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
                  <Badge variant="outline">Q2 2023</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-3">
                    <h4 className="text-sm font-medium">Count of Findings</h4>
                    <p className="text-2xl font-bold mt-1">27</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="text-sm font-medium">Critical Findings</h4>
                    <p className="text-2xl font-bold mt-1 text-red-600">3</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="text-sm font-medium">Status</h4>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      <span className="ml-2 text-sm">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="findings">
            <TabsList>
              <TabsTrigger value="findings">Findings View</TabsTrigger>
              <TabsTrigger value="domains">Control Domains</TabsTrigger>
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
                      <div className="text-sm text-muted-foreground mb-2">Q2 2023 Comprehensive Audit</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm font-medium">Count of Findings:</span>
                          <div className="mt-1">
                            <div className="text-sm">Critical: 3</div>
                            <div className="text-sm">High: 7</div>
                            <div className="text-sm">Medium: 12</div>
                            <div className="text-sm">Low: 5</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Dept-wise Findings:</span>
                          <div className="mt-1">
                            <div className="text-sm">IT: 12</div>
                            <div className="text-sm">HR: 5</div>
                            <div className="text-sm">Operations: 7</div>
                            <div className="text-sm">Others: 3</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Status:</span>
                          <div className="mt-1">
                            <div className="text-sm">Open: 15</div>
                            <div className="text-sm">In Progress: 7</div>
                            <div className="text-sm">Resolved: 5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="domains" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>ISO 27001 Control Domains</CardTitle>
                  <CardDescription>Compliance status by control domain</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Vertical Bar Chart for ISO 27001 Control Domains */}
                  <div className="h-80 flex items-end justify-between gap-2 px-2 mb-6">
                    {[
                      { id: 1, name: "A.5 Information Security Policies", compliance: 92 },
                      { id: 2, name: "A.6 Organization of Information Security", compliance: 85 },
                      { id: 3, name: "A.7 Human Resource Security", compliance: 78 },
                      { id: 4, name: "A.8 Asset Management", compliance: 65 },
                      { id: 5, name: "A.9 Access Control", compliance: 72 },
                      { id: 6, name: "A.10 Cryptography", compliance: 60 },
                      { id: 7, name: "A.11 Physical and Environmental Security", compliance: 88 },
                      { id: 8, name: "A.12 Operations Security", compliance: 75 },
                    ].map((domain) => (
                      <div key={domain.id} className="flex flex-col items-center flex-1">
                        <div className="text-sm font-medium mb-1">{domain.compliance}%</div>
                        <div className="w-full flex justify-center">
                          <div
                            className={`w-10 rounded-t-md ${
                              domain.compliance < 70
                                ? "bg-red-500"
                                : domain.compliance < 85
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                            style={{ height: `${domain.compliance * 1.8}px` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-2 text-center font-medium">A.{domain.id + 4}</div>
                      </div>
                    ))}
                  </div>

                  {/* Domain descriptions */}
                  <div className="space-y-4 mt-8 border-t pt-4">
                    <h3 className="text-sm font-medium">Domain Details</h3>
                    {[
                      { id: 1, name: "A.5 Information Security Policies", compliance: 92 },
                      { id: 2, name: "A.6 Organization of Information Security", compliance: 85 },
                      { id: 3, name: "A.7 Human Resource Security", compliance: 78 },
                      { id: 4, name: "A.8 Asset Management", compliance: 65 },
                      { id: 5, name: "A.9 Access Control", compliance: 72 },
                      { id: 6, name: "A.10 Cryptography", compliance: 60 },
                      { id: 7, name: "A.11 Physical and Environmental Security", compliance: 88 },
                      { id: 8, name: "A.12 Operations Security", compliance: 75 },
                    ].map((domain) => (
                      <div key={domain.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{domain.name}</div>
                          <Badge
                            variant={
                              domain.compliance >= 85
                                ? "outline"
                                : domain.compliance >= 70
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {domain.compliance}%
                          </Badge>
                        </div>
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
                            <span className="text-sm font-medium">15 (55.6%)</span>
                          </div>
                          <Progress value={55.6} className="h-2" />
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm">In Progress</span>
                            <span className="text-sm font-medium">7 (25.9%)</span>
                          </div>
                          <Progress value={25.9} className="h-2" />
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm">Resolved</span>
                            <span className="text-sm font-medium">5 (18.5%)</span>
                          </div>
                          <Progress value={18.5} className="h-2" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Timeline for Closure</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">30 days or less</span>
                              <span className="text-sm font-medium">8</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">31-60 days</span>
                              <span className="text-sm font-medium">12</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">61-90 days</span>
                              <span className="text-sm font-medium">7</span>
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