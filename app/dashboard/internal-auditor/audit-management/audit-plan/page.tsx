"use client"

import { Badge } from "@/components/ui/badge"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Upload, 
  Download, 
  FileText, 
  Plus, 
  Calendar, 
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { useState } from "react"

export default function AuditPlanPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [showNewAuditDialog, setShowNewAuditDialog] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Audit Plan</h1>
              <p className="text-muted-foreground">Create and manage audit plans</p>
            </div>
          </div>

          {/* Existing Audit Plans Summary */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Existing Audit Plans</CardTitle>
              <CardDescription>Summary of all audit plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Annual Financial Compliance Audit 2025",
                    type: "Compliance",
                    startDate: "May 15, 2025",
                    endDate: "June 30, 2025",
                    status: "Approved",
                  },
                  {
                    id: 2,
                    name: "IT Security Assessment Q2 2025",
                    type: "Security",
                    startDate: "June 1, 2025",
                    endDate: "June 15, 2025",
                    status: "Draft",
                  },
                  {
                    id: 3,
                    name: "Operational Process Review",
                    type: "Operational",
                    startDate: "July 1, 2025",
                    endDate: "July 31, 2025",
                    status: "Pending Approval",
                  },
                ].map((plan) => (
                  <div key={plan.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-start space-x-4">
                      <FileText className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="font-medium">{plan.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          <span className="inline-flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" />
                            {plan.startDate} - {plan.endDate}
                          </span>
                          <span>{plan.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          plan.status === "Approved" ? "outline" : plan.status === "Draft" ? "secondary" : "default"
                        }
                        className="flex items-center"
                      >
                        {plan.status === "Approved" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {plan.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog open={showNewAuditDialog} onOpenChange={setShowNewAuditDialog}>
                <DialogTrigger asChild>
                  <Button className="ml-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    New Audit Plan
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create New Audit Plan</DialogTitle>
                    <DialogDescription>
                      Define the scope, objectives, and timeline for your audit
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="audit-type">Audit Type</Label>
                        <Select>
                          <SelectTrigger id="audit-type">
                            <SelectValue placeholder="Select audit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="iso27001">ISO 27001</SelectItem>
                            <SelectItem value="sebi">SEBI</SelectItem>
                            <SelectItem value="nist">NIST</SelectItem>
                            <SelectItem value="cis">CIS</SelectItem>
                            <SelectItem value="posture">Posture Maturity</SelectItem>
                            <SelectItem value="gap">Gap Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audit-objective">Audit Objective</Label>
                        <Select>
                          <SelectTrigger id="audit-objective">
                            <SelectValue placeholder="Select objective" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="compliance">Compliance Assessment</SelectItem>
                            <SelectItem value="security">Security Evaluation</SelectItem>
                            <SelectItem value="risk">Risk Assessment</SelectItem>
                            <SelectItem value="process">Process Improvement</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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
                      <Label htmlFor="audit-scope">Audit Scope</Label>
                      <Select>
                        <SelectTrigger id="audit-scope">
                          <SelectValue placeholder="Select scope" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="department">IT Department</SelectItem>
                          <SelectItem value="location">Mumbai Office</SelectItem>
                          <SelectItem value="process">Trading Process</SelectItem>
                          <SelectItem value="custom">Custom Scope</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="approval-method">Approval Method</Label>
                      <Select>
                        <SelectTrigger id="approval-method">
                          <SelectValue placeholder="Select approval method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="self-authorized">I'm Authorized</SelectItem>
                          <SelectItem value="upload-approval">Upload Approval</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <div className="flex gap-2">
                      <Button variant="outline">Save as Draft</Button>
                      <Button type="submit">Submit for Approval</Button>
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
