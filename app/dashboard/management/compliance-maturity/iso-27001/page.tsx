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
  { subject: 'Governance', score: 3.7, fullMark: 5 },
  { subject: 'Risk Management', score: 3.2, fullMark: 5 },
  { subject: 'Asset Management', score: 2.8, fullMark: 5 },
  { subject: 'Access Control', score: 3.9, fullMark: 5 },
  { subject: 'Cryptography', score: 2.5, fullMark: 5 },
  { subject: 'Physical Security', score: 3.8, fullMark: 5 },
  { subject: 'Operations', score: 3.3, fullMark: 5 },
  { subject: 'Communications', score: 2.9, fullMark: 5 },
]

export default function ISO27001ManagementView() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <ManagementSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">ISO 27001 Compliance Maturity</h1>
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
                  <span className="text-2xl font-bold">76</span>
                  <span className="text-sm text-muted-foreground">Compliant</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-10 w-10 text-amber-500 mb-3" />
                  <span className="text-2xl font-bold">12</span>
                  <span className="text-sm text-muted-foreground">Observation</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg">
                  <XCircle className="h-10 w-10 text-red-500 mb-3" />
                  <span className="text-2xl font-bold">5</span>
                  <span className="text-sm text-muted-foreground">Non-Conformance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Control Wise Maturity Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Control Wise Maturity Score</CardTitle>
              <CardDescription>Organizational | People | Physical | Technological</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Organizational</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">3.7 / 5.0</span>
                  </div>
                  <Progress value={74} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground">Policies, procedures, and governance controls</p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">People</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">4.1 / 5.0</span>
                  </div>
                  <Progress value={82} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground">Awareness, training, and skills assessment</p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Physical</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">3.9 / 5.0</span>
                  </div>
                  <Progress value={78} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground">Facility security and physical access controls</p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Technological</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">3.5 / 5.0</span>
                  </div>
                  <Progress value={70} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground">Technical security controls and safeguards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
} 