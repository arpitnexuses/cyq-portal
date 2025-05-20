"use client"
import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Download, Filter, Plus, Search, ChevronRight, Clock, AlertCircle, CheckCircle2, ChevronLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AuditSchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const isToday = (date: number) => {
    const today = new Date()
    return (
      date === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: number) => {
    if (!selectedDate) return false
    return (
      date === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    )
  }

  const hasEvent = (date: number) => {
    // Mock data - replace with actual event data
    const eventDates = [5, 12, 15, 20, 25]
    return eventDates.includes(date)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Audit Schedule</h1>
              <p className="text-muted-foreground mt-1">Manage and track all scheduled audits</p>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Schedule Audit
              </Button>
            </div>
          </div>

          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="mb-6 bg-white p-1">
              <TabsTrigger value="calendar" className="data-[state=active]:bg-slate-100">Calendar View</TabsTrigger>
              <TabsTrigger value="list" className="data-[state=active]:bg-slate-100">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="calendar" className="space-y-4">
              <Card className="border-none shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <CalendarDays className="h-5 w-5 mr-2 text-blue-600" />
                    Audit Calendar
                  </CardTitle>
                  <CardDescription>View and manage scheduled audits in a calendar format</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="bg-white rounded-xl border p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-xl font-semibold text-slate-900">
                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                          </h2>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={handlePrevMonth}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={handleNextMonth}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {weekDays.map((day) => (
                            <div
                              key={day}
                              className="text-center text-sm font-medium text-slate-500 py-2"
                            >
                              {day}
                            </div>
                          ))}
                          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                            <div key={`empty-${index}`} className="h-24" />
                          ))}
                          {Array.from({ length: daysInMonth }).map((_, index) => {
                            const date = index + 1
                            return (
                              <div
                                key={date}
                                onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date))}
                                className={`
                                  relative h-24 p-2 border rounded-lg cursor-pointer transition-colors
                                  ${isToday(date) ? 'bg-blue-50 border-blue-200' : 'hover:bg-slate-50'}
                                  ${isSelected(date) ? 'bg-blue-100 border-blue-300' : ''}
                                `}
                              >
                                <span className={`
                                  text-sm font-medium
                                  ${isToday(date) ? 'text-blue-600' : 'text-slate-900'}
                                  ${isSelected(date) ? 'text-blue-700' : ''}
                                `}>
                                  {date}
                                </span>
                                {hasEvent(date) && (
                                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-white rounded-lg border p-4 shadow-sm">
                        <h3 className="font-semibold mb-4 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          Upcoming Audits
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              title: "Annual Financial Compliance",
                              date: "May 30, 2025",
                              status: "Scheduled",
                              type: "Internal",
                              time: "09:00 AM",
                            },
                            {
                              title: "IT Security Assessment",
                              date: "June 15, 2025",
                              status: "Scheduled",
                              type: "External",
                              time: "10:30 AM",
                            },
                            {
                              title: "Operational Process Review",
                              date: "July 10, 2025",
                              status: "Planning",
                              type: "Internal",
                              time: "02:00 PM",
                            },
                          ].map((audit, index) => (
                            <div key={index} className="p-4 border rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                              <div className="font-medium text-slate-900">{audit.title}</div>
                              <div className="text-sm text-slate-500 mb-2 flex items-center">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {audit.date} at {audit.time}
                              </div>
                              <div className="flex gap-2">
                                <Badge 
                                  variant="outline" 
                                  className={
                                    audit.status === "Scheduled" 
                                      ? "bg-green-50 text-green-700 border-green-200" 
                                      : "bg-blue-50 text-blue-700 border-blue-200"
                                  }
                                >
                                  {audit.status}
                                </Badge>
                                <Badge 
                                  variant={audit.type === "External" ? "secondary" : "default"}
                                  className="bg-slate-100"
                                >
                                  {audit.type}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="list">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Scheduled Audits</CardTitle>
                      <CardDescription>View and manage all scheduled audits in a list format</CardDescription>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                      <Input
                        type="text"
                        placeholder="Search audits..."
                        className="pl-8 h-9 w-full"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border bg-white">
                    <div className="grid grid-cols-5 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 border-b">
                      <div>Audit Name</div>
                      <div>Type</div>
                      <div>Start Date</div>
                      <div>End Date</div>
                      <div>Status</div>
                    </div>
                    {[
                      {
                        name: "Annual Financial Compliance",
                        type: "Internal",
                        startDate: "May 30, 2025",
                        endDate: "June 15, 2025",
                        status: "Scheduled",
                      },
                      {
                        name: "IT Security Assessment",
                        type: "External",
                        startDate: "June 15, 2025",
                        endDate: "July 1, 2025",
                        status: "Scheduled",
                      },
                      {
                        name: "Operational Process Review",
                        type: "Internal",
                        startDate: "July 10, 2025",
                        endDate: "July 25, 2025",
                        status: "Planning",
                      },
                      {
                        name: "Vendor Compliance Audit",
                        type: "External",
                        startDate: "August 5, 2025",
                        endDate: "August 20, 2025",
                        status: "Planning",
                      },
                      {
                        name: "HR Policy Compliance",
                        type: "Internal",
                        startDate: "September 1, 2025",
                        endDate: "September 15, 2025",
                        status: "Draft",
                      },
                    ].map((audit, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 px-4 py-3 text-sm border-b last:border-b-0 hover:bg-slate-50 transition-colors cursor-pointer group"
                      >
                        <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                          {audit.name}
                        </div>
                        <div>
                          <Badge 
                            variant={audit.type === "External" ? "secondary" : "default"}
                            className="bg-slate-100"
                          >
                            {audit.type}
                          </Badge>
                        </div>
                        <div className="text-slate-600">{audit.startDate}</div>
                        <div className="text-slate-600">{audit.endDate}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              audit.status === "Scheduled"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : audit.status === "Planning"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-slate-50 text-slate-700 border-slate-200"
                            }
                          >
                            {audit.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
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
