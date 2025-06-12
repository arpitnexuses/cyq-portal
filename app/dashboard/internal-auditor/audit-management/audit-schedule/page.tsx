"use client"
import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CalendarDays, 
  Download, 
  Filter, 
  Plus, 
  Search, 
  ChevronRight, 
  Clock, 
  Calendar,
  MapPin,
  Building2,
  Briefcase,
  Users,
  FileText
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { format } from "date-fns"
import { useState } from "react"

export default function AuditSchedulePage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [showNewScheduleDialog, setShowNewScheduleDialog] = useState(false)
  const [selectedAuditPlan, setSelectedAuditPlan] = useState<string>("")

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Audit Schedule</h1>
              <p className="text-muted-foreground">Manage and schedule your audits</p>
            </div>
          </div>

          {/* Existing Audit Schedules */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Existing Audit Schedules</CardTitle>
              <CardDescription>View and manage your scheduled audits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Annual Financial Compliance Audit 2025",
                    date: "May 15, 2025 - June 30, 2025",
                    type: "Compliance",
                    status: "Committed",
                  },
                  {
                    id: 2,
                    name: "IT Security Assessment Q2 2025",
                    date: "June 1, 2025 - June 15, 2025",
                    type: "Security",
                    status: "Draft",
                  },
                ].map((schedule) => (
                  <div key={schedule.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="font-medium">{schedule.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          <span className="inline-flex items-center mr-4">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {schedule.date}
                          </span>
                          <span>{schedule.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={schedule.status === "Committed" ? "default" : "secondary"}
                        className="flex items-center"
                      >
                        {schedule.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      {schedule.status === "Committed" && (
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog open={showNewScheduleDialog} onOpenChange={setShowNewScheduleDialog}>
                <DialogTrigger asChild>
                  <Button className="ml-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    New Audit Schedule
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create New Audit Schedule</DialogTitle>
                    <DialogDescription>
                      Schedule a new audit by selecting an audit plan and providing details
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="audit-plan">Audit Plan</Label>
                      <Select onValueChange={setSelectedAuditPlan}>
                        <SelectTrigger id="audit-plan">
                          <SelectValue placeholder="Select audit plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="financial">Annual Financial Compliance Audit 2025</SelectItem>
                          <SelectItem value="security">IT Security Assessment Q2 2025</SelectItem>
                          <SelectItem value="operational">Operational Process Review 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hq">Headquarters</SelectItem>
                          <SelectItem value="branch1">Branch Office 1</SelectItem>
                          <SelectItem value="branch2">Branch Office 2</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">IT</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="hr">Human Resources</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="process">Process</Label>
                      <Select>
                        <SelectTrigger id="process">
                          <SelectValue placeholder="Select process" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="access">Access Management</SelectItem>
                          <SelectItem value="reporting">Financial Reporting</SelectItem>
                          <SelectItem value="development">Software Development</SelectItem>
                          <SelectItem value="security">Security Operations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Audit Period</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="start-date" className="text-xs text-muted-foreground mb-1 block">Start Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className="w-full justify-start text-left font-normal"
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                {startDate ? format(startDate, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <CalendarComponent
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                initialFocus
                                classNames={{
                                  table: "w-full border-collapse space-y-1",
                                  head_row: "grid grid-cols-7 gap-0",
                                  head_cell: "text-muted-foreground text-center text-xs font-medium h-9 w-9 flex items-center justify-center",
                                  row: "grid grid-cols-7 gap-0",
                                  cell: "h-9 w-9 text-center text-sm p-0 relative flex items-center justify-center",
                                  day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-primary/10 rounded-full"
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label htmlFor="end-date" className="text-xs text-muted-foreground mb-1 block">End Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className="w-full justify-start text-left font-normal"
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                {endDate ? format(endDate, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <CalendarComponent
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                                classNames={{
                                  table: "w-full border-collapse space-y-1",
                                  head_row: "grid grid-cols-7 gap-0",
                                  head_cell: "text-muted-foreground text-center text-xs font-medium h-9 w-9 flex items-center justify-center",
                                  row: "grid grid-cols-7 gap-0",
                                  cell: "h-9 w-9 text-center text-sm p-0 relative flex items-center justify-center",
                                  day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-primary/10 rounded-full"
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="auditee">Auditee</Label>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger id="auditee">
                            <SelectValue placeholder="Select auditee" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="john">John Smith</SelectItem>
                            <SelectItem value="sarah">Sarah Johnson</SelectItem>
                            <SelectItem value="michael">Michael Chen</SelectItem>
                            <SelectItem value="emma">Emma Wilson</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="auditor">Auditor</Label>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger id="auditor">
                            <SelectValue placeholder="Select auditor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="david">David Miller - Lead Auditor</SelectItem>
                            <SelectItem value="lisa">Lisa Garcia - IT Auditor</SelectItem>
                            <SelectItem value="robert">Robert Lee - Financial Auditor</SelectItem>
                            <SelectItem value="maria">Maria Rodriguez - Compliance Auditor</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <div className="flex gap-2">
                      <Button variant="outline">Save as Draft</Button>
                      <Button type="submit">Save & Commit</Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
