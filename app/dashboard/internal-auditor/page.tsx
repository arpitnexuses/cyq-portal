import { DashboardMetrics } from "@/components/dashboard-metrics"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function InternalAuditorDashboard() {
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

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          { 
            title: "Active Audits", 
            value: "12", 
            change: "+2", 
            direction: "up",
            gradient: "from-indigo-100 via-blue-100 to-indigo-50"
          },
          { 
            title: "Compliance Score", 
            value: "87%", 
            change: "+4%", 
            direction: "up",
            gradient: "from-green-100 via-emerald-50 to-green-50"
          },
          { 
            title: "Pending Reviews", 
            value: "8", 
            change: "+3", 
            direction: "down",
            gradient: "from-orange-100 via-amber-50 to-orange-50"
          },
          { 
            title: "Compliance Issues", 
            value: "4", 
            change: "-2", 
            direction: "up",
            gradient: "from-red-100 via-rose-50 to-red-50"
          },
        ].map((metric, i) => (
          <Card key={i} className={`bg-gradient-to-br ${metric.gradient} border-0 shadow-sm hover:shadow-md transition-all duration-300`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
              <p className="text-xs text-slate-600 flex items-center mt-1">
                <span className={`mr-1 text-${metric.direction === "up" ? "green" : "red"}-500`}>
                  {metric.direction === "up" ? "↑" : "↓"}
                </span>
                <span className={`text-${metric.direction === "up" ? "green" : "red"}-500 font-medium`}>
                  {metric.change}
                </span>
                {" from last month"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Vertical Bar Charts */}
      <DashboardMetrics />

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {/* Current Audit Status */}
        <Card>
          <CardHeader>
            <CardTitle>Current Audit Status</CardTitle>
            <CardDescription>Overview of active audits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  id: 1,
                  name: "Annual Financial Compliance",
                  status: "In Progress",
                  progress: 65,
                  dueDate: "May 30, 2025",
                  priority: "High",
                },
                {
                  id: 2,
                  name: "IT Security Assessment",
                  status: "In Progress",
                  progress: 42,
                  dueDate: "June 15, 2025",
                  priority: "Critical",
                },
                {
                  id: 3,
                  name: "Operational Process Review",
                  status: "Planning",
                  progress: 10,
                  dueDate: "July 10, 2025",
                  priority: "Medium",
                },
              ].map((audit) => (
                <div key={audit.id} className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{audit.name}</div>
                      <div className="text-sm text-muted-foreground">Due: {audit.dueDate}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          audit.priority === "Critical"
                            ? "destructive"
                            : audit.priority === "High"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {audit.priority}
                      </Badge>
                      <Badge variant="outline">{audit.status}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={audit.progress} 
                      className={`h-2 ${
                        audit.priority === "Critical"
                          ? "bg-red-100 [&>div]:bg-red-600"
                          : audit.priority === "High"
                            ? "bg-orange-100 [&>div]:bg-orange-500"
                            : "bg-blue-100 [&>div]:bg-blue-500"
                      }`}
                    />
                    <span className={`text-sm font-medium ${
                      audit.priority === "Critical"
                        ? "text-red-600"
                        : audit.priority === "High"
                          ? "text-orange-500"
                          : "text-blue-500"
                    }`}>
                      {audit.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Tasks due in the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Review financial statements for Q1",
                  audit: "Annual Financial Compliance",
                  dueDate: "May 22, 2025",
                },
                {
                  id: 2,
                  title: "Collect evidence for IT security controls",
                  audit: "IT Security Assessment",
                  dueDate: "May 24, 2025",
                },
                {
                  id: 3,
                  title: "Interview department heads for process review",
                  audit: "Operational Process Review",
                  dueDate: "May 28, 2025",
                },
                {
                  id: 4,
                  title: "Validate vendor compliance documentation",
                  audit: "Vendor Compliance Audit",
                  dueDate: "May 23, 2025",
                },
                {
                  id: 5,
                  title: "Review HR policy updates",
                  audit: "HR Policy Compliance",
                  dueDate: "May 21, 2025",
                },
              ].map((task) => (
                <div key={task.id} className="flex items-center justify-between p-2 rounded-md hover:bg-accent">
                  <div>
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">{task.audit}</div>
                  </div>
                  <Badge variant="outline">Due: {task.dueDate}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
