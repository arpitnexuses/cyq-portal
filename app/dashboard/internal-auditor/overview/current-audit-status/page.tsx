import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Calendar, Clock, CheckCircle, AlertCircle, BarChart3, FileText, Shield, Target, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CurrentAuditStatusPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Current Audit Status</h1>
              <p className="text-muted-foreground">Overview of active and planned audits</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                New Audit
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search audits..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            {[
              {
                title: "Total Audits",
                value: "12",
                description: "For current year",
                icon: BarChart3,
                color: "text-blue-500",
                bgColor: "bg-blue-50",
              },
              {
                title: "In Progress",
                value: "5",
                description: "Active audits",
                icon: Clock,
                color: "text-amber-500",
                bgColor: "bg-amber-50",
              },
              {
                title: "Completed",
                value: "4",
                description: "This year",
                icon: CheckCircle,
                color: "text-green-500",
                bgColor: "bg-green-50",
              },
              {
                title: "Upcoming",
                value: "3",
                description: "Planned audits",
                icon: Target,
                color: "text-purple-500",
                bgColor: "bg-purple-50",
              },
            ].map((stat) => (
              <Card key={stat.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                    <div className={`p-2 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="active" className="space-y-4">
            <TabsList className="bg-white p-1">
              <TabsTrigger value="active">Active Audits</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Audits</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4 mt-4">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle>Active Audits</CardTitle>
                  <CardDescription>Currently ongoing audit engagements</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {[
                      {
                        id: 1,
                        name: "Annual Financial Compliance",
                        status: "In Progress",
                        progress: 65,
                        dueDate: "May 30, 2025",
                        priority: "High",
                        phase: "Evidence Collection",
                      },
                      {
                        id: 2,
                        name: "IT Security Assessment",
                        status: "In Progress",
                        progress: 42,
                        dueDate: "June 15, 2025",
                        priority: "Critical",
                        phase: "Planning",
                      },
                      {
                        id: 3,
                        name: "Operational Process Review",
                        status: "In Progress",
                        progress: 10,
                        dueDate: "July 10, 2025",
                        priority: "Medium",
                        phase: "Planning",
                      },
                      {
                        id: 4,
                        name: "Vendor Compliance Audit",
                        status: "In Progress",
                        progress: 78,
                        dueDate: "May 25, 2025",
                        priority: "High",
                        phase: "Review",
                      },
                      {
                        id: 5,
                        name: "HR Policy Compliance",
                        status: "Review",
                        progress: 90,
                        dueDate: "May 22, 2025",
                        priority: "Medium",
                        phase: "Reporting",
                      },
                    ].map((audit) => (
                      <div key={audit.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-blue-50">
                                <Shield className="h-4 w-4 text-blue-600" />
                              </div>
                              <h3 className="font-medium text-gray-900">{audit.name}</h3>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded-full text-xs ${
                                audit.phase === "Planning" 
                                  ? "bg-blue-50 text-blue-700"
                                  : audit.phase === "Evidence Collection"
                                  ? "bg-amber-50 text-amber-700"
                                  : audit.phase === "Review"
                                  ? "bg-purple-50 text-purple-700"
                                  : "bg-green-50 text-green-700"
                              }`}>
                                {audit.phase}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-3 md:mt-0">
                            <Badge
                              variant={
                                audit.priority === "Critical"
                                  ? "destructive"
                                  : audit.priority === "High"
                                    ? "default"
                                    : "secondary"
                              }
                              className={`px-2.5 py-0.5 ${
                                audit.priority === "Critical"
                                  ? "bg-red-50 text-red-700 border-red-200"
                                  : audit.priority === "High"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-blue-50 text-blue-700 border-blue-200"
                              }`}
                            >
                              {audit.priority}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground bg-gray-50 px-2.5 py-1 rounded-md">
                              <Clock className="h-3 w-3 mr-1.5" />
                              Due: {audit.dueDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-50">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                              style={{ width: `${audit.progress}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium min-w-[3rem] text-right text-blue-600">
                            {audit.progress}%
                          </span>
                        </div>
                        <div className="flex justify-end mt-3">
                          <Button variant="outline" size="sm" className="gap-1.5 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors">
                            View Details
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-4">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle>Upcoming Audits</CardTitle>
                  <CardDescription>Planned audit engagements</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {[
                      {
                        id: 1,
                        name: "Q3 Financial Review",
                        status: "Planned",
                        startDate: "July 15, 2025",
                        endDate: "August 30, 2025",
                        priority: "High",
                      },
                      {
                        id: 2,
                        name: "Data Privacy Assessment",
                        status: "Planned",
                        startDate: "August 1, 2025",
                        endDate: "September 15, 2025",
                        priority: "Medium",
                      },
                      {
                        id: 3,
                        name: "Cloud Security Review",
                        status: "Planned",
                        startDate: "September 10, 2025",
                        endDate: "October 20, 2025",
                        priority: "High",
                      },
                    ].map((audit) => (
                      <div key={audit.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-purple-100">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-purple-50">
                                <Target className="h-4 w-4 text-purple-600" />
                              </div>
                              <h3 className="font-medium text-gray-900">{audit.name}</h3>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">
                                {audit.startDate} - {audit.endDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={audit.priority === "High" ? "default" : "secondary"} 
                              className={`px-2.5 py-0.5 ${
                                audit.priority === "High"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-blue-50 text-blue-700 border-blue-200"
                              }`}
                            >
                              {audit.priority}
                            </Badge>
                            <Badge variant="outline" className="px-2.5 py-0.5 bg-purple-50 text-purple-700 border-purple-200">
                              {audit.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="mt-4">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle>Completed Audits</CardTitle>
                  <CardDescription>Recently completed audit engagements</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {[
                      {
                        id: 1,
                        name: "Q1 Financial Compliance",
                        completionDate: "March 30, 2025",
                        findings: 12,
                        status: "Completed",
                      },
                      {
                        id: 2,
                        name: "Annual Security Review",
                        completionDate: "February 15, 2025",
                        findings: 8,
                        status: "Completed",
                      },
                      {
                        id: 3,
                        name: "Regulatory Compliance Check",
                        completionDate: "January 20, 2025",
                        findings: 5,
                        status: "Completed",
                      },
                      {
                        id: 4,
                        name: "Vendor Risk Assessment",
                        completionDate: "April 10, 2025",
                        findings: 7,
                        status: "Completed",
                      },
                    ].map((audit) => (
                      <div key={audit.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-green-100">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-green-50">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                              <h3 className="font-medium text-gray-900">{audit.name}</h3>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">
                                Completed: {audit.completionDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant="outline" 
                              className={`px-2.5 py-0.5 ${
                                audit.findings > 10
                                  ? "bg-red-50 text-red-700 border-red-200"
                                  : audit.findings > 5
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-green-50 text-green-700 border-green-200"
                              }`}
                            >
                              {audit.findings} findings
                            </Badge>
                            <Badge variant="secondary" className="px-2.5 py-0.5 flex items-center gap-1 bg-green-50 text-green-700 border-green-200">
                              <CheckCircle className="h-3 w-3" />
                              {audit.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="all" className="mt-4">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle>All Audits</CardTitle>
                  <CardDescription>Complete list of all audits</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-center p-8 border rounded-lg bg-white">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground">All audits would be displayed here</p>
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
