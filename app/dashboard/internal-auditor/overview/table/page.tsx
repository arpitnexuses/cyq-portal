import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter, ArrowUpDown, RefreshCw } from "lucide-react"

export default function TablePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Audit Tables</h1>
              <p className="text-muted-foreground mt-2 text-lg">Department-wise and due/overdue audit status</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hover:bg-slate-100 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800 transition-colors">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search departments or audits..." 
                className="pl-10 h-12 text-base shadow-sm border-slate-200 focus:border-slate-400 transition-colors" 
              />
            </div>
            <Button variant="outline" size="icon" className="h-12 w-12 hover:bg-slate-100 transition-colors">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="department" className="space-y-6">
            <TabsList className="bg-slate-100 p-1 rounded-lg">
              <TabsTrigger value="department" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">Department Wise</TabsTrigger>
              <TabsTrigger value="due" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">Due/Overdue</TabsTrigger>
            </TabsList>
            <TabsContent value="department" className="space-y-4 mt-6">
              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                  <CardTitle className="text-2xl">Department Wise Audit Status</CardTitle>
                  <CardDescription className="text-base">Open vs. total audits by department</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-md">
                    <div className="grid grid-cols-12 bg-slate-50 p-4 text-sm font-medium text-slate-600 border-b border-slate-200">
                      <div className="col-span-4 flex items-center">
                        Department
                        <Button variant="ghost" size="icon" className="ml-2 hover:bg-slate-200">
                          <ArrowUpDown className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="col-span-2 text-center">Open Audits</div>
                      <div className="col-span-2 text-center">Total Audits</div>
                      <div className="col-span-2 text-center">Completion Rate</div>
                      <div className="col-span-2 text-center">Status</div>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        { id: 1, department: "Information Technology", open: 3, total: 5, completionRate: 40 },
                        { id: 2, department: "Finance", open: 2, total: 4, completionRate: 50 },
                        { id: 3, department: "Human Resources", open: 1, total: 3, completionRate: 67 },
                        { id: 4, department: "Operations", open: 2, total: 3, completionRate: 33 },
                        { id: 5, department: "Legal & Compliance", open: 0, total: 2, completionRate: 100 },
                        { id: 6, department: "Sales & Marketing", open: 1, total: 2, completionRate: 50 },
                        { id: 7, department: "Research & Development", open: 2, total: 3, completionRate: 33 },
                        { id: 8, department: "Customer Service", open: 1, total: 2, completionRate: 50 },
                      ].map((dept) => (
                        <div key={dept.id} className="grid grid-cols-12 p-4 text-sm items-center hover:bg-slate-50 transition-colors">
                          <div className="col-span-4 font-medium text-slate-900">{dept.department}</div>
                          <div className="col-span-2 text-center text-slate-600">{dept.open}</div>
                          <div className="col-span-2 text-center text-slate-600">{dept.total}</div>
                          <div className="col-span-2 text-center text-slate-600">{dept.completionRate}%</div>
                          <div className="col-span-2 text-center">
                            <Badge
                              variant="outline"
                              className={`px-3 py-1 text-xs font-medium ${
                                dept.completionRate === 100
                                  ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                                  : dept.completionRate >= 50
                                    ? "bg-amber-100 text-amber-700 border-amber-200"
                                    : "bg-red-100 text-red-700 border-red-200"
                              }`}
                            >
                              {dept.completionRate === 100
                                ? "Complete"
                                : dept.completionRate >= 50
                                  ? "In Progress"
                                  : "Attention Needed"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="due" className="space-y-4 mt-6">
              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                  <CardTitle className="text-2xl">Due/Overdue Audits</CardTitle>
                  <CardDescription className="text-base">Audits by due date status</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-md">
                    <div className="grid grid-cols-12 bg-slate-50 p-4 text-sm font-medium text-slate-600 border-b border-slate-200">
                      <div className="col-span-3 flex items-center">
                        Audit Name
                        <Button variant="ghost" size="icon" className="ml-2 hover:bg-slate-200">
                          <ArrowUpDown className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="col-span-2">Department</div>
                      <div className="col-span-2">Due Date</div>
                      <div className="col-span-2">Days Remaining</div>
                      <div className="col-span-2">Assigned To</div>
                      <div className="col-span-1 text-center">Status</div>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        {
                          id: 1,
                          name: "IT Security Assessment",
                          department: "Information Technology",
                          dueDate: "June 15, 2025",
                          daysRemaining: 27,
                          assignedTo: "John D.",
                          status: "On Track",
                        },
                        {
                          id: 2,
                          name: "Financial Controls Review",
                          department: "Finance",
                          dueDate: "May 30, 2025",
                          daysRemaining: 11,
                          assignedTo: "Sarah K.",
                          status: "At Risk",
                        },
                        {
                          id: 3,
                          name: "HR Policy Compliance",
                          department: "Human Resources",
                          dueDate: "May 22, 2025",
                          daysRemaining: 3,
                          assignedTo: "Michael R.",
                          status: "At Risk",
                        },
                        {
                          id: 4,
                          name: "Vendor Compliance Audit",
                          department: "Operations",
                          dueDate: "May 18, 2025",
                          daysRemaining: -1,
                          assignedTo: "Lisa T.",
                          status: "Overdue",
                        },
                        {
                          id: 5,
                          name: "Data Privacy Assessment",
                          department: "Legal & Compliance",
                          dueDate: "May 15, 2025",
                          daysRemaining: -4,
                          assignedTo: "David L.",
                          status: "Overdue",
                        },
                      ].map((audit) => (
                        <div key={audit.id} className="grid grid-cols-12 p-4 text-sm items-center hover:bg-slate-50 transition-colors">
                          <div className="col-span-3 font-medium text-slate-900">{audit.name}</div>
                          <div className="col-span-2 text-slate-600">{audit.department}</div>
                          <div className="col-span-2 text-slate-600">{audit.dueDate}</div>
                          <div className="col-span-2 text-slate-600">
                            {audit.daysRemaining < 0
                              ? `${Math.abs(audit.daysRemaining)} days overdue`
                              : `${audit.daysRemaining} days left`}
                          </div>
                          <div className="col-span-2 text-slate-600">{audit.assignedTo}</div>
                          <div className="col-span-1 text-center">
                            <Badge
                              variant="outline"
                              className={`px-3 py-1 text-xs font-medium ${
                                audit.status === "On Track"
                                  ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                                  : audit.status === "At Risk"
                                    ? "bg-amber-100 text-amber-700 border-amber-200"
                                    : "bg-red-100 text-red-700 border-red-200"
                              }`}
                            >
                              {audit.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
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
