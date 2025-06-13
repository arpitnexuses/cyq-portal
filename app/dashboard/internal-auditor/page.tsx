"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import { 
//   BarChart, 
//   ResponsiveContainer, 
//   XAxis, 
//   YAxis, 
//   Bar, 
//   Tooltip, 
//   PieChart, 
//   Pie, 
//   Cell, 
//   Legend, 
//   Area, 
//   Line, 
//   ComposedChart,
//   LineChart
// } from "recharts"
import { useRouter } from "next/navigation"
import { BarChartIcon } from "lucide-react"

const complianceScoreData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 59 },
  { name: "Mar", value: 62 },
  { name: "Apr", value: 68 },
  { name: "May", value: 71 },
  { name: "Jun", value: 75 },
  { name: "Jul", value: 78 },
  { name: "Aug", value: 82 },
  { name: "Sep", value: 85 },
  { name: "Oct", value: 87 },
  { name: "Nov", value: 87 },
  { name: "Dec", value: 87 },
];

const auditData = [
  { name: "Planned", value: 18 },
  { name: "Completed", value: 10 },
  { name: "In Progress", value: 5 },
  { name: "Scheduled", value: 3 },
];

const auditFindingsData = [
  { name: "Jan", value: 8 },
  { name: "Feb", value: 10 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 14 },
  { name: "May", value: 16 },
  { name: "Jun", value: 18 },
  { name: "Jul", value: 15 },
  { name: "Aug", value: 20 },
  { name: "Sep", value: 22 },
  { name: "Oct", value: 25 },
  { name: "Nov", value: 28 },
  { name: "Dec", value: 32 },
];

const riskData = [
  { name: "High Risk", value: 35, color: "#ef4444" },
  { name: "Medium Risk", value: 45, color: "#f59e0b" },
  { name: "Low Risk", value: 20, color: "#10b981" },
];

export default function InternalAuditorDashboard() {
  const router = useRouter();

  const navigateToPostureMaturity = () => {
    router.push("/dashboard/internal-auditor/posture-maturity");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50">Export Reports</button>
          <button className="px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary/90">
            New Audit
          </button>
        </div>
      </div>

      {/* First Row - Key Metrics (Updated to match screenshot) */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Compliance Score with Circular Gauge */}
        <Card className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b pb-3">
            <div className="flex items-center">
              <BarChartIcon className="h-5 w-5 mr-2 text-gray-500" />
              <CardTitle className="text-lg font-semibold">Compliance Score</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 pb-6 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Gray Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                
                {/* Progress Circle - 82% */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#eee" 
                    strokeWidth="10"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#22c55e" 
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * 0.82)}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                
                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold">82%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlights & Lowlights */}
        <Card className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b pb-3">
            <CardTitle className="text-lg font-semibold">Highlights & Lowlights</CardTitle>
          </CardHeader>
          <CardContent className="py-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-green-600 font-medium mb-1.5">Highlights</h3>
                <p className="text-gray-700">ISO 27001 compliance improved by 15%</p>
              </div>
              
              <div>
                <h3 className="text-red-500 font-medium mb-1.5">Lowlights</h3>
                <p className="text-gray-700">3 audits overdue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audit Progress */}
        <Card className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b pb-3">
            <CardTitle className="text-lg font-semibold">Audit Progress</CardTitle>
          </CardHeader>
          <CardContent className="py-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Total Planned (FY)</span>
                <span className="font-semibold">24</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Completed</span>
                <span className="font-semibold text-green-600">18</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>In Progress</span>
                <span className="font-semibold text-blue-600">4</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Scheduled</span>
                <span className="font-semibold text-orange-500">2</span>
              </div>
              
              <div className="mt-4">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-800 rounded-full" 
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row - Status Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Audit Status */}
        <Card className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Audit Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">ISO 27001</span>
                <Badge className="bg-black text-white rounded-full px-4 py-0.5 font-normal">compliant</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">SEBI</span>
                <Badge variant="outline" className="bg-gray-100 text-gray-800 rounded-full px-4 py-0.5 font-normal">observation</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">NIST</span>
                <Badge className="bg-black text-white rounded-full px-4 py-0.5 font-normal">compliant</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">CIS</span>
                <Badge className="bg-red-500 text-white rounded-full px-4 py-0.5 font-normal">nonConformance</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Due This Month */}
        <Card className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Tasks Due This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Risk Assessment Review</span>
                <Badge variant="outline" className="bg-gray-50 rounded-full px-3 py-0.5 font-normal">
                  Due 15th
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Security Training</span>
                <Badge variant="outline" className="bg-gray-50 rounded-full px-3 py-0.5 font-normal">
                  Due 22nd
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Vulnerability Scan</span>
                <Badge variant="outline" className="bg-gray-50 rounded-full px-3 py-0.5 font-normal">
                  Due 28th
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auditee Performance */}
        <Card className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Auditee Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Response Rate</span>
                <span className="font-semibold">94%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Avg. Response Time</span>
                <span className="font-semibold">2.3 days</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Quality Score</span>
                <span className="font-semibold">4.2/5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Posture Maturity Banner */}
      <Card 
        className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
        onClick={navigateToPostureMaturity}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Posture Maturity</h3>
              <p className="text-sm text-blue-700">View your organization's current security posture and maturity assessments</p>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Status and Scheduled Tasks */}
      {/* <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card className="border-0 rounded-lg shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Audit Status</CardTitle>
            <CardDescription>Overview of active audits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-medium text-base">Annual Financial Compliance</div>
                    <div className="text-sm text-muted-foreground">Due: May 30, 2025</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-black text-white font-medium rounded-full px-3">High</Badge>
                    <Badge variant="outline" className="rounded-full">In Progress</Badge>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-orange-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-sm font-medium text-orange-500">65%</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-medium text-base">IT Security Assessment</div>
                    <div className="text-sm text-muted-foreground">Due: June 15, 2025</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-500 text-white font-medium rounded-full px-3">Critical</Badge>
                    <Badge variant="outline" className="rounded-full">In Progress</Badge>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-red-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-sm font-medium text-red-500">42%</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-medium text-base">Operational Process Review</div>
                    <div className="text-sm text-muted-foreground">Due: July 10, 2025</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-slate-200 text-slate-700 font-medium rounded-full px-3">Medium</Badge>
                    <Badge variant="outline" className="rounded-full">Planning</Badge>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-sm font-medium text-blue-500">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="border-0 rounded-lg shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Scheduled Tasks Due in this month</CardTitle>
            <CardDescription>Tasks due in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-base">Review financial statements for Q1</h3>
                  <span className="text-sm font-medium">Due: May 22, 2025</span>
                </div>
                <p className="text-sm text-slate-500">Annual Financial Compliance</p>
              </div>
              
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-base">Collect evidence for IT security controls</h3>
                  <span className="text-sm font-medium">Due: May 24, 2025</span>
                </div>
                <p className="text-sm text-slate-500">IT Security Assessment</p>
              </div>
              
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-base">Interview department heads for process review</h3>
                  <span className="text-sm font-medium">Due: May 28, 2025</span>
                </div>
                <p className="text-sm text-slate-500">Operational Process Review</p>
              </div>
              
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-base">Validate vendor compliance documentation</h3>
                  <span className="text-sm font-medium">Due: May 23, 2025</span>
                </div>
                <p className="text-sm text-slate-500">Vendor Compliance Audit</p>
              </div>
              
              <div className="py-2">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-base">Review HR policy updates</h3>
                  <span className="text-sm font-medium">Due: May 21, 2025</span>
                </div>
                <p className="text-sm text-slate-500">HR Policy Compliance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
    </>
  )
}
